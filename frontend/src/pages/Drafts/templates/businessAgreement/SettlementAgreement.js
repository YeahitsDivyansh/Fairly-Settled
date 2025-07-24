export const settlementAgreementFields = [
  "party1Name",
  "party1Address",
  "party2Name",
  "party2Address",
  "disputeDescription",
  "settlementAmount",
  "paymentTerms",
  "releaseTerms",
  "confidentialityClause",
  "signingDate"
];

export const generateSettlementAgreement = (data) => `<div class="agreement-template">
  <h1 class="agreement-title">SETTLEMENT AGREEMENT</h1>

  <div class="agreement-body">
    <p>This Settlement Agreement (the "Agreement") is entered into on <span class="highlight">${data.signingDate}</span>, between:</p>

    <p><strong>PARTY 1:</strong> <span class="highlight">${data.party1Name}</span>, located at <span class="highlight">${data.party1Address}</span></p>

    <p><strong>PARTY 2:</strong> <span class="highlight">${data.party2Name}</span>, located at <span class="highlight">${data.party2Address}</span></p>

    <h2>1. DISPUTE</h2>
    <p>1.1 The parties have been involved in a dispute regarding: <span class="highlight">${data.disputeDescription}</span></p>

    <h2>2. SETTLEMENT TERMS</h2>
    <p>2.1 Settlement Amount: <span class="highlight">${data.settlementAmount}</span></p>

    <p>2.2 Payment Terms: <span class="highlight">${data.paymentTerms}</span></p>

    <h2>3. RELEASE</h2>
    <p>3.1 Release Terms: <span class="highlight">${data.releaseTerms}</span></p>

    <p>3.2 Each party hereby releases the other from all claims arising from the dispute described above.</p>

    <h2>4. CONFIDENTIALITY</h2>
    <p>4.1 Confidentiality: <span class="highlight">${data.confidentialityClause}</span></p>

    <h2>5. NO ADMISSION</h2>
    <p>5.1 This settlement does not constitute an admission of liability by either party.</p>

    <div class="signatures">
      <h2>IN WITNESS WHEREOF, the parties have executed this Agreement.</h2>
      
      <div class="signature-block">
        <p>_________________________</p>
        <p>PARTY 1</p>
        <p>Name: <span class="highlight">${data.party1Name}</span></p>
        <p>Date: <span class="highlight">${data.signingDate}</span></p>
      </div>

      <div class="signature-block">
        <p>_________________________</p>
        <p>PARTY 2</p>
        <p>Name: <span class="highlight">${data.party2Name}</span></p>
        <p>Date: <span class="highlight">${data.signingDate}</span></p>
      </div>
    </div>
  </div>
</div>`;
