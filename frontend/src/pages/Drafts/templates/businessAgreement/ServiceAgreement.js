export const serviceAgreementFields = [
  "executionDate",
  "serviceProviderName",
  "clientName",
  "servicesFee",
  "servicesDeposit",
  "serviceProviderAddress",
  "clientAddress",
  "endDate",
  "signingDate"
];

export const generateServiceAgreement = (data) => `<div class="agreement-template">
  <h1 class="agreement-title">SERVICE AGREEMENT</h1>
  <div class="agreement-body">
    <p>This Services Agreement shall become effective on <span class="highlight">${data.executionDate}</span> (the "Execution Date") and is subject to the terms and conditions stated below between <span class="highlight">${data.serviceProviderName}</span> (the "Service Provider") and <span class="highlight">${data.clientName}</span> (the "Client"), collectively referred to as the "Parties".</p>
    <p>THEREFORE, the Parties hereby agree to enter into this Agreement according to the following terms and conditions contained therein.</p>

    <h2>1. SERVICES PROVIDED</h2>
    <p>The Client hereby agrees to engage the Service Provider to provide the Client with the following consulting services (the "Services"):</p>
    <div class="indented">
      <strong>Marketing Services</strong>
      <ul>
        <li>To conduct marketing research to identify industry trends and commercial opportunities.</li>
        <li>To develop and implement a marketing strategy according to objectives and budget.</li>
        <li>To study company profile and operations to understand its marketing needs.</li>
        <li>To provide advice on branding, positioning, communications, and other marketing issues.</li>
        <li>To develop and nurture long term relationship with house teams and external vendors.</li>
        <li>To give direction to marketing efforts with the most effective methods and tools.</li>
        <li>To keep abreast of emerging trends and share best practices knowledge and insights.</li>
        <li>To execute strategic tasks and monitoring outcomes.</li>
      </ul>
      <strong>Business Development Services</strong>
      <ul>
        <li>To proactively research online/offline to obtain potential client leads.</li>
        <li>To follow up with cold calling and appointment setting.</li>
        <li>To get leads by attending major target industry events and other similar actions.</li>
        <li>To grow recurring revenue with new clients and upsell additional business services.</li>
        <li>To drive profit by selling with the agreed minimum targeted gross profit margins.</li>
        <li>To sell new services that are aligned with the overall company strategy and direction.</li>
        <li>To act with integrity – doing what's right – to help create a delighted customer experience.</li>
      </ul>
      <strong>Accounting Services</strong>
      <ul>
        <li>To ensure configuration of the general ledger, cash management, and accounts.</li>
        <li>To provide support in completing data processing.</li>
        <li>To work closely with the sales unit for the improvement of the company.</li>
        <li>To work out engagements and handle statements of work.</li>
        <li>To accomplish monthly and yearly billable and utilization targets regularly.</li>
        <li>To take an active part in cross-unit and cross-product execution teams.</li>
        <li>To carry out and forward the necessary metrics and project reports.</li>
      </ul>
      <strong>Financial Services</strong>
      <ul>
        <li>To analyze investment plans.</li>
        <li>To source and evaluate capital expansion options, including loans and funding.</li>
        <li>To advice on selling and buying stocks and bonds.</li>
        <li>To forecast revenues and costs and report any discrepancies.</li>
        <li>To analyze market trends and identify risks and opportunities.</li>
        <li>To manage current and future tax payments.</li>
        <li>To monitor financial procedures and ensure compliance with the law.</li>
        <li>To provide solutions and set goals to increase profitability.</li>
        <li>To review day-to-day transactions to identify areas of improvement.</li>
      </ul>
      <strong>Human Resources Services</strong>
      <ul>
        <li>To advise management on the human resources policies and procedures.</li>
        <li>To serve as internal consultants by analyzing the HR programs.</li>
        <li>To develop, revise, and implement HR policies and procedures.</li>
        <li>To ensure HR programs and services comply with established policies and procedures.</li>
        <li>To prepare and maintain reports related to specific HR projects.</li>
        <li>To assist with the development and coordination of changes regarding workflow.</li>
        <li>To develop methods for compiling and analyzing data for reports and special projects.</li>
        <li>To conduct audits of HR activities to ensure compliance.</li>
        <li>To present training sessions related to specific HR programs.</li>
      </ul>
      <strong>Legal Services</strong>
      <ul>
        <li>To provide advice on different legal issues.</li>
        <li>To be actively involved in preparing and drafting legal opinions.</li>
        <li>To assist in reviewing the legal material and any other relevant documents.</li>
        <li>To draw up formalities regarding the settlement of legal cases.</li>
        <li>To coordinate, follow-up, and monitor the progress of the cases pending in various courts in consultation with the company representatives.</li>
        <li>To take a lead role, especially during meetings, hearings, and prioritizing work, ensures that the services delivered to the Council are of high quality.</li>
      </ul>
    </div>

    <h2>2. SERVICE PROVIDER FEE</h2>
    <p>The Service Provider shall charge the Client a flat fee of <span class="highlight">${data.servicesFee}</span> (the "Services Fee").</p>
    <p>A deposit of <span class="highlight">${data.servicesDeposit}</span> is payable by the Client upon signing of this Agreement.</p>
    <p>The remaining amount will be billed to the Client when the Services are completed. Invoices submitted by the Service Provider to the Client are due within seven (7) days of receipt.</p>
    <p>If the Client terminates this Agreement before the Services' completion, the Service Provider shall be entitled to pro-rata payment of the Service Fee as of the date of termination if there has been no breach of the Agreement by the Service Provider.</p>
    <p>The Services Fee, as provided for in this Agreement, does not include taxes.</p>

    <h2>3. REIMBURSEMENT OF EXPENSES</h2>
    <p>The Service Provider shall be reimbursed from time to time for reasonable and necessary expenses incurred by the Service Provider in the Services' performance. All expenses must be pre-approved by the Client.</p>

    <h2>4. CONFIDENTIALITY</h2>
    <p>During the term of this Agreement and after five (5) years from its termination, the Parties shall not disclose confidential information under this Agreement. The Parties shall use their best efforts to prevent the use or disclosure of confidential information. The Parties agree to keep all confidential information relating to the business, including but not limited to lead, clients, supplier information, financial information, software and data, trade secrets, inventions, business methods, corporate plans, marketing, sales information, development projects, and all other business information that is supplied by the Parties, together with all intellectual property rights which exist concerning the above.</p>

    <h2>5. NON-SOLICITATION</h2>
    <ul>
      <li>Clients: During the term of this Agreement and two (2) years following its termination, the Service Provider shall not solicit the other party's Client to offer services.</li>
      <li>Employees: The Service Provider undertakes during the term of this Agreement and, for two (2) years following its termination, shall not recruit or solicit the Client's employee in a business or contractual relationship.</li>
      <li>Business associates: The Service Provider undertakes that during the term of this Agreement and for two (2) years following its termination, shall not recruit or solicit the Client's business partners located in or outside India to engage them in a business or contractual relationship.</li>
    </ul>

    <h2>6. INTELLECTUAL PROPERTY</h2>
    <p>The Client is the sole and exclusive owner of all intellectual property rights, including but not limited to the Client's products and information, data, marketing materials, accounting, and administrative information, trademarks, logos, domain names, and any distinctive signs used by the Client.</p>
    <p>The Service Provider expressly acknowledges that it has no rights in the Client's intellectual property related to the Client's properties and products.</p>
    <p>In the event of termination of this Contract between the Parties, the Service Provider shall return to the Client all goods, documents, records, or confidential information that are the Client's property.</p>

    <h2>7. TERMINATION</h2>
    <p>If one of the parties is in breach of any of its obligations under this Agreement and such breach persists after thirty (30) days from notification of such breach, the party that has not breached the Agreement may terminate it by written notice with immediate effect.</p>
    <p>The Client may terminate the Agreement without delay following a serious breach by the Service Provider and detailed as follows:</p>
    <ul>
      <li>Dishonestly performs its duties or intentionally commits a criminal offense.</li>
      <li>Willfully cause prejudice to the Client.</li>
      <li>Commit any negligent act causing severe harm to the Client.</li>
      <li>Disclose confidential information from the Client.</li>
      <li>Having been sentenced by a final judgment of the Court to a penalty of reorganization, or having been placed in liquidation or insolvency, except for an offense committed by negligence or a minor violation.</li>
    </ul>

    <h2>8. FORCE MAJEURE</h2>
    <p>If the performance of any obligation of either of a party under this Agreement prevented or restricted by reason of:</p>
    <ul>
      <li>Strike, lockout, epidemic, dispute protest, casualty, or accident.</li>
      <li>Flood, tsunami, earthquake, storm, lack of power or supplies.</li>
      <li>War, revolution, civil commotion, acts of public enemies, blockage, embargo.</li>
      <li>Any law, proclamation, regulation, ordinance, demand, or requirement of any government or authority.</li>
    </ul>
    <p>Upon giving prompt notice to all the Parties, the party so affected shall be excused such performance to the extent of such prevention or restriction (but only for so long as it continues).</p>

    <h2>9. ENTIRE AGREEMENT</h2>
    <p>This Agreement contains all terms and conditions agreed to by the Parties, including any attachments or appendices. This Agreement replaces all previous oral discussions, agreements, and understandings.</p>

    <h2>10. GOVERNING LAW AND JURISDICTION</h2>
    <p>This Agreement is governed by and shall be construed following the laws of India. The Parties submit all their disputes arising out of or connected with this Agreement to the jurisdiction of the Indian Courts.</p>

    <h2>11. DOCUMENTS ATTACHED TO THE AGREEMENT</h2>
    <p>Both Parties agree that the documents attached and signed by the Parties are considered as a part of this Agreement. These documents are as follows:</p>
    <div class="documents-table">
      <table border="1" style="border-collapse:collapse;width:100%;">
        <tr>
          <th style="width:50%;">Client details:</th>
          <th style="width:50%;">Service Provider details:</th>
        </tr>
        <tr>
          <td>* Copy of the Passport</td>
          <td>* Copy of the Passport</td>
        </tr>
        <tr>
          <td>* Proof of address</td>
          <td>* Proof of address</td>
        </tr>
        <tr>
          <td></td>
          <td>* Bank account details</td>
        </tr>
      </table>
    </div>
    <p>This Agreement is drawn up in two (2) identical copies, one for each party. Both Parties have read and fully understood this Agreement. This Agreement shall become effective and legally binding upon signature by each of the Parties.</p>

    <h2>SIGNED BY:</h2>
    <div class="signatures">
      <div class="signature-block" style="display: flex; justify-content: space-between;">
        <p>The Service Provider</p>
        <p>The Client</p>
      </div>
      <div class="signature-block" style="display: flex; justify-content: space-between;">
        <p>Witness</p>
        <p>Witness</p>
      </div>
    </div>
  </div>
</div>`;
