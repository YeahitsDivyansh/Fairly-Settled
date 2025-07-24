export const memorandumOfUnderstandingFields = [
  "party1Name",
  "party1Address",
  "party2Name",
  "party2Address",
  "purposeOfMou",
  "scopeOfCooperation",
  "responsibilities",
  "duration",
  "terminationConditions",
  "signingDate"
];

export const generateMemorandumOfUnderstanding = (data) => `<div class="agreement-template">
  <h1 class="agreement-title">MEMORANDUM OF UNDERSTANDING</h1>

  <div class="agreement-body">
    <p>This Memorandum of Understanding (the "MOU") is entered into on <span class="highlight">${data.signingDate}</span>, between:</p>

    <p><strong>PARTY 1:</strong> <span class="highlight">${data.party1Name}</span>, located at <span class="highlight">${data.party1Address}</span></p>

    <p><strong>PARTY 2:</strong> <span class="highlight">${data.party2Name}</span>, located at <span class="highlight">${data.party2Address}</span></p>

    <h2>1. PURPOSE</h2>
    <p>1.1 The purpose of this MOU is: <span class="highlight">${data.purposeOfMou}</span></p>

    <h2>2. SCOPE OF COOPERATION</h2>
    <p>2.1 The parties agree to cooperate in the following areas: <span class="highlight">${data.scopeOfCooperation}</span></p>

    <h2>3. RESPONSIBILITIES</h2>
    <p>3.1 The parties' respective responsibilities under this MOU are as follows:</p>
    <p><span class="highlight">${data.responsibilities}</span></p>

    <h2>4. DURATION</h2>
    <p>4.1 This MOU shall remain in effect for <span class="highlight">${data.duration}</span> from the date of signing.</p>

    <h2>5. TERMINATION</h2>
    <p>5.1 This MOU may be terminated: <span class="highlight">${data.terminationConditions}</span></p>

    <h2>6. NON-BINDING NATURE</h2>
    <p>6.1 This MOU represents the mutual understanding between the parties and is not intended to create legally binding obligations unless specifically stated otherwise.</p>

    <h2>7. CONFIDENTIALITY</h2>
    <p>7.1 Both parties agree to maintain confidentiality of any proprietary information shared during the cooperation.</p>

    <div class="signatures">
      <h2>IN WITNESS WHEREOF, the parties have executed this MOU.</h2>
      
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
