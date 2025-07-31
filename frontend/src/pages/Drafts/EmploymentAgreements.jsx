import { useState } from "react";
import { useUserAuth } from "@/context/UserAuthContext";
import AgreementPreviewAndDownload from "@/components/AgreementPreviewAndDownload";

// Import templates from EmployeeAgreement
import {
  employmentAgreementFields,
  generateEmploymentAgreement,
  employeeTerminationFields,
  generatEmployeeTerminationletter,
  performanceEvaluationFields,
  generatePerformanceEvaluation,
  employmentCertificateFields,
  generateEmploymentCertificate,
  employeeHandbookFields,
  generateEmployeeHandbook,
  warningLetterFields,
  generateWarningLetter,
  resignationLetterFields,
  generateResignationLetter,
  payslipFields,
  generatePayslip,
  employmentOfferLetterFields,
  generateEmploymentOfferLetter,
  internshipInvitationLetterFields,
  generateInternshipInvitationLetter,
  nonCompeteAgreementFields,
  generateNonCompeteAgreement,
  nonDisclosureAgreementFields,
  generateNonDisclosureAgreement,
  probationPeriodTerminationFields,
  generateProbationPeriodTerminationLetter,
  remoteWorkingContractFields,
  generateRemoteWorkingContract
} from "./templates/EmployeeAgreement";

const agreementTypes = [
  "Employment Agreement",
  "Employee Termination Letter",
  "Performance Evaluation",
  "Employment Certificate",
  "Employee Handbook",
  "Warning Letter",
  "Resignation Letter",
  "Payslip",
  "Employment Offer Letter",
  "Internship Invitation Letter",
  "Non-Compete Agreement",
  "Non-Disclosure Agreement",
  "Probation Period Termination Letter",
  "Remote Working Contract"
];

const templates = {
  "Employment Agreement": {
    fields: employmentAgreementFields,
    generateText: generateEmploymentAgreement
  },
  "Employee Termination Letter": {
    fields: employeeTerminationFields,
    generateText: generatEmployeeTerminationletter
  },
  "Performance Evaluation": {
    fields: performanceEvaluationFields,
    generateText: generatePerformanceEvaluation
  },
  "Employment Certificate": {
    fields: employmentCertificateFields,
    generateText: generateEmploymentCertificate
  },
  "Employee Handbook": {
    fields: employeeHandbookFields,
    generateText: generateEmployeeHandbook
  },
  "Warning Letter": {
    fields: warningLetterFields,
    generateText: generateWarningLetter
  },
  "Resignation Letter": {
    fields: resignationLetterFields,
    generateText: generateResignationLetter
  },
  "Payslip": {
    fields: payslipFields,
    generateText: generatePayslip
  },
  "Employment Offer Letter": {
    fields: employmentOfferLetterFields,
    generateText: generateEmploymentOfferLetter
  },
  "Internship Invitation Letter": {
    fields: internshipInvitationLetterFields,
    generateText: generateInternshipInvitationLetter
  },
  "Non-Compete Agreement": {
    fields: nonCompeteAgreementFields,
    generateText: generateNonCompeteAgreement
  },
  "Non-Disclosure Agreement": {
    fields: nonDisclosureAgreementFields,
    generateText: generateNonDisclosureAgreement
  },
  "Probation Period Termination Letter": {
    fields: probationPeriodTerminationFields,
    generateText: generateProbationPeriodTerminationLetter
  },
  "Remote Working Contract": {
    fields: remoteWorkingContractFields,
    generateText: generateRemoteWorkingContract
  }
};

export default function EmploymentAgreements() {
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
