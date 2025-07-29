import React from 'react';
import { generateDocument } from '@/lib/documentGenerator';

const AgreementPreviewAndDownload = ({ 
  generatedText, 
  type, 
  userData, 
  onSuccessCallback = null,
  onErrorCallback = null 
}) => {
  
  const handleDownloadPDF = async () => {
    await generateDocument(
      generatedText, 
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
  };

  const handleDownloadDOCX = async () => {
    await generateDocument(
      generatedText, 
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
  };

  return (
<div className="w-full max-w-3xl bg-white/60 backdrop-blur-md p-6 rounded-3xl shadow-2xl space-y-4 animate-fadeIn transition-all">
          <h2 className="text-2xl font-bold text-blue-600 text-center mb-5">Preview & Download</h2>
          <div 
            className="w-full border border-gray-300 p-6 rounded-lg shadow-inner bg-white overflow-auto h-[600px]"
            style={{
              fontFamily: 'Arial, sans-serif',
              color: '#000'
            }}
          >
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
                }
                .agreement-body {
                  padding: 5px 5px;
                  line-height: 1.6;
                }
                .agreement-body h2 {
                  font-size: 18px;
                  font-weight: bold;
                  border-bottom: 1px solid #e5e7eb;
                  padding-bottom: 1px;
                }
                .agreement-body p {
                  margin: 8px 0;
                  text-align: justify;
                }
                .highlight {
                  font-weight: 500;
                  text-bold;
                }
                .agreement-list {
                  padding-left: 20px;
                  list-style-type: disc;
                  margin: 10px 0;
                  display: block;
                }
                .agreement-list-alpha {
                  padding-left: 20px;
                  list-style-type: lower-alpha;
                  margin: 10px 0;
                  display: block;
                }
                .agreement-list li, .agreement-list-alpha li {
                  margin: 8px 0;
                  display: list-item;
                }
                .agreement-body ul {
                  padding-left: 20px;
                  list-style-type: disc;
                  margin: 10px 0;
                  display: block;
                  list-style-position: outside;
                }
                .agreement-body ul li {
                  margin: 8px 0;
                  line-height: 1.5;
                  padding-left: 5px;
                  display: list-item;
                  list-style-type: disc;
                }
                .agreement-body ol {
                  padding-left: 20px;
                  list-style-type: decimal;
                  margin: 10px 0;
                  display: block;
                  list-style-position: outside;
                }
                .agreement-body ol li {
                  margin: 8px 0;
                  line-height: 1.5;
                  padding-left: 5px;
                  display: list-item;
                  list-style-type: decimal;
                }
                .indented {
                  margin-left: 20px;
                  margin-bottom: 15px;
                }
                .indented ul {
                  margin-top: 8px;
                  margin-bottom: 15px;
                  padding-left: 25px;
                  list-style-type: disc;
                  list-style-position: outside;
                }
                .indented strong {
                  display: block;
                  margin-top: 15px;
                  margin-bottom: 8px;
                  font-weight: bold;
                  color: #1f2937;
                }
                .document-section {
                  margin-top: 15px;
                  font-size: 16px;
                }
                .signatures {
                  padding-top: 10px;
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
                .agreement-table {
                  margin: 20px 0;
                }
                .agreement-table table {
                  width: 100%;
                  border-collapse: collapse;
                  margin-bottom: 20px;
                }
                .agreement-table td {
                  border: 1px solid #000;
                  padding: 8px 12px;
                  vertical-align: top;
                }
                .agreement-table tr:first-child td {
                  font-weight: bold;
                }
                .documents-table table {
                  width: 100%;
                  border-collapse: collapse;
                  margin-top: 15px;
                }
                .documents-table th, .documents-table td {
                  border: 1px solid #000;
                  padding: 8px;
                  text-align: left;
                }
                .documents-table th {
                  background-color: #f3f4f6;
                }
              `}
            </style>
            <div dangerouslySetInnerHTML={{ __html: generatedText }} />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleDownloadPDF}
              className="w-full sm:w-1/2 bg-blue-600 text-white font-semibold p-3 rounded-xl border border-blue-600 hover:bg-white hover:text-blue-600 shadow-lg hover:scale-[1.03] transition duration-300"
            >
              Download PDF
            </button>
            <button
              onClick={handleDownloadDOCX}
              className="w-full sm:w-1/2 bg-green-600 text-white font-semibold p-3 rounded-xl border border-green-600 hover:bg-white hover:text-green-600 shadow-lg hover:scale-[1.03] transition duration-300"
            >
              Download DOCX
            </button>
          </div>
        </div>
  );
};

export default AgreementPreviewAndDownload;
