export const nonDisclosureAgreementFields = [
  "disclosingPartyName",
  "disclosingCountry",
  "disclosingAddress",
  "receivingPartyName",
  "receivingCountry",
  "receivingAddress",
  "purpose",
  "effectiveDate",
  "jurisdiction",
  "disclosingSignatureDate",
  "receivingSignatureDate",
  "witness1SignatureDate",
  "witness2SignatureDate"
];

export const generateNonDisclosureAgreement = (data) => `<div class="agreement-template">
  <h1 class="agreement-title">NON-DISCLOSURE AGREEMENT</h1>

  <div class="agreement-body">
    <p>This Non-Disclosure Agreement (the "Agreement") is made and entered into as of <span class="highlight"> ${data.effectiveDate} </span>, by and between <span class="highlight"> ${data.disclosingPartyName} </span>, a company incorporated under the laws of <span class="highlight"> ${data.disclosingCountry} </span> having its principal place of business at <span class="highlight"> ${data.disclosingAddress} </span> (hereinafter referred to as the "Disclosing Party") and <span class="highlight"> ${data.receivingPartyName} </span>, a company incorporated under the laws of <span class="highlight"> ${data.receivingCountry} </span> having its principal place of business at <span class="highlight"> ${data.receivingAddress} </span> (hereinafter referred to as the "Receiving Party"). The Disclosing Party and the Receiving Party may collectively be referred to as the "Parties" or individually as a "Party".</p>

    <p>WHEREAS, the Disclosing Party possesses certain confidential and proprietary information, and WHEREAS, the Receiving Party is willing to receive disclosure of the confidential information pursuant to the terms of this Agreement for the purpose of <span class="highlight"> ${data.purpose} </span>.</p>

    <h2>1. CONFIDENTIAL INFORMATION</h2>
    <p>For the purposes of this Agreement, "Confidential Information" shall include all written, electronic, or oral information that the Disclosing Party provides to the Receiving Party, including but not limited to business leads, financial statements, customer lists, business models, marketing plans, trade secrets, inventions, strategies, and all other information of a confidential nature. The Receiving Party agrees to maintain the confidentiality of the Confidential Information and to use it only for the Purpose. The Receiving Party shall not disclose such information to any third party without the prior written consent of the Disclosing Party. These obligations shall remain in effect during the term of this Agreement and for a period of three (3) years thereafter.</p>

    <h2>2. NON-DISCLOSURE</h2>
    <p>The Receiving Party agrees not to disclose, duplicate, or disseminate the Confidential Information to any third party, except as required by law or as otherwise agreed in writing by the Disclosing Party. The Receiving Party shall ensure that its employees, agents, and affiliates maintain the confidentiality of the information in accordance with the terms of this Agreement. If the Confidential Information is disclosed or misused due to negligence or wilful misconduct of the Receiving Party or its representatives, the Receiving Party shall be liable for all resulting damages and losses incurred by the Disclosing Party.</p>

    <h2>3. INTELLECTUAL PROPERTY</h2>
    <p>All intellectual property rights in the Confidential Information shall remain the sole and exclusive property of the Disclosing Party. Nothing in this Agreement shall be construed as granting any rights, by license or otherwise, to the Receiving Party in or to any Confidential Information. Upon termination or expiration of this Agreement, the Receiving Party shall promptly return or destroy all copies of the Confidential Information, and certify in writing to the Disclosing Party that it has complied with the obligations set forth in this section.</p>

    <h2>4. RETURN OF INFORMATION</h2>
    <p>Upon the request of the Disclosing Party, the Receiving Party shall return or destroy all documents and other tangible materials representing the Confidential Information and all copies thereof within seven (7) days. The Receiving Party shall not retain any copies, extracts, or other reproductions in whole or in part.</p>

    <h2>5. TERM AND TERMINATION</h2>
    <p>This Agreement shall commence on the Effective Date and shall continue in effect until terminated by either Party with thirty (30) days' written notice to the other Party. The Receiving Party's duty to maintain the confidentiality of the Confidential Information shall survive the termination of this Agreement and remain in effect for a period of three (3) years.</p>

    <h2>6. GOVERNING LAW</h2>
    <p>This Agreement shall be governed by and construed in accordance with the laws of <span class="highlight"> ${data.jurisdiction} </span>, without regard to its conflicts of law principles. Any disputes arising out of or in connection with this Agreement shall be subject to the exclusive jurisdiction of the courts located in <span class="highlight"> ${data.jurisdiction} </span>.</p>
    <p>IN WITNESS WHEREOF, the Parties have executed this Non-Disclosure Agreement as of the Effective Date.</p>
    
    <h2>SIGNED BY:</h2>
    <div class="signatures">
      <div class="signature-block" style="display: flex; justify-content: space-between;">
        <p>The Disclosing Party</p>
        <p>The Receiving Party</p>
      </div>
      <div class="signature-block" style="display: flex; justify-content: space-between;">
        <p>Witness</p>
        <p>Witness</p>
      </div>
    </div>
  </div>
</div>`;
