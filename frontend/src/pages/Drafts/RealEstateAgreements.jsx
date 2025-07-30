import { useState } from "react";
import { useUserAuth } from "@/context/UserAuthContext";
import AgreementPreviewAndDownload from "@/components/AgreementPreviewAndDownload";

// Import templates
import { 
  leaseAgreementFields,
  generateLeaseAgreement,
  commercialLeaseAgreementFields,
  generateCommercialLeaseAgreement,
  commercialSubleaseAgreementFields,
  generateCommercialSubleaseAgreement,
  consentToSubleaseFields,
  generateConsentToSublease,
  evictionNoticeFields,
  generateEvictionNotice,
  landLeaseAgreementFields,
  generateLandLeaseAgreement,
  leaseAmendmentFields,
  generateLeaseAmendment,
  noticeToVacateFields,
  generateNoticeToVacate,
  rentalAgencyAgreementFields,
  generateRentalAgencyAgreement,
  rentReceiptFields,
  generateRentReceipt,
  subleaseAgreementFields,
  generateSubleaseAgreement
} from "./templates/realEstateAgreement";

const agreementTypes = [
  "Lease Agreement",
  "Commercial Lease Agreement",
  "Commercial Sublease Agreement",
  "Consent to Sublease",
  "Eviction Notice",
  "Land Lease Agreement",
  "Lease Amendment",
  "Notice to Vacate",
  "Rental Agency Agreement",
  "Rent Receipt",
  "Sublease Agreement"
];

const templates = {
  "Lease Agreement": {
    fields: leaseAgreementFields,
    generateText: generateLeaseAgreement
  },
  "Commercial Lease Agreement": {
    fields: commercialLeaseAgreementFields,
    generateText: generateCommercialLeaseAgreement
  },
  "Commercial Sublease Agreement": {
    fields: commercialSubleaseAgreementFields,
    generateText: generateCommercialSubleaseAgreement
  },
  "Consent to Sublease": {
    fields: consentToSubleaseFields,
    generateText: generateConsentToSublease
  },
  "Eviction Notice": {
    fields: evictionNoticeFields,
    generateText: generateEvictionNotice
  },
  "Land Lease Agreement": {
    fields: landLeaseAgreementFields,
    generateText: generateLandLeaseAgreement
  },
  "Lease Amendment": {
    fields: leaseAmendmentFields,
    generateText: generateLeaseAmendment
  },
  "Notice to Vacate": {
    fields: noticeToVacateFields,
    generateText: generateNoticeToVacate
  },
  "Rental Agency Agreement": {
    fields: rentalAgencyAgreementFields,
    generateText: generateRentalAgencyAgreement
  },
  "Rent Receipt": {
    fields: rentReceiptFields,
    generateText: generateRentReceipt
  },
  "Sublease Agreement": {
    fields: subleaseAgreementFields,
    generateText: generateSubleaseAgreement
  }
};

export default function RealEstateAgreements() {
  const { userData } = useUserAuth();
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
        <AgreementPreviewAndDownload 
          generatedText={generatedText}
          type={type}
          userData={userData}
        />
      )}
    </div>
  );
}
