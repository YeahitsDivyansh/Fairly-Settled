// 🚀 Full Employment Agreements Form (100% Word-by-Word Templates from Original Docs)
import { useState } from "react";
import jsPDF from "jspdf";

const agreementTypes = [
  "Employment Contract",
  "Contractor & Consultant Agreement",
  "Non-Compete & Confidentiality Agreement",
  "Internship & Severance Agreement",
];

const templates = {
  "Employment Contract": {
    fields: ["employerName", "employeeName", "employerAddress", "employeeAddress", "position", "startDate", "salary", "workingHours", "terminationNotice", "signDate"],
    generateText: (data) => `EMPLOYMENT AGREEMENT\n\nThis Employment Agreement is made and entered into by and between ${data.employerName}, located at ${data.employerAddress}, hereinafter referred to as the "Employer", and ${data.employeeName}, residing at ${data.employeeAddress}, hereinafter referred to as the "Employee".\n\n1. Position\nThe Employee agrees to be employed by the Employer in the capacity of ${data.position}. The Employee shall perform all duties as are customarily associated with this position and such additional duties as may be assigned from time to time by the Employer.\n\n2. Term\nThe term of employment shall begin on ${data.startDate} and shall continue unless terminated pursuant to the provisions of this Agreement.\n\n3. Salary\nThe Employer shall pay the Employee a salary of ${data.salary} per annum, payable in accordance with the Employer’s standard payroll schedule.\n\n4. Work Schedule\nThe Employee's work schedule shall be ${data.workingHours} hours per week, and any changes shall be mutually agreed upon in writing.\n\n5. Benefits\nThe Employee shall be entitled to participate in the benefits offered by the Employer, including but not limited to health insurance, vacation, and sick leave, in accordance with the Employer’s policies.\n\n6. Termination\nThis Agreement may be terminated by either party with ${data.terminationNotice} written notice. The Employer may terminate the Employee immediately for cause.\n\n7. Confidentiality\nThe Employee acknowledges that during the course of employment, confidential information may be disclosed. The Employee agrees not to disclose such information during or after the term of employment.\n\n8. Non-Solicitation\nThe Employee agrees not to solicit the Employer’s employees or clients for a period of one (1) year following termination.\n\n9. Governing Law\nThis Agreement shall be governed by and construed in accordance with the laws of the jurisdiction where the Employer is located.\n\nIN WITNESS WHEREOF, the parties have executed this Agreement on ${data.signDate}.\n\nEmployer Signature: _______________________\nEmployee Signature: _______________________`
  },

  "Contractor & Consultant Agreement": {
    fields: ["clientName", "clientAddress", "contractorName", "contractorAddress", "startDate", "endDate", "serviceScope", "paymentTerms", "signDate"],
    generateText: (data) => `CONSULTING AGREEMENT\n\nThis Consulting Agreement ("Agreement") is entered into as of ${data.signDate} by and between ${data.clientName}, located at ${data.clientAddress} ("Client") and ${data.contractorName}, located at ${data.contractorAddress} ("Consultant").\n\n1. Services\nConsultant shall provide the following services: ${data.serviceScope}. The Consultant agrees to devote as much time and attention as is reasonably necessary.\n\n2. Term\nThis Agreement shall commence on ${data.startDate} and shall continue until ${data.endDate}, unless terminated earlier.\n\n3. Compensation\nClient shall pay Consultant as follows: ${data.paymentTerms}. Payment shall be made within 30 days of invoice.\n\n4. Independent Contractor\nThe Consultant shall perform all services under this Agreement as an independent contractor and not as an employee or agent.\n\n5. Confidentiality\nConsultant agrees to maintain in confidence and not disclose any confidential information received from Client.\n\n6. Ownership of Work Product\nAll work products created by Consultant in performance of this Agreement shall be the sole and exclusive property of Client.\n\n7. Termination\nThis Agreement may be terminated by either party with 15 days’ written notice.\n\n8. Governing Law\nThis Agreement shall be governed by and construed in accordance with the laws of the state in which the Client is located.\n\nIN WITNESS WHEREOF, the parties have executed this Agreement on the date first above written.\n\nClient: _____________________\nConsultant: _____________________`
  },

  "Non-Compete & Confidentiality Agreement": {
    fields: ["partyOne", "partyTwo", "agreementDate", "duration", "region", "infoType", "signDate"],
    generateText: (data) => `NON-COMPETE AND CONFIDENTIALITY AGREEMENT\n\nThis Agreement is made on ${data.agreementDate} between ${data.partyOne} ("Disclosing Party") and ${data.partyTwo} ("Receiving Party").\n\n1. Non-Compete\nThe Receiving Party agrees that for a period of ${data.duration} from the termination of the business relationship, they will not directly or indirectly engage in any business that competes with the Disclosing Party in ${data.region}.\n\n2. Confidentiality\nThe Receiving Party agrees to keep all confidential information, including but not limited to ${data.infoType}, in strict confidence and not to disclose it to any third party without the prior written consent of the Disclosing Party.\n\n3. Return of Materials\nUpon termination, all materials and documents containing confidential information shall be returned.\n\n4. Governing Law\nThis Agreement shall be governed by and construed in accordance with the laws of the Disclosing Party's jurisdiction.\n\nIN WITNESS WHEREOF, the parties have executed this Agreement on ${data.signDate}.\n\nDisclosing Party: ____________________________\nReceiving Party: ____________________________`
  },

  "Internship & Severance Agreement": {
    fields: ["companyName", "companyAddress", "employeeName", "employeeAddress", "dismissalDate", "noticePeriod", "effectiveDate", "holidayYears", "overtimeHours", "commissionAvg", "bonusPeriod", "bonusAmount", "carReturnDate", "severanceMonths", "severanceAmount", "extraSeverance", "outplacementCost", "communicationNote", "refereeName", "signDate"],
    generateText: (data) => `SEVERANCE AGREEMENT\n\nThis Severance Agreement is made and entered into by and between ${data.companyName}, located at ${data.companyAddress} ("Company"), and ${data.employeeName}, residing at ${data.employeeAddress} ("Employee").\n\nThe Company has terminated the Employee’s employment effective as of ${data.dismissalDate} with a notice period of ${data.noticePeriod}, expiring on ${data.effectiveDate}.\n\n1. Final Workday\nThe Employee is released from all duties and obligations effective immediately.\n\n2. Compensation\nThe Employee shall receive salary through ${data.dismissalDate} and compensation for ${data.holidayYears} unused holiday years and ${data.overtimeHours} hours of overtime.\n\n3. Commission and Bonus\nThe average monthly commission is DKK ${data.commissionAvg}. The Employee will receive a bonus of DKK ${data.bonusAmount} for ${data.bonusPeriod}.\n\n4. Company Property\nAll company property shall be returned by ${data.carReturnDate}.\n\n5. Severance\nThe Employee shall receive ${data.severanceMonths} months’ severance pay totaling DKK ${data.severanceAmount}. Additional severance of DKK ${data.extraSeverance} will be paid as a lump sum.\n\n6. Outplacement\nThe Company agrees to provide outplacement support not exceeding DKK ${data.outplacementCost}.\n\n7. Communication\nThe internal announcement shall read: “${data.communicationNote}”.\n\n8. References\nThe Employee may refer to ${data.refereeName} as reference.\n\n9. Full Settlement\nThis Agreement constitutes a full and final settlement of any and all claims.\n\n10. Confidentiality\nThe contents of this Agreement shall remain confidential.\n\nSigned this ${data.signDate}.\n\nCompany: ____________________________\nEmployee: ____________________________`
  }
};

