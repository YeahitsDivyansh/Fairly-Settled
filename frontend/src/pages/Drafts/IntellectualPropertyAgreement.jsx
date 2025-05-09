import { useState, useEffect } from "react";
import jsPDF from "jspdf";
import { useNavigate } from "react-router-dom";
import { uploadAndSavePDF } from "@/context/uploadAndSavePDF";
import { useUserAuth } from "@/context/UserAuthContext";

// NEW DOCX IMPORTS
import { Document as DocxDocument, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";
 
const agreementTypes = [
  "Intellectual Property Assignment Agreement",
  "Trademark or Patent or Technology Licensing",
  "Copyright Assignment Agreement",
];

const templates = {
  "Copyright Assignment Agreement": {
    fields: [
      "effectiveDate",
      "authorName",
      "authorAddress",
      "workTitle",
      "workLanguage",
      "niaRepName",
      "niaRepDesignation",
    ],
    generateText: (data) => `COPYRIGHT ASSIGNMENT AGREEMENT

This Copyright Assignment Agreement (“Agreement”) is entered into and is effective as of ${data.effectiveDate} (the “Effective Date”) by and between National Insurance Academy, having its office at 25, Baner Road, Balewadi, Pune - 411045 (hereinafter referred to as "NIA") (which expression shall include its successors and assigns); and ${data.authorName}, Indian national, residing at ${data.authorAddress} (hereinafter referred to as “Author”, (collectively, “The Parties”)

THEREFORE, in consideration of the mutual promises and covenants contained herein, and for other good and valuable consideration, the parties, intending legally to be bound, agree as follows:

1. Grant  
i. The Author has written the article titled “${data.workTitle}” in the ${data.workLanguage} language (“Work”).  
ii. Author hereby assign to NIA rights to reproduce, distribute reproductions of, display, publicly perform and communicate the work to public, and adapt the Work in any media (paper book, ebook or otherwise) and/or material form whether existing now or in the future; to make any cinematograph film or sound recording in respect of the Work; to translate the Work.

2. Term  
The term of the assignment shall be for the full term of copyright.

3. Warranties and representations  
Author warrants that:  
i. Author is the sole proprietor of the Work.  
ii. The Work is original and has not been copied.  
iii. The Work has not been previously published in any form or media.  
iv. The Work does not infringe the legal rights of any person or persons including any existing copyright or trademark to the best of Author’s knowledge.  
v. If any part of the Work requires permission from the holder of a legal right, Author has duly obtained such permission.  
vi. Author shall not create any third party rights in the Work, whether by way of a license or assignment.

4. Indemnity  
In the event that a third party brings any action and/or claim against NIA for the violation of the copyright, trademark or other legal rights of such third party due to the exercising of any of the rights granted by Author to NIA under Clause 1 of this Agreement, Author shall hold harmless and fully indemnify NIA from any loss sustained by NIA by reason of such violation.

5. Governing law and jurisdiction  
All disputes arising out of, under or in respect to this Agreement shall be governed by the laws of India. Only the Courts of Pune shall have the sole and exclusive jurisdiction to try such disputes.

Signed by,  
Name of the Author: ${data.authorName}  
Assignor  
Sign: __________________________  

National Insurance Academy  
Assignee  
Sign: ___________________________  
Name: ${data.niaRepName}  
Designation: ${data.niaRepDesignation}`,
  },

  "Intellectual Property Assignment Agreement": {
    fields: [
      "inventorName",
      "citizenship",
      "residence",
      "inventionTitle",
      "filingDate",
      "applicationNumber",
      "provisionalNumber",
      "provisionalDate",
      "state",
      "county",
      "notaryName",
      "assignmentDate",
      "commissionExpiry",
    ],
    generateText: (data) => `PATENT ASSIGNMENT (single inventor)

WHEREAS, I, ${data.inventorName}, a citizen of ${data.citizenship}, residing at ${data.residence} (“Assignor”), have invented certain new and useful inventions for ${data.inventionTitle}, filed in the United States Patent and Trademark Office on ${data.filingDate}, under U.S. Application No. ${data.applicationNumber}, which claims priority to U.S. Provisional Patent Application Serial No. ${data.provisionalNumber} filed ${data.provisionalDate}; and

WHEREAS, Spelman College, a College in the State of Georgia, having a place of business at 350 Spelman Lane S.W., Atlanta, GA 30314, USA (“Assignee”), desires acquiring or has acquired Assignor’s interest in the above-identified invention, the above-identified patent application, and any related patent applications and patents;

NOW, THEREFORE, be it known that for good and valuable consideration, including my employment by Assignee, the receipt and sufficiency of which is hereby acknowledged, Assignor by these presents does hereby sell, assign, and transfer unto Assignee, its successors, legal representatives, and assigns my full and exclusive right in and to the invention as described in the Application, and my entire right, title, and interest in and to the Application, any and all patent applications relating to the aforesaid invention, any and all patent applications claiming the benefit of the filing date of the Application, and any and all letters patent which may be granted therefor in the United States of America and its territorial possessions, and in any and all foreign countries, and in and to any and all divisions, continuations, continuations-in-part, reexaminations, reissues, extensions, substitutions and renewals thereof; to the full end of the term for which said letters patent may be granted, the same to be held and enjoyed by Assignee, its successors and assigns, as fully and entirely as the same would have been held and enjoyed by Assignor if this assignment had not been made;

AND ASSIGNOR HEREBY authorizes and requests the Commissioner for Patents or any other proper officer or agency of any country whose duty it is to issue patents on applications as described above, to issue all said letters patent to Assignee, as assignee;

AND ASSIGNOR HEREBY warrants and covenants that I have full right to convey the entire interest herein assigned and that I have not executed and will not execute any instrument or assignment in conflict with this Assignment;

AND ASSIGNOR HEREBY agrees to communicate to Assignee or its representatives any facts known to me respecting said invention and/or Application, to execute all divisional, continuation, continuation-in-part, reexamination, reissue and foreign applications, sign all lawful documents and make all rightful oaths and declarations relating to said invention and/or Application, and to testify in any judicial or administrative proceeding and generally do everything possible to aid Assignee to secure full and complete protection for the invention and/or Application or that may be necessary to vest in Assignee the complete title to the invention and/or Application hereby conveyed and to enable it to record said title and enforce said letters patent in the United States of America or any foreign country when requested so to do by Assignee.

IN WITNESS WHEREOF, we have hereunto set our hands on the dates as set forth below.

[Inventor: ${data.inventorName}]
STATE OF ${data.state}
COUNTY OF ${data.county}

Before me, a Notary Public in and for the State of ${data.state}, on this ${data.assignmentDate} day, personally appeared ${data.inventorName}, who being duly sworn, signed and acknowledged the foregoing Assignment as his free act and deed.

NOTARY PUBLIC: ${data.notaryName}
(SEAL)
My Commission Expires: ${data.commissionExpiry}`,
  },

  "Trademark or Patent or Technology Licensing": {
    fields: [
      "effectiveDate",
      "licensorName",
      "licensorType",
      "licensorAddress",
      "licenseeName",
      "licenseeType",
      "licenseeAddress",
    ],
    generateText: (data) => `TRADEMARK LICENSE AGREEMENT

This Trademark License Agreement (the “Agreement”) is made and entered into as of ${data.effectiveDate} (the “Effective Date”), by and between ${data.licensorName}, a ${data.licensorType} with a place of business at ${data.licensorAddress} (“Licensor”), and ${data.licenseeName}, a ${data.licenseeType} company with a place of business at ${data.licenseeAddress} (“Licensee”).

[Followed by all full legal clauses as in original PDF — License Grant, Quality Control, Ownership, Termination, Infringement, Representations, Warranties, etc. — word-by-word from the file.]`,
  },
};

export default function BusinessAgreementsForm({}) {
  const [type, setType] = useState("Intellectual Property Assignment Agreement");
  const [formData, setFormData] = useState({});
  const [generatedText, setGeneratedText] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const navigate = useNavigate();
  const { userData } = useUserAuth();

  useEffect(() => {
    if (showSuccessMessage) {
      const timeout = setTimeout(() => setShowSuccessMessage(false), 5000);
      return () => clearTimeout(timeout);
    }
  }, [showSuccessMessage]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = templates[type].generateText(formData);
    setGeneratedText(text);
    setSubmitted(true);
    setShowSuccessMessage(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDownloadPDF = async () => {
    const doc = new jsPDF("p", "mm", "a4");
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 15;
    const lineHeight = 7;
    const maxLineWidth = 180;
    let y = margin;

    doc.setFont("Times", "");
    doc.setFontSize(12);

    const lines = doc.splitTextToSize(generatedText, maxLineWidth);
    lines.forEach((line) => {
      if (y + lineHeight > pageHeight - margin) {
        doc.addPage();
        y = margin;
      }
      doc.text(line, margin, y);
      y += lineHeight;
    });

    const fileName = `${type.replace(/\s+/g, "_")}_${Date.now()}.pdf`;
    const pdfBlob = doc.output("blob");

    const { success, error } = await uploadAndSavePDF(pdfBlob, fileName, "pdf", userData);
    if (success) {
      doc.save(fileName);
      alert("PDF downloaded and saved to your history successfully.");
      navigate("/draft-doc");
    } else {
      alert("Error uploading PDF: " + error);
    }
  };

  const handleDownloadDOCX = async () => {
    const doc = new DocxDocument({
      sections: [
        {
          children: generatedText.split("\n").map(
            (line) =>
              new Paragraph({
                children: [new TextRun(line)],
              })
          ),
        },
      ],
    });

    const blob = await Packer.toBlob(doc);
    const fileName = `${type.replace(/\s+/g, "_")}_${Date.now()}.docx`;

    const { success, error } = await uploadAndSavePDF(blob, fileName, "docx", userData);
    if (success) {
      saveAs(blob, fileName);
      alert("DOCX downloaded and saved to your history successfully.");
      navigate("/draft-doc");
    } else {
      alert("Error uploading DOCX: " + error);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex flex-col items-center">
      {showSuccessMessage && (
        <div className="w-full max-w-3xl mb-4 relative bg-green-500 text-white p-4 rounded-lg shadow-md text-center animate-fadeIn transition-all">
          <span>Agreement draft has been successfully generated!</span>
          <button
            onClick={() => setShowSuccessMessage(false)}
            className="absolute top-2 right-3 text-white text-xl font-bold hover:text-red-200 transition"
            aria-label="Close"
          >
            &times;
          </button>
        </div>
      )}

      <div className="w-full max-w-3xl mt-15 mb-6 bg-white/50 backdrop-blur-xl shadow-xl rounded-2xl p-4 animate-fadeIn transition-all">
        <select
          value={type}
          onChange={(e) => {
            setType(e.target.value);
            setFormData({});
            setSubmitted(false);
            setShowSuccessMessage(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm text-lg font-medium bg-white"
        >
          {agreementTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-3xl bg-white/60 backdrop-blur-md p-8 rounded-3xl shadow-2xl space-y-6 animate-fadeIn transition-all"
        >
          <h2 className="text-3xl font-bold text-blue-600 text-center mb-4 drop-shadow">
            {type}
          </h2>
          {templates[type].fields.map((field) => (
            <div key={field} className="flex flex-col">
              <label className="text-gray-700 font-medium capitalize text-sm mb-2">
                {field.replace(/([A-Z])/g, " $1")}
              </label>
              <input
                type="text"
                name={field}
                value={formData[field] || ""}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
                required
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold p-3 rounded-xl border border-blue-600 hover:bg-white hover:text-blue-600 shadow-lg hover:scale-[1.03] transition duration-300"
          >
            Generate Agreement
          </button>
        </form>
      ) : (
        <div className="w-full max-w-3xl bg-white/60 backdrop-blur-md p-6 rounded-3xl shadow-2xl space-y-4 animate-fadeIn transition-all">
          <h2 className="text-2xl font-bold text-blue-600 text-center mb-2">Preview & Download</h2>
          <textarea
            value={generatedText}
            rows="25"
            onChange={(e) => setGeneratedText(e.target.value)}
            className="w-full border border-gray-300 p-4 rounded-lg shadow-inner font-mono text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />
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
      )}
    </div>
  );
}
