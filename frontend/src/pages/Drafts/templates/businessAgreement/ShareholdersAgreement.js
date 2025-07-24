export const shareholdersAgreementFields = [
  "companyName",
  "companyRegistration",
  "shareholder1Name",
  "shareholder1Address",
  "shareholder1Shares",
  "shareholder2Name", 
  "shareholder2Address",
  "shareholder2Shares",
  "totalShares",
  "boardComposition",
  "votingRights",
  "transferRestrictions",
  "signingDate"
];

export const generateShareholdersAgreement = (data) => `<div class="agreement-template">
  <h1 class="agreement-title">SHAREHOLDERS AGREEMENT</h1>

  <div class="agreement-body">
    <p>This Shareholders Agreement (the "Agreement") is entered into on <span class="highlight">${data.signingDate}</span>, between the shareholders of <span class="highlight">${data.companyName}</span>, a company registered under number <span class="highlight">${data.companyRegistration}</span> (the "Company").</p>

    <h2>PARTIES</h2>
    <p><strong>SHAREHOLDER 1:</strong> <span class="highlight">${data.shareholder1Name}</span>, residing at <span class="highlight">${data.shareholder1Address}</span>, holding <span class="highlight">${data.shareholder1Shares}</span> shares</p>

    <p><strong>SHAREHOLDER 2:</strong> <span class="highlight">${data.shareholder2Name}</span>, residing at <span class="highlight">${data.shareholder2Address}</span>, holding <span class="highlight">${data.shareholder2Shares}</span> shares</p>

    <p>Total issued shares: <span class="highlight">${data.totalShares}</span></p>

    <h2>1. BOARD OF DIRECTORS</h2>
    <p>1.1 The Board of Directors shall be composed as follows: <span class="highlight">${data.boardComposition}</span></p>

    <p>1.2 Directors may only be removed by ordinary resolution of the shareholders.</p>

    <h2>2. VOTING RIGHTS</h2>
    <p>2.1 Voting rights shall be exercised as follows: <span class="highlight">${data.votingRights}</span></p>

    <p>2.2 Certain decisions require unanimous consent of all shareholders, including:</p>
    <ul class="agreement-list">
      <li>Amendment of the company's constitution</li>
      <li>Issuance of new shares</li>
      <li>Major capital expenditures</li>
      <li>Sale of substantial assets</li>
    </ul>

    <h2>3. TRANSFER OF SHARES</h2>
    <p>3.1 Transfer restrictions: <span class="highlight">${data.transferRestrictions}</span></p>

    <p>3.2 No shareholder may transfer shares without first offering them to existing shareholders (right of first refusal).</p>

    <h2>4. CONFIDENTIALITY</h2>
    <p>4.1 All shareholders agree to maintain confidentiality regarding the Company's business operations, financial information, and strategic plans.</p>

    <h2>5. DISPUTE RESOLUTION</h2>
    <p>5.1 Any disputes arising under this Agreement shall be resolved through mediation first, and if unsuccessful, through binding arbitration.</p>

    <div class="signatures">
      <h2>IN WITNESS WHEREOF, the parties have executed this Agreement.</h2>
      
      <div class="signature-block">
        <p>_________________________</p>
        <p>SHAREHOLDER 1</p>
        <p>Name: <span class="highlight">${data.shareholder1Name}</span></p>
        <p>Date: <span class="highlight">${data.signingDate}</span></p>
      </div>

      <div class="signature-block">
        <p>_________________________</p>
        <p>SHAREHOLDER 2</p>
        <p>Name: <span class="highlight">${data.shareholder2Name}</span></p>
        <p>Date: <span class="highlight">${data.signingDate}</span></p>
      </div>
    </div>
  </div>
</div>`;
