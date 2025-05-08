import { useState, useEffect } from "react";
import jsPDF from "jspdf";
import { useNavigate } from "react-router-dom";
import { uploadAndSavePDF } from "@/context/uploadAndSavePDF";
import { useUserAuth } from "@/context/UserAuthContext";
 

const agreementTypes = [
  "Partnership Agreement",
  "Non-Disclosure Agreement",
  "Franchise Agreement",
  "Service Agreement",
  "Distribution Agreement",
  "Agency Contract",
];

const templates = {
  "Partnership Agreement": {
    fields: [
      "partner1Name",
      "partner1Address",
      "partner1City",
      "partner2Name",
      "partner2Address",
      "partner2City",
      "businessPurpose",
      "partnershipName",
      "officeAddress",
      "liabilityLimit",
      "capitalContribution",
      "cashShare",
      "termYears",
      "stateLaw",
      "nonCompeteDuration",
      "nonCompeteRegion",
    ],
    generateText: (data) => `PARTNERSHIP AGREEMENT

THIS PARTNERSHIP AGREEMENT is made this __________ day of ___________, 20__, by and between the following individuals:  

${data.partner1Name}  
Address: ${data.partner1Address}  
City/State/ZIP: ${data.partner1City}  

${data.partner2Name}  
Address: ${data.partner2Address}  
City/State/ZIP: ${data.partner2City}  

1. Nature of Business. The partners listed above hereby agree that they shall be considered partners in business for the following purpose:  
${data.businessPurpose}

2. Name. The partnership shall be conducted under the name of ${data.partnershipName} and shall maintain offices at ${data.officeAddress}.

3. Day-To-Day Operation. The partners shall provide their full-time services and best efforts on behalf of the partnership. No partner shall receive a salary for services rendered to the partnership. Each partner shall have equal rights to manage and control the partnership and its business. Should there be differences between the partners concerning ordinary business matters, a decision shall be made by unanimous vote. It is understood that the partners may elect one of the partners to conduct the day-to-day business of the partnership; however, no partner shall be able to bind the partnership by act or contract to any liability exceeding $${data.liabilityLimit} without the prior written consent of each partner.

4. Capital Contribution. The capital contribution of each partner to the partnership shall consist of the following property, services, or cash which each partner agrees to contribute:  
Name Of Partner - Capital Contribution - Agreed-Upon Cash % Share  
${data.capitalContribution}  
${data.cashShare}

The partnership shall maintain a capital account record for each partner; should any partner’s capital account fall below the agreed to amount, then that partner shall (1) have his share of partnership profits then due and payable applied instead to his capital account; and (2) pay any deficiency to the partnership if his share of partnership profits is not yet due and payable or, if it is, his share is insufficient to cancel the deficiency.

5. Profits and Losses. The profits and losses of the partnership shall be divided by the partners according to a mutually agreeable schedule and at the end of each calendar year according to the proportions listed above.

6. Term/Termination. The term of this Agreement shall be for a period of ${data.termYears} years, unless the partners mutually agree in writing to a shorter period. Should the partnership be terminated by unanimous vote, the assets and cash of the partnership shall be used to pay all creditors, with the remaining amounts to be distributed to the partners according to their proportionate share.

7. Disputes. This Partnership Agreement shall be governed by the laws of the State of ${data.stateLaw}. Any disputes arising between the partners as a result of this Agreement shall be settled by arbitration in accordance with the rules of the American Arbitration Association and judgment upon the award rendered may be entered in any court having jurisdiction thereof.

8. Withdrawal/Death of Partner. In the event a partner withdraws or retires from the partnership for any reason, including death, the remaining partners may continue to operate the partnership using the same name. A withdrawing partner shall be obligated to give sixty (60) days’ prior written notice of his/her intention to withdraw or retire and shall be obligated to sell his/her interest in the partnership. No partner shall transfer interest in the partnership to any other party without the written consent of the remaining partner(s). The remaining partner(s) shall pay the withdrawing or retiring partner, or to the legal representative of the deceased or disabled partner, the value of his interest in the partnership, or (a) the sum of his capital account, (b) any unpaid loans due him, (c) his proportionate share of accrued net profits remaining undistributed in his capital account, and (d) his interest in any prior agreed appreciation in the value of the partnership property over its book value. No value for goodwill shall be included in determining the value of the partner’s interest.

9. Non-Compete Agreement. A partner who retires or withdraws from the partnership shall not directly or indirectly engage in a business which is or which would be competitive with the existing or then anticipated business of the partnership for a period of ${data.nonCompeteDuration}, in those ${data.nonCompeteRegion} of this State where the partnership is currently doing or planning to do business.

IN WITNESS WHEREOF, the partners have duly executed this Agreement on the day and year set forth hereinabove.

_______________________  
Partner: ${data.partner1Name}

_______________________  
Partner: ${data.partner2Name}`,
  },
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  "Non-Disclosure Agreement": {
    fields: [
      "agreementDate",
      "disclosingParty",
      "disclosingAddress",
      "receivingParty",
      "receivingAddress",
      "disclosingName",
      "receivingName",
      "disclosingSignatureDate",
      "receivingSignatureDate",
      "yourName"
    ],
    generateText: (data) => `NON-DISCLOSURE AGREEMENT (NDA)

This Nondisclosure Agreement or ("Agreement") has been entered into on the date of  
${data.agreementDate} and is by and between:  

Party Disclosing Information: ${data.disclosingParty} with a mailing address of  
${data.disclosingAddress} (“Disclosing Party”).  

Party Receiving Information: ${data.receivingParty} with a mailing address of  
${data.receivingAddress} (“Receiving Party”).  

For the purpose of preventing the unauthorized disclosure of Confidential Information as defined  
below. The parties agree to enter into a confidential relationship concerning the disclosure of  
certain proprietary and confidential information ("Confidential Information").  

1. Definition of Confidential Information. For purposes of this Agreement, "Confidential  
Information" shall include all information or material that has or could have commercial value or  
other utility in the business in which Disclosing Party is engaged. If Confidential Information is in  
written form, the Disclosing Party shall label or stamp the materials with the word "Confidential"  
or some similar warning. If Confidential Information is transmitted orally, the Disclosing Party  
shall promptly provide writing indicating that such oral communication constituted Confidential  
Information.  

2. Exclusions from Confidential Information. Receiving Party's obligations under this  
Agreement do not extend to information that is: (a) publicly known at the time of disclosure or  
subsequently becomes publicly known through no fault of the Receiving Party; (b) discovered or  
created by the Receiving Party before disclosure by Disclosing Party; (c) learned by the  
Receiving Party through legitimate means other than from the Disclosing Party or Disclosing  
Party's representatives; or (d) is disclosed by Receiving Party with Disclosing Party's prior  
written approval.  

3. Obligations of Receiving Party. Receiving Party shall hold and maintain the Confidential  
Information in strictest confidence for the sole and exclusive benefit of the Disclosing Party.  
Receiving Party shall carefully restrict access to Confidential Information to employees,  
contractors and third parties as is reasonably required and shall require those persons to sign  
nondisclosure restrictions at least as protective as those in this Agreement. Receiving Party  
shall not, without the prior written approval of Disclosing Party, use for Receiving Party's benefit,  
publish, copy, or otherwise disclose to others, or permit the use by others for their benefit or to  
the detriment of Disclosing Party, any Confidential Information. Receiving Party shall return to  
Disclosing Party any and all records, notes, and other written, printed, or tangible materials in its  
possession pertaining to Confidential Information immediately if Disclosing Party requests it in  
writing.  

4. Time Periods. The nondisclosure provisions of this Agreement shall survive the termination  
of this Agreement and Receiving Party's duty to hold Confidential Information in confidence  
shall remain in effect until the Confidential Information no longer qualifies as a trade secret or  
until Disclosing Party sends Receiving Party written notice releasing Receiving Party from this  
Agreement, whichever occurs first.  

5. Relationships. Nothing contained in this Agreement shall be deemed to constitute either  
party a partner, joint venture or employee of the other party for any purpose.  

6. Severability. If a court finds any provision of this Agreement invalid or unenforceable, the  
remainder of this Agreement shall be interpreted so as best to affect the intent of the parties.  

7. Integration. This Agreement expresses the complete understanding of the parties with  
respect to the subject matter and supersedes all prior proposals, agreements, representations,  
and understandings. This Agreement may not be amended except in writing signed by both  
parties.  

8. Waiver. The failure to exercise any right provided in this Agreement shall not be a waiver of  
prior or subsequent rights.  

9. Notice of Immunity. Employee is provided notice that an individual shall not be held  
criminally or civilly liable under any federal or state trade secret law for the disclosure of a trade  
secret that is made (i) in confidence to a federal, state, or local government official, either  
directly or indirectly, or to an attorney; and (ii) solely for the purpose of reporting or investigating  
a suspected violation of law; or is made in a complaint or other document filed in a lawsuit or  
other proceeding, if such filing is made under seal. An individual who files a lawsuit for  
retaliation by an employer for reporting a suspected violation of law may disclose the trade  
secret to the attorney of the individual and use the trade secret information in the court  
proceeding, if the individual (i) files any document containing the trade secret under seal; and (ii)  
does not disclose the trade secret, except pursuant to court order.  

This Agreement and each party's obligations shall be binding on the representatives, assigns  
and successors of such party. Each party has signed this Agreement through its authorized  
representative.  

DISCLOSING PARTY  
Signature: _______________________________  
Typed or Printed Name: ${data.disclosingName}  
Date: ${data.disclosingSignatureDate}  

RECEIVING PARTY  
Signature: _______________________________  
Typed or Printed Name: ${data.receivingName}  
Date: ${data.receivingSignatureDate}`,
  },


// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  "Franchise Agreement": {
    fields: [
      "franchisorName",
      "franchisorOffice",
      "franchisorRep",
      "franchiseeName",
      "franchiseeAddress",
      "territory",
      "website",
      "letterIntentDate",
      "retailExperience",
      "signingDate",
      "openingDate",
    ],
    generateText: (data) => `FRANCHISE AGREEMENT

The undersigned:

1. ${data.franchisorName}, having its registered office at ${data.franchisorOffice}, hereinafter referred to as: “Franchisor”, duly represented by ${data.franchisorRep};

And

2. ${data.franchiseeName}, representing (New Company), residing at ${data.franchiseeAddress}, The Netherlands, hereinafter referred to as: “Franchisee”

The parties under number 1 and 2 referred to individually as the “Party” and together as the “Parties”;

PREAMBLE

- FRANCHISOR has expended time, effort and money to acquire knowledge, experience, methods, skills with regard to the sale and purchase and distribution, establishment, marketing, promotion and operation of businesses by means of websites that provide the sale and purchase of golf equipment, golf clothing, golf holidays and associated products (the “Products”);

- FRANCHISOR has expended time, effort and money to acquire knowledge, experience, methods, business plans, procedures, skills with regard to rendering services to the customers with regard to the Products by means of websites (“Services”);

- The Products and Services have become identified by a distinctive trade name and trade mark “FRANCHISOR”;

- The name “FRANCHISOR” and its logotype, symbols, emblems, slogans, and designs are referred to as “Trademarks”;

- Specific manuals and routines (the “Manuals”) are used with Products, Services, and Trademarks and form part of this Agreement;

- FRANCHISOR authorizes FRANCHISEE to use Website, Trademarks, Services and Products in ${data.territory} using ${data.website};

- A Letter of Intent was signed on ${data.letterIntentDate};

- FRANCHISEE has retail experience in ${data.retailExperience};

HAVE AGREED AS FOLLOWS:

1. Subject of the Agreement / Master Franchise  
FRANCHISEE shall:  
- Have exclusive right to operate under FRANCHISOR’s name in ${data.territory};  
- Sell the Products and Services using ${data.website};  
- Promote use of Products, Services and Trademarks;  
- Access Manuals and development materials.

...

13. Term  
This Agreement is effective and binding for an initial period of 3 years from ${data.signingDate}. The Dutch website is scheduled to open on ${data.openingDate}, unless external impediments arise. Agreement may be renewed annually unless terminated in writing by either Party.

...

17. Miscellaneous  
This Agreement is governed by the laws of the Netherlands. Any disputes shall be submitted to the exclusive jurisdiction of the competent court of [City], the Netherlands.

IN WITNESS WHEREOF, the Parties have executed this Agreement.

_________________________  
FRANCHISOR  
By: ${data.franchisorRep}  
Date: ${data.signingDate}

_________________________  
FRANCHISEE  
By: ${data.franchiseeName}  
Date: ${data.signingDate}`,
  },

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


  "Service Agreement": {
    fields: [
      "agreementDate",
      "principalName",
      "principalAddress",
      "contractorName",
      "contractorAddress",
      "scopeOfServices",
      "startDate",
      "endDate",
      "compensation",
      "terminationNoticeDays",
    ],
    generateText: (data) => `SERVICES AGREEMENT

THIS SERVICES AGREEMENT (“Agreement”) is made and entered into the most recent day and year set forth below by and between ${data.principalName}, a quasi-municipal corporation and political subdivision of the State of Colorado (the “Principal”), whose mailing address is ${data.principalAddress}, and ${data.contractorName} (the “Contractor”), whose mailing address is ${data.contractorAddress}.

WITNESSETH:

In consideration of the mutual covenants and obligations herein expressed, it is agreed by and between the Parties as follows:

1. Scope of Services. The Contractor agrees to provide services related to the following scope: ${data.scopeOfServices}.

2. Time of Commencement and Completion of Services. Services shall begin no later than ${data.startDate} and completed no later than ${data.endDate}. Extensions must be agreed upon in writing.

3. Early Termination. The Principal may terminate this Agreement without cause by providing at least ${data.terminationNoticeDays} days' written notice.

4. Suspension.  Without terminating this Agreement or breaching its obligations hereunder, the Principal may, at its convenience, suspend the services of the Contractor by giving the Contractor written notice one day in advance of the suspension Suspension.  Without terminating this Agreement or breaching its obligations hereunder, the Principal may, at its convenience, suspend the services of the Contractor by giving the Contractor written notice one day in advance of the suspension 

5. Compensation. The Principal agrees to pay the Contractor ${data.compensation} for the services rendered.

6. Qualifications on Obligations to Pay.  No partial payment shall be final acceptance or approval of that part of the Scope of Services paid for or shall relieve the Contractor of any of its obligations under this Agreement.  Notwithstanding any other terms of this Agreement, the Principal may withhold any payment (whether a progress payment or final payment) to the Contractor if any one or more of the following conditions exists: 
(a) Agreement.The Contractor is in default of any of its obligations under this 
(b) Any part of such payment is attributable to services that are not performed according to this Agreement.  The Principal will pay for any portion of the services performed according to this Agreement. 
(c) The Contractor has failed to make payments promptly to any third party used to perform any portion of the services hereunder, subject to Paragraph 9, for which the Principal has made payments to the Contractor.

7. Principal Representative. The Principal will designate, prior to commencement of work, its project representative (the “Principal Representative”) who shall make, within the scope of his or her authority, all necessary and proper decisions with reference to the Scope of Services.  All requests for contract interpretations, change orders, and other clarification or instruction shall be directed to the Principal Representative. 

8. Independent Contractor. The services to be performed by the Contractor are those of an independent contractor and not of an employee of the Principal. The Contractor is obligated to pay federal and state income tax on any moneys earned pursuant to this Agreement.  Neither the Contractor nor its employees, if any, are entitled to workers’ compensation benefits from the Principal for the performance of the services specified in this Agreement.


IN WITNESS WHEREOF, the parties have executed this Agreement.

PRINCIPAL: 
[INSERT NAME OF PRINCIPAL] 
By:________________________  
Name:______________________  
Title:_____________________  
Date:______________________  
CONTRACTOR:________________ 


[INSERT NAME OF CONTRACTOR] 
By:________________________  
Name:______________________  
Title:_____________________  
Date:______________________ `,
  },

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


  "Distribution Agreement": {
    fields: [
      "supplierName",
      "supplierAddress",
      "distributorName",
      "distributorAddress",
      "productState",
      "excludedState",
      "territory",
      "startDate",
      "endDate",
      "terminationAmount",
    ],
    generateText: (data) => `DISTRIBUTION AGREEMENT

AGREEMENT made as of the _____ day of _______________, 20____, by and between ${data.supplierName}, having its business address at ${data.supplierAddress} (“SUPPLIER”) and ${data.distributorName}, having its principal place of business at ${data.distributorAddress} (“DISTRIBUTOR”).

WHEREAS, SUPPLIER is the producer of certain wines from the state of ${data.productState} and DISTRIBUTOR desires to distribute these products in the United States (excluding ${data.excludedState}), the parties agree as follows:

1. SUPPLIER appoints DISTRIBUTOR as exclusive distributor for sale of Products in ${data.territory}.

2–6. Detailed obligations of both parties on supply, pricing, compliance, and warranties...

8. The term shall be from ${data.startDate} to ${data.endDate}, and may renew annually unless 12 months' notice is given. Early termination possible after 6 months by paying one-half of previous year volume × $${data.terminationAmount} per case.

...

Signed by:  
Supplier: ${data.supplierName}  
Distributor: ${data.distributorName}`,
  },


// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  "Agency Contract": {
    fields: [
      "agreementDate",
      "principalName",
      "agentName",
      "town",
      "district",
      "termYears",
      "commissionPercent",
      "noticeDays",
      "businessYears",
    ],
    generateText: (data) => `AGENCY CONTRACT

Agreement made this ${data.agreementDate} between ${data.principalName} ("Principal") and ${data.agentName} ("Agent").

1. Agent is appointed as sole agent in town of ${data.town} (district of ${data.district}) for a term of ${data.termYears} years.

2–20. Terms on commissions (${data.commissionPercent}%), payment, credit, responsibilities, liabilities, warranties, exclusivity, non-compete, dispute resolution, and more.

17. Principal may terminate for misconduct, absence of ${data.noticeDays} days, or bankruptcy.

20. After termination, agent may not solicit prior customers for ${data.businessYears} years and must return all goods, cash, records, and securities.

IN WITNESS WHEREOF the parties have signed this deed.

Witness: ${data.witnessName}
Witness: ${data.witnessName}  
Principal: ${data.principalName}  
Agent: ${data.agentName}`,
  },
};

export default function BusinessAgreementsForm({}) {
  const [type, setType] = useState("Partnership Agreement");
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

  const handleDownload = async () => {
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

  const { success, downloadURL, error } = await uploadAndSavePDF(pdfBlob, fileName, type,userData);

  if (success) {
    doc.save(fileName);
    alert("PDF downloaded and saved to your history successfully.");
    navigate("/draft-doc");
  } else {
    alert("Error uploading PDF: " + error);
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
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm text-lg font-medium focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-400 transition duration-300 bg-white"
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
                className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition duration-200"
                required
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold p-3 rounded-xl border border-blue-600 hover:bg-white hover:text-blue-600 transition shadow-lg hover:scale-[1.03] transition-transform duration-300"
          >
            Generate Agreement
          </button>
        </form>
      ) : (
        <div className="w-full max-w-3xl bg-white/60 backdrop-blur-md p-6 rounded-3xl shadow-2xl space-y-4 animate-fadeIn transition-all">
          <h2 className="text-2xl font-bold text-blue-600 text-center mb-2">
            Preview & Download
          </h2>
          <textarea
            value={generatedText}
            rows="25"
            onChange={(e) => setGeneratedText(e.target.value)}
            className="w-full border border-gray-300 p-4 rounded-lg shadow-inner font-mono text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 transition"
          />
          <button
            onClick={handleDownload}
            className="w-full bg-blue-600 text-white font-semibold p-3 rounded-xl border border-blue-600 shadow-lg hover:bg-white hover:text-blue-600 hover:scale-[1.03] transition transition-transform duration-300"
          >
            Download PDF
          </button>
        </div>
      )}
    </div>
  );
}
