import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const UploadDoc = () => {
  return (
    <div className="bg-gray-300">
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Document Analyzer</h1>

      {/* Upload Box */}
      <div className="border-dashed border-2 border-black rounded-xl p-8 text-center bg-gray-50 mb-8">
        <p className="mb-4 text-black">
          Drag and drop files here, or browse
        </p>
        <p className="text-sm text-black mb-4">
          Supported file types: PDF, DOCX, TXT. Maximum file size: 20MB
        </p>
        <Button className=" bg-gray-300">Browse Files</Button>
      </div>

      {/* Summary Section */}
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
          Both parties agree to keep any sensitive information exchanged during
          this agreement confidential.
        </p>
      </div>
    </div>
    </div>
  );
};

export default UploadDoc;
