export const profitSharingAgreementFields = [
  "party1Name",
  "party1Address",
  "party2Name",
  "party2Address",
  "businessDescription",
  "profitSharingRatio",
  "calculationMethod",
  "distributionSchedule",
  "reportingRequirements",
  "duration",
  "signingDate"
];

export const generateProfitSharingAgreement = (data) => `<div class="agreement-template">
  <h1 class="agreement-title">PROFIT SHARING AGREEMENT</h1>

  <div class="agreement-body">
    <p>This Profit Sharing Agreement (the "Agreement") is entered into on <span class="highlight">${data.signingDate}</span>, between:</p>

    <p><strong>PARTY 1:</strong> <span class="highlight">${data.party1Name}</span>, located at <span class="highlight">${data.party1Address}</span></p>

    <p><strong>PARTY 2:</strong> <span class="highlight">${data.party2Name}</span>, located at <span class="highlight">${data.party2Address}</span></p>

    <h2>1. BUSINESS</h2>
    <p>1.1 Business Description: <span class="highlight">${data.businessDescription}</span></p>

    <h2>2. PROFIT SHARING</h2>
    <p>2.1 Profit Sharing Ratio: <span class="highlight">${data.profitSharingRatio}</span></p>

    <p>2.2 Calculation Method: <span class="highlight">${data.calculationMethod}</span></p>

    <h2>3. DISTRIBUTION</h2>
    <p>3.1 Distribution Schedule: <span class="highlight">${data.distributionSchedule}</span></p>

    <h2>4. REPORTING</h2>
    <p>4.1 Reporting Requirements: <span class="highlight">${data.reportingRequirements}</span></p>

    <h2>5. DURATION</h2>
    <p>5.1 This Agreement shall remain in effect for: <span class="highlight">${data.duration}</span></p>

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
