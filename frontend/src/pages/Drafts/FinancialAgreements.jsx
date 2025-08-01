import { useState } from "react";
import { useUserAuth } from "@/context/UserAuthContext";
import AgreementPreviewAndDownload from "@/components/AgreementPreviewAndDownload";

const agreementTypes = [
  "Promissory Note",
  "Loan Agreement",
  "Investment Agreement",
  "Escrow Agreement",
  "Guarantee Agreement",
];

const templates = {
  "Promissory Note": {
    fields: [
      "promisorName",
      "promisorFather",
      "promisor2Name",
      "promisor2Father",
      "payeeName",
      "payeeFather",
      "amount",
      "amountWords",
      "interestRate",
      "interestType",
      "instalmentAmount",
      "instalment1Date",
      "instalment2Date",
      "instalment3Date",
      "instalment4Date",
      "place",
      "date",
    ],
    generateText: (data) => [
      `FORM No.1

PROMISSORY NOTE UNDER SEC.4, NEGOTIABLE INSTRUMENTS ACT, 1881 IN WHICH NO INTEREST IS CONTEMPLATED AND NO TIME FOR PAYMENT IS MENTIONED

I, Sri. ${data.promisorName} S/o. ${data.promisorFather}
promise to pay Sri. ${data.payeeName} S/o. ${data.payeeFather}
or order, the sum of Rs.${data.amount} (Rupees ${data.amountWords} only)

Place: ${data.place}
Date: ${data.date}
Signature.`,

      `FORM No.2

PROMISSORY NOTE UNDER SEC.4, NEGOTIABLE INSTRUMENTS ACT, 1881 MADE BY JOINT PROMISORS

We, Sri. ${data.promisorName} S/o. ${data.promisorFather} and
Sri. ${data.promisor2Name} S/o. ${data.promisor2Father} acknowledge
ourselves to be indebted to Sri. ${data.payeeName} S/o. ${data.payeeFather}
in Rs.${data.amount} (Rupees ${data.amountWords} only) to be paid on demand, for value received.

Place: ${data.place}
Date: ${data.date}
[Signed]        [Signed]`,

      `FORM No.3

JOINT PROMISSORY NOTE

We, Sri. ${data.promisorName} S/o. ${data.promisorFather} and
Sri. ${data.promisor2Name} S/o. ${data.promisor2Father} promise to pay
Sri. ${data.payeeName} S/o. ${data.payeeFather} the sum of
Rs.${data.amount} (Rupees ${data.amountWords} only) for value received.

Place: ${data.place}
Date: ${data.date}
[Signed]        [Signed]`,

      `FORM No.4

PROMISSORY NOTE PROVIDING FOR INTEREST

I, Sri. ${data.promisorName} S/o. ${data.promisorFather} promise to
pay Sri. ${data.payeeName} S/o. ${data.payeeFather} or order, on
demand, the sum of Rs.${data.amount} (Rupees ${data.amountWords} only) with interest
at the rate of ${data.interestRate}% per ${data.interestType} from the date of these
presents, for value received.

Place: ${data.place}
Date: ${data.date}
Signature.`,

      `FORM No.5

PROMISSORY NOTE PAYABLE BY INSTALMENT

I, Sri. ${data.promisorName} S/o. ${data.promisorFather} promise to pay to
Sri. ${data.payeeName} S/o. ${data.payeeFather} the sum of
Rs.${data.amount} (Rupees ${data.amountWords} only) by four equal instalments,
the first instalment of Rs.${data.instalmentAmount} to be paid on
the ${data.instalment1Date}, the second on ${data.instalment2Date}, the third on
${data.instalment3Date} and the fourth on ${data.instalment4Date}, with
interest thereon at the rate of ${data.interestRate}% per ${data.interestType} (the interest
to cease on the instalment paid) in consideration of full value received.

Place: ${data.place}
Date: ${data.date}
Signature.`,
    ],
  },


// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


  "Loan Agreement": {
    fields: [
      "borrowerName",
      "borrowerAddress",
      "borrowerPAN",
      "financialInstitutionName",
      "financialInstitutionAddress",
      "loanAmountFigures",
      "loanAmountWords",
      "loanPurpose",
      "loanPeriodMonths",
      "emiAmount",
      "firstEmiDate",
      "interestRate",
      "prepaymentCharges",
      "authorizedPerson",
      "agreementDate",
      "agreementPlace",
    ],
    generateText: (data) => `PERSONAL LOAN AGREEMENT

THIS AGREEMENT is made at ${data.agreementPlace} on ${data.agreementDate} BETWEEN:

${data.borrowerName}, having its address at ${data.borrowerAddress}, PAN: ${data.borrowerPAN}, (hereinafter called "Borrower");

AND

The ${data.financialInstitutionName}, having its address at ${data.financialInstitutionAddress}, (hereinafter called "Bank").

WHEREAS the Borrower has applied to the Bank for a loan of Rs. ${data.loanAmountFigures} (Rupees ${data.loanAmountWords} only) for ${data.loanPurpose} and the Bank has agreed to sanction the same.

ARTICLE I – TERMS OF THE FACILITY

The Borrower agrees to repay the loan of Rs. ${data.loanAmountFigures} in ${data.loanPeriodMonths} monthly installments of Rs. ${data.emiAmount}, the first being payable on ${data.firstEmiDate}, and subsequently on the same date every month.

The loan shall bear interest at the rate of ${data.interestRate}% per annum and shall be subject to prepayment charges of ${data.prepaymentCharges}%.

The person authorized to draw the loan is: ${data.authorizedPerson}.

This agreement is governed by the terms of the sanction letter, security documents, and Bank’s policy.

SIGNED:
Borrower: ${data.borrowerName}
Bank: ${data.financialInstitutionName}`,
  },

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


  "Investment Agreement": {
    fields: [
      "organizationName",
      "organizationState",
      "investorName",
      "investmentAmount",
      "investmentInterestRate",
      "investmentStartDate",
      "investmentDurationYears",
      "useOfFundsArea",
      "irsConfirmation",
      "boardAuthorization",
      "cdfiStatus",
      "communityRepConfirmation",
    ],
    generateText: (data) => `INVESTMENT AGREEMENT

This Agreement is entered into on ${data.investmentStartDate}, by and between ${data.organizationName}, a ${data.organizationState} non-profit corporation ("Housing Loan Fund") and ${data.investorName} ("Investor Bank").

1. The Investment Terms:
Investor Bank agrees to invest $${data.investmentAmount} at a fixed interest rate of ${data.investmentInterestRate}% per annum. Interest shall be paid quarterly. The principal is due in ${data.investmentDurationYears} years.

2. Purpose and Use of Funds:
Funds shall be used in the area of ${data.useOfFundsArea} to promote housing and community development.

3. Conditions:
- IRS confirmation of 501(c)(3): ${data.irsConfirmation}
- Proper board authorization: ${data.boardAuthorization}
- CDFI status maintained: ${data.cdfiStatus}
- Community rep on board: ${data.communityRepConfirmation}

4. General: 
 The relationship of Investor Bank and [HOUSING LOAN FUND] is that of debtor and creditor and does not constitute a partnership, joint venture, or any other type of business organization.  Neither party shall have any authority to act on behalf of or obligate the other party and Investor Bank assumes no liability whatsoever for any decision, action or omission taken by [HOUSING LOAN FUND] at any time prior to, during or after the term of the investment described in this Agreement. 

IN WITNESS WHEREOF:
Investor: ${data.investorName}
Organization: ${data.organizationName}`,
  },

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


  "Escrow Agreement": {
    fields: [
      "companyName",
      "escrowBankName",
      "escrowAccountNumber",
      "merchant1Name",
      "merchant1AccountName",
      "merchant1AccountNumber",
      "merchant1BankName",
      "merchant1IFSC",
      "merchant2Name",
      "merchant2AccountName",
      "merchant2AccountNumber",
      "merchant2BankName",
      "merchant2IFSC",
      "instructionDate",
      "agreementDate",
      "authorizedSignatoryName",
    ],
    generateText: (data) => `ESCROW AGREEMENT

This Agreement is made on ${data.agreementDate} between ${data.companyName} ("Company") and ${data.escrowBankName} ("Escrow Bank") for managing escrow account number ${data.escrowAccountNumber}.

On ${data.instructionDate}, the following merchants are registered for payouts:

Merchant 1:
- Name: ${data.merchant1Name}
- A/c Name: ${data.merchant1AccountName}
- A/c No: ${data.merchant1AccountNumber}
- Bank: ${data.merchant1BankName}
- IFSC: ${data.merchant1IFSC}

Merchant 2:
- Name: ${data.merchant2Name}
- A/c Name: ${data.merchant2AccountName}
- A/c No: ${data.merchant2AccountNumber}
- Bank: ${data.merchant2BankName}
- IFSC: ${data.merchant2IFSC}

Authorized Signatory: ${data.authorizedSignatoryName}

SIGNED:
Company: ${data.companyName}
Bank: ${data.escrowBankName}`,
  },


// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


  "Guarantee Agreement": {
    fields: [
      "guarantor1Name",
      "guarantor1Address",
      "guarantor1Constitution",
      "guarantor2Name",
      "guarantor2Address",
      "guarantor2Constitution",
      "borrowerName",
      "borrowerAddress",
      "financialInstitutionName",
      "financialInstitutionAddress",
      "creditAmountFigures",
      "creditAmountWords",
      "executionDate",
      "guaranteeAmountFigures",
      "guaranteeAmountWords",
    ],
    generateText: (data) => `AGREEMENT OF GUARANTEE

This Agreement made on ${data.executionDate} at the branch office of ${data.financialInstitutionName}, located at ${data.financialInstitutionAddress}, is entered into by:

Guarantor 1: ${data.guarantor1Name}, a ${data.guarantor1Constitution}, residing at ${data.guarantor1Address}  
Guarantor 2: ${data.guarantor2Name}, a ${data.guarantor2Constitution}, residing at ${data.guarantor2Address}  

IN FAVOUR OF ${data.financialInstitutionName}

Borrower: ${data.borrowerName}, residing at ${data.borrowerAddress}

In consideration of the Bank granting credit facilities of Rs. ${data.creditAmountFigures} (Rupees ${data.creditAmountWords} only) to the Borrower, the Guarantors jointly and severally guarantee payment up to Rs. ${data.guaranteeAmountFigures} (Rupees ${data.guaranteeAmountWords} only).

This Guarantee is continuing and irrevocable.

Guarantor 1: ${data.guarantor1Name}  
Guarantor 2: ${data.guarantor2Name}`,
  },
};

export default function FinancialAgreements() {
  const [type, setType] = useState("Promissory Note");
  const [formData, setFormData] = useState({});
  const [generatedText, setGeneratedText] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const { userData } = useUserAuth();

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
          generatedText={Array.isArray(generatedText) ? generatedText.join('\n\n') : generatedText}
          type={type}
          userData={userData}
        />
      )}
    </div>
  );
}