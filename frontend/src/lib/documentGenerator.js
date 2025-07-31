import generatePDF from './pdfGenerator';
import generateDOCX from './docxGenerator';

/**
 * A utility function to generate and download a document in the specified format
 * @param {string} htmlContent - The HTML content to convert
 * @param {string} fileName - The name of the file to save (without extension)
 * @param {string} format - The format to generate ('pdf' or 'docx')
 * @param {object} userData - The user data for metadata
 * @param {string} documentType - The type of document (for metadata)
 * @param {object} options - Additional options
 * @returns {Promise<{success: boolean, error: string}>} Result of the operation
 */
export const generateDocument = async (htmlContent, fileName, format = 'pdf', userData, documentType, options = {}) => {
  const { onSuccess, onError } = options;
  
  // Generate a filename with appropriate extension if not provided
  const fileNameWithoutExt = fileName?.endsWith(`.${format}`) 
    ? fileName.substring(0, fileName.length - format.length - 1) 
    : fileName || `${documentType.replace(/\s+/g, "_")}_${Date.now()}`;
  
  const finalFileName = `${fileNameWithoutExt}.${format}`;

  try {
    // Use the appropriate generator based on format
    if (format.toLowerCase() === 'pdf') {
      return await generatePDF(htmlContent, finalFileName, userData, documentType, onSuccess, onError);
    } else if (format.toLowerCase() === 'docx') {
      return await generateDOCX(htmlContent, finalFileName, userData, documentType, onSuccess, onError);
    } else {
      const error = `Unsupported format: ${format}. Supported formats are 'pdf' and 'docx'`;
      if (onError) onError(error);
      return { success: false, error };
    }
  } catch (error) {
    console.error('Document generation error:', error);
    if (onError) onError(error.message);
    return { success: false, error: error.message };
  }
};

export default generateDocument;
