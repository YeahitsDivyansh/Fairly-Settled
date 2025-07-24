export const loanAgreementFields = [
  "lenderName",
  "lenderAddress",
  "borrowerName",
  "borrowerAddress",
  "principalAmount",
  "interestRate",
  "loanTerm",
  "repaymentSchedule",
  "collateral",
  "defaultProvisions",
  "signingDate"
];

export const generateLoanAgreement = (data) => `<div class="agreement-template">
  <h1 class="agreement-title">LOAN AGREEMENT</h1>

  <div class="agreement-body">
    <p>This Loan Agreement (the "Agreement") is entered into on <span class="highlight">${data.signingDate}</span>, between:</p>

    <p><strong>LENDER:</strong> <span class="highlight">${data.lenderName}</span>, residing at <span class="highlight">${data.lenderAddress}</span> (the "Lender")</p>

    <p><strong>BORROWER:</strong> <span class="highlight">${data.borrowerName}</span>, residing at <span class="highlight">${data.borrowerAddress}</span> (the "Borrower")</p>

    <h2>1. LOAN DETAILS</h2>
    <p>1.1 Principal Amount: The Lender agrees to lend to the Borrower the sum of <span class="highlight">${data.principalAmount}</span> (the "Principal Amount").</p>

    <p>1.2 Interest Rate: The loan shall bear interest at the rate of <span class="highlight">${data.interestRate}</span> per annum.</p>

    <p>1.3 Term: The loan term shall be <span class="highlight">${data.loanTerm}</span>.</p>

    <h2>2. REPAYMENT</h2>
    <p>2.1 Repayment Schedule: <span class="highlight">${data.repaymentSchedule}</span></p>

    <p>2.2 The Borrower may prepay the loan in whole or in part at any time without penalty.</p>

    <h2>3. SECURITY</h2>
    <p>3.1 Collateral: This loan is secured by: <span class="highlight">${data.collateral}</span></p>

    <h2>4. DEFAULT</h2>
    <p>4.1 The following shall constitute events of default:</p>
    <ul class="agreement-list">
      <li>Failure to make any payment when due</li>
      <li>Breach of any covenant in this Agreement</li>
      <li>Insolvency of the Borrower</li>
    </ul>

    <p>4.2 Default Provisions: <span class="highlight">${data.defaultProvisions}</span></p>

    <h2>5. GOVERNING LAW</h2>
    <p>5.1 This Agreement shall be governed by applicable laws and any disputes shall be resolved in competent courts.</p>

    <div class="signatures">
      <h2>IN WITNESS WHEREOF, the parties have executed this Agreement.</h2>
      
      <div class="signature-block">
        <p>_________________________</p>
        <p>LENDER</p>
        <p>Name: <span class="highlight">${data.lenderName}</span></p>
        <p>Date: <span class="highlight">${data.signingDate}</span></p>
      </div>

      <div class="signature-block">
        <p>_________________________</p>
        <p>BORROWER</p>
        <p>Name: <span class="highlight">${data.borrowerName}</span></p>
        <p>Date: <span class="highlight">${data.signingDate}</span></p>
      </div>
    </div>
  </div>
</div>`;
