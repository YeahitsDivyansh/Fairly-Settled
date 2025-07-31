import { useState } from "react";
import { useUserAuth } from "@/context/UserAuthContext";
import AgreementPreviewAndDownload from "@/components/AgreementPreviewAndDownload";

// Import templates
import { 
  partnershipAgreementFields, 
  generatePartnershipAgreement, 
  nonDisclosureAgreementFields, 
  generateNonDisclosureAgreement, 
  franchiseAgreementFields, 
  generateFranchiseAgreement, 
  serviceAgreementFields, 
  generateServiceAgreement, 
  distributionAgreementFields, 
  generateDistributionAgreement, 
  agencyContractFields, 
  generateAgencyContract,
  sharePurchaseAgreementFields,
  generateSharePurchaseAgreement,
  shareholdersAgreementFields,
  generateShareholdersAgreement,
  loanAgreementFields,
  generateLoanAgreement,
  memorandumOfUnderstandingFields,
  generateMemorandumOfUnderstanding,
  powerOfAttorneyFields,
  generatePowerOfAttorney,
  supplyAgreementFields,
  generateSupplyAgreement,
  consultingAgreementFields,
  generateConsultingAgreement,
  freelanceContractFields,
  generateFreelanceContract,
  salesContractFields,
  generateSalesContract,
  jointVentureAgreementFields,
  generateJointVentureAgreement,
  settlementAgreementFields,
  generateSettlementAgreement,
  businessPurchaseAgreementFields,
  generateBusinessPurchaseAgreement,
  profitSharingAgreementFields,
  generateProfitSharingAgreement,
  carPurchaseAgreementFields,
  generateCarPurchaseAgreement,
  generalReceiptFields,
  generateGeneralReceipt,
  invoiceFields,
  generateInvoice,
  businessPlanFields,
  generateBusinessPlan,
  minutesOfMeetingFields,
  generateMinutesOfMeeting,
  noticeOfMeetingFields,
  generateNoticeOfMeeting
} from "./templates/businessAgreement";

const agreementTypes = [
  "Partnership Agreement",
  "Non-Disclosure Agreement",
  "Franchise Agreement",
  "Service Agreement",
  "Distribution Agreement",
  "Share Purchase Agreement",
  "Shareholders Agreement",
  "Loan Agreement",
  "Memorandum of Understanding",
  "Power of Attorney",
  "Supply Agreement",
  "Settlement Agreement",
  "Consulting Agreement",
  "Profit Sharing Agreement",
  "Sales Contract",
  "Freelance Contract",
  "Car Purchase Agreement",
  "Agency Contract",
  "Business Plan",
  "Minutes of Meeting",
  "Business Purchase Agreement",
  "Joint Venture Agreement",
  "General Receipt",
  "Invoice",
  "Notice of Meeting"

];

const templates = {
  "Partnership Agreement": {
    fields: partnershipAgreementFields,
    generateText: generatePartnershipAgreement
  },
  "Non-Disclosure Agreement": {
    fields: nonDisclosureAgreementFields,
    generateText: generateNonDisclosureAgreement
  },
  "Franchise Agreement": {
    fields: franchiseAgreementFields,
    generateText: generateFranchiseAgreement
  },
  "Service Agreement": {
    fields: serviceAgreementFields,
    generateText: generateServiceAgreement
  },
  "Distribution Agreement": {
    fields: distributionAgreementFields,
    generateText: generateDistributionAgreement
  },
  "Agency Contract": {
    fields: agencyContractFields,
    generateText: generateAgencyContract
  },
  "Share Purchase Agreement": {
    fields: sharePurchaseAgreementFields,
    generateText: generateSharePurchaseAgreement
  },
  "Shareholders Agreement": {
    fields: shareholdersAgreementFields,
    generateText: generateShareholdersAgreement
  },
  "Loan Agreement": {
    fields: loanAgreementFields,
    generateText: generateLoanAgreement
  },
  "Memorandum of Understanding": {
    fields: memorandumOfUnderstandingFields,
    generateText: generateMemorandumOfUnderstanding
  },
  "Power of Attorney": {
    fields: powerOfAttorneyFields,
    generateText: generatePowerOfAttorney
  },
  "Supply Agreement": {
    fields: supplyAgreementFields,
    generateText: generateSupplyAgreement
  },
  "Settlement Agreement": {
    fields: settlementAgreementFields,
    generateText: generateSettlementAgreement
  },
  "Consulting Agreement": {
    fields: consultingAgreementFields,
    generateText: generateConsultingAgreement
  },
  "Profit Sharing Agreement": {
    fields: profitSharingAgreementFields,
    generateText: generateProfitSharingAgreement
  },
  "Sales Contract": {
    fields: salesContractFields,
    generateText: generateSalesContract
  },
  "Freelance Contract": {
    fields: freelanceContractFields,
    generateText: generateFreelanceContract
  },
  "Car Purchase Agreement": {
    fields: carPurchaseAgreementFields,
    generateText: generateCarPurchaseAgreement
  },
  "Business Purchase Agreement": {
    fields: businessPurchaseAgreementFields,
    generateText: generateBusinessPurchaseAgreement
  },
  "Joint Venture Agreement": {
    fields: jointVentureAgreementFields,
    generateText: generateJointVentureAgreement
  },
  "General Receipt": {
    fields: generalReceiptFields,
    generateText: generateGeneralReceipt
  },
  "Invoice": {
    fields: invoiceFields,
    generateText: generateInvoice
  },
  "Business Plan": {
    fields: businessPlanFields,
    generateText: generateBusinessPlan
  },
  "Minutes of Meeting": {
    fields: minutesOfMeetingFields,
    generateText: generateMinutesOfMeeting
  },
  "Notice of Meeting": {
    fields: noticeOfMeetingFields,
    generateText: generateNoticeOfMeeting
  }
};

export default function BusinessAgreements() {
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
