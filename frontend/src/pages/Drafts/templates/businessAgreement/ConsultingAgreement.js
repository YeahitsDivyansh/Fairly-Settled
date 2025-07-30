export const consultingAgreementFields = [
  "executionDate",
  "consultantName",
  "clientsCompanyName",
  "clientAuthorizedDirectorName",
  "consultantFees",
  "depositAmount",  
];

export const generateConsultingAgreement = (data) => `<div class="agreement-template">
  <h1 class="agreement-title">CONSULTING AGREEMENT</h1>

  <div class="agreement-body">
    <p>This Consulting Agreement shall become effective on <span class="highlight">${data.executionDate}</span> (the "Execution Date") and is subject to the terms and conditions stated below between <span class="highlight">${data.consultantName}</span> (the "Consultant") and [company name of Client] having registration number [xxxxxxxxx] and represented by <span class="highlight">${data.clientAuthorizedDirectorName}</span>, authorized Director (the "Client"), collectively referred to as the "Parties".</p>

    <p><strong>THEREFORE,</strong> Parties hereby agree to enter into this Agreement according to the following terms and conditions contained therein.</p>

    <h2>1. SERVICES PROVIDED.</h2>
    <p>The Client hereby agrees to engage the Consultant to provide the Client with the following consulting services (the "Services"): 
      <ul>
        <li><strong>Financial Consultant</strong>
          <ul>
            <li>Analyze investment plans.</li>
            <li>Source and evaluate capital expansion options, including loans and funding.</li>
            <li>Advice on selling and buying stocks and bonds.</li>
            <li>Forecast revenues and costs and report any discrepancies.</li>
            <li>Analyze market trends and identify risks and opportunities.</li>
            <li>Manage current and future tax payments.</li>
            <li>Monitor financial procedures and ensure compliance with the law.</li>
            <li>Provide solutions and set goals to increase profitability.</li>
            <li>Review day-to-day transactions to identify areas of improvement.</li>
          </ul>
        </li>
        <li><strong>Accounting Consultant</strong>
          <ul>
            <li>Ensure configuration of the general ledger, cash management, and accounts.</li>
            <li>Provide support in completing data processing.</li>
            <li>Offer ongoing assistance to customers.</li>
            <li>Work closely with the sales unit for the improvement of the firm.</li>
            <li>Work out engagements and handle statements of work.</li>
            <li>Accomplish monthly and yearly billable and utilization targets regularly.</li>
            <li>Take an active part in cross-unit and cross-product execution teams.</li>
            <li>Carry out and forward the necessary metrics and project reports.</li>
          </ul>
        </li>
        <li><strong>Human Resources Consultant</strong>
          <ul>
            <li>Advising management on the human resources policies and procedures.</li>
            <li>Serving as internal consultants by analyzing the HR programs.</li>
            <li>Developing, revising, and implementing HR policies and procedures.</li>
            <li>Ensuring HR programs and services comply with established policies and procedures.</li>
            <li>Preparing and maintaining reports related to specific HR projects.</li>
            <li>Assisting with the development and coordination of changes regarding workflow.</li>
            <li>Developing methods for compiling and analyzing data for reports and special projects.</li>
            <li>Conducting audits of HR activities to ensure compliance.</li>
            <li>Presenting training sessions related to specific HR programs.</li>
          </ul>
        </li>
        <li><strong>Business Development Consultant</strong>
          <ul>
            <li>Conduct marketing research to identify industry trends and commercial opportunities.</li>
            <li>Develop and implement a marketing strategy according to objectives and budget.</li>
            <li>Study company profile and operations to understand its marketing needs.</li>
            <li>Provide advice on branding, positioning, communications, and other marketing issues.</li>
            <li>Develop and nurture long term relationship with house teams and external vendors.</li>
            <li>Give direction to marketing efforts with the most effective methods and tools.</li>
            <li>Keep abreast of emerging trends and share best practices knowledge and insights.</li>
          </ul>
        </li>
        <li><strong>Marketing Consultant</strong>
          <ul>
            <li>Conduct marketing research to identify industry trends and commercial opportunities.</li>
            <li>Develop and implement a marketing strategy according to objectives and budget.</li>
            <li>Study company profile and operations to understand its marketing needs.</li>
            <li>Provide advice on branding, positioning, communications, and other marketing issues.</li>
            <li>Develop and nurture long term relationship with house teams and external vendors.</li>
            <li>Give direction to marketing efforts with the most effective methods and tools.</li>
            <li>Keep abreast of emerging trends and share best practices knowledge and insights.</li>
          </ul>
        </li>
      </ul>

    <h2>2. CONSULTANT FEE.</h2>
    <p>The Consultant shall charge the Client a flat fee of INR <strong>${data.consultantFee}</strong> (Indian Rupees), for the Services (the "Consultant Fee").</p>
    <p>A deposit of INR <strong>${data.depositAmount}</strong> (Indian Rupees) is payable by the Client upon signing of this Agreement.</p>
    <p>The remaining amount will be billed to the Client when the Services are completed. Invoices submitted by the Consultant to the Client are due within <strong>seven (7) days</strong> of receipt.</p>
    <p>If the Client terminates this Agreement before the Services' completion, the Consultant shall be entitled to pro-rata payment of the Consultant Fee as of the date of termination, if there has been no breach of the Agreement by the Consultant.</p>
    <p>The Consultant Fee, as provided for in this Agreement, does not include taxes.</p>

    <h2>3. REIMBURSEMENT OF EXPENSES.</h2>
    <p>The Consultant shall be reimbursed from time to time for reasonable and necessary expenses incurred by the Consultant in the Services' performance. All expenses must be pre-approved by the Client.</p>

    <h2>4. CONFIDENTIALITY.</h2>
    <p>During the term of this Agreement and after <strong>five (5) years</strong> from its termination, the Parties shall not disclose confidential information under this Agreement. The Parties shall use their best efforts to prevent the use or disclosure of confidential information. The Parties agree to keep all confidential information relating to the business, including but not limited to lead, clients, supplier information, financial information, software and data, trade secrets, inventions, business methods, corporate plans, marketing, sales information, development projects, and all other business information that is supplied by the Parties, together with all intellectual property rights which exist concerning the above.</p>

    <h2>5. NON-SOLICITATION.</h2>
    <p>
      <ul>
        <li>Clients: During the term of this Agreement and for <strong>two (2) years</strong> following its termination, the Consultant shall not solicit the other party's customer to offer services.</li>
        <li>Employees: The Consultant undertakes during the term of this Agreement and for <strong>two (2) years</strong> following its termination, shall not recruit or solicit the Client's employee in a business or contractual relationship.</li>
        <li>Business Associates: The Consultant undertakes during the term of this Agreement and, for <strong>two (2) years</strong> following its termination, shall not recruit or solicit the Client's business partners located in or outside India to engage them in a business or contractual relationship.</li>
      </ul>
    </p>

    <h2>6. NON-COMPETITION.</h2>
    <p>During and after <strong>two (2) years</strong> after the termination of this Agreement, the Parties shall not:</p>
    <ul>
      <li>Directly or indirectly engage in any business or activity that competes with the Parties, its subsidiaries, or affiliated entities.</li>
      <li>Engage in other activities that may cause conflicts with the Company's interests.</li>
    </ul>

    <h2>7. INTELLECTUAL PROPERTY.</h2>
    <p>The Client is the sole and exclusive owner of all intellectual property rights, including but not limited to the Client's products and information, data, marketing materials, accounting, and administrative information, trademarks, logos, domain names, and any distinctive signs used by the Client. The Consultant expressly acknowledges that it has no rights in the Client's intellectual property related to the Client's properties and products. In the event of termination of this Contract between the Parties, the Consultant shall return to the Client all goods, documents, records, or confidential information that are the Client's property.</p>

    <h2>8. TERMINATION.</h2>
    <p>If one of the Parties is in breach of any of its obligations under this Agreement and such breach persists after thirty (30) days from notification of such breach, the party that has not breached the Agreement may terminate it by written notice with immediate effect. The Client may terminate the Agreement without delay following a serious breach by the Consultant and detailed as follows:</p>
    <ul>
      <li>Dishonestly performs its duties or intentionally commits a criminal offense.</li>
      <li>Willfully cause prejudice to the Client.</li>
      <li>Commit any negligent act causing severe harm to the Client.</li>
      <li>Disclose confidential information from the Client.</li>
      <li>Having been sentenced by a final judgment of the Court to a penalty of reorganization, or having been placed in liquidation or insolvency, except for an offense committed by negligence or a minor violation.</li>
    </ul>

    <h2>9. FORCE MAJEURE.</h2>
    <p>If the performance of any obligation of either of a party under this Agreement prevented or restricted by reason of:</p>
    <ul>
      <li>Strike, lockout, epidemic, dispute protest, casualty, or accident.</li>
      <li>Flood, tsunami, earthquake, storm, lack of power or supplies.</li>
      <li>War, revolution, civil commotion, acts of public enemies, blockage, embargo.</li>
      <li>Any law, proclamation, regulation, ordinance, demand, or requirement of any government or authority.</li>
    </ul>
    <p>Upon giving prompt notice to all the Parties, the party so affected shall be excused such performance to the extent of such prevention or restriction (but only for so long as it continues).</p>

    <h2>10. ENTIRE AGREEMENT.</h2>
    <p>This Agreement contains all terms and conditions agreed to by the Parties, including any attachments or appendices. This Agreement replaces all previous oral discussions, agreements, and understandings relating to the collaboration or partnership.</p>

    <h2>11. GOVERNING LAW AND JURISDICTION.</h2>
    <p>This Agreement is governed by and shall be construed following the laws of India. The Parties submit all their disputes arising out of or connected with this Agreement to the jurisdiction of the Courts of India.</p>

    <h2>12. DOCUMENTS ATTACHED TO THE AGREEMENT.</h2>
    <p>Both Parties agree that the documents attached and signed by the Parties are considered as a part of this Agreement. These documents are as follows:</p>
    
    <table class="agreement-table" style="border-collapse: collapse; width: 100%; margin-top: 1em;">
      <thead>
        <tr>
          <th style="border: 1px solid #000;">Client details:</th>
          <th style="border: 1px solid #000;">Consultant details:</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            * Copy of the company affidavit<br>
            * Copy of the Director's ID-card
          </td>
          <td>
            * Copy of ID-card<br>
            * Proof of address<br>
            * Bank account details
          </td>
        </tr>
      </tbody>
    </table>

    <p>This Agreement is drawn up in two (2) identical copies, one for each party. Both Parties have read and fully understood this Agreement. This Agreement shall become effective and legally binding upon signature by each Party.</p>
    
    <h2>SIGNED BY-</h2>
    <div class="signatures">
      <div class="signature-block" style="display: flex; justify-content: space-between;">
        <p>The Consultant</p>
        <p>The Witness</p>
      </div>
      <div class="signature-block" style="display: flex; justify-content: space-between;">
        <p>The Witness</p>
        <p>The Witness</p>
      </div>
    </div>
  </div>
</div>`;