export default function EmploymentAgreementsForm() {
  const [type, setType] = useState("Employment Contract");
  const [formData, setFormData] = useState({});
  const [generatedText, setGeneratedText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = templates[type].generateText(formData);
    setGeneratedText(text);
    setSubmitted(true);
  };

  const handleDownload = () => {
    const doc = new jsPDF("p", "mm", "a4");
    const pageHeight = doc.internal.pageSize.getHeight();
    const lines = doc.splitTextToSize(generatedText, 180);
    let y = 15;

    doc.setFont("Times", "");
    doc.setFontSize(12);

    lines.forEach((line) => {
      if (y + 7 > pageHeight - 15) {
        doc.addPage();
        y = 15;
      }
      doc.text(line, 15, y);
      y += 7;
    });

    doc.save(`${type.replace(/\s+/g, "_")}_Agreement.pdf`);
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center">
      <div className="bg-white p-4 rounded-xl shadow mb-4 w-full max-w-3xl">
        <select
          value={type}
          onChange={(e) => { setType(e.target.value); setFormData({}); setSubmitted(false); }}
          className="w-full p-2 border border-gray-300 rounded"
        >
          {agreementTypes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-3xl space-y-4">
          <h2 className="text-xl font-bold text-purple-700 text-center">{type}</h2>
          {templates[type].fields.map((field) => (
            <div key={field}>
              <label className="block text-gray-600 capitalize text-sm mb-1">{field.replace(/([A-Z])/g, ' $1')}</label>
              <input
                type="text"
                name={field}
                value={formData[field] || ""}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
                required
              />
            </div>
          ))}
          <button type="submit" className="w-full bg-purple-600 text-white p-3 rounded-xl hover:bg-purple-700">
            Generate Agreement
          </button>
        </form>
      ) : (
        <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-3xl space-y-4">
          <h2 className="text-xl font-bold text-purple-700 text-center">Preview & Download</h2>
          <textarea
            value={generatedText}
            rows="30"
            onChange={(e) => setGeneratedText(e.target.value)}
            className="w-full border border-gray-400 p-4 rounded"
          />
          <button onClick={handleDownload} className="w-full bg-green-600 text-white p-3 rounded-xl hover:bg-green-700">
            Download PDF
          </button>
        </div>
      )}
    </div>
  );
}
