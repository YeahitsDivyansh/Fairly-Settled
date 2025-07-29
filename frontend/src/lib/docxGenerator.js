import { 
  Document, 
  Paragraph, 
  TextRun, 
  Table, 
  TableRow, 
  TableCell,
  BorderStyle, 
  WidthType,
  AlignmentType, 
  HeadingLevel, 
  Packer
} from "docx";
import { saveAs } from "file-saver";
import { uploadAndSavePDF } from "@/context/uploadAndSavePDF";

/**
 * A utility function to generate and download a DOCX file from HTML content
 * @param {string} htmlContent - The HTML content to convert to DOCX
 * @param {string} fileName - The name of the file to save
 * @param {object} userData - The user data for metadata
 * @param {string} documentType - The type of document (for metadata)
 * @param {function} onSuccess - Optional callback for successful download
 * @param {function} onError - Optional callback for error handling
 * @returns {Promise<{success: boolean, error: string}>} Result of the operation
 */
export const generateDOCX = async (htmlContent, fileName, userData, documentType = 'Legal Document', onSuccess = null, onError = null) => {
  try {
    // Create a temporary div to parse the HTML content
    const tempDiv = document.createElement('div');
    
    // Apply the same text spacing fixes as in PDF generation for consistency
    let processedText = htmlContent;
    
    // More comprehensive spacing fixes (same as PDF)
    processedText = processedText.replace(/(\S)<span class="highlight">/g, '$1 <span class="highlight">');
    processedText = processedText.replace(/<\/span>(\S)/g, '</span> $1');
    processedText = processedText.replace(/(\w)<span/g, '$1 <span');
    processedText = processedText.replace(/<\/span>(\w)/g, '</span> $1');
    processedText = processedText.replace(/([a-z])([A-Z])/g, '$1 $2');
    processedText = processedText.replace(/([a-z])having/g, '$1 having');
    processedText = processedText.replace(/([a-z])represented/g, '$1 represented');
    processedText = processedText.replace(/([a-z])authorized/g, '$1 authorized');
    processedText = processedText.replace(/([a-z])and([A-Z])/g, '$1 and $2');
    
    tempDiv.innerHTML = processedText;
    
    // Arrays for paragraphs and tables
    const docElements = [];
    
    // Helper function for consistent spacing
    const getSpacingProps = (size = 'normal') => {
      const spacingMap = {
        'small': { before: 10, after: 10, line: 240 }, // Reduced spacing
        'normal': { before: 15, after: 15, line: 260 }, // Reduced spacing
        'heading': { before: 25, after: 10, line: 280 }, // Reduced spacing
        'title': { before: 30, after: 30, line: 300 } // Reduced spacing
      };
      return spacingMap[size] || spacingMap.normal;
    };
    
    // Create styles for headings, paragraphs, etc.
    const textStyles = {
      title: {
        size: 32, // Increased for better visibility
        bold: true,
        color: "000000",
        font: "Times New Roman",
      },
      heading1: {
        size: 28, // Increased for better visibility
        bold: true,
        color: "000000",
        font: "Times New Roman"
      },
      heading2: {
        size: 24, // Increased for better visibility
        bold: true,
        color: "000000",
        font: "Times New Roman"
      },
      heading3: {
        size: 18, // Increased for better visibility
        bold: true,
        color: "000000",
        font: "Times New Roman"
      },
      normal: {
        size: 22, // Increased from 12 to 22 (11pt in Word)
        color: "000000",
        font: "Times New Roman"
      },
      highlight: {
        size: 22, // Increased from 12 to 22 to match normal text
        bold: true,
        color: "000000",
        font: "Times New Roman"
      },
      signatureText: {
        size: 22, // Increased from 12 to 22
        color: "000000",
        font: "Times New Roman"
      }
    };
    
    // Process all nodes in the HTML content
    const processNode = (node, level = 0) => {
      if (!node) return;
      
      // Process all child nodes
      const children = Array.from(node.childNodes);
      
      children.forEach(child => {
        if (child.nodeType === Node.TEXT_NODE) {
          const text = child.textContent.trim();
          if (text && level === 0) {
            // Only add standalone text nodes at the root level
            docElements.push(
              new Paragraph({
                children: [new TextRun({ text, ...textStyles.normal })],
                spacing: getSpacingProps()
              })
            );
          }
        } 
        else if (child.nodeType === Node.ELEMENT_NODE) {
          // Process different element types
          if (child.tagName === 'H1' || child.classList?.contains('agreement-title')) {
            // Title with center alignment
            // Add minimal space at the top only if this is the first element
            if (docElements.length === 0) {
              docElements.push(
                new Paragraph({
                  children: [new TextRun({ text: "" })],
                  spacing: { before: 20, after: 0 }
                })
              );
            }
            
            // Add the title with proper uppercase formatting
            const titleText = child.textContent.trim();
            
            docElements.push(
              new Paragraph({
                children: [
                  new TextRun({
                    text: titleText.toUpperCase(),
                    ...textStyles.title
                  })
                ],
                spacing: { before: 5, after: 20 },
                alignment: AlignmentType.CENTER
              })
            );
          } 
          else if (child.tagName === 'H2') {
            // Add space before the heading
            docElements.push(
              new Paragraph({
                children: [new TextRun({ text: "", break: 1 })],
                spacing: { before: 5, after: 0 }
              })
            );
            
            // Heading 2 with bottom border and section numbering
            const headingText = child.textContent.trim();
            // Extract section number if present (e.g., "1. CONFIDENTIAL INFORMATION")
            let displayText = headingText;
            let sectionNumber = "";
            
            // Check if the heading starts with a number followed by a period
            const numberMatch = headingText.match(/^(\d+)\.?\s+(.*)$/);
            if (numberMatch) {
              sectionNumber = numberMatch[1] + ". ";
              displayText = numberMatch[2];
            }
            
            docElements.push(
              new Paragraph({
                children: [
                  new TextRun({
                    text: sectionNumber,
                    bold: true,
                    size: textStyles.heading2.size,
                    color: textStyles.heading2.color,
                    // font: textStyles.heading2.font
                  }),
                  new TextRun({
                    text: displayText.toUpperCase(),
                    ...textStyles.heading2
                  })
                ],
                spacing: getSpacingProps('heading')
              })
            );
          } 
          else if (child.tagName === 'H3') {
            // Add space before the heading
            docElements.push(
              new Paragraph({
                children: [new TextRun({ text: "", break: 1 })]
              })
            );
            
            // Check for subsection numbering (e.g., "3.1 INTELLECTUAL PROPERTY")
            const headingText = child.textContent.trim();
            let displayText = headingText;
            let sectionNumber = "";
            
            // Check if heading starts with section numbering (like "3.1" or "3.")
            const numberMatch = headingText.match(/^(\d+(\.\d+)?)\.?\s+(.*)$/);
            if (numberMatch) {
              sectionNumber = numberMatch[1] + ". ";
              displayText = numberMatch[3];
            }
            
            docElements.push(
              new Paragraph({
                children: [
                  new TextRun({
                    text: sectionNumber,
                    bold: true,
                    ...textStyles.heading3
                  }),
                  new TextRun({
                    text: displayText.toUpperCase(),
                    ...textStyles.heading3
                  })
                ],
                spacing: getSpacingProps('heading')
              })
            );
          } 
          else if (child.tagName === 'P') {
            // Process paragraph with special handling for highlighted and bold text
            const runs = [];
            
            // Insert minimal space before paragraph if needed (only if not the first element)
            if (docElements.length > 0) {
              runs.push(new TextRun({ text: "" }));
            }
            
            // Check if this paragraph contains a label and a highlighted value (e.g., "Name: John")
            const labelWithHighlight = child.textContent.includes(':') && child.querySelector('.highlight');
            
            // Process all child nodes
            Array.from(child.childNodes).forEach(node => {
              if (node.nodeType === Node.TEXT_NODE) {
                const text = node.textContent;
                if (text && text.trim()) {
                  // If this is text before a highlighted value in a label pattern, make it bold
                  const shouldBold = labelWithHighlight && text.includes(':');
                  runs.push(
                    new TextRun({
                      text: text,
                      bold: shouldBold,
                      ...textStyles.normal
                    })
                  );
                }
              } 
              else if (node.nodeType === Node.ELEMENT_NODE) {
                if (node.tagName === 'SPAN' && node.classList.contains('highlight')) {
                  // Add space before highlight if needed
                  if (runs.length > 0 && runs[runs.length-1].text && !runs[runs.length-1].text.endsWith(' ')) {
                    runs.push(new TextRun({ text: " " }));
                  }
                  
                  // Add highlighted text with proper styling
                  runs.push(
                    new TextRun({
                      text: node.textContent.trim(),
                      bold: true,
                      ...textStyles.highlight
                    })
                  );
                  
                  // Add space after highlight if needed
                  runs.push(new TextRun({ text: " " }));
                } 
                else if (node.tagName === 'STRONG' || node.tagName === 'B') {
                  runs.push(
                    new TextRun({
                      text: node.textContent.trim(),
                      bold: true,
                      size: textStyles.normal.size,
                      color: textStyles.normal.color,
                      font: textStyles.normal.font
                    })
                  );
                } else {
                  runs.push(
                    new TextRun({
                      text: node.textContent.trim(),
                      ...textStyles.normal
                    })
                  );
                }
              }
            });
            
            docElements.push(
              new Paragraph({
                children: runs,
                spacing: { before: 10, after: 10, line: 260 },
                alignment: child.style?.textAlign === 'center' ? AlignmentType.CENTER : AlignmentType.JUSTIFIED
              })
            );
          } 
          else if (child.tagName === 'UL' || child.tagName === 'OL') {
            // Handle lists by recursively processing each item with proper indentation
            Array.from(child.querySelectorAll('li')).forEach((item, index) => {
              const runs = [];
              const isOrderedList = child.tagName === 'OL';
              
              // Add bullet or number
              runs.push(
                new TextRun({
                  text: isOrderedList ? `${index + 1}. ` : '• ',
                  ...textStyles.normal,
                  bold: true
                })
              );
              
              // Process the list item text
              Array.from(item.childNodes).forEach(node => {
                if (node.nodeType === Node.TEXT_NODE) {
                  const text = node.textContent.trim();
                  if (text) {
                    runs.push(
                      new TextRun({
                        text,
                        ...textStyles.normal
                      })
                    );
                  }
                } 
                else if (node.nodeType === Node.ELEMENT_NODE) {
                  if (node.tagName === 'SPAN' && node.classList.contains('highlight')) {
                    runs.push(
                      new TextRun({
                        text: node.textContent.trim(),
                        ...textStyles.highlight
                      })
                    );
                  } 
                  else if (node.tagName === 'STRONG' || node.tagName === 'B') {
                    runs.push(
                      new TextRun({
                        text: node.textContent.trim(),
                        bold: true,
                        size: textStyles.normal.size,
                        color: textStyles.normal.color
                      })
                    );
                  } else {
                    runs.push(
                      new TextRun({
                        text: node.textContent.trim(),
                        ...textStyles.normal
                      })
                    );
                  }
                }
              });
              
              docElements.push(
                new Paragraph({
                  children: runs,
                  spacing: getSpacingProps('small'),
                  indent: {
                    left: 600, // Increased indentation for better alignment
                    hanging: 400 // Increased space for bullet/number
                  },
                  alignment: AlignmentType.JUSTIFIED
                })
              );
            });
          }
          // Handle elements with table classes (like .agreement-table, .documents-table)
          else if (child.classList && (child.classList.contains('agreement-table') || child.classList.contains('documents-table'))) {
            // Look for table inside this element
            const table = child.querySelector('table');
            if (table) {
              const tableRows = [];
              const htmlRows = table.querySelectorAll('tr');
              
              htmlRows.forEach((htmlRow, rowIndex) => {
                const tableCells = [];
                const htmlCells = htmlRow.querySelectorAll('td, th');
                
                htmlCells.forEach((htmlCell) => {
                  const cellText = htmlCell.textContent.trim();
                  const isHeader = htmlCell.tagName === 'TH' || rowIndex === 0;
                  
                  tableCells.push(
                    new TableCell({
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: cellText,
                              bold: isHeader,
                              size: textStyles.normal.size,
                              color: textStyles.normal.color,
                              font: textStyles.normal.font
                            })
                          ],
                          spacing: { before: 60, after: 60 }, // Reduced spacing in tables
                          alignment: AlignmentType.LEFT
                        })
                      ],
                      width: {
                        size: Math.floor(100 / htmlCells.length),
                        type: WidthType.PERCENTAGE
                      },
                      margins: {
                        top: 200,
                        bottom: 200,
                        left: 300,
                        right: 300
                      }
                    })
                  );
                });
                
                if (tableCells.length > 0) {
                  tableRows.push(new TableRow({ children: tableCells }));
                }
              });
              
              if (tableRows.length > 0) {
                docElements.push(
                  new Table({
                    rows: tableRows,
                    width: {
                      size: 100,
                      type: WidthType.PERCENTAGE
                    },
                    borders: {
                      insideHorizontal: {
                        style: BorderStyle.SINGLE,
                        size: 1,
                        color: "000000"
                      },
                      insideVertical: {
                        style: BorderStyle.SINGLE,
                        size: 1,
                        color: "000000"
                      },
                      top: {
                        style: BorderStyle.SINGLE,
                        size: 2,
                        color: "000000"
                      },
                      bottom: {
                        style: BorderStyle.SINGLE,
                        size: 2,
                        color: "000000"
                      },
                      left: {
                        style: BorderStyle.SINGLE,
                        size: 2,
                        color: "000000"
                      },
                      right: {
                        style: BorderStyle.SINGLE,
                        size: 2,
                        color: "000000"
                      }
                    },
                    margins: {
                      top: 200,
                      bottom: 200,
                      left: 200,
                      right: 200
                    }
                  })
                );
              }
            } else {
              // If no table found, process as regular content
              processNode(child, level + 1);
            }
          }
          // Handle HTML tables
          else if (child.tagName === 'TABLE') {
            // Process HTML table and convert to DOCX table
            const tableRows = [];
            const htmlRows = child.querySelectorAll('tr');
            
            htmlRows.forEach((htmlRow, rowIndex) => {
              const tableCells = [];
              const htmlCells = htmlRow.querySelectorAll('td, th');
              
              htmlCells.forEach((htmlCell) => {
                const cellText = htmlCell.textContent.trim();
                const isHeader = htmlCell.tagName === 'TH' || rowIndex === 0;
                
                tableCells.push(
                  new TableCell({
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: cellText,
                            bold: isHeader,
                            size: textStyles.normal.size,
                            color: textStyles.normal.color,
                            font: textStyles.normal.font
                          })
                        ],
                        spacing: { before: 60, after: 60 }, // Reduced spacing in tables
                        alignment: AlignmentType.LEFT
                      })
                    ],
                    width: {
                      size: 50,
                      type: WidthType.PERCENTAGE
                    },
                    margins: {
                      top: 200,
                      bottom: 200,
                      left: 300,
                      right: 300
                    }
                  })
                );
              });
              
              if (tableCells.length > 0) {
                tableRows.push(new TableRow({ children: tableCells }));
              }
            });
            
            if (tableRows.length > 0) {
              docElements.push(
                new Table({
                  rows: tableRows,
                  width: {
                    size: 100,
                    type: WidthType.PERCENTAGE
                  },
                  borders: {
                    insideHorizontal: {
                      style: BorderStyle.SINGLE,
                      size: 1,
                      color: "000000"
                    },
                    insideVertical: {
                      style: BorderStyle.SINGLE,
                      size: 1,
                      color: "000000"
                    },
                    top: {
                      style: BorderStyle.SINGLE,
                      size: 2,
                      color: "000000"
                    },
                    bottom: {
                      style: BorderStyle.SINGLE,
                      size: 2,
                      color: "000000"
                    },
                    left: {
                      style: BorderStyle.SINGLE,
                      size: 2,
                      color: "000000"
                    },
                    right: {
                      style: BorderStyle.SINGLE,
                      size: 2,
                      color: "000000"
                    }
                  },
                  margins: {
                    top: 200,
                    bottom: 200,
                    left: 200,
                    right: 200
                  }
                })
              );
            }
          }
          // Handle signature blocks
          else if (child.classList && child.classList.contains('signatures')) {
            // Add space before signatures
            docElements.push(
              new Paragraph({
                children: [new TextRun({ text: "", break: 2 })],
                spacing: { before: 240, after: 120 }
              })
            );
            
            // Process signature rows - each signature-block is a row
            const signatureRows = Array.from(child.querySelectorAll('.signature-block'));
            
            signatureRows.forEach((row, rowIndex) => {
              if (rowIndex > 0) {
                // Add space between signature rows
                docElements.push(
                  new Paragraph({
                    children: [new TextRun({ text: "", break: 2 })],
                    spacing: { before: 300, after: 0 }
                  })
                );
              }
              
              // Get all signature items in this row
              const signaturesInRow = Array.from(row.querySelectorAll('p'))
                .map(p => p.textContent.trim())
                .filter(text => text.length > 0);
              
              if (signaturesInRow.length === 0) return;
              
              // Create individual signature lines in a table for proper alignment
              const signatureTableRows = [];
              
              // First row: signature lines
              const signatureLineCells = signaturesInRow.map(() => 
                new TableCell({
                  children: [
                    new Paragraph({
                      children: [
                        new TextRun({
                          text: Array(25).fill("_").join(""),
                          ...textStyles.normal
                        })
                      ],
                      spacing: { before: 0, after: 60 },
                      alignment: AlignmentType.CENTER
                    })
                  ],
                  width: { size: 100/signaturesInRow.length-5, type: WidthType.PERCENTAGE },
                  borders: {
                    top: { style: BorderStyle.NONE },
                    bottom: { style: BorderStyle.NONE },
                    left: { style: BorderStyle.NONE },
                    right: { style: BorderStyle.NONE }
                  },
                  margins: {
                    top: 0,
                    bottom: 0,
                    left: 100,
                    right: 100
                  }
                })
              );
              
              signatureTableRows.push(
                new TableRow({
                  children: signatureLineCells
                })
              );
              
              // Second row: signature labels
              const signatureLabelCells = signaturesInRow.map(signatureText => {
                // Handle multi-line signature text (split by <br/> or newlines)
                const signatureLines = signatureText.split(/\s*<br\/?>\s*|\n/).filter(line => line.trim());
                const mainLabel = signatureLines[0] || signatureText;
                
                return new TableCell({
                  children: [
                    new Paragraph({
                      children: [
                        new TextRun({
                          text: mainLabel,
                          bold: true,
                          ...textStyles.normal
                        })
                      ],
                      spacing: { before: 60, after: 0 },
                      alignment: AlignmentType.CENTER
                    })
                  ],
                  width: { size: 100/signaturesInRow.length, type: WidthType.PERCENTAGE },
                  borders: {
                    top: { style: BorderStyle.NONE },
                    bottom: { style: BorderStyle.NONE },
                    left: { style: BorderStyle.NONE },
                    right: { style: BorderStyle.NONE }
                  },
                  margins: {
                    top: 0,
                    bottom: 0,
                    left: 100,
                    right: 100
                  }
                });
              });
              
              signatureTableRows.push(
                new TableRow({
                  children: signatureLabelCells
                })
              );
              
              // Add the signature table
              docElements.push(
                new Table({
                  rows: signatureTableRows,
                  width: {
                    size: 90,
                    type: WidthType.PERCENTAGE
                  },
                  borders: {
                    insideHorizontal: { style: BorderStyle.NONE },
                    insideVertical: { style: BorderStyle.NONE },
                    top: { style: BorderStyle.NONE },
                    bottom: { style: BorderStyle.NONE },
                    left: { style: BorderStyle.NONE },
                    right: { style: BorderStyle.NONE }
                  }
                })
              );
            });
            
            // Add space after all signatures
            docElements.push(
              new Paragraph({
                children: [new TextRun({ text: "" })],
                spacing: { before: 120, after: 240 }
              })
            );
          }
          // Skip individual signature-blocks - they're handled within the signatures section
          else if (child.classList && child.classList.contains('signature-block')) {
            // Skip - handled above
          }
          // Process container elements recursively
          else if (child.childNodes && child.childNodes.length > 0) {
            processNode(child, level + 1);
          }
        }
      });
    };
    
    // Process the HTML content
    const bodyElement = tempDiv.querySelector('.agreement-body');
    if (bodyElement) {
      processNode(bodyElement, 0);
    } else {
      // If no specific body element, process the entire HTML
      processNode(tempDiv, 0);
    }
    
    // Ensure we have a document title at the beginning
    // Check if first element is already a title, if not, add one based on documentType
    const hasTitle = docElements.length > 0 && 
                    docElements[0].options && 
                    docElements[0].options.alignment === AlignmentType.CENTER;
    
    if (!hasTitle && documentType) {
      // Insert title at the beginning
      const titleElements = [
        new Paragraph({
          children: [new TextRun({ text: "" })],
          spacing: { before: 60, after: 0 }
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: documentType.toUpperCase(),
              ...textStyles.title
            })
          ],
          spacing: { before: 5, after: 20 },
          alignment: AlignmentType.CENTER
        })
      ];
      
      // Insert title elements at the beginning
      docElements.unshift(...titleElements);
    }
    
    // Create the document with metadata
    const doc = new Document({
      title: documentType,
      subject: 'Legal Agreement',
      creator: 'Fairly Settled',
      description: 'Generated by Fairly Settled',
      keywords: 'legal, agreement, contract',
      lastModifiedBy: userData?.fullName || 'Fairly Settled User',
      sections: [
        {
          properties: {
            page: {
              margin: {
                top: 480, // 0.33 inch in twips
                right: 480,
                bottom: 480,
                left: 480
              }
            }
          },
          children: docElements
        }
      ]
    });
    
    // Generate a unique filename if not provided
    const finalFileName = fileName || `${documentType.replace(/\s+/g, "_")}_${Date.now()}.docx`;
    
    // Generate a Blob containing the document
    const blob = await Packer.toBlob(doc);
    
    // Upload to server
    const { success, error } = await uploadAndSavePDF(blob, finalFileName, "docx", userData);
    
    if (success) {
      // Save the file
      saveAs(blob, finalFileName);
      if (onSuccess) onSuccess();
      return { success: true, error: null };
    } else {
      if (onError) onError(error);
      return { success: false, error };
    }
  } catch (error) {
    console.error('DOCX generation error:', error);
    if (onError) onError(error.message);
    return { success: false, error: error.message };
  }
};

export default generateDOCX;
