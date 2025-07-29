import jsPDF from "jspdf";
import { uploadAndSavePDF } from "@/context/uploadAndSavePDF";

/**
 * A utility function to generate and download a PDF from HTML content
 * @param {string} htmlContent - The HTML content to convert to PDF
 * @param {string} fileName - The name of the file to save
 * @param {object} userData - The user data for metadata
 * @param {string} documentType - The type of document (for metadata)
 * @param {function} onSuccess - Optional callback for successful download
 * @param {function} onError - Optional callback for error handling
 * @returns {Promise<{success: boolean, error: string}>} Result of the operation
 */
export const generatePDF = async (htmlContent, fileName, userData, documentType = 'Legal Document', onSuccess = null, onError = null) => {
  try {
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: "a4"
    });
    
    // Create a temporary div to parse the HTML content
    const tempDiv = document.createElement('div');
    
    // Apply text spacing fixes for PDF formatting
    let processedText = htmlContent;
    
    // Add space before highlighted text if there isn't one
    processedText = processedText.replace(/(\S)<span class="highlight">/g, '$1 <span class="highlight">');
    // Add space after highlighted text if there isn't one  
    processedText = processedText.replace(/<\/span>(\S)/g, '</span> $1');
    
    // Additional fixes for common cases
    processedText = processedText.replace(/(\w)<span/g, '$1 <span');
    processedText = processedText.replace(/<\/span>(\w)/g, '</span> $1');
    
    // Fix cases where text runs together (like "nameand", "numberrepresented")
    processedText = processedText.replace(/([a-z])([A-Z])/g, '$1 $2');
    
    // Fix specific patterns that might occur
    processedText = processedText.replace(/([a-z])having/g, '$1 having');
    processedText = processedText.replace(/([a-z])represented/g, '$1 represented');
    processedText = processedText.replace(/([a-z])authorized/g, '$1 authorized');
    processedText = processedText.replace(/([a-z])and([A-Z])/g, '$1 and $2');
    
    tempDiv.innerHTML = processedText;
    
    // Constants for styling
    const topMargin = 50;
    const bottomMargin = 15;
    const sideMargin = 40;
    const titleFontSize = 18;
    const headingFontSize = 14;
    const bodyFontSize = 11;
    const lineHeight = 1.4;
    const pageHeight = pdf.internal.pageSize.height - topMargin - bottomMargin;
    const pageWidth = pdf.internal.pageSize.width - 2 * sideMargin;
    
    // Starting Y position
    let y = topMargin;
    
    // Function to split text into lines that fit within page width
    const getWrappedText = (text, fontSize, maxWidth) => {
      pdf.setFontSize(fontSize);
      return pdf.splitTextToSize(text, maxWidth);
    };
    
    // Handle title formatting
    const titleElement = tempDiv.querySelector('.agreement-title');
    if (titleElement) {
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(titleFontSize);
      pdf.setTextColor(0, 0, 0); // Black color
      
      const titleText = titleElement.textContent.trim();
      const titleLines = getWrappedText(titleText, titleFontSize, pageWidth);
      
      titleLines.forEach(line => {
        pdf.text(line, pdf.internal.pageSize.width / 2, y, { align: "center" });
        y += titleFontSize * 1.2;
      });
      
      y += 20; // Space after title
    }
    
    // Track bold spans to handle styled text
    const processStyledText = (paragraph, x, y, fontSize, maxWidth) => {
      pdf.setFontSize(fontSize);
      
      // Find all text nodes and styled spans
      const nodes = [];
      let currentText = '';
      let position = 0;
      
      // Function to get all text nodes and styled spans
      const extractNodes = (element) => {
        Array.from(element.childNodes).forEach(node => {
          if (node.nodeType === Node.TEXT_NODE) {
            const text = node.textContent.trim();
            if (text) {
              currentText += text;
              nodes.push({
                text,
                bold: false,
                highlight: false,
                position
              });
              position += text.length;
            }
          } else if (node.nodeType === Node.ELEMENT_NODE && node.tagName) {
            if (node.tagName === 'SPAN' && node.classList.contains('highlight')) {
              const text = node.textContent.trim();
              if (text) {
                currentText += ` ${text} `;
                nodes.push({
                  text,
                  bold: false,
                  highlight: true,
                  position
                });
                position += text.length + 2; // Account for added spaces
              }
            } else if (node.tagName === 'STRONG') {
              const text = node.textContent.trim();
              if (text) {
                currentText += text;
                nodes.push({
                  text,
                  bold: true,
                  highlight: false,
                  position
                });
                position += text.length;
              }
            } else {
              extractNodes(node);
            }
          }
        });
      };
      
      extractNodes(paragraph);
      
      // If no special formatting, just render the entire text
      if (nodes.length === 0 || (nodes.length === 1 && !nodes[0].bold && !nodes[0].highlight)) {
        const text = paragraph.textContent.trim();
        const lines = getWrappedText(text, fontSize, maxWidth);
        let textY = y;
        
        lines.forEach(line => {
          pdf.setFont("helvetica", "normal");
          pdf.setTextColor(0, 0, 0); // Black text color
          pdf.text(line, x, textY);
          textY += fontSize * lineHeight;
        });
        
        return textY - y; // Return the height of the rendered text
      }
      
      // Handle styled text
      pdf.setFont("helvetica", "normal");
      pdf.setTextColor(0, 0, 0);
      const lines = getWrappedText(currentText, fontSize, maxWidth);
      let textY = y;
      
      lines.forEach(line => {
        // Reset font for each line
        pdf.setFont("helvetica", "normal");
        pdf.setTextColor(0, 0, 0);
        
        // Check if this line contains any bold text
        let hasBoldText = false;
        for (const node of nodes) {
          if (node.bold && line.includes(node.text)) {
            hasBoldText = true;
            break;
          }
        }
        
        // Apply bold formatting to lines containing bold text
        if (hasBoldText) {
          pdf.setFont("helvetica", "bold");
        }
        
        pdf.text(line, x, textY);
        textY += fontSize * lineHeight;
      });
      
      return textY - y; // Return the height of the rendered text
    };
    
    // Process all elements in the document
    const processNode = (node, level = 0) => {
      if (!node) return;
      
      try {
        const indent = level * 20; // Indentation for nested elements
        const x = sideMargin + indent;
        const effectiveWidth = pageWidth - indent;
        
        // Handle different node types
        Array.from(node.childNodes).forEach(child => {
          // Skip the title as we already processed it
          if (child === titleElement) return;
          
          // Check if we need a new page
          if (y > pageHeight + topMargin - 50) {
            pdf.addPage();
            y = topMargin;
          }
          
          if (child.nodeType === Node.ELEMENT_NODE && child.tagName) {
          // Handle headings
          if (child.tagName && child.tagName.match(/^H[1-6]$/)) {
            // Add space before headings
            y += 10;
            
            // Check pagination before adding heading
            if (y > pageHeight + topMargin - 60) {
              pdf.addPage();
              y = topMargin;
            }
            
            const headingLevel = parseInt(child.tagName.substring(1));
            const headingSize = (headingFontSize-1) - (headingLevel - 1); // Adjust size based on heading level
            
            pdf.setFont("helvetica", "bold");
            pdf.setFontSize(headingSize);
            pdf.setTextColor(0, 0, 0); // Black heading color
            
            const headingText = child.textContent.trim();
            const headingLines = getWrappedText(headingText, headingSize, effectiveWidth);
            
            headingLines.forEach(line => {
              pdf.text(line, x, y);
              y += headingSize * 1.2;
            });
            
            y += 6; // Space after heading
          }
          // Handle paragraphs
          else if (child.tagName === 'P') {
            // Calculate approximate height needed for this paragraph
            const paragraphText = child.textContent.trim();
            const lines = getWrappedText(paragraphText, bodyFontSize, effectiveWidth);
            const estimatedHeight = lines.length * bodyFontSize * lineHeight + 10;
            
            // Check if paragraph would go beyond page boundary
            if (y + estimatedHeight > pageHeight + topMargin - 30) {
              pdf.addPage();
              y = topMargin;
            }
            
            pdf.setFont("helvetica", "normal");
            pdf.setFontSize(bodyFontSize);
            pdf.setTextColor(0, 0, 0); // Black text color
            
            const heightAdded = processStyledText(child, x, y, bodyFontSize, effectiveWidth);
            y += heightAdded + 8; // Space after paragraph
          }
          // Handle lists
          else if (child.tagName === 'UL' || child.tagName === 'OL') {
            y += 4; // Space before list
            processNode(child, level + 1);
            y += 4; // Space after list
          }
          // Handle list items
          else if (child.tagName === 'LI') {
            // Calculate approximate height needed for this list item
            const listItemText = child.textContent.trim();
            const listItemLines = getWrappedText(listItemText, bodyFontSize, effectiveWidth - 10);
            const estimatedHeight = listItemLines.length * bodyFontSize * lineHeight + 5;
            
            // Check if list item would go beyond page boundary
            if (y + estimatedHeight > pageHeight + topMargin - 30) {
              pdf.addPage();
              y = topMargin;
            }
            
            pdf.setFont("helvetica", "normal");
            pdf.setFontSize(bodyFontSize);
            pdf.setTextColor(0, 0, 0);
            
            // Bullet or number
            const isOrderedList = child.parentElement && child.parentElement.tagName === 'OL';
            const listIndex = Array.from(child.parentElement?.children || []).indexOf(child) + 1;
            const bulletText = isOrderedList ? `${listIndex}. ` : '• ';
            
            pdf.text(bulletText, x - 15, y);
            
            // Process the list item text with correct indentation
            listItemLines.forEach((line) => {
              // Check if this line would go beyond page boundary
              if (y > pageHeight + topMargin - 30) {
                pdf.addPage();
                y = topMargin;
                
                // Add continuation marker on new page
                pdf.text(isOrderedList ? "(cont.) " : "→ ", x - 15, y);
              }
              
              pdf.text(line, x + 5, y); // Indent for wrapped lines
              y += bodyFontSize * lineHeight;
            });
            
            y += 2; // Space between list items
          }
          // Handle tables
          else if (child.tagName === 'TABLE') {
            y += 8; // Space before table
            
            const rows = child.querySelectorAll('tr');
            const columnCount = Math.max(...Array.from(rows).map(row => row.querySelectorAll('td, th').length));
            const columnWidth = effectiveWidth / columnCount;
            const cellPadding = 5;
            const cellHeight = bodyFontSize * 1.5 + 2 * cellPadding;
            
            // Draw table
            rows.forEach((row, rowIndex) => {
              const cells = row.querySelectorAll('td, th');
              const isHeader = rowIndex === 0 || (cells[0] && cells[0].tagName === 'TH');
              let maxCellHeight = cellHeight;
              
              // Calculate row height based on content
              cells.forEach((cell) => {
                const cellText = cell.textContent.trim();
                const cellLines = getWrappedText(cellText, bodyFontSize, columnWidth - 2 * cellPadding);
                const cellContentHeight = cellLines.length * bodyFontSize * lineHeight + 2 * cellPadding;
                maxCellHeight = Math.max(maxCellHeight, cellContentHeight);
              });
              
              // Check if table row would go beyond page boundary
              if (y + maxCellHeight > pageHeight + topMargin - 50) {
                pdf.addPage();
                y = topMargin;
              }
              
              // Draw cells with content
              cells.forEach((cell, cellIndex) => {
                const cellX = x + cellIndex * columnWidth;
                
                // Draw cell border
                pdf.setDrawColor(0);
                pdf.setLineWidth(0.5);
                pdf.rect(cellX, y, columnWidth, maxCellHeight);
                
                // Set font style for headers
                if (isHeader) {
                  pdf.setFont("helvetica", "bold");
                } else {
                  pdf.setFont("helvetica", "normal");
                }
                
                // Cell content
                pdf.setFontSize(bodyFontSize);
                pdf.setTextColor(0, 0, 0);
                
                const cellText = cell.textContent.trim();
                const cellLines = getWrappedText(cellText, bodyFontSize, columnWidth - 2 * cellPadding);
                
                cellLines.forEach((line, lineIndex) => {
                  pdf.text(line, cellX + cellPadding, y + cellPadding + lineIndex * bodyFontSize * lineHeight + bodyFontSize);
                });
              });
              
              y += maxCellHeight;
            });
            
            y += 17; // Space after table
          }
          // Handle signature blocks (original format)
          else if (child.classList && child.classList.contains('signatures')) {
            // Check if signatures would go beyond page boundary
            // const estimatedSignatureHeight = 200;
            // if (y + estimatedSignatureHeight > pageHeight + topMargin - 60) {
            //   pdf.addPage();
            //   y = topMargin + 20;
            // } else {
            //   y += 30;
            // }

            // Process signature rows - each signature-block is a row
            const signatureRows = Array.from(child.querySelectorAll('.signature-block'));
            
            signatureRows.forEach((row, rowIndex) => {
              if (rowIndex > 0) {
                y += 15; // Margin between rows
              }
              
              // Get all signature items in this row
              const signaturesInRow = Array.from(row.querySelectorAll('p'))
                .map(p => p.textContent.trim())
                .filter(text => text.length > 0);
              
              if (signaturesInRow.length === 0) return;
              
              const itemsPerRow = signaturesInRow.length;
              const signatureWidth = effectiveWidth / itemsPerRow;
              const startY = y;

              signaturesInRow.forEach((signatureText, idx) => {
                const signatureX = x + (idx * signatureWidth);
                
                // Draw signature line
                pdf.setDrawColor(0, 0, 0);
                pdf.setLineWidth(0.5);
                const lineWidth = Math.min(120, signatureWidth - 20);
                const marginTop = 15;
                pdf.line(signatureX, y + marginTop, signatureX + lineWidth, y + marginTop);
                
                // Add signature text below the line
                pdf.setFont("helvetica", "bold");
                pdf.setFontSize(bodyFontSize - 1);
                pdf.setTextColor(0, 0, 0);
                
                // Handle multi-line signature text (split by <br/> or newlines)
                const signatureLines = signatureText.split(/\s*<br\/?>\s*|\n/).filter(line => line.trim());
                let sigY = y + marginTop + 20;
                
                signatureLines.forEach((line, lineIndex) => {
                  pdf.setFont("helvetica", lineIndex === 0 ? "bold" : "normal");
                  pdf.text(line.trim(), signatureX, sigY);
                  sigY += (bodyFontSize - 1) * 1.3;
                });
              });
              
              y = startY + 70; // Move Y for next row
            });
            
            y += 10; // Space after all signatures
          }
          // Handle editable signature blocks (new format)
          else if (child.classList && child.classList.contains('signature-block-editable')) {
            y += 20; // Space before signatures
            
            // Check if signatures would go beyond page boundary
            if (y + 80 > pageHeight + topMargin - 30) {
              pdf.addPage();
              y = topMargin;
            }
            
            // Get all signature lines
            const signatureLines = Array.from(child.querySelectorAll('.signature-line'));
            
            signatureLines.forEach((line, lineIndex) => {
              if (lineIndex > 0) {
                y += 25; // Space between signature lines
              }
              
              const label = line.querySelector('.signature-label')?.textContent || '';
              const underlineSpan = line.querySelector('.signature-underline');
              let underlineText = underlineSpan?.textContent || '_______________________';
              
              // Clean up the underline text - if it's just underscores, draw a line instead
              const isUnderscoresOnly = /^_+$/.test(underlineText.trim());
              
              pdf.setFont("helvetica", "bold");
              pdf.setFontSize(bodyFontSize);
              pdf.setTextColor(0, 0, 0);
              
              // Draw the label
              pdf.text(label, x, y);
              const labelWidth = pdf.getTextWidth(label);
              
              if (isUnderscoresOnly) {
                // Draw a line for empty signature fields
                pdf.setDrawColor(0, 0, 0);
                pdf.setLineWidth(0.5);
                const lineStartX = x + labelWidth + 5;
                const lineEndX = lineStartX + 150;
                pdf.line(lineStartX, y - 2, lineEndX, y - 2);
              } else {
                // Draw the actual text content
                pdf.setFont("helvetica", "normal");
                pdf.text(underlineText, x + labelWidth + 5, y);
                
                // Draw underline beneath the text
                const textWidth = pdf.getTextWidth(underlineText);
                pdf.setDrawColor(0, 0, 0);
                pdf.setLineWidth(0.5);
                pdf.line(x + labelWidth + 5, y + 2, x + labelWidth + 5 + textWidth, y + 2);
              }
            });
            
            y += 30; // Space after signature block
          }
          // Process div and other container elements recursively
          else if (child.childNodes && child.childNodes.length > 0) {
            processNode(child, level);
          }
        }
        });
      } catch (nodeError) {
        console.warn('Error processing node:', nodeError);
      }
    };
    
    // Process the body content
    const bodyElement = tempDiv.querySelector('.agreement-body');
    if (bodyElement) {
      processNode(bodyElement, 0);
    }
    
    // Add metadata to the document
    pdf.setProperties({
      title: documentType,
      subject: 'Legal Agreement',
      creator: 'Fairly Settled',
      author: userData?.fullName || 'Fairly Settled User',
      keywords: 'legal, agreement, contract'
    });
    
    // Add total pages to footer
    const totalPages = pdf.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      pdf.setPage(i);
    }
    
    // Generate a unique filename if not provided
    const finalFileName = fileName || `${documentType.replace(/\s+/g, "_")}_${Date.now()}.pdf`;
    
    // Upload and save the PDF
    const { success, error } = await uploadAndSavePDF(pdf.output('blob'), finalFileName, "pdf", userData);
    
    if (success) {
      pdf.save(finalFileName);
      if (onSuccess) onSuccess();
      return { success: true, error: null };
    } else {
      if (onError) onError(error);
      return { success: false, error };
    }
  } catch (error) {
    console.error('PDF generation error:', error);
    if (onError) onError(error.message);
    return { success: false, error: error.message };
  }
};

export default generatePDF;
