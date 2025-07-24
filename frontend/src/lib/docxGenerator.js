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
        'small': { before: 60, after: 60, line: 240 },
        'normal': { before: 80, after: 80, line: 260 },
        'heading': { before: 120, after: 60, line: 276 },
        'title': { before: 120, after: 120, line: 300 }
      };
      return spacingMap[size] || spacingMap.normal;
    };
    
    // Create styles for headings, paragraphs, etc.
    const textStyles = {
      title: {
        size: 32,
        bold: true,
        color: "000000", // Dark black
        font: "Arial",
      },
      heading1: {
        size: 28,
        bold: true,
        color: "000000", // Dark black
        font: "Arial"
      },
      heading2: {
        size: 20,
        bold: true,
        color: "000000", // Dark black for section headings
        font: "Arial"
      },
      heading3: {
        size: 16,
        bold: true,
        color: "000000", // Dark black
        font: "Arial"
      },
      normal: {
        size: 12,
        color: "000000", // Dark black
        font: "Arial"
      },
      highlight: {
        size: 12,
        bold: true,
        color: "000000", // Dark black
        font: "Arial"
      },
      signatureText: {
        size: 12,
        color: "000000", // Dark black
        font: "Arial",
        italics: true
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
            // Add minimal space at the top
            if (docElements.length === 0) {
              docElements.push(
                new Paragraph({
                  children: [new TextRun({ text: "" })],
                  spacing: { before: 240, after: 0 }
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
                spacing: { before: 120, after: 20 },
                alignment: AlignmentType.CENTER
              })
            );
            
            // Add a black underline to match professional styling
            docElements.push(
              new Paragraph({
                children: [new TextRun({ text: "" })],
                spacing: { before: 0, after: 120 },
                border: {
                  bottom: {
                    color: "000000", // Black color
                    space: 1,
                    style: "single",
                    size: 10
                  }
                }
              })
            );
          } 
          else if (child.tagName === 'H2') {
            // Add space before the heading
            docElements.push(
              new Paragraph({
                children: [new TextRun({ text: "", break: 1 })]
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
                    font: textStyles.heading2.font
                  }),
                  new TextRun({
                    text: displayText.toUpperCase(),
                    ...textStyles.heading2
                  })
                ],
                spacing: getSpacingProps('heading')
              })
            );
            
            // Add a full-width horizontal line under the heading
            docElements.push(
              new Paragraph({
                children: [new TextRun({ text: "" })],
                spacing: { before: 10, after: 40 },
                border: {
                  bottom: {
                    color: "000000", // Black color for professional look
                    space: 1,
                    style: "single",
                    size: 8
                  }
                }
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
            
            // Insert space before paragraph if needed
            if (docElements.length > 0) {
              runs.push(new TextRun({ text: "", break: 1 }));
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
                spacing: getSpacingProps(),
                alignment: child.style?.textAlign === 'center' ? AlignmentType.CENTER : AlignmentType.LEFT
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
                    left: 400, // Consistent indentation
                    hanging: 300 // Space for bullet/number
                  }
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
                          spacing: { before: 100, after: 100 }
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
                        spacing: { before: 100, after: 100 }
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
            // Add some space before signatures
            docElements.push(
              new Paragraph({
                children: [
                  new TextRun({ text: "", break: 2 })
                ]
              })
            );
            
            // Add a divider before signatures with reduced spacing
            docElements.push(
              new Paragraph({
                children: [new TextRun({ text: "" })],
                spacing: { before: 40, after: 40 },
                border: {
                  bottom: {
                    color: "000000",
                    space: 1,
                    style: "single",
                    size: 1
                  }
                }
              })
            );
            
            // Add "SIGNED BY:" header with some space above
            docElements.push(
              new Paragraph({
                children: [
                  new TextRun({ text: "", break: 1 }),
                  new TextRun({
                    text: "SIGNED BY:",
                    bold: true,
                    size: textStyles.heading3.size,
                    color: textStyles.heading3.color,
                    font: textStyles.heading3.font
                  })
                ],
                spacing: getSpacingProps('heading')
              })
            );
            
            // Process each signature block
            const signatureBlocks = child.querySelectorAll('.signature-block');
            
            // Create a table for signature blocks if there are multiple
            if (signatureBlocks.length > 1) {
              const rows = [];
              const blocksPerRow = 2;
              
              // Create rows of signature blocks (2 per row)
              for (let i = 0; i < signatureBlocks.length; i += blocksPerRow) {
                const cells = [];
                
                // Process up to blocksPerRow signature blocks
                for (let j = 0; j < blocksPerRow && (i + j) < signatureBlocks.length; j++) {
                  const block = signatureBlocks[i + j];
                  const signatureElements = [];
                  
                  // Add signature line
                  signatureElements.push(
                    new Paragraph({
                      children: [new TextRun({ text: "_________________________" })],
                      spacing: { before: 200, after: 80, line: 240 }
                    })
                  );
                  
                  // Process each signature line
                  Array.from(block.childNodes)
                    .filter(node => node.nodeType === Node.ELEMENT_NODE)
                    .forEach((node, idx) => {
                      const text = node.textContent.trim();
                      if (text) {
                        signatureElements.push(
                          new Paragraph({
                            children: [
                              new TextRun({
                                text,
                                bold: idx === 0, // Make first line bold
                                size: textStyles.normal.size,
                                color: textStyles.normal.color,
                                font: textStyles.normal.font
                              })
                            ],
                            spacing: { before: 40, after: 40, line: 240 }
                          })
                        );
                      }
                    });
                  
                  // Add this signature block as a cell
                  cells.push(
                    new TableCell({
                      children: signatureElements,
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
                }
                
                // Add empty cells to fill the row if needed
                while (cells.length < blocksPerRow) {
                  cells.push(
                    new TableCell({
                      children: [new Paragraph("")],
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
                }
                
                // Add this row to the table
                rows.push(new TableRow({ children: cells }));
              }
              
              // Add the table to the document with visible borders
              docElements.push(
                new Table({
                  rows,
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
            } else {
              // If only one signature block, add it directly
              Array.from(signatureBlocks).forEach(block => {
                // Add signature line with space above
                docElements.push(
                  new Paragraph({
                    children: [
                      new TextRun({ text: "", break: 1 }),
                      new TextRun({ text: "_________________________" })
                    ],
                    spacing: { before: 200, after: 100, line: 260 }
                  })
                );
                
                // Process each signature line
                Array.from(block.childNodes)
                  .filter(node => node.nodeType === Node.ELEMENT_NODE)
                  .forEach((node, i) => {
                    const text = node.textContent.trim();
                    if (text) {
                      docElements.push(
                        new Paragraph({
                          children: [
                            new TextRun({
                              text,
                              bold: i === 0, // Make first line bold
                              size: textStyles.normal.size,
                              color: textStyles.normal.color,
                              font: textStyles.normal.font
                            })
                          ],
                          spacing: { before: 80, after: 80, line: 240 }
                        })
                      );
                    }
                  });
              });
            }
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
          spacing: { before: 240, after: 0 }
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: documentType.toUpperCase(),
              ...textStyles.title
            })
          ],
          spacing: { before: 120, after: 20 },
          alignment: AlignmentType.CENTER
        }),
        new Paragraph({
          children: [new TextRun({ text: "" })],
          spacing: { before: 0, after: 120 },
          border: {
            bottom: {
              color: "000000", // Black color
              space: 1,
              style: "single",
              size: 10
            }
          }
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
                top: 1800, // 1.25 inches in twips
                right: 1800,
                bottom: 1800,
                left: 1800
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
