
export const loanAgreementFields = [
  "signingDate",           // Execution Date (first in document)
  "lenderName",            // Lender name
  "lenderAddress",         // Lender address
  "borrowerName",          // Borrower name
  "borrowerAddress",       // Borrower address
  "loanAmount",            // Loan amount
  "loanDisbursementDate",  // Date of Loan Disbursement
  "repaymentStartDate",    // Start Date of Repayment
  "repaymentEndDate",      // End Date of Repayment
  "penaltyAmount"          // Penalty Amount
];

export const generateLoanAgreement = (data) => `<div class="agreement-template">
  <h1 class="agreement-title">LOAN AGREEMENT</h1>
  <div class="agreement-body">
    <p>
      This Loan Agreement shall become effective on <span class="highlight">${data.signingDate}</span> (the "Execution Date") and the Parties wish to mutually acknowledge the debt that binds them under the Lender's amount to the Borrower.
    </p>
    <p><strong>WHEREAS</strong> upon the terms and conditions outlined in this Agreement, the Parties wish to mutually acknowledge the debt that binds them under the Lender's amount to the Borrower.
    </p>

    <h2>1. LOAN AMOUNT.</h2>
    <p>
      Subject to the terms and conditions herein, the Lender agreed to loan INR <span class="highlight">${data.loanAmount}</span> (Indian Rupees) to the Borrower on <span class="highlight">${data.loanDisbursementDate}</span>.
    </p>

    <h2>2. PAYMENTS.</h2>
    <p>
      The Borrower agrees to repay this amount to the Lender, with interest at the rate of ten percent (10%) per month from the due amount.<br/>
      The Borrower shall repay the loan in twelve (12) consecutive monthly installments of principal and interest on the first day of each month, starting on <span class="highlight">${data.repaymentStartDate}</span>, and continuing until <span class="highlight">${data.repaymentEndDate}</span>. The repayment shall be considered late if received by Lender seven (7) days after its due date.
    </p>

    <h2>3. PENALTY.</h2>
    <p>
      If the Lender is not paid on the due date, the Borrower shall pay a late fee of INR <span class="highlight">${data.penaltyAmount}</span> (Indian Rupees) per month.
    </p>

    <h2>4. COVENANTS.</h2>
    <p>
      The Borrower shall notify the Lender of any default, and the steps, if any, being taken to remedy it, promptly upon becoming aware of its occurrence.<br/>
      The Borrower shall be liable for all costs, expenses, and expenditures incurred, including, without limitation, the Lender's legal fees incurred by enforcing this Agreement due to any default by the Borrower. They shall be due and payable by the Borrower to the Lender immediately upon the Lender's demand.
    </p>

    <h2>5. BINDING EFFECT.</h2>
    <p>
      This Agreement will pass to the benefit of and be binding upon the respective heirs, executors, administrators, successors, and permitted assigns of the Lender and Borrower.
    </p>

    <h2>6. AMENDMENTS AND WAIVERS.</h2>
    <p>
      This Agreement constitutes the entire Agreement between the Parties. There are no understandings, agreements, contracts, or representations, oral or written, not specified herein regarding this Agreement.<br/>
      No amendment, consent, or waiver of terms of this Agreement shall bind either party unless in writing and signed by both Parties.
    </p>

    <h2>SIGNED BY-</h2>
    <div class="signatures">
      <div class="signature-block" style="display: flex; justify-content: space-between;">
        <p>The Lender</p>
        <p>The Borrower</p>
      </div>
      <div class="signature-block" style="display: flex; justify-content: space-between;">
        <p>The Witness</p>
        <p>The Witness</p>
      </div>
    </div>
  </div>
</div>`;
