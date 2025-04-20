import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const UploadDoc = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const sendFile = async () => {
    if (!selectedFile) {
      alert("Please select a file !");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);
    setLoading(true);
    try {
      const response = await axios.post(
        "https://textsummarization-server-992692416004.us-central1.run.app/summarize/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Summary:", response.data.summary);
      setSummary(response.data.summary);
    } catch (error) {
      console.error("Error:", error);
    }
    setLoading(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setSelectedFile(file);
  };

  return (
    <div className="bg-[#9db6d9bd]">
      {/* Blob Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient
              id="bg-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#a2c4f8" />
              <stop offset="100%" stopColor="#f0e4ff" />
            </linearGradient>
          </defs>
          <g>
            <circle r="200" cx="20%" cy="30%" fill="url(#bg-gradient)" />
            <circle r="250" cx="80%" cy="60%" fill="url(#bg-gradient)" />
            <circle r="180" cx="50%" cy="80%" fill="url(#bg-gradient)" />
          </g>
        </svg>
      </div>
      <style>
        {`
      .blockquote-list li {
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.25;
        margin-top: 0;
        margin-bottom: 0;
        padding: 0;
        color: #1f2937;
      }
    `}
      </style>
      <div className="p-6 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-3">Document Analyzer</h1>

        {/* Upload Box */}
        <div className="border-dashed border-2 border-black rounded-xl p-8 text-center bg-gray-50 mb-8">
          <p className="mb-4 text-black">Drag and drop files here, or browse</p>
          <p className="text-sm text-black mb-4">
            Supported file types: PDF, DOCX, TXT. Maximum file size: 20MB
          </p>

          <label className="inline-block px-4 py-2 bg-gray-500 text-white font-semibold rounded cursor-pointer hover:bg-gray-700 mr-4">
            Browse Files
            <input type="file" className="hidden" onChange={handleFileChange} />
          </label>

          <button
            onClick={sendFile}
            disabled={loading}
            className="inline-block mt-4 px-6 py-2 bg-yellow-600 text-white font-semibold rounded hover:bg-yellow-700 disabled:opacity-50 cursor-pointer"
          >
            {loading ? "Summarizing" : "Summarize"}
          </button>

          {selectedFile && (
            <p className="text-black mt-2 font-medium">
              Selected File: {selectedFile.name}
            </p>
          )}
        </div>

        {/* Summary Section */}
        {summary ? (
          <>
            <h1 className="text-3xl font-bold ">Generated Summary</h1>

            <div className="bg-white border border-black rounded-lg px-4 py-9 mt-3 mb-6 whitespace-pre-wrap">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  p: ({ children }) => (
                    <p className="text-base my-0 leading-tight text-gray-800">
                      {children}
                    </p>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="relative blockquote-list bg-gray-50 border-l-4 border-blue-500 pl-6 rounded-lg shadow-sm mb-8">
                      <ul>{children}</ul>
                    </blockquote>
                  ),
                  li: ({ children }) => (
                    <li className="text-2xl font-semibold leading-0 m-0 p-0">
                      {children}
                    </li>
                  ),
                  ol: ({ children }) => (
                    <ol className="m-0 p-0 pl-3 leading-1">{children}</ol>
                  ),
                  ul: ({ children }) => (
                    <ul className="m-0 p-0 pl-2 leading-1">{children}</ul>
                  ),
                }}
              >
                {summary}
              </ReactMarkdown>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold ">Generated Summary</h1>

            <div className="bg-white border border-black rounded-lg px-4 py-9 mt-3 mb-6 whitespace-pre-wrap">
              <p className="text-base leading-tight text-center">
                {loading
                  ? "Summarizing.Please wait..."
                  : "Please select a file to generate summary."}
              </p>
            </div>
          </>
        )}

        <Card className=" bg-white p-6">
          <CardContent className="flex flex-col md:flex-row justify-between items-center">
            <div className="w-full md:w-2/3 mb-6 md:mb-0">
              <h2 className="text-xl font-semibold mb-2">Analysis Summary</h2>
              <p className="text-lg font-medium text-yellow-600 mb-1">
                Legal Risk Score: Moderate
              </p>
              <p className="text-gray-600">
                Potential legal risks identified in the document. Review
                highlighted clauses for detailed insights.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1633158108216-f10cd3202d8a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGF3JTIwZG9jdW1lbnRzfGVufDB8fDB8fHww"
              alt="Risk Gauge"
              className="w-48 h-32 object-cover rounded-lg"
            />
          </CardContent>
        </Card>

        {/* Details Table */}
        <div className="mt-8 bg-white border border-black rounded-lg overflow-hidden">
          <div className="grid grid-cols-2 gap-4 p-4 border-b bg-gray-100 font-medium">
            <div>Key Insights</div>
            <div>
              Highlights of critical clauses and potential legal implications in
              the document.
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 p-4 border-b">
            <div>Date of Agreement</div>
            <div>22nd August 2024</div>
          </div>
          <div className="grid grid-cols-2 gap-4 p-4 border-b">
            <div>Parties Involved</div>
            <div>Amit Kumar (Seller) and Priya Sharma (Buyer)</div>
          </div>
          <div className="grid grid-cols-2 gap-4 p-4 border-b">
            <div>Jurisdiction</div>
            <div>Mumbai</div>
          </div>
          <div className="grid grid-cols-2 gap-4 p-4">
            <div>Governing Law</div>
            <div>Indian Contract Act, 1872</div>
          </div>
        </div>

        {/* Highlighted Clauses Section */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4">Highlighted Clauses</h2>

          {/* Dropdown with Lucide icon */}
          <div className="relative w-full mb-6">
            <select className="appearance-none w-full bg-white p-2 pr-10 border border-black rounded-lg focus:outline-none">
              <option>Select a clause</option>
              <option>Confidentiality Clause</option>
              <option>Liability Clause</option>
              <option>Termination Clause</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
          </div>

          {/* Clause Image + Label */}
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1696861270495-7f35c35c3273?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Qm90aCUyMHBhcnRpZXMlMjBhZ3JlZSUyMHRvJTIwa2VlcCUyMGFueSUyMHNlbnNpdGl2ZSUyMGluZm9ybWF0aW9uJTIwZXhjaGFuZ2VkJTIwZHVyaW5nJTIwdGhpcyUyMGFncmVlbWVudCUyMGNvbmZpZGVudGlhbC58ZW58MHx8MHx8fDA%3D"
              alt="Highlighted Clause"
              className="w-full h-76 object-cover"
            />
          </div>

          {/* Clause Description */}
          <p className="mt-4 text-black">
            Both parties agree to keep any sensitive information exchanged
            during this agreement confidential.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UploadDoc;
