export const jointVentureAgreementFields = [
  "party1Name",
  "party1Address",
  "party2Name",
  "party2Address",
  "ventureObjective",
  "contributions",
  "profitSharing",
  "managementStructure",
  "duration",
  "terminationConditions",
  "signingDate"
];

export const generateJointVentureAgreement = (data) => `<div class="agreement-template">
  <h1 class="agreement-title">JOINT VENTURE AGREEMENT</h1>

  <div class="agreement-body">
    <p>This Joint Venture Agreement (the "Agreement") is entered into on <span class="highlight">${data.signingDate}</span>, between:</p>

    <p><strong>PARTY 1:</strong> <span class="highlight">${data.party1Name}</span>, located at <span class="highlight">${data.party1Address}</span></p>

    <p><strong>PARTY 2:</strong> <span class="highlight">${data.party2Name}</span>, located at <span class="highlight">${data.party2Address}</span></p>

    <h2>1. VENTURE OBJECTIVE</h2>
    <p>1.1 The objective of this joint venture is: <span class="highlight">${data.ventureObjective}</span></p>

    <h2>2. CONTRIBUTIONS</h2>
    <p>2.1 Each party's contributions: <span class="highlight">${data.contributions}</span></p>

    <h2>3. PROFIT AND LOSS SHARING</h2>
    <p>3.1 Profit sharing arrangement: <span class="highlight">${data.profitSharing}</span></p>

    <h2>4. MANAGEMENT</h2>
    <p>4.1 Management structure: <span class="highlight">${data.managementStructure}</span></p>

    <h2>5. DURATION</h2>
    <p>5.1 This joint venture shall continue for: <span class="highlight">${data.duration}</span></p>

    <h2>6. TERMINATION</h2>
    <p>6.1 Termination conditions: <span class="highlight">${data.terminationConditions}</span></p>

    <h2>7. CONFIDENTIALITY</h2>
    <p>7.1 Both parties agree to maintain confidentiality of proprietary information.</p>

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
