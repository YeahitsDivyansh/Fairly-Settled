export const jointVentureAgreementFields = [
  "executionDate",
  "firstPartyName",
  "firstPartyRegNumber",
  "firstPartyDirectorName",
  "secondPartyName",
  "secondPartyRegNumber",
  "secondPartyDirectorName",
  "ventureObjective",
  "targetMarket",
  "firstPartyContribution",
  "secondPartyContribution",
  "boardSize",
  "directorsPerParty",
  "boardQuorum",
  "ceoName",
  "firstPartyCapital",
  "secondPartyCapital"
];

export const generateJointVentureAgreement = (data) => `<div class="agreement-template">
  <h1 class="agreement-title">JOINT VENTURE AGREEMENT</h1>

  <div class="agreement-body">
    <p>This Joint Venture Agreement shall become effective on <strong>${data.executionDate}</strong> (the "Execution Date") and is subject to the terms and conditions stated below between <strong>${data.firstPartyName}</strong> having registration number <strong>${data.firstPartyRegNumber}</strong> and represented by <strong>${data.firstPartyDirectorName}</strong>, authorized Director (the "First Party"), and <strong>${data.secondPartyName}</strong> having registration number <strong>${data.secondPartyRegNumber}</strong> and represented by <strong>${data.secondPartyDirectorName}</strong>, authorized Director (the "Second Party"), collectively referred to as the "Parties".</p>

    <p><strong>THEREFORE, Parties hereby agree to enter into this Agreement according to the following terms and conditions contained therein.</strong></p>

    <h2>1. PURPOSE AND OBJECTIVES.</h2>
    <p>The Parties hereby agree to establish a joint venture ("Joint Venture") for the <strong>${data.ventureObjective}</strong>. The purpose and objectives of this Agreement are as follows:</p>
    <ul>
      <li><strong>Strategic alliance:</strong> The Joint Venture aims to combine the expertise, resources, and capabilities of the Parties to create a mutually beneficial business venture that leverages their respective strengths and market opportunities.</li>
      <li><strong>Market expansion:</strong> The Parties intend to expand their market presence and capitalize on the growth potential in <strong>${data.targetMarket}</strong> by jointly undertaking business activities and leveraging synergies.</li>
      <li><strong>Profit generation:</strong> The primary objective of the Joint Venture is to generate profits and achieve a favorable return on investment for the parties involved. The Parties will work collaboratively to maximize the profitability and financial success of the Joint Venture.</li>
      <li><strong>Risk sharing:</strong> The Joint Venture provides an opportunity for the Parties to share risks associated with the business venture, including market risks, operational risks, regulatory risks, and financial risks. The Parties shall work together to mitigate and manage these risks effectively.</li>
      <li><strong>Technology and knowledge transfer:</strong> The Joint Venture aims to facilitate the transfer of technological know-how, expertise, and intellectual property between the parties. This collaboration will enhance innovation, efficiency, and competitiveness within the Joint Venture.</li>
      <li><strong>Market penetration:</strong> The parties seek to leverage their existing customer base, distribution channels, and market networks to penetrate new markets or expand their market share in existing markets. The Joint Venture will undertake marketing and sales initiatives to achieve these objectives.</li>
      <li><strong>Operational synergies:</strong> The Joint Venture aims to realize operational synergies by combining resources, optimizing processes, and achieving economies of scale. The parties will work together to streamline operations, reduce costs, and improve overall efficiency.</li>
    </ul>
    <p>The parties envision a long-term collaboration and commitment to the success of the Joint Venture. They will actively engage in regular communication, joint decision-making, and strategic planning to achieve the objectives outlined in this Agreement.</p>

    <h2>2. CONTRIBUTIONS.</h2>
    <p>The parties agree to make initial contributions to the Joint Venture as follows:</p>
    <ul>
      <p>a) The nature and value of the First Party's initial contribution are <strong>${data.firstPartyContribution}</strong>.</p>
      <p>b) The nature and value of the Second Party's initial contribution are <strong>${data.secondPartyContribution}</strong>.</p>
    </ul>
    <p>The parties further agree to contribute additional resources, as may be reasonably required, to support the operations and growth of the Joint Venture. Such ongoing contributions may include, but are not limited to:</p>
    <ul>
      <li><strong>Capital contributions:</strong> Each party shall contribute additional capital to the Joint Venture as determined by the Joint Venture's management, in proportion to their respective ownership interests.</li>
      <li><strong>Expertise and services:</strong> Each party shall contribute their respective expertise, skills, knowledge, and services relevant to the Joint Venture's business activities.</li>
      <li><strong>Technology and intellectual property:</strong> Each party may contribute additional technology, intellectual property, patents, trademarks, copyrights, or other proprietary assets to enhance the Joint Venture's capabilities and competitive advantage.</li>
      <li><strong>Human resources:</strong> Each party shall contribute qualified personnel and management resources necessary for the successful operation of the Joint Venture, including key personnel, professionals, and staff members.</li>
      <li><strong>Marketing and sales support:</strong> Each party shall contribute marketing, sales, and promotional efforts to enhance the Joint Venture's market presence and customer acquisition.</li>
      <li><strong>Infrastructure and facilities:</strong> Each party may contribute infrastructure, facilities, equipment, or access to distribution channels necessary for the Joint Venture's operations.</li>
    </ul>
    <p>The contributions made by each party shall be reflected in their proportional ownership interests in the Joint Venture. Contributions made to the Joint Venture shall be considered as non-refundable and non-repayable neither transferable to any third party without the prior written consent of the other party, unless required by law.</p>

    <h2>3. MANAGEMENT AND DECISION MAKING.</h2>
    <p>The management of the Joint Venture shall be structured as follows:</p>
    <p><strong>Board of directors:</strong> The Joint Venture shall have a Board of Directors ("Board") consisting of <strong>${data.boardSize}</strong> directors. Each party shall have the right to appoint <strong>${data.directorsPerParty}</strong> directors to the Board. The appointment of directors shall be made in proportion to the respective ownership interests of the parties.</p>
    <p><strong>Chairperson:</strong> The Board shall elect a Chairperson from among its members. The Chairperson shall preside over Board meetings and act as the primary representative of the Joint Venture in external matters, unless otherwise determined by the Board.</p>
    <p><strong>Board meetings:</strong> The Board shall meet at least quarterly each calendar year, unless otherwise determined by the Board. Additional meetings may be called as necessary by the Chairperson or upon the request of a majority of the directors.</p>
    <p>A quorum for Board meetings shall be <strong>${data.boardQuorum}</strong> of the total number of directors. Decisions made at a Board meeting shall require the affirmative vote of a majority of the directors present. Each director shall have one vote. In the event of a tied vote, the Chairperson shall have a casting vote. The Board shall make decisions on matters within its authority, including but not limited to:</p>
    <ul>
      <p>a) Approval of annual budgets, business plans, and major strategic decisions.</p>
      <p>b) Appointment and removal of key executives and senior management.</p>
      <p>c) Adoption and amendment of policies, procedures, and operating guidelines.</p>
      <p>d) Selection and engagement of professional advisors and service providers.</p>
      <p>e) Approval of major investments, contracts, and transactions.</p>
      <p>f) Declaration of dividends, distribution of profits, and capital expenditure.</p>
    </ul>
    <p>In certain circumstances, decisions may need to be made outside of Board meetings. In such cases, decisions may be made by written consent or through other efficient means agreed upon by the Board. Any decisions made outside of Board meetings shall be documented and recorded in writing.</p>
    <p><strong>Minutes:</strong> Minutes of Board meetings shall be prepared, documenting the discussions, resolutions, and decisions made. The minutes shall be circulated to all directors within fourteen (14) days after each meeting.</p>
    <p><strong>Executive Management:</strong> The Board shall appoint an executive management team to oversee the day-to-day operations of the Joint Venture. The executive management team shall consist of key executives, including but not limited to <strong>${data.ceoName}</strong> and other senior management positions as deemed necessary.</p>
    <p>The executive management team shall be responsible for implementing the strategic plans, policies, and decisions approved by the Board. They shall have the authority to make operational decisions within the scope defined by the Board and this Agreement.</p>
    <p>The executive management team shall provide regular reports to the Board on the financial, operational, and strategic performance of the Joint Venture.</p>

    <h2>4. FINANCIAL MATTERS.</h2>
    <p>The parties to this Joint Venture Agreement shall collaborate and mutually determine the funding arrangements required to support the joint activities described herein.</p>
    <p><strong>Financial Reporting and Statements:</strong> The Joint Venture shall maintain its books and records in accordance with generally accepted Indian Accounting Standards (Ind AS) and Accounting Principles (GAAP).</p>
    <p>The Joint Venture shall prepare and provide timely financial statements, including balance sheets, income statements, and cash flow statements, on a quarterly basis.</p>
    <p>The Joint Venture's financial statements shall be audited annually by an independent certified public accountant (CPA) appointed by the Board of Directors. The audit shall be conducted in accordance with Indian auditing standards.</p>
    <p>The Joint Venture shall provide periodic financial reports to the shareholders, including summaries of financial performance, capital expenditures, and any significant financial matters. The reports shall be provided quarterly.</p>
    <p><strong>Capital contributions:</strong> The parties shall contribute their respective initial capital contributions of INR <strong>${data.firstPartyCapital}</strong> (Indian Rupees) for the First Party and INR <strong>${data.secondPartyCapital}</strong> (Indian Rupees) for the Second Party. The capital contributions shall be used to fund the operations and investments of the Joint Venture.</p>
    <p>In the event additional capital is required for the Joint Venture's operations or expansion, the parties shall contribute additional capital in proportion to their respective ownership interests, unless otherwise agreed upon in writing.</p>
    <p>The parties shall make their capital contributions in accordance with a schedule agreed upon by the parties or as determined by the Board of Directors.</p>
    <p><strong>Allocation of profits and losses:</strong> Net profits or losses of the Joint Venture are allocated between the Parties in proportion to their respective shareholdings. The Parties determine the frequency and method of profit distribution, taking into account the Joint Venture's financial performance and cash flow requirements, as well as responsibility for financing losses and the mechanism for absorbing deficits.</p>
    <p><strong>Distribution of dividends:</strong> The declaration and distribution of dividends shall be made in accordance with the laws of India and regulations and the Joint Venture's financial position. Dividends shall be distributed to the shareholders in proportion to their respective ownership interests, unless otherwise determined by the Board of Directors. Shareholders may agree to reinvest dividends back into the Joint Venture for the purpose of funding future investments or operations. The terms and conditions of such reinvestment shall be agreed upon in writing.</p>
    <p><strong>Financial controls and budgeting:</strong> The Joint Venture shall prepare an annual budget, including projected revenues, expenses, capital expenditures, and cash flow requirements. The budget shall be submitted to the Board of Directors for approval. The Board of Directors shall establish appropriate financial controls and authorization levels for expenditures.</p>
    <p>Expenditures exceeding the approved budget or predetermined limits shall require Board approval.</p>
    <p><strong>Cash management:</strong> The Joint Venture shall establish appropriate cash management procedures, including banking arrangements, signatories, and the handling of cash receipts and disbursements.</p>
    <p><strong>Banking and signatories:</strong> The Joint Venture shall maintain one or more bank accounts in its name for the purpose of conducting its financial transactions. The selection and opening of bank accounts shall be approved by the Board of Directors. The Board shall designate authorized signatories who are authorized to sign checks, make withdrawals.</p>

    <h2>5. INTELLECTUAL PROPERTY.</h2>
    <p>Any pre-existing Intellectual Property brought by each party into the Joint Venture shall remain the exclusive property of the respective party. Any new Intellectual Property created during the course of the Joint Venture shall be jointly owned by the parties, with each party having an equal and undivided interest.</p>
    <p>Each party grants a non-exclusive, royalty-free license to the other party to use the Intellectual Property owned by that party solely for the purposes of the Joint Venture and its related activities. Any use of the licensed Intellectual Property outside the scope of the Joint Venture requires prior written consent from the owning party.</p>
    <p>In the event of the termination or dissolution of the Joint Venture, the parties shall negotiate in good faith the division or transfer of jointly-owned Intellectual Property. Any costs associated with the transfer of Intellectual Property shall be borne by the party acquiring the Intellectual Property.</p>

    <h2>6. CONFIDENTIALITY.</h2>
    <p>The Parties acknowledge that during the course of the Joint Venture, they may have access to confidential information of each other, including but not limited to trade secrets, business plans, financial information, technical know-how, customer lists, and other proprietary information (the "Confidential Information"). The Parties agree to treat all Confidential Information received or obtained from the other party as strictly confidential and shall not disclose, use, or exploit such information for any purpose other than the performance of the Joint Venture, without the prior written consent of the disclosing party. The obligations of confidentiality shall not apply to any information that:</p>
    <ul>
      <p>a) Is already in the public domain at the time of disclosure or subsequently becomes publicly known without breach of this Agreement.</p>
      <p>b) Was already known to the receiving party prior to its disclosure by the disclosing party, as evidenced by written records.</p>
      <p>c) Is rightfully obtained by the receiving party from a third party without any obligation of confidentiality; or</p>
      <p>d) Is required to be disclosed by law, regulation, or court order, provided that the receiving party gives prompt notice to the disclosing party to enable the disclosing party to seek a protective order or other appropriate remedy.</p>
    </ul>

    <h2>7. TERMINATION.</h2>
    <p>Either party may terminate this Agreement for any reason or without providing a specific cause by providing thirty (30) days' written notice to the other party. Upon termination for convenience, the terminating party shall not be liable for any compensation or damages to the non-terminating party, except for any outstanding payment obligations or liabilities accrued before the effective date of termination.</p>
    <p>Either party may terminate this Agreement in the event of a material breach by the other party by providing written notice specifying the nature of the breach. The breaching party shall have a cure period of thirty (30) days from the receipt of the notice to remedy the breach. If the breach is not cured within the specified period, the non-breaching party may terminate this Agreement with immediate effect.</p>
    <p>Either party may terminate this Agreement if the performance of its obligations under this Agreement is prevented or delayed due to force majeure events beyond its reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, strikes, labor disputes, or government regulations.</p>

    <h2>8. LIMITATION OF LIABILITY.</h2>
    <p>Each party to this Agreement shall be liable only for its own acts, omissions, or negligence, and shall not be held liable for the acts, omissions, or negligence of the other party or any third party. In no event shall either party be liable for any indirect, incidental, consequential, or punitive damages arising out of or in connection with this Agreement, unless caused by willful misconduct or gross negligence.</p>
    <p>Each party shall indemnify, defend, and hold harmless the other party, its officers, directors, employees, and agents from and against any and all claims, liabilities, losses, damages, costs, and expenses arising out of or in connection with any third-party claims or actions arising from:</p>
    <ul>
      <p>a) Any breach of this Joint Venture Agreement by the indemnifying party;</p>
      <p>b) Any negligent acts or omissions or willful misconduct of the indemnifying party or its employees, agents, or representatives;</p>
      <p>c) Any violation of applicable laws or regulations by the indemnifying party;</p>
      <p>d) Any infringement or misappropriation of intellectual property rights by the indemnifying party; or</p>
      <p>e) Any other acts or omissions for which the indemnifying party is responsible.</p>
    </ul>

    <h2>9. DISPUTE RESOLUTION.</h2>
    <p>In the event of any dispute, controversy, or claim arising out of or relating to this Agreement, the parties shall make all reasonable efforts to resolve the dispute through good-faith negotiations.</p>
    <p>If the dispute cannot be resolved through negotiation within a reasonable period, either party may propose mediation as an alternative dispute resolution mechanism. The costs of mediation shall be shared equally between the parties unless otherwise agreed upon.</p>
    <p>If mediation is unsuccessful or not chosen as the preferred method of dispute resolution, any unresolved dispute, controversy, or claim arising out of or relating to this Agreement shall be finally settled by arbitration in accordance with the rules of arbitration agreed upon by the parties. The arbitration award shall be final and binding on both parties.</p>

    <h2>10. ENTIRE AGREEMENT.</h2>
    <p>This Agreement contains all terms and conditions agreed to by the Parties, including any attachments or appendices. This Agreement replaces all previous oral discussions, agreements, and understandings relating to the Joint Venture.</p>

    <h2>11. GOVERNING LAW AND JURISDICTION.</h2>
    <p>This Agreement shall be governed by and interpreted in accordance with the laws of India. The Parties agree to submit to the exclusive jurisdiction of the courts of India for any legal actions or proceedings arising from this Agreement.</p>
    <p>This Agreement is drawn up in two (2) identical copies, one for each party. Both Parties have read and fully understood this Agreement. This Agreement shall become effective and legally binding upon signature by each of the Parties.</p>

    <h2>SIGNED BY-</h2>
    <div class="signatures">
      <div class="signature-block" style="display: flex; justify-content: space-between;">
        <p>The First Party</p>
        <p>The Second Party</p>
      </div>
      <div class="signature-block" style="display: flex; justify-content: space-between;">
        <p>The Witness</p>
        <p>The Witness</p>
      </div>
    </div>
  </div>
</div>`;
