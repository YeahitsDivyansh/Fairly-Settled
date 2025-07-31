export const partnershipAgreementFields = [
  "executionDate",
  "firstPartyCompanyName",
  "firstPartyRegNumber",
  "firstPartyDirectorName",
  "secondPartyCompanyName",
  "secondPartyRegNumber",
  "secondPartyDirectorName",
  "projectName"
];

export const generatePartnershipAgreement = (data) => `<div class="agreement-template">
  <h1 class="agreement-title">PARTNERSHIP AGREEMENT</h1>
  
  <div class="agreement-body">
    <p>This Partnership Agreement shall become effective on <span class="highlight"> ${data.executionDate} </span> and is subject to the terms and conditions stated below between <span class="highlight"> ${data.firstPartyCompanyName} </span> having registration number <span class="highlight"> ${data.firstPartyRegNumber} </span>, represented by <span class="highlight"> ${data.firstPartyDirectorName} </span>, authorized Director and <span class="highlight"> ${data.secondPartyCompanyName} </span> having registration number <span class="highlight"> ${data.secondPartyRegNumber} </span>, represented by <span class="highlight"> ${data.secondPartyDirectorName} </span>, authorized Director , collectively referred to as the "Parties". THEREFORE, the Parties hereby agree to enter into this Agreement according to the following terms and conditions contained therein.</p>

    <h2>1. BUSINESS PARTNERSHIP</h2>
    <p>The purposes of the cooperation are to promote and expand the business of each party as follows (the "Partnership"):</p>
    <ul class="agreement-list">
      <li><strong>Referral of clients to other party:</strong> The Parties agree with no exclusivity to promote the other party's services and refer the other party for clients that require services based on the other party's expertise areas. Both Parties must promote the other party professionally and without damaging the other's goodwill and reputation. The information and elements used to promote the other party must be previously reviewed and agreed upon by the promoting party. The party, which refers a client to the other party, will obtain a commission fee of ten percent (10%) from the service fee paid by the referred client concerning the service provided. The party who receives the referred client shall inform the other party about the quote provided to the referred client; and shall pay the commission fee immediately to the other party within five (5) working days once receiving the referred client's payment.</li>
      <li><strong>Exchange of business and professional information:</strong> The Parties agree to share confidential information while maintaining each party's ability to conduct its respective business activities, including but not limited to client and business marketing information for mutual benefits without creating any damage to the other party.</li>
      <li><strong>Marketing cooperation:</strong> The parties agree to develop the project entitled <span class="highlight"> ${data.projectName} </span> (the "Project"). The Project will be implemented in a professional manner and in accordance with all applicable laws. Both parties agree to pay the costs of the Project in equal shares. Both Parties must conduct the collaboration under this Agreement as separate and independent entities.</li>
    </ul>

    <h2>2. CONFIDENTIALITY</h2>
    <p>During the term of this Agreement and after five (5) years from its termination, the Parties shall not disclose confidential information under this Agreement. The Parties shall use their best efforts to prevent the use or disclosure of confidential information. The Parties agree to keep all confidential information relating to the business, including but not limited to lead, clients, supplier information, financial information, software and data, trade secrets, inventions, business methods, corporate plans, marketing, sales information, development projects, and all other business information that is supplied by the Parties, together with all intellectual property rights which exist concerning the above.</p>

    <h2>3. NON-SOLICITATION</h2>
    <ul class="agreement-list">
      <li><strong>Clients:</strong> During the term of this Agreement and for two (2) years following its termination, the Parties shall not solicit the other party's customer to offer services.</li>
      <li><strong>Employees:</strong> The Parties undertakes that during the term of this Agreement and, for two (2) years following its termination, shall not recruit or solicit the Parties' employee in a business or contractual relationship.</li>
      <li><strong>Business associates:</strong> The Parties undertakes that during the term of this Agreement and, for two (2) years following its termination, shall not recruit or solicit the Parties' business partners located in or outside India to engage them in a business or contractual relationship.</li>
    </ul>

    <h2>4. NON-COMPETITION</h2>
    <p>During and after two (2) years after the termination of this Agreement, the Parties shall not:</p>
    <ul class="agreement-list">
      <li>Directly or indirectly engage in any business or activity that competes with the Parties, its subsidiaries, or affiliated entities.</li>
      <li>Engage in other activities that may cause conflicts with the Company's interests.</li>
    </ul>

    <h2>5. TERMINATION</h2>
    <p>If one of the Parties is in breach of any of its obligations under this Agreement and such breach persists after thirty (30) days from notification of such breach, the party that has not breached the Agreement may terminate it by written notice with immediate effect. The Parties may terminate the Agreement without delay following a serious breach by the Parties and detailed as follows:</p>
    <ul class="agreement-list">
      <li>Dishonestly performs its duties or intentionally commits a criminal offense.</li>
      <li>Willfully cause prejudice to the Parties.</li>
      <li>Commit any negligent act causing severe harm to the Parties.</li>
      <li>Disclose confidential information from the Parties.</li>
      <li>Having been sentenced by a final judgment of the Court to a penalty of reorganization, or having been placed in liquidation or insolvency, except for an offense committed by negligence or a minor violation.</li>
    </ul>

    <h2>6. FORCE MAJEURE</h2>
    <p>If the performance of any obligation of either of the Parties under this Agreement prevented or restricted by reason of:</p>
    <ol class="agreement-list-alpha">
      <li>Strike, lockout, epidemic, dispute protest, casualty, or accident.</li>
      <li>Flood, tsunami, earthquake, storm, lack of power or supplies.</li>
      <li>War, revolution, civil commotion, acts of public enemies, blockage, embargo.</li>
      <li>Any law, proclamation, regulation, ordinance, demand, or requirement of any government or authority.</li>
    </ol>
    <p>Upon giving prompt notice to all the Parties, the party so affected shall be excused such performance to the extent of such prevention or restriction (but only for so long as it continues).</p>

    <h2>7. ENTIRE AGREEMENT</h2>
    <p>This Agreement contains all terms and conditions agreed to by the Parties, including any attachments or appendices. This Agreement replaces all previous oral discussions, agreements, and understandings.</p>

    <h2>8. GOVERNING LAW AND JURISDICTION</h2>
    <p>This Agreement is governed by and shall be construed following the laws of India. The Parties submit all their disputes arising out of or connected with this Agreement to the jurisdiction of the Indian Courts.</p>

    <h2>9. DOCUMENTS ATTACHED TO THE AGREEMENT</h2>
    <p>Both Parties agree that the documents attached and signed by the Parties are considered as a part of this Agreement. These documents are as follows:</p>
    
    <div class="agreement-table">
      <table border="1" cellpadding="8" cellspacing="0" style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="width: 50%; border: 1px solid #000; padding: 8px;">
            <strong>First Party Details:</strong>
          </td>
          <td style="width: 50%; border: 1px solid #000; padding: 8px;">
            <strong>Second Party Details:</strong>
          </td>
        </tr>
        <tr>
          <td style="border: 1px solid #000; padding: 8px;">
            * Copy of the Company business profile
          </td>
          <td style="border: 1px solid #000; padding: 8px;">
            * Copy of the Company business profile
          </td>
        </tr>
        <tr>
          <td style="border: 1px solid #000; padding: 8px;">
            * Copy of the Director(s) Passport
          </td>
          <td style="border: 1px solid #000; padding: 8px;">
            * Copy of the Director(s) Passport
          </td>
        </tr>
      </table>
    </div>

    <p>This Agreement is drawn up in two (2) identical copies, one for each Party. Both Parties have read and fully understood this Agreement. This Agreement shall become effective and legally binding upon signature by each of the Parties.</p>

    <h2>SIGNED BY:</h2>
    <div class="signatures">
      <div class="signature-block" style="display: flex; justify-content: space-between;">
        <p>The Supplier</p>
        <p>The Distributor</p>
      </div>
      <div class="signature-block" style="display: flex; justify-content: space-between;">
        <p>Witness</p>
        <p>Witness</p>
      </div>
    </div>
  </div>
</div>`;
