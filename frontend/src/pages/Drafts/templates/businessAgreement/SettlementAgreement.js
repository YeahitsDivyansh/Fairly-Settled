export const settlementAgreementFields = [
  "executionDate",
  "releasorName",
  "releaseeName",
  "settlementAmount",
];

export const generateSettlementAgreement = (data) => `<div class="agreement-template">
  <h1 class="agreement-title">SETTLEMENT AGREEMENT</h1>

  <div class="agreement-body">
    <p>This Settlement Agreement shall become effective on <span class="highlight">${data.executionDate}</span> (the "Execution Date") and is subject to the terms and conditions stated below by and between <span>${data.releasorName}</span>, authorized Director (the "Releasor") and <span>${data.releaseeName}</span> (the "Releasee"), collectively referred to as the "Parties".</p>

    <p><strong>IN CONSIDERATION </strong>of the obligations and covenants contained in this Agreement, the Parties agree as follows:</p>

    <p><strong>BUYER:</strong> <span class="highlight">${data.buyerName}</span>, having registration number <span class="highlight">${data.buyerRegNumber}</span> and represented by <span class="highlight">${data.buyerDirectorName}</span>, authorized Director (the "Buyer")</p>

    <h2>1. SETTLEMENT.</h2>
    <p>In consideration of the sum of INR <span class="highlight">${data.settlementAmount}</span> (Indian Rupees), the Releasor releases and forever discharges the Releasee and related persons from all manner of actions, causes of action, debts, accounts, bonds, contracts, claims, and demands for or by reason of any damage, loss or injury to person and property which has been or may be sustained as a consequence of the dispute detailed below.</p>

    <p>
    The Parties to this Agreement further agree not to make a claim or take proceedings against any other person or corporation which might claim contribution or indemnity under the provisions of any statute or otherwise.
    </p>

    <h2>2. RELEASE OF LIABILITY.</h2>
    <p>The Releasor hereby releases and discharges the Releasee and any affiliate persons of all claims, causes, actions, liabilities, disputes, demands, damages, obligations, debts, and/or any request related to the incident.</p>

    <h2>3. CONFIDENTIALITY</h2>
    <p>The Parties shall not disclose this Agreement, the facts and circumstances giving rise to this Agreement, or the existence of any claim that the Releasor has, or may have, subject to the Release of claims contained in this Agreement, to any third party.</p>

    <h2>4. GOVERNING LAW</h2>
    <p>This Agreement shall be governed by and construed in accordance with the laws of India. This Agreement is drawn up in two (2) identical copies, one for each Party. Both Parties have read and fully understood this Agreement. This Agreement shall become effective and legally binding upon signature by each of the Parties.</p>

    <h2>SIGNED BY-</h2>
    <div class="signatures">
      <div class="signature-block" style="display: flex; justify-content: space-between;">
        <p>The Releasor</p>
        <p>The Relesee</p>
      </div>
      <div class="signature-block" style="display: flex; justify-content: space-between;">
        <p>The Witness</p>
        <p>The Witness</p>
      </div>
    </div>
</div>`;







