export const employmentAgreementFields = [
  "effectiveDate",
  "companyName",
  "companyRegistration",
  "employerDirectorName",
  "employeeName",
  "jobTitle",
  "companyAddress",
  "employeeSalary",
  "commission",
  "Allowance",
];

export const generateEmploymentAgreement = (data) => `<div class="agreement-template">
  <h1 class="agreement-title">Employment Agreement</h1>

  <style>
    .highlight { font-weight: bold; }
    </style>
  
  <div class="agreement-body">    
    <p>This Employment Agreement shall become effective on <span class="highlight">${data.effectiveDate}</span> (the "Execution Date") and is subject to the terms and conditions stated below by and between <span class="highlight">${data.companyName}</span> having registration number <span class="highlight">${data.companyRegistration}</span> and represented by <span class="highlight">${data.employerDirectorName}</span>, authorized Director (the "Employer") and <span class="highlight">${data.employeeName}</span> (the "Employee"), collectively referred to as the "Parties".</p>
    <p><span class="highlight">THEREFORE,</span> the Employer hereby hires the Employee for a <span class="highlight">full-time</span> position as <span class="highlight">${data.jobTitle}</span>. The Employee must perform any work required for this position and report it to the supervisor or manager. The Employee guarantees the full capacity to complete all the duties and assures no criminal record in India.</p>

    <h2>2. TERMS.</h2>
    <p>This Employment Agreement started on <span class="highlight">${data.effectiveDate}</span> and shall continue for an indefinite term (the "Employment Term") until terminated by either party.</p>
    <p>The Employee must complete a probationary period of six (6) months starting from the Execution Date. At any time during the probationary period, the Employer will have the right to terminate this Agreement without any compensation to the Employee other than wages owed for hours of work already completed.</p>

    <h2>3. SCOPE OF WORK.</h2>
    <p>This Employment Agreement started on [date, e.g., July 22, 2025] and shall continue for an <span class="highlight">indefinite</span> term (the "Employment Term") until terminated by either party.</p>
    <p>The Employee must complete a probationary period of six (6) months starting from the Execution Date. At any time during the probationary period, the Employer will have the right to terminate this Agreement without any compensation to the Employee other than wages owed for hours of work already completed.</p>

    <h2>3. SCOPE OF WORK.</h2>
    <p>The Employee will carry out duties and responsibilities assigned by the Employer and must follow any lawful directives from the Company. During employment, the Employee is expected to dedicate their full business time, attention, skills, and efforts to performing their role as described.</p>
    <ul>
        <li><span class="highlight">Lead Generation:</span> Research and obtain potential client leads through various channels, including events.</li>
        <li><span class="highlight">Revenue Generation: Grow new and existing client revenue, and upsell additional products/services.</li>
        <li><span class="highlight">Profit Generation:</span> Sell products/services to meet targeted profit margins.</li>
        <li><span class="highlight">Strategy Alignment:</span> Sell new products/services in line with Company strategy.</li>
        <li><span class="highlight">Satisfaction:</span> Ensure a positive customer experience and enhance Company recognition.</li>
    </ul>
    <p>The Employee agrees to adhere to the Employer's supervision and comply with the Company's rules and regulations, including those governing the Employee's duties, working hours, and vacation.</p>

    <h2>4. WORKPLACE.</h2>
    <p>The Employee will perform duties at the following company address: <span class="highlight">${data.companyAddress}</span>, India.</p>
    <p>From time to time, the Company may request the Employee to work in other locations in India.</p>
    
    <h2>5. WORKING HOURS.</h2>
    <p>The Employee's standard workweek shall average <span class="highlight">forty-eight (48) hours.</span> The Employee agrees to adjust their working hours as required by the Employer, which may include slightly different hours from time to time. Any additional hours worked beyond this standard will be subject to overtime regulations as per Singapore law.</p>

    <h2>6. SALARY.</h2>
    <p>The compensation paid monthly to the Employee will include a base salary of INR <span class="highlight">${data.employeeSalary}</span> (Indian Rupees). This compensation will be payable once a month for the duration of the Agreement.</p>

    <h2>7. BENEFITS.</h2>
    <p>The Employee will be entitled to the following benefits during employment:</p>
    <ul>
        <li><span class="highlight">Commission: <span class="highlight">${data.commission}</span></span> of gross profits from new customers directly generated by the Employee.</li>
        <li><span class="highlight">Bonus: Awarded at the Employer's discretion based on performance.</li>
        <li><span class="highlight">Allowance:</span> Monthly reimbursement up to INR <span class="highlight">${data.allowance}</span> (Indian Rupees) for phone and transportation expenses within India.</li>
        <li><span class="highlight">Insurance:</span> Employer-provided life and health insurance in compliance with local regulations.</li>
        <li><span class="highlight">Provident Fund (PF) Contributions:</span> The Employer will register the Employee with the Employees' Provident Fund Organization (EPFO) and make mandatory contributions.</li>
    </ul>

    <h2>8. VACATION.</h2>
    <p>The Employee will be entitled to the following paid vacation each year during the term of this Agreement:</p>
    <ul>
        <li><span class="highlight">Annual leave:</span> The Employee shall be entitled to <span class="highlight">twelve (12)</span> working days of paid vacation leave if he has been employed with the Company for at least <span class="highlight">eight (8)</span> months. The Employee must give the Employer at least <span class="highlight">seven (7) days'</span> notice before taking a vacation.</li>
        <li><span class="highlight">Sick leave:</span> The Employee is entitled to paid sick leave upon informing the Employer in advance and providing a medical certificate. The number of sick leave days will be as per the regulations set by the respective state government or the company's leave policy.</li>
        <li><span class="highlight">Additional leave:</span> Any additional leave taken will be unpaid and granted at the Employer's discretion, subject to approval and the company's internal policies.</li>
    </ul>

    <h2>9. NON-SOLICITATION.</h2>
    <ul>
        <li><span class="highlight">Clients:</span> During the term of this Agreement and for <span class="highlight">two (2) years</span> following its termination, the Employee shall not solicit the other party's customer to offer services.</li>
        <li><span class="highlight">Employees:</span> The Employee undertakes during the term of this Agreement and, for <span class="highlight">two (2) years</span> following its termination, shall not recruit or solicit the Company's employee in a business or contractual relationship.</li>
        <li><span class="highlight">Business Associates:</span> The Employee undertakes not to recruit or solicit the Employer's business partners, either in India or abroad, to engage in any business or contractual relationship during the term of this Agreement and for <span class="highlight">two (2) years</span> after its termination.</li>
    </ul>

    <h2>10. INTELLECTUAL PROPERTY.</h2>
    <p>The Employer is the sole and exclusive owner of all intellectual property rights related to its products, information, data, marketing materials, accounting records, administrative information, trademarks, logos, domain names, and any other distinctive signs used by the Employer.</p>
    <p>The Employee acknowledges and agrees that they have no rights or claims over the Employer's intellectual property, including but not limited to the Employer's properties and products.</p>
    <p>Upon termination of this Contract, the Employee shall promptly return to the Employer all property, including goods, documents, records, and confidential information, that belong to the Employer.</p>

    <h2>11. CONFIDENTIAL INFORMATION.</h2>
    <p>During the employment period and for a period of <span class="highlight">five (5) years</span> following the termination of employment, the Employee shall not disclose any confidential information. The Employee acknowledges that all confidential information is the exclusive property of the Employer.</p>
    <p> Confidential information includes, but is not limited to, files, data, client and prospect information, software, research, materials, and other intellectual property belonging to the Employer.</p>

    <h2>12. TERMINATION.</h2>
    <p>Either party may terminate this Agreement at any time, with or without cause, by providing the following notice periods:</p>
    <ul>
        <li><span class="highlight">One (1) day</span> if employed for less than three (3) months.</li>
        <li><span class="highlight">One (1) week</span> if employed for three (3) months or more but less than one (1) year.</li>
        <li><span class="highlight">Two (2) weeks</span> if employed for one (1) year or more but less than five (5) years.</li>
        <li><span class="highlight">Four (4) weeks</span> if employed for five (5) years or more.</li>
    </ul>
    <p>If the Employer terminates the Agreement for cause, the Employee will not be entitled to any bonus or additional compensation, except as required by law. Cause includes serious misconduct, breach of employment terms, or any other ground as prescribed under the Industrial Disputes Act, 1947, or other applicable laws.</p>
    <p>If the required notice is not provided, the terminating party must pay the equivalent salary for the notice period in lieu of notice. Upon termination, the Employee must return all Company property, including documents, computers, keys, and other materials, and settle any outstanding obligations.</p>

    <h2>13. GOVERNING LAW.</h2>
    <p>This Employment Agreement shall be governed by and construed in accordance with the laws of India.</p>
    <p>This Agreement is drawn up in two (2) identical copies, one for each party.</p>

    <h2>SIGNED BY-</h2>
    <div class="signatures">
      <div class="signature-block" style="display: flex; justify-content: space-between;">
        <p>The Employer</p>
        <p>The Employee</p>
      </div>
      <div class="signature-block" style="display: flex; justify-content: space-between;">
        <p>The Witness</p>
        <p>The Witness</p>
      </div>
    </div>
  </div>
</div>`;
