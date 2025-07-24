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
    
    // Apply text spacing fixes for better PDF formatting
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
    
    // Constants for styling - optimized margins for better page usage
    const topMargin = 50;  // Reduced top margin
    const bottomMargin = 15; // Reduced bottom margin
    const sideMargin = 40;
    const titleFontSize = 18;
    const headingFontSize = 14;
    const bodyFontSize = 11;
    const lineHeight = 1.4; // Slightly reduced line height for better spacing
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
      
      // Add underline
      pdf.setDrawColor(0, 0, 0);
      pdf.setLineWidth(1);
      const underlineY = y + 5;
      pdf.line(sideMargin, underlineY, pageWidth + sideMargin, underlineY);
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
          } else if (node.nodeType === Node.ELEMENT_NODE) {
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
                position += text.length + 2; // Add 2 for the added space
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
      
      // Handle styled text - simplified approach to avoid overlapping
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
        
        // If line has bold text, make the whole line bold for simplicity
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
      
      const indent = level * 20; // Indentation for nested elements
      const x = sideMargin + indent;
      const effectiveWidth = pageWidth - indent;
      
      // Handle different node types
      Array.from(node.childNodes).forEach(child => {
        // Skip the title as we already processed it
        if (child === titleElement) return;
        
        // Check if we need a new page - reduced buffer for better page utilization
        if (y > pageHeight + topMargin - 50) {
          pdf.addPage();
          y = topMargin;
        }
        
        if (child.nodeType === Node.ELEMENT_NODE) {
          // Handle headings with better spacing
          if (child.tagName.match(/^H[1-6]$/)) {
            // Add extra space before headings to avoid tight spacing with previous content
            y += 15;
            
            // Check pagination before adding heading to avoid orphaned headings
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
            
            // Add underline for headings with proper spacing
            if (headingLevel === 2) {
              y += 1; // Add some space before the underline
              pdf.setDrawColor(0, 0, 0); // Black for h2 underline
              pdf.setLineWidth(0.5);
              pdf.line(x, y, x + effectiveWidth, y);
              y += 5; // Add space after the underline
            }
            
            y += 8; // Increased space after heading
          }
          // Handle paragraphs with improved pagination
          else if (child.tagName === 'P') {
            // Calculate approximate height needed for this paragraph
            const paragraphText = child.textContent.trim();
            const lines = getWrappedText(paragraphText, bodyFontSize, effectiveWidth);
            const estimatedHeight = lines.length * bodyFontSize * lineHeight + 10;
            
            // Check if paragraph would go too close to bottom of page
            // Reduced threshold for better page utilization
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
            y += 5; // Space before list
            processNode(child, level + 1);
            y += 5; // Space after list
          }
          // Handle list items with improved pagination
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
            const listIndex = Array.from(child.parentElement.children).indexOf(child) + 1;
            const bulletText = isOrderedList ? `${listIndex}. ` : '• ';
            
            pdf.text(bulletText, x - 15, y);
            
            // Process the list item text with correct indentation
            listItemLines.forEach((line) => {
              // Check if this line would go beyond page boundary
              if (y > pageHeight + topMargin - 30) {
                pdf.addPage();
                y = topMargin;
                
                // Repeat the bullet/number on the new page for continuation
                pdf.text(isOrderedList ? "(cont.) " : "→ ", x - 15, y);
              }
              
              pdf.text(line, x + 5, y); // Extra indent for wrapped lines
              y += bodyFontSize * lineHeight;
            });
            
            y += 5; // Extra space between list items
          }
          // Handle tables
          else if (child.tagName === 'TABLE') {
            y += 10; // Space before table
            
            const rows = child.querySelectorAll('tr');
            const columnCount = Math.max(...Array.from(rows).map(row => row.querySelectorAll('td, th').length));
            const columnWidth = effectiveWidth / columnCount;
            const cellPadding = 5;
            const cellHeight = bodyFontSize * 1.5 + 2 * cellPadding;
            
            // Draw table
            rows.forEach((row, rowIndex) => {
              const cells = row.querySelectorAll('td, th');
              const isHeader = rowIndex === 0 || cells[0].tagName === 'TH';
              // Store current y position
              let maxCellHeight = cellHeight;
              
              // First pass to calculate row height based on content
              cells.forEach((cell) => {
                const cellText = cell.textContent.trim();
                const cellLines = getWrappedText(cellText, bodyFontSize, columnWidth - 2 * cellPadding);
                const cellContentHeight = cellLines.length * bodyFontSize * lineHeight + 2 * cellPadding;
                maxCellHeight = Math.max(maxCellHeight, cellContentHeight);
              });
              
              // Check if table row would go beyond page boundary - consistent buffer
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
            
            y += 20; // Space after table
          }
          // Handle signature blocks
          else if (child.classList && child.classList.contains('signatures')) {
            // Check if signatures would go beyond page boundary - ensure signatures stay together
            const estimatedSignatureHeight = 200; // Increased height to accommodate flexible rows
            if (y + estimatedSignatureHeight > pageHeight + topMargin - 60) {
              pdf.addPage();
              y = topMargin + 20;
            } else {
              y += 30;
            }

            // Process signature rows - each signature-block is a row
            const signatureRows = Array.from(child.querySelectorAll('.signature-block'));
            
            signatureRows.forEach((row, rowIndex) => {
              if (rowIndex > 0) {
                y += 40; // Margin between rows
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
                pdf.line(signatureX, y, signatureX + lineWidth, y);
                
                // Add signature text below the line
                pdf.setFont("helvetica", "bold");
                pdf.setFontSize(bodyFontSize - 1);
                pdf.setTextColor(0, 0, 0);
                
                // Handle multi-line signature text (split by <br/> or newlines)
                const signatureLines = signatureText.split(/\s*<br\/?>\s*|\n/).filter(line => line.trim());
                let sigY = y + 20;
                
                signatureLines.forEach((line, lineIndex) => {
                  pdf.setFont("helvetica", lineIndex === 0 ? "bold" : "normal");
                  pdf.text(line.trim(), signatureX, sigY);
                  sigY += (bodyFontSize - 1) * 1.3;
                });
              });
              
              y = startY + 70; // Move Y for next row (increased space to accommodate multi-line signatures)
            });
            
            y += 20; // Space after all signatures
          }
          // Handle signature blocks (skip, handled above)
          else if (child.classList && child.classList.contains('signature-block')) {
            // Skip individual signature-blocks here, handled in signatures above
          }
          // Process div and other container elements recursively
          else if (child.childNodes && child.childNodes.length > 0) {
            processNode(child, level);
          }
        }
      });
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
