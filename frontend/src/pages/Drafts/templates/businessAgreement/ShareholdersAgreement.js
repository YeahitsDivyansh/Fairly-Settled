
export const shareholdersAgreementFields = [
  "effectivedate",
  "firstShareholderName",
  "secondShareholderName",
  "thirdShareholderName",
  "companyName",
  "companyRegistration",
  "initialCapital",
  "totalShares",
  "shareValue",
  "firstShareholderShares",
  "firstShareholderShareValue",
  "firstShareholderVote",
  "secondShareholderShares",
  "secondShareholderShareValue",
  "secondShareholderVote",
  "thirdShareholderShares",
  "thirdShareholderShareValue",
  "thirdShareholderVote",
  "nonCompeteDuration",
  "nonSolicitDuration",
];


export const generateShareholdersAgreement = (data) => `<div class="agreement-template">
  <h1 class="agreement-title">Shareholders Agreement</h1>
  <div class="agreement-body">
    <p>
      This Shareholders Agreement shall become effective on <span class="highlight">${data.effectivedate ?? 'undefined'}</span> (the "Execution Date") and is subject to the terms and conditions stated below between <span class="highlight">${data.firstShareholderName ?? 'undefined'}</span> (the "First Shareholder") and <span class="highlight">${data.secondShareholderName ?? 'undefined'}</span> (the "Second Shareholder") and <span class="highlight">${data.thirdShareholderName ?? 'undefined'}</span> (the "Third Shareholder"), collectively referred to as the "Shareholders".
    </p>
    <p>THEREFORE, the Shareholders hereby agree to enter into this Agreement according to the following terms and conditions contained therein.</p>

    <h2>1. THE AGREEMENT.</h2>
    <p>The Shareholders have decided to enter into this Agreement to govern their respective interests, obligations, liabilities, ownership, and rights in <span class="highlight">${data.companyName ?? 'undefined'}</span> registration number <span class="highlight">${data.companyRegistration ?? 'undefined'}</span> (the "Company").</p>

    <h2>2. SHARE STRUCTURE.</h2>
    <p>The initial registered capital of the Company shall be INR <span class="highlight">${data.initialCapital ?? 'undefined'}</span> (Indian Rupees), consisting of <span class="highlight">${data.totalShares ?? 'undefined'}</span> shares of INR <span class="highlight">${data.shareValue ?? 'undefined'}</span> (Indian Rupees) each. The Shareholders shall have one (1) vote for each share, of which they are the holder at any shareholder's general meeting.</p>
    <p>From the Execution Date, the share structure between the Shareholders shall be as follows:</p>
    <table class="agreement-table" style="border-collapse: collapse; width: 100%;">
      <thead></thead>
        <tr>
          <th style="border: 1px solid #000;"><b>Shareholder</b></th>
          <th style="border: 1px solid #000;"><b>Number of Shares</b></th>
          <th style="border: 1px solid #000;"><b>Shares Value</b></th>
          <th style="border: 1px solid #000;"><b>Vote</b></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="border: 1px solid #000;"><b>First Shareholder</b><br><span class="highlight">${data.firstShareholderName}</span></td>
          <td style="border: 1px solid #000;"><b>${data.firstShareholderShares}</b></td>
          <td style="border: 1px solid #000;"><b>INR ${data.firstShareholderShareValue}</b></td>
          <td style="border: 1px solid #000;"><b>${data.firstShareholderVote}</b></td>
        </tr>
        <tr>
          <td style="border: 1px solid #000;"><b>Second Shareholder</b><br><span class="highlight">${data.secondShareholderName}</span></td>
          <td style="border: 1px solid #000;"><b>${data.secondShareholderShares}</b></td>
          <td style="border: 1px solid #000;"><b>INR ${data.secondShareholderShareValue}</b></td>
          <td style="border: 1px solid #000;"><b>${data.secondShareholderVote}</b></td>
        </tr>
        <tr>
          <td style="border: 1px solid #000;"><b>Third Shareholder</b><br><span class="highlight">${data.thirdShareholderName}</span></td>
          <td style="border: 1px solid #000;"><b>${data.thirdShareholderShares}</b></td>
          <td style="border: 1px solid #000;"><b>INR ${data.thirdShareholderShareValue}</b></td>
          <td style="border: 1px solid #000;"><b>${data.thirdShareholderVote}</b></td>
        </tr>
      </tbody>
    </table>
    <p>The Shareholders warrant that they are the sole beneficial owners of the shares.</p>
    <p>In the event of an increase in the Company's share capital, The Shareholders have a pre-emptive right in proportion to their interest in the Company.</p>

    <h2>3. SHARE TRANSFER.</h2>
    <ul class="agreement-list">
      <li><b>Pre-emptive rights:</b> A shareholder who intends to sell his shares must first notify the other remaining shareholders in writing. The Shareholders shall have the exclusive rights (but not the obligation) to elect to purchase the shares proposed within thirty (30) days following the written notice's reception. The shareholder who has elected to purchase the proposed shares shall be entitled to purchase on a pro-rata basis. If any remaining Shareholders elect to purchase the proposed, those shares will be sold and conveyed to such remaining Shareholders at the same price proposed to the third party.</li>
      <li><b>Restriction on transfer:</b> A shareholder cannot transfer shares if the third party is: a) Not of good standing and reputation, or b) A competitor or an entity related to a competitor. The Shareholders can transfer shares to a third party if the shares transferring is approved by the majority of the Shareholders.</li>
    </ul>

    <h2>4. SHAREHOLDERS RIGHTS.</h2>
    <p>The Company Director(s) shall provide to the Shareholders a copy of the Company's monthly account report and the current annual financial statement within a reasonable time upon request. The Company shall allow the Shareholders or their duly authorized representative(s) to inspect the Company's business operation and accounting records during regular business hours.</p>

    <h2>5. COMPANY RESTRICTION.</h2>
    <p>The Company will not provide any financial assistance by way of gift, guarantee, or otherwise to any Shareholders, Directors, Officers, Agents, or Employees of the Company or any person or entity related.</p>

    <h2>6. NON-COMPETITION.</h2>
    <ul class="agreement-list">
      <li>The Shareholders, while and for <span class="highlight">${data.nonCompeteDuration ?? 'two (2) years'}</span> after holding shares of the Company, shall not undertake, organize, or be involved in any way whatsoever in any business or commercial activity that competes with the Company's current or planned activity in the geographical area in which the Company carries on its usual business.</li>
      <li>Diverting from the Company any activity, soliciting its clients, before shareholders cease to hold shares.</li>
      <li>Engage or participate in any other business activity that would conflict with the Company's interests.</li>
    </ul>

    <h2>7. NON-SOLICITATION.</h2>
    <p>The Shareholders agree not to induce any Shareholders, Director, Officer, or Employee of the Company to compete in any way with the Company. They will not interfere with the Company's business operation during and after <span class="highlight">${data.nonSolicitDuration ?? 'two (2) years'}</span> from this Agreement's termination.</p>

    <h2>8. SEVERABILITY.</h2>
    <p>If any clause of this Agreement conflict with the law, the Indian law will prevail, and this Agreement will be amended to comply with it. If any clause or sentence of this Agreement is held to be invalid or unenforceable in whole or in part, all other provisions shall nevertheless continue to be valid and enforceable as if the invalid or unenforceable clause or sentence had not been included in this Agreement.</p>

    <h2>9. TERMINATION.</h2>
    <ul class="agreement-list">
      <li>At any time by mutual consent of the Shareholders.</li>
      <li>If the Company is dissolved, wound-up.</li>
      <li>Upon the sale of the Company by all the Shareholders to a third party.</li>
      <li>In relation to a shareholder who no longer holds any share in the Company, upon the Shareholder ceasing to hold shares, provided that shares are disposed of in compliance with the terms of this Agreement.</li>
    </ul>
    <p>In the event of any termination of this Agreement and cessation of the business activity, any and all investments and funds paid by the Shareholders for the Company's business activity shall be refunded in full by the Company in priority. Such refund shall be effectuated before any other payments and or expenses related to the Company.</p>

    <h2>10. COMPANY LIQUIDATION.</h2>
    <p>In the event of any liquidation, dissolution, or winding-up of the Company, the net profits shall be distributed to the Shareholders in proportion with their percentage of total capital held in the Company. In the event of dissolution of the Company, any and all investments and funds paid by the Shareholders for the Company's business activity shall be refunded in full by the Company in priority. Such refund shall be effectuated before any other payments and or expenses related to the Company.</p>

    <h2>11. GENERAL PROVISIONS.</h2>
    <p>This Agreement will not be amended or modified except by a written agreement approved by all the Shareholders. This Agreement constitutes the entire Agreement between the Shareholders. It supersedes any previous agreement. This Agreement will inure to the benefit of binding upon the respective heirs, executors, administrators, successors, and assigns, as the case may be, of the Shareholders.</p>

    <h2>12. FORCE MAJEURE.</h2>
    <p>If the performance of any obligation of either of a shareholder under this Agreement prevented or restricted by reason of: a) Strike, lockout, epidemic, dispute protest, casualty, or accident. b) Flood, tsunami, earthquake, storm, lack of power or supplies. c) War, revolution, civil commotion, acts of public enemies, blockage, embargo. d) Any law, proclamation, regulation, ordinance, demand, or requirement of any government or authority. Upon giving prompt notice to all the Shareholders, the shareholder so affected shall be excused such performance to the extent of such prevention or restriction (but only for so long as it continues).</p>

    <h2>13. GOVERNING LAW AND JURISDICTION.</h2>
    <p>In the event of a dispute arising between the Shareholders connected with this Agreement, the Shareholders must first attempt to resolve it amicably and in good faith before submitting the dispute to Court. This Agreement shall be governed by and construed in accordance with the laws of India, and the Shareholders expressly and irrevocably submit to the jurisdiction of the Indian Courts.</p>

    <h2>14. DOCUMENTS ATTACHED TO THE AGREEMENT.</h2>
    <p>The Shareholders agree that the documents attached and signed by the Shareholders are considered as a part of this Agreement. These documents are as follows:</p>
    <table class="agreement-table" style="border-collapse: collapse; width: 100%; margin-top: 1em;">
      <thead>
        <tr>
          <th style="border: 1px solid #000;">Shareholders details:</th>
          <th style="border: 1px solid #000;">Company details:</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="border: 1px solid #000;">
            <b>* Copy of the Passport</b><br>
            <b>* Proof of address</b>
          </td>
          <td style="border: 1px solid #000;">
          <b>* Copy of the Company Business Profile</b><br>
          <b>* Copy of the Director(s) Passport</b><br>
          <b>* Copy of the Director's proof of address</b>
          </td>
        </tr>
      </tbody>
    </table>

    <p>This Agreement is drawn up in two (2) identical copies, one for each party. The Shareholders have read and fully understood this Agreement. This Agreement shall become effective and legally binding upon signature by each Shareholder.</p>

    <h2>SIGNED BY-</h2>
    <div class="signatures">
      <div class="signature-block" style="display: flex; justify-content: space-between;">
        <p>First Shareholder<br/></p>
        <p>Second Shareholder<br/></p>
        <p>Third Shareholder<br/></p>
      </div>
      <div class="signature-block" style="display: flex; justify-content: space-between;">
        <p>Witness</p>
        <p>Witness</p>
         <p>Witness</p>
      </div>
    </div>
  </div>
</div>`;

