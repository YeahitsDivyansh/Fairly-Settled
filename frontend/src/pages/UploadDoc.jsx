import React, { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import toast from "react-hot-toast";

const UploadDoc = () => {
  const [loading, setLoading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [summaries, setSummaries] = useState([]);
  const [comparisonTable, setComparisonTable] = useState("");

  const sendFiles = async () => {
    if (selectedFiles.length === 0) {
      alert("Please select files!");
      return;
    }

    const formData = new FormData();

    // console.log("📁 Preparing to upload files:", selectedFiles);

    selectedFiles.forEach((file, idx) => {
      formData.append("files", file);
      // console.log(`✅ File #${idx + 1} added to FormData: ${file.name}`);
    });

    // console.log("📝 FormData contents:");
    for (let pair of formData.entries()) {
      console.log("➡️", pair[0] + ":", pair[1].name);
    }

    setLoading(true);
    // console.log("🚀 Uploading files...");

    try {
      const response = await axios.post(
        "https://textsummarization-server-992692416004.us-central1.run.app/summarize-corpus/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("🎉 Upload successful. Response:", response.data);
      setSummaries(response.data.individual_summaries || []);
      setComparisonTable(response.data.comparison_table || "");
    } catch (error) {
      toast.error("❌ Error uploading files:", error);
      // console.error("❌ Error uploading files:", error);
    }

    setLoading(false);
    setSelectedFiles([]);
    // console.log("📤 Upload process completed.");
  };



  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setSelectedFiles((prevFiles) => [...prevFiles, ...newFiles]);
    // console.log("📁 All selected files:", [...selectedFiles, ...newFiles].map(f => f.name));
  };


  return (
    <div className="bg-white">
      <div className="p-6 mt-10 max-w-6xl mx-auto">
        <h1 className="text-3xl font-extrabold mb-4 text-[#0d1b2a] text-center">Document Analyzer</h1>

        {/* Upload Box */}
        <div className="border-dashed border-2 border-black rounded-xl p-8 text-center bg-gray-50 mb-8">
          <p className="mb-4 text-lg font-semibold text-center text-gray-800">
            Drag and drop files here, or browse
          </p>
          <p className="mb-2 text-lg font-semibold text-center text-gray-800">
            Supported file types: PDF, DOCX, TXT
          </p>

          <label className="inline-block px-4 py-2 bg-gray-500 text-white font-semibold rounded cursor-pointer hover:bg-gray-700 mr-4">
            Browse Files
            <input type="file" className="hidden" onChange={handleFileChange} multiple />
          </label>

          <button
            onClick={sendFiles}
            disabled={loading}
            className="inline-block mt-4 px-6 py-2 bg-yellow-600 text-white font-semibold rounded hover:bg-yellow-700 disabled:opacity-50 cursor-pointer mr-4"
          >
            {loading ? "Summarizing" : "Summarize"}
          </button>

          <button
            onClick={() => setSelectedFiles([])}
            className="inline-block mt-4 px-6 py-2   bg-red-600 text-white font-semibold rounded hover:bg-red-700 w-full sm:w-auto"
          >
            Clear Files
          </button>

          {selectedFiles.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Selected Files:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {selectedFiles.map((file, idx) => (
                  <li key={idx} className="truncate">{file.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="max-w-7xl w-full mx-auto px-4">
          <h1 className="text-3xl font-extrabold mb-4 text-[#0d1b2a] text-center">
            Generated Summaries
          </h1>

          <div
            className={`space-y-6 mt-4 ${summaries.length === 0 || loading ? 'border border-black rounded-lg px-4 py-9 mb-6' : ''
              }`}
          >

            {loading ? (
              <p className="text-lg font-medium text-center text-gray-700">
                <span className="inline-flex items-center text-yellow-600">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="mr-2 animate-spin"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z" />
                  </svg>
                  Summarizing... Please wait.
                </span>
              </p>
            ) : summaries.length > 0 ? (
              summaries.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl border-l-4 border-yellow-600 shadow-[0_-2px_6px_-1px_rgba(0,0,0,0.1),0_4px_10px_rgba(0,0,0,0.08)] transition-shadow duration-300"
                >

                  <h2 className="text-2xl font-bold text-center text-yellow-600 mb-3">
                    {item.case_name}
                  </h2>
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      p: ({ children }) => (
                        <p className="text-[16px] text-gray-900 font-medium leading-relaxed mb-4">
                          {children}
                        </p>
                      ),
                      li: ({ children }) => (
                        <li className="ml-6 list-disc text-[16px] text-gray-900 font-medium leading-relaxed mb-3">
                          {children}
                        </li>
                      ),
                      strong: ({ children }) => (
                        <strong className="font-semibold text-black">{children}</strong>
                      ),
                    }}
                  >
                    {item.summary}
                  </ReactMarkdown>
                </div>
              ))
            ) : (
              <p className="text-lg font-medium text-center text-gray-600">
                📁 Please select a file to generate summary.
              </p>
            )}
          </div>
        </div>



        {!loading && comparisonTable && (
          <div className="mt-10">
            <h1 className="text-3xl font-extrabold mb-4 text-[#0d1b2a] text-center">
              Comparison Table
            </h1>

            <div className="overflow-x-auto bg-white rounded-md shadow-md">
              <div className="prose w-full max-w-none">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    table: ({ node, ...props }) => (
                      <table
                        className="w-full border-collapse text-gray-900 text-sm font-medium"
                        {...props}
                      />
                    ),
                    thead: ({ node, ...props }) => (
                      <thead
                        className="bg-yellow-400 text-yellow-900 uppercase tracking-wide"
                        {...props}
                      />
                    ),
                    th: ({ node, ...props }) => (
                      <th
                        className="border border-gray-700 px-4 py-2 text-left font-semibold"
                        {...props}
                      />
                    ),
                    td: ({ node, ...props }) => (
                      <td
                        className="border border-gray-600 px-4 py-2 text-gray-900"
                        {...props}
                      />
                    ),
                  }}
                >
                  {comparisonTable}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default UploadDoc;
