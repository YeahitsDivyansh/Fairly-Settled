export const memorandumOfUnderstandingFields = [
  "party1Name",
  "party1Address",
  "party1ID",
  "firstPartyExpertise", // specific expertise, e.g., software development and AI integration
  "firstPartyIndustry",  // specific industry, e.g., technology sector
  "party2Name",
  "party2Address",
  "party2ID",
  "secondPartyInterest", // specific area of interest, e.g., market trends and user behavior analytics
  "scopeOfCooperation",
  "rolesAndResponsibilities",
  "signingDate",
];


export const generateMemorandumOfUnderstanding = (data) => `<div class="agreement-template">
  <h1 class="agreement-title">MEMORANDUM OF UNDERSTANDING</h1>
  <div class="agreement-body">
    <p>This Memorandum of Understanding (MoU) shall become effective on <b>${data.signingDate}</b> (the "Execution Date") and is subject to the terms and conditions stated below between <b>${data.party1Name}</b> holding ID/Passport number <b>${data.party1ID}</b> (the "First Party"), and <b>${data.party2Name}</b> holding ID/Passport number <b>${data.party2ID}</b> (the "Second Party"), collectively referred to as the "Parties".</p>
    <p><b>THEREFORE</b>, Parties hereby agree to enter into this Agreement according to the following terms and conditions contained therein.</p>

    <h2>1. SCOPE OF COLLABORATION.</h2>
    <p>This Memorandum of Understanding (MoU) sets forth the scope of collaboration between the parties, which includes but is not limited to the following areas:</p>
    <ul>
      <li><b>Collaboration and cooperation:</b> Parties may express their intention to collaborate and cooperate on specific projects, initiatives, or activities of mutual interest.</li>
      <li><b>Knowledge and information sharing:</b> Parties may seek to exchange knowledge, information, best practices, or research findings to enhance their understanding and capabilities in <b>${data.scopeOfCooperation}</b>.</li>
      <li><b>Partnership development:</b> Parties may aim to establish a partnership or strategic alliance to jointly pursue business opportunities, explore new markets, or undertake joint ventures.</li>
      <li><b>Joint research and development:</b> Parties may intend to engage in joint research and development efforts to foster innovation, create new products or technologies, or solve common challenges.</li>
      <li><b>Training and capacity building:</b> Parties may prioritize the development of skills and capabilities through training programs, workshops, or knowledge transfer initiatives.</li>
      <li><b>Social impact and sustainable development:</b> Parties may highlight their commitment to address social and environmental challenges, promote sustainability, or contribute to community development.</li>
      <li><b>Other areas of collaboration:</b> The parties may identify and pursue additional areas of collaboration mutually agreed upon in writing. These may include activities such as joint publications, exchange of academic materials, joint participation in conferences or events, or any other collaborative efforts that align with the objectives of this MoU.</li>
    </ul>

    <h2>2. ROLES AND RESPONSIBILITIES.</h2>
    <p><b>The First Party</b> shall undertake the following responsibilities within the scope of this Memorandum of Understanding (MoU):</p>
    <ol type="a">
      <li>a) Contribute financial resources to support the implementation of collaborative projects.</li>
      <li>b) Facilitate access to relevant networks and stakeholders in <b>${data.firstPartyIndustry}</b>.</li>
      <li>c) Provide technical expertise and guidance in <b>${data.firstPartyExpertise}</b>.</li>
    </ol>
    <p><b>The Second Party</b> shall undertake the following responsibilities within the scope of this MoU:</p>
    <ol type="a">
      <li>a) Actively participate in collaborative decision-making processes.</li>
      <li>b) Provide access to necessary facilities and infrastructure for conducting joint research and development activities.</li>
      <li>c) Share relevant data and information related to <b>${data.secondPartyInterest}</b>.</li>
    </ol>
    <p><b>Collaborative responsibilities:</b> The parties shall also collaborate and undertake joint responsibilities as follows:</p>
    <ol type="a">
      <li>a) Collaborate in seeking external funding opportunities to support joint research projects.</li>
      <li>b) Jointly develop a project plan and timeline for the implementation of specific collaborative activities.</li>
      <li>c) Regularly exchange knowledge and best practices to enhance the quality and impact of collaborative initiatives.</li>
    </ol>
    <p><b>Resource contributions:</b> Each party shall contribute the necessary resources, including but not limited to funds, personnel, expertise, facilities, or equipment, to fulfill their respective responsibilities and support the collaborative efforts as outlined in this MoU.</p>
    <p><b>Communication and coordination:</b> The Parties shall maintain regular and effective communication to ensure the smooth implementation of the collaborative activities. They shall designate representatives or points of contact who will be responsible for coordinating and facilitating communication between the parties.</p>
    <p><b>Reporting and documentation:</b> The Parties may agree to provide periodic progress reports, updates, or other documentation as mutually agreed upon. These reports may include details on the activities undertaken, outcomes achieved, challenges encountered, and any other relevant information necessary to assess the progress and success of the collaboration.</p>

    <h2>3. DURATION.</h2>
    <p>The initial duration of this Memorandum of Understanding (MoU) shall be one (1) year from the effective date unless otherwise agreed upon in writing by both parties. Upon the expiration of the initial duration, this MoU may be renewed for subsequent periods subject to mutual agreement between the parties. The renewal terms and conditions, including any amendments or modifications to this MoU, shall be documented in writing through an addendum or a new agreement signed by both parties.</p>

    <h2>4. COMMUNICATION AND REPORTING.</h2>
    <p>The parties shall establish effective communication channels to facilitate regular and timely exchange of information, updates, and feedback related to the activities and progress under this Memorandum of Understanding (MoU). The designated communication channels may include, but are not limited to, in-person meetings, telephone calls, emails, or other mutually agreed-upon means of communication.</p>
    <p>The parties shall agree upon the frequency and format of communication to ensure effective collaboration. This includes monthly progress meetings and quarterly written updates exchanged via email.</p>
    <p>The parties shall establish reporting requirements to monitor the progress and outcomes of the collaborative activities. The reporting requirements shall include:</p>
    <ul>
      <li>Monthly progress reports outlining the status of agreed-upon tasks, achievements, challenges encountered, and future plans. These reports shall be submitted within five (5) business days after the end of each month.</li>
      <li>Quarterly financial reports detailing the utilization of funds allocated to the collaborative activities, if applicable. These reports shall include an itemized breakdown of expenses and shall be submitted within fifteen (15) business days after the end of each quarter.</li>
      <li>Any other specific reports or documentation as deemed necessary by the parties to assess the success and impact of the collaboration. These additional reports shall be mutually agreed upon and submitted within the agreed-upon timeframe.</li>
    </ul>

    <h2>5. CONFIDENTIALITY.</h2>
    <p>The parties acknowledge that during the course of their collaboration under this Memorandum of Understanding (MoU), they may disclose confidential information to each other (the "Confidential Information"). Confidential Information refers to any information, data, documents, or materials, whether oral, written, or in any other form, that is identified as confidential or that should reasonably be understood to be confidential based on its nature and the circumstances of its disclosure.</p>
    <p>Each party agrees to maintain the confidentiality of the Confidential Information received from the disclosing party and shall not disclose it to any third party without the prior written consent of the disclosing party.</p>
    <p>The receiving party shall use the Confidential Information solely for the purposes of this MoU and shall not use it for any other purpose without the express written consent of the disclosing party.</p>
    <p>The obligations of confidentiality shall not apply to any information that:</p>
    <ul>
      <li>Is already in the public domain at the time of its disclosure or subsequently becomes part of the public domain through no fault of the receiving party.</li>
      <li>Is lawfully obtained by the receiving party from a third party without any obligation of confidentiality.</li>
      <li>Is independently developed by the receiving party without reference to the Confidential Information.</li>
      <li>Is required to be disclosed by law, court order, or government regulation.</li>
    </ul>
    <p>In the event the receiving party is legally compelled to disclose the Confidential Information, the receiving party shall, to the extent legally permissible, provide prompt written notice to the disclosing party to enable the disclosing party to seek a protective order or other appropriate remedy.</p>

    <h2>6. INTELLECTUAL PROPERTY.</h2>
    <p>Each party shall retain ownership of its pre-existing intellectual property rights, including but not limited to patents, trademarks, copyrights, trade secrets, and any other intellectual property owned or controlled by the party prior to entering into this Memorandum of Understanding (MoU).</p>
    <p>In the event that new intellectual property is jointly developed by the parties during the course of collaboration under this MoU, the ownership, rights, and responsibilities related to such jointly developed intellectual property shall be determined through a separate agreement or understanding to be negotiated and executed by the parties.</p>
    <p>The parties acknowledge that intellectual property disclosed or made available to each other during the collaboration may be of a confidential nature. The Confidentiality clause outlined in this MoU shall govern the treatment and protection of such intellectual property.</p>
    <p>This MoU does not grant either party exclusivity in the use of their respective intellectual property. Each party may continue to independently pursue other collaborations, partnerships, or business activities involving their intellectual property rights, subject to any obligations or restrictions set forth in separate agreements or applicable laws.</p>

    <h2>7. FINANCIAL MATTER.</h2>
    <p>The parties shall determine the funding arrangements for the collaborative activities outlined in this Memorandum of Understanding (MoU). This may include the allocation of financial resources, contributions from each party, or other sources of funding as mutually agreed upon.</p>
    <p>The parties shall develop a budget and financial plan detailing the estimated costs, expenses, and financial requirements for the execution of the collaborative activities. The budget shall include provisions for personnel, materials, equipment, travel, and any other relevant expenditures. The budget and financial plan shall be prepared within thirty (30) days from the effective date of this MoU and shall be subject to mutual approval.</p>
    <p>The parties shall establish clear payment terms and conditions for any financial transactions between them. This may include the schedule of payments, modes of payment, invoicing procedures, and any applicable taxes or fees. Payments shall be made within thirty (30) days from the receipt of a valid invoice unless otherwise specified in writing.</p>
    <p>This Financial Matters clause shall remain in effect throughout the duration of this MoU unless otherwise amended or terminated in writing by both parties.</p>

    <h2>8. DISPUTE RESOLUTION.</h2>
    <p>In the event of any dispute, controversy, or claim arising out of or relating to this Memorandum of Understanding (MoU), the parties shall make all reasonable efforts to resolve the dispute through good faith negotiations.</p>
    <p>If the dispute cannot be resolved through negotiation within a reasonable period, either party may propose mediation as an alternative dispute resolution mechanism. The costs of mediation shall be shared equally between the parties unless otherwise agreed upon.</p>
    <p>If mediation is unsuccessful or not chosen as the preferred method of dispute resolution, any unresolved dispute, controversy, or claim arising out of or relating to this MoU shall be finally settled by arbitration in accordance with the rules of arbitration agreed upon by the parties. The arbitration award shall be final and binding on both parties.</p>

    <h2>9. TERMINATION.</h2>
    <p>This Memorandum of Understanding (MoU) may be terminated at any time by mutual agreement of the parties. The notice period for termination shall be thirty (30) days, unless otherwise agreed upon in writing.</p>
    <p>In the event of a material breach of this MoU by either party, the non-breaching party shall have the right to terminate this MoU by providing written notice to the breaching party. The breaching party shall be given a reasonable opportunity to remedy the breach within a period of thirty (30) days.</p>
    <p>Upon termination of this MoU, each party shall fulfill any outstanding obligations and responsibilities as agreed upon in this MoU or as mutually determined upon termination. Any provisions that, by their nature, are intended to survive termination shall continue to be binding on the parties.</p>

    <h2>10. ENTIRE AGREEMENT.</h2>
    <p>This Agreement contains all terms and conditions agreed to by the Parties, including any attachments or appendices. This Agreement replaces all previous oral discussions, agreements, and understandings relating to the collaboration or partnership.</p>

    <h2>11. GOVERNING LAW AND JURISDICTION.</h2>
    <p>This Agreement shall be governed by and interpreted in accordance with the laws of India. The Parties agree to submit to the exclusive jurisdiction of the courts of India for any legal actions or proceedings arising from this Agreement.</p>
    <p>This Agreement is drawn up in two (2) identical copies, one for each party. The Parties have read and fully understood this Agreement. This Agreement shall become effective and legally binding upon signature by each Party.</p>

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

