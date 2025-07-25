import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "@/context/UserAuthContext";

// Import templates
import { 
  childTravelAgreementFields,
  generateChildTravelAgreement,
  prenuptialAgreementFields,
  generatePrenuptialAgreement,
  lastWillAgreementFields,
  generateLastWillAgreement

} from "./templates/personalAgreement";

const agreementTypes = [
  "Child Travel Consent Letter",
  "Prenuptial Agreement",
  "Last Will and Testament",

];

const templates = {
  "Child Travel Consent Letter": {
    fields: childTravelAgreementFields,
    generateText: generateChildTravelAgreement
  },
  "Prenuptial Agreement": {
    fields: prenuptialAgreementFields,
    generateText: generatePrenuptialAgreement
  },
  "Last Will and Testament": {
    fields: lastWillAgreementFields,
    generateText: generateLastWillAgreement
  }
};

export default function BusinessAgreements() {
  const { userData } = useUserAuth();
  const navigate = useNavigate();
  const [type, setType] = useState(agreementTypes[0]);
  const [formData, setFormData] = useState({});
  const [generatedText, setGeneratedText] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const template = templates[type];
    const text = template.generateText(formData);
    setGeneratedText(text);
    setSubmitted(true);
    setShowSuccessMessage(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 5000);
  };

  const handleDownloadPDF = async () => {
    // Use the common document generator utility for PDF
    const { generateDocument } = await import('@/lib/documentGenerator');
    
    await generateDocument(
      generatedText, 
      `${type.replace(/\s+/g, "_")}_${Date.now()}`, 
      'pdf', 
      userData, 
      type,
      {
        onSuccess: () => {
          alert("PDF downloaded and saved to your history successfully.");
          // navigate("/draft-doc");
        },
        onError: (errorMsg) => {
          alert("Error uploading PDF: " + errorMsg);
        }
      }
    );
  };

  const handleDownloadDOCX = async () => {
    // Use the common document generator utility for DOCX
    const { generateDocument } = await import('@/lib/documentGenerator');
    
    await generateDocument(
      generatedText, 
      `${type.replace(/\s+/g, "_")}_${Date.now()}`, 
      'docx', 
      userData, 
      type,
      {
        onSuccess: () => {
          alert("DOCX downloaded and saved to your history successfully.");
          // navigate("/draft-doc");
        },
        onError: (errorMsg) => {
          alert("Error uploading DOCX: " + errorMsg);
        }
      }
    );
  };
  return (
    <div className="min-h-screen mt-15 p-6 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex flex-col items-center">
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

      <div className="w-full max-w-3xl mb-6 bg-white/50 backdrop-blur-xl shadow-xl rounded-2xl p-4 animate-fadeIn transition-all">
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
          
          {/* HTML Preview Mode */}
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
                  margin: 20px 0;
                  border-bottom: 2px solid #2563eb;
                  padding-bottom: 10px;
                }
                .agreement-body {
                  padding: 10px 20px;
                  line-height: 1.6;
                }
                .agreement-body h2 {
                  font-size: 18px;
                  font-weight: bold;
                  margin: 20px 0 12px;
                  border-bottom: 1px solid #e5e7eb;
                  padding-bottom: 5px;
                }
                .agreement-body p {
                  margin: 10px 0;
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
                  margin-top: 40px;
                  {/* border-top: 1px solid #e5e7eb; */}
                  padding-top: 20px;
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
      )}
    </div>
  );
}
