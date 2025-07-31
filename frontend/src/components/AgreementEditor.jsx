import React, { useState, useRef, useEffect } from 'react';
import { generateDocument } from '@/lib/documentGenerator';

const AgreementEditor = ({ 
  generatedText, 
  type, 
  userData, 
  onSave,
  onCancel,
  onSuccessCallback = null,
  onErrorCallback = null 
}) => {
  const [editedText, setEditedText] = useState(generatedText);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.innerHTML = generatedText;
    }
  }, [generatedText]);

  const handleSave = async () => {
    if (editorRef.current && onSave) {
      setIsSaving(true);
      const content = editorRef.current.innerHTML;
      setEditedText(content);
      
      // Small delay to show saving state
      await new Promise(resolve => setTimeout(resolve, 500));
      
      onSave(content);
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    if (editorRef.current) {
      editorRef.current.innerHTML = generatedText;
    }
    setEditedText(generatedText);
    if (onCancel) {
      onCancel();
    }
  };

  const handleInput = () => {
    if (editorRef.current) {
      setEditedText(editorRef.current.innerHTML);
    }
  };

  // Formatting functions
  const formatText = (command, value = null) => {
    document.execCommand(command, false, value);
    editorRef.current.focus();
    handleInput();
  };

  const insertElement = (element) => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      range.deleteContents();
      range.insertNode(element);
      range.setStartAfter(element);
      range.setEndAfter(element);
      selection.removeAllRanges();
      selection.addRange(range);
    }
    editorRef.current.focus();
    handleInput();
  };

  const addSignatureLine = () => {
    const signatureDiv = document.createElement('div');
    signatureDiv.className = 'signature-block-editable';
    signatureDiv.innerHTML = `
      <div class="signature-line">
        <span class="signature-label">Signature: </span>
        <span class="signature-underline" contenteditable="true">_______________________</span>
      </div>
      <div class="signature-line">
        <span class="signature-label">Date: </span>
        <span class="signature-underline" contenteditable="true">_______________________</span>
      </div>
    `;
    insertElement(signatureDiv);
  };

  const addTable = () => {
    // Ask user for table dimensions
    const rows = prompt("How many rows do you want? (including header)", "3");
    const cols = prompt("How many columns do you want?", "2");
    
    if (!rows || !cols || isNaN(rows) || isNaN(cols)) {
      alert("Please enter valid numbers for rows and columns.");
      return;
    }
    
    const numRows = parseInt(rows);
    const numCols = parseInt(cols);
    
    if (numRows < 1 || numCols < 1 || numRows > 20 || numCols > 10) {
      alert("Please enter reasonable values (1-20 rows, 1-10 columns).");
      return;
    }
    
    // Create table element
    const table = document.createElement('table');
    table.className = 'agreement-table';
    table.style.width = '100%';
    table.style.borderCollapse = 'collapse';
    table.style.margin = '20px 0';
    
    // Create table rows
    for (let i = 0; i < numRows; i++) {
      const row = document.createElement('tr');
      
      for (let j = 0; j < numCols; j++) {
        const cell = document.createElement('td');
        cell.style.border = '1px solid #000';
        cell.style.padding = '8px';
        cell.contentEditable = 'true';
        
        // First row is header
        if (i === 0) {
          cell.style.fontWeight = 'bold';
          cell.style.backgroundColor = '#f5f5f5';
          cell.textContent = `Header ${j + 1}`;
        } else {
          cell.textContent = `Row ${i}, Col ${j + 1}`;
        }
        
        row.appendChild(cell);
      }
      
      table.appendChild(row);
    }
    
    insertElement(table);
    
    // Focus on the first cell
    setTimeout(() => {
      const firstCell = table.querySelector('td');
      if (firstCell) {
        firstCell.focus();
      }
    }, 100);
  };

  // Enhanced keyboard event handler for table interactions
  const handleKeyDown = (e) => {
    const selection = window.getSelection();
    if (!selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    const currentElement = range.startContainer.nodeType === Node.TEXT_NODE 
      ? range.startContainer.parentElement 
      : range.startContainer;

    // Find if we're inside a table cell
    const tableCell = currentElement.closest('td');
    const table = currentElement.closest('table');

    if (tableCell && table) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        addTableRow(table, tableCell);
      } else if (e.key === 'Tab' && !e.shiftKey) {
        e.preventDefault();
        navigateToNextCell(tableCell);
      } else if (e.key === 'Tab' && e.shiftKey) {
        e.preventDefault();
        navigateToPreviousCell(tableCell);
      } else if (e.key === 'Delete' && e.ctrlKey && e.shiftKey) {
        e.preventDefault();
        removeTableRow(table, tableCell);
      }
    }
  };

  // Add a new row to the table
  const addTableRow = (table, currentCell) => {
    const currentRow = currentCell.closest('tr');
    const cellCount = currentRow.cells.length;
    const newRow = document.createElement('tr');
    
    // Create cells for the new row
    for (let i = 0; i < cellCount; i++) {
      const newCell = document.createElement('td');
      newCell.style.border = '1px solid #000';
      newCell.style.padding = '8px';
      newCell.contentEditable = 'true';
      newCell.textContent = ''; // Start with empty cells
      newRow.appendChild(newCell);
    }
    
    // Insert the new row after the current row
    currentRow.parentNode.insertBefore(newRow, currentRow.nextSibling);
    
    // Focus on the first cell of the new row
    newRow.cells[0].focus();
    handleInput();
  };

  // Remove the current row
  const removeTableRow = (table, currentCell) => {
    const currentRow = currentCell.closest('tr');
    const tbody = currentRow.parentNode;
    
    // Don't remove if it's the only row
    if (tbody.children.length <= 1) {
      return;
    }
    
    // Focus on the previous or next row before removing
    const prevRow = currentRow.previousElementSibling;
    const nextRow = currentRow.nextElementSibling;
    
    if (prevRow) {
      prevRow.cells[0].focus();
    } else if (nextRow) {
      nextRow.cells[0].focus();
    }
    
    currentRow.remove();
    handleInput();
  };

  // Navigate to next cell (Tab functionality)
  const navigateToNextCell = (currentCell) => {
    const currentRow = currentCell.closest('tr');
    const table = currentCell.closest('table');
    const cellIndex = Array.from(currentRow.cells).indexOf(currentCell);
    
    // Try next cell in same row
    if (cellIndex < currentRow.cells.length - 1) {
      currentRow.cells[cellIndex + 1].focus();
      return;
    }
    
    // Try first cell of next row
    const nextRow = currentRow.nextElementSibling;
    if (nextRow) {
      nextRow.cells[0].focus();
      return;
    }
    
    // Add new row if at the end
    addTableRow(table, currentCell);
  };

  // Navigate to previous cell (Shift+Tab functionality)
  const navigateToPreviousCell = (currentCell) => {
    const currentRow = currentCell.closest('tr');
    const cellIndex = Array.from(currentRow.cells).indexOf(currentCell);
    
    // Try previous cell in same row
    if (cellIndex > 0) {
      currentRow.cells[cellIndex - 1].focus();
      return;
    }
    
    // Try last cell of previous row
    const prevRow = currentRow.previousElementSibling;
    if (prevRow) {
      const lastCellIndex = prevRow.cells.length - 1;
      prevRow.cells[lastCellIndex].focus();
    }
  };

  // Add column functionality
  const addTableColumn = () => {
    const selection = window.getSelection();
    if (!selection.rangeCount) {
      alert("Please click inside a table cell first, then try adding a column.");
      return;
    }

    const range = selection.getRangeAt(0);
    const currentElement = range.startContainer.nodeType === Node.TEXT_NODE 
      ? range.startContainer.parentElement 
      : range.startContainer;

    const tableCell = currentElement.closest('td');
    const table = currentElement.closest('table');

    if (!tableCell || !table) {
      alert("Please click inside a table cell first, then try adding a column.");
      return;
    }

    const cellIndex = Array.from(tableCell.parentNode.cells).indexOf(tableCell);
    const rows = Array.from(table.rows);
    
    // Add a new cell to each row
    rows.forEach((row, rowIndex) => {
      const newCell = document.createElement('td');
      newCell.style.border = '1px solid #000';
      newCell.style.padding = '8px';
      newCell.contentEditable = 'true';
      
      // First row gets header styling and text
      if (rowIndex === 0) {
        newCell.style.fontWeight = 'bold';
        newCell.style.backgroundColor = '#f5f5f5';
        newCell.textContent = 'New Header';
      } else {
        newCell.textContent = ''; // Empty cell for data rows
      }
      
      // Insert after current cell (or at end if it's the last cell)
      if (cellIndex < row.cells.length - 1) {
        row.insertBefore(newCell, row.cells[cellIndex + 1]);
      } else {
        row.appendChild(newCell);
      }
    });
    
    handleInput();
  };

  // Remove column functionality
  const removeTableColumn = () => {
    const selection = window.getSelection();
    if (!selection.rangeCount) {
      alert("Please click inside a table cell first, then try removing a column.");
      return;
    }

    const range = selection.getRangeAt(0);
    const currentElement = range.startContainer.nodeType === Node.TEXT_NODE 
      ? range.startContainer.parentElement 
      : range.startContainer;

    const tableCell = currentElement.closest('td');
    const table = currentElement.closest('table');

    if (!tableCell || !table) {
      alert("Please click inside a table cell first, then try removing a column.");
      return;
    }

    const cellIndex = Array.from(tableCell.parentNode.cells).indexOf(tableCell);
    const rows = Array.from(table.rows);
    
    // Don't remove if it's the only column
    if (rows[0].cells.length <= 1) {
      alert("Cannot remove the last column. A table must have at least one column.");
      return;
    }
    
    // Remove the column from all rows
    rows.forEach(row => {
      if (row.cells[cellIndex]) {
        row.cells[cellIndex].remove();
      }
    });
    
    handleInput();
  };

  const handleDownloadPDF = async () => {
    setIsLoading(true);
    const currentContent = editorRef.current ? editorRef.current.innerHTML : editedText;
    await generateDocument(
      currentContent, 
      `${type.replace(/\s+/g, "_")}_${Date.now()}`, 
      'pdf', 
      userData, 
      type,
      {
        onSuccess: () => {
          const message = "PDF downloaded and saved to your history successfully.";
          if (onSuccessCallback) {
            onSuccessCallback(message);
          } else {
            alert(message);
          }
        },
        onError: (errorMsg) => {
          const message = "Error uploading PDF: " + errorMsg;
          if (onErrorCallback) {
            onErrorCallback(message);
          } else {
            alert(message);
          }
        }
      }
    );
    setIsLoading(false);
  };

  const handleDownloadDOCX = async () => {
    setIsLoading(true);
    const currentContent = editorRef.current ? editorRef.current.innerHTML : editedText;
    await generateDocument(
      currentContent, 
      `${type.replace(/\s+/g, "_")}_${Date.now()}`, 
      'docx', 
      userData, 
      type,
      {
        onSuccess: () => {
          const message = "DOCX downloaded and saved to your history successfully.";
          if (onSuccessCallback) {
            onSuccessCallback(message);
          } else {
            alert(message);
          }
        },
        onError: (errorMsg) => {
          const message = "Error uploading DOCX: " + errorMsg;
          if (onErrorCallback) {
            onErrorCallback(message);
          } else {
            alert(message);
          }
        }
      }
    );
    setIsLoading(false);
  };

  return (
    <div className="w-full max-w-4xl bg-white/60 backdrop-blur-md p-6 rounded-3xl shadow-2xl space-y-4 animate-fadeIn transition-all">
      <div className="flex items-center justify-center gap-2 mb-5">
        <h2 className="text-2xl font-bold text-blue-600 text-center">Edit Agreement</h2>
        <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-medium">
          Editing Mode
        </span>
      </div>
      
      {/* Toolbar */}
      <div className="bg-gray-100 p-3 rounded-lg border border-gray-300 flex flex-wrap gap-2 items-center">
        <div className="flex items-center gap-1 border-r border-gray-400 pr-2 mr-2">
          <button
            onClick={() => formatText('bold')}
            className="px-3 py-1 text-sm font-bold bg-white border border-gray-300 rounded hover:bg-gray-50 transition"
            title="Bold"
          >
            B
          </button>
          <button
            onClick={() => formatText('italic')}
            className="px-3 py-1 text-sm italic bg-white border border-gray-300 rounded hover:bg-gray-50 transition"
            title="Italic"
          >
            I
          </button>
          <button
            onClick={() => formatText('underline')}
            className="px-3 py-1 text-sm underline bg-white border border-gray-300 rounded hover:bg-gray-50 transition"
            title="Underline"
          >
            U
          </button>
        </div>
        
        <div className="flex items-center gap-1 border-r border-gray-400 pr-2 mr-2">
          <button
            onClick={() => formatText('justifyLeft')}
            className="px-3 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50 transition"
            title="Align Left"
          >
            ⬅
          </button>
          <button
            onClick={() => formatText('justifyCenter')}
            className="px-3 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50 transition"
            title="Center"
          >
            ↔
          </button>
          <button
            onClick={() => formatText('justifyRight')}
            className="px-3 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50 transition"
            title="Align Right"
          >
            ➡
          </button>
          <button
            onClick={() => formatText('justifyFull')}
            className="px-3 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50 transition"
            title="Justify"
          >
            ⬌
          </button>
        </div>
        
        <div className="flex items-center gap-1 border-r border-gray-400 pr-2 mr-2">
          <button
            onClick={() => formatText('insertUnorderedList')}
            className="px-3 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50 transition"
            title="Bullet List"
          >
            • List
          </button>
          <button
            onClick={() => formatText('insertOrderedList')}
            className="px-3 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50 transition"
            title="Numbered List"
          >
            1. List
          </button>
        </div>
        
        <div className="flex items-center gap-1 border-r border-gray-400 pr-2 mr-2">
          <select
            onChange={(e) => formatText('formatBlock', e.target.value)}
            className="px-2 py-1 text-sm bg-white border border-gray-300 rounded"
            defaultValue=""
          >
            <option value="">Format</option>
            <option value="h1">Heading 1</option>
            <option value="h2">Heading 2</option>
            <option value="h3">Heading 3</option>
            <option value="p">Paragraph</option>
          </select>
        </div>
        
        <div className="flex items-center gap-1">
          <div className="relative group">
            <button
              onClick={addTable}
              className="px-3 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50 transition"
              title="Add Table"
            >
              📊 Table
            </button>
            {/* Table Guide Tooltip */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-80 bg-gray-900 text-white text-xs rounded-lg p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="space-y-1">
                <div className="font-semibold text-yellow-300">📊 Table Editing Guide:</div>
                <div>• Click this button to create a new table with custom size</div>
                <div>• Press <span className="bg-gray-700 px-1 rounded">Enter</span> inside a cell to add a new row below</div>
                <div>• Press <span className="bg-gray-700 px-1 rounded">Tab</span> to move to the next cell</div>
                <div>• Press <span className="bg-gray-700 px-1 rounded">Shift+Tab</span> to move to the previous cell</div>
                <div>• Press <span className="bg-gray-700 px-1 rounded">Ctrl+Shift+Delete</span> to remove the current row</div>
                <div>• Use ➕ Column and ➖ Column buttons to add/remove columns</div>
              </div>
              {/* Tooltip Arrow */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
            </div>
          </div>
          <button
            onClick={addTableColumn}
            className="px-3 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50 transition"
            title="Add Column"
          >
            ➕ Column
          </button>
          <button
            onClick={removeTableColumn}
            className="px-3 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50 transition"
            title="Remove Column"
          >
            ➖ Column
          </button>
          <button
            onClick={addSignatureLine}
            className="px-3 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50 transition"
            title="Add Signature"
          >
            ✍️ Signature
          </button>
        </div>
      </div>
      
      {/* Rich Text Editor */}
      <div className="space-y-4">
        <div
          ref={editorRef}
          contentEditable
          onInput={handleInput}
          onKeyDown={handleKeyDown}
          className="w-full min-h-[500px] border border-gray-300 p-6 rounded-lg shadow-inner bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 overflow-auto"
          style={{
            fontFamily: 'Arial, sans-serif',
            fontSize: '14px',
            lineHeight: '1.6'
          }}
          suppressContentEditableWarning={true}
        >
          {/* Content will be set via useEffect */}
        </div>
        
        <style>
          {`
            .agreement-template {
              font-family: Arial, sans-serif;
              line-height: 1.5;
            }
            .agreement-title {
              font-size: 24px;
              font-weight: bold;
              text-align: center;
              border-bottom: 2px solid #2563eb;
              margin-bottom: 10px;
              padding-bottom: 5px;
            }
            .agreement-body {
              padding: 5px;
              line-height: 1.6;
            }
            .agreement-body h1 {
              font-size: 20px;
              font-weight: bold;
              margin: 15px 0 10px 0;
            }
            .agreement-body h2 {
              font-size: 18px;
              font-weight: bold;
              border-bottom: 1px solid #e5e7eb;
              padding-bottom: 1px;
              margin: 12px 0 8px 0;
            }
            .agreement-body h3 {
              font-size: 16px;
              font-weight: bold;
              margin: 10px 0 6px 0;
            }
            .agreement-body p {
              margin: 8px 0;
              text-align: justify;
            }
            .highlight {
              font-weight: 500;
              text-bold;
            }
            .agreement-body ul {
              padding-left: 20px;
              list-style-type: disc;
              margin: 10px 0;
            }
            .agreement-body ol {
              padding-left: 20px;
              list-style-type: decimal;
              margin: 10px 0;
            }
            .agreement-body li {
              margin: 5px 0;
              line-height: 1.5;
            }
            .signature-block {
              margin: 30px 0;
              display: flex;
              justify-content: space-between;
              align-items: flex-start;
              gap: 40px;
            }
            .signature-block p {
              margin: 5px 0;
              position: relative;
              flex: 1;
              text-align: left;
              padding-top: 10px;
              font-weight: bold;
            }
            .signature-block p::before {
              content: '';
              position: absolute;
              top: -5px;
              left: 0;
              right: 0;
              height: 1px;
              background-color: #000;
              border-top: 1px solid #000;
              font-weight: bold;
            }
            .signature-block-editable {
              margin: 30px 0;
              display: flex;
              flex-direction: column;
              gap: 20px;
            }
            .signature-line {
              display: flex;
              align-items: center;
              gap: 10px;
            }
            .signature-label {
              font-weight: bold;
              min-width: 80px;
            }
            .signature-underline {
              border-bottom: 1px solid #000;
              min-width: 200px;
              padding: 2px 5px;
              display: inline-block;
            }
            .agreement-table {
              margin: 20px 0;
              width: 100%;
              border-collapse: collapse;
            }
            .agreement-table table {
              width: 100%;
              border-collapse: collapse;
              margin-bottom: 20px;
            }
            .agreement-table td, .agreement-table th {
              border: 1px solid #000;
              padding: 8px 12px;
              vertical-align: top;
            }
            .agreement-table tr:first-child td, .agreement-table th {
              font-weight: bold;
              background-color: #f5f5f5;
            }
            /* Ensure table cells in editor are properly styled */
            table.agreement-table td {
              border: 1px solid #000;
              padding: 8px;
              min-width: 100px;
              min-height: 30px;
            }
            table.agreement-table tr:first-child td {
              font-weight: bold;
              background-color: #f5f5f5;
            }
            /* Editor specific styles */
            [contenteditable="true"]:focus {
              outline: none;
            }
            [contenteditable="true"] h1,
            [contenteditable="true"] h2,
            [contenteditable="true"] h3 {
              cursor: text;
            }
            [contenteditable="true"] table {
              cursor: text;
              border-collapse: collapse;
            }
            [contenteditable="true"] td {
              cursor: text;
              min-width: 50px;
              min-height: 30px;
              border: 1px solid #000;
              padding: 8px;
              position: relative;
              vertical-align: top;
              word-wrap: break-word;
              overflow-wrap: break-word;
              white-space: pre-wrap;
            }
            [contenteditable="true"] td:hover {
              background-color: #f8f9fa;
            }
            [contenteditable="true"] td:focus {
              background-color: #e3f2fd;
              outline: 2px solid #2196f3;
              outline-offset: -2px;
            }
            /* Ensure text in table cells doesn't overflow */
            [contenteditable="true"] td * {
              max-width: 100%;
              word-wrap: break-word;
            }
            /* Make signature underlines editable */
            .signature-underline {
              cursor: text;
              min-width: 200px;
              display: inline-block;
              border-bottom: 1px solid #000;
              padding: 2px 5px;
              background-color: transparent;
            }
            .signature-underline:focus {
              background-color: #f0f8ff;
              outline: 1px solid #4a90e2;
            }
            .signature-underline:empty:before {
              content: "_______________________";
              color: #999;
            }
          `}
        </style>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="w-full sm:w-1/3 bg-green-600 text-white font-semibold p-3 rounded-xl border border-green-600 hover:bg-white hover:text-green-600 shadow-lg hover:scale-[1.03] transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSaving ? 'Saving...' : 'Save Changes'}
        </button>
        <button
          onClick={handleCancel}
          disabled={isSaving}
          className="w-full sm:w-1/3 bg-gray-600 text-white font-semibold p-3 rounded-xl border border-gray-600 hover:bg-white hover:text-gray-600 shadow-lg hover:scale-[1.03] transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Cancel
        </button>
      </div>
      
      <div className="border-t pt-4">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Download Current Version</h3>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={handleDownloadPDF}
            disabled={isLoading}
            className="w-full sm:w-1/2 bg-blue-600 text-white font-semibold p-3 rounded-xl border border-blue-600 hover:bg-white hover:text-blue-600 shadow-lg hover:scale-[1.03] transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Downloading...' : 'Download PDF'}
          </button>
          <button
            onClick={handleDownloadDOCX}
            disabled={isLoading}
            className="w-full sm:w-1/2 bg-orange-600 text-white font-semibold p-3 rounded-xl border border-orange-600 hover:bg-white hover:text-orange-600 shadow-lg hover:scale-[1.03] transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Downloading...' : 'Download DOCX'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgreementEditor;
