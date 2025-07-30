export const remoteWorkingContractFields = [
  "executionDate",
  "companyName",
  "companyRegistrationNumber",
  "remoteWorkerFullName",
  "remoteWorkerIdPassport",
  "jobTitle",
  "salaryAmount",
  "allowanceAmount"
];

export const generateRemoteWorkingContract = (data) => `<div class="agreement-template">
  <h1 class="agreement-title">Remote Working Contract</h1>
  <style>
    .highlight { font-weight: bold; }
  </style>
  <div class="agreement-body">
    <p>This Remote Working Contract shall become effective on <span class="highlight">${data.executionDate}</span> (the "Execution Date") and is subject to the terms and conditions stated below by and between <span class="highlight">${data.companyName}</span> having registration number <span class="highlight">${data.companyRegistrationNumber}</span> (the "Employer") and <span class="highlight">${data.remoteWorkerFullName}</span> holding ID/Passport number <span class="highlight">${data.remoteWorkerIdPassport}</span> (the "Remote Worker"), collectively referred to as the "Parties".</p>
    <p><span class="highlight">THEREFORE,</span> Parties hereby agree to enter into this Agreement according to the following terms and conditions contained therein.</p>
    <h2>1. POSITION.</h2>
    <p>The Employer hereby hires the Remote Worker for a <span class="highlight">full-time</span> position as <span class="highlight">${data.jobTitle}</span>. The Remote Worker must perform any work required for this position and report it to the supervisor or manager. The Remote Worker guarantees the full capacity to complete all the duties and assures no criminal record in India.</p>
    <h2>2. TERMS.</h2>
    <p>This Employment Agreement started on <span class="highlight">${data.executionDate}</span> and shall continue for an <span class="highlight">undefined</span> term (the "Employment Term") until terminated by either party.</p>
    <p>The Remote Worker must complete a probationary period of <span class="highlight">six (6) months</span> starting from the Execution Date. At any time during the probationary period, the Employer will have the right to terminate this Agreement without any compensation to the Remote Worker other than wages owed for hours of work already completed.</p>
    <h2>3. SCOPE OF WORK.</h2>
    <p>The Remote Worker will perform a range of duties and accept such responsibilities as assigned by the Employer. The Remote Worker must comply with any lawful order from the Company. During the Company's employment period, the Remote Worker shall devote his full business time, attention, skills, and efforts to his duties' faithful performance of his position in the Company and as described below:</p>
    <ul>
      <li><span class="highlight">Task management and completion:</span> The Remote Worker is assigned specific tasks or projects and is responsible for their completion within given deadlines.</li>
      <li><span class="highlight">Communication and collaboration:</span> The Remote Worker is expected to communicate and collaborate effectively with team members, supervisors, or clients through various channels such as email, video conferencing, or project management tools.</li>
      <li><span class="highlight">Independent work and self-motivation:</span> The Remote Worker should be self-driven, capable of managing their workload independently, and demonstrate strong self-motivation and accountability.</li>
      <li><span class="highlight">Time management and meeting deadlines:</span> The Remote Worker must prioritize tasks, manage time efficiently, and meet project deadlines to ensure timely completion of work.</li>
      <li><span class="highlight">Adaptability and flexibility:</span> The Remote Worker should be adaptable to changing work requirements and able to switch between tasks or projects as needed. Flexibility in adjusting work schedules to accommodate business needs is also expected.</li>
      <li><span class="highlight">Technology proficiency:</span> The Remote Worker is expected to be proficient in using relevant technology tools and software necessary for their work, including project management platforms, communication tools, and document-sharing platforms.</li>
    </ul>
    <p>The Remote Worker agrees to be subject to the Employer's general supervision and abide by the Company's rules and regulations, including those relating to the Remote Worker's scope of work, working hours and vacation.</p>
    <h2>4. WORK SCHEDULE.</h2>
    <p>The standard work schedule, with an average of <span class="highlight">forty-eight (48) hours</span> per week is set from day to day, from time to time, with a one-hour break or lunchtime. The Remote Worker agrees to adhere to the specified work hours and seek approval from the employer for any deviations from the standard work schedule.</p>
    <p>The Remote Worker shall submit accurate timesheets or documentation for recording their working hours as per the employer's policies and procedures.</p>
    <p>Occasional flexibility may be required for the Remote Worker to accommodate business needs, including attending meetings, participating in projects, or addressing urgent tasks outside of regular work hours. The Remote Worker and employer will strive for a fair distribution of workload and consider the Remote Worker's personal circumstances. Any changes to the schedule require mutual agreement and must be communicated in writing.</p>
    <h2>5. SALARY.</h2>
    <p>The compensation paid monthly to the Remote Worker will include a base salary of INR <span class="highlight">${data.salaryAmount}</span> (Indian Rupees). This compensation will be payable once a month for the duration of the Agreement.</p>
    <h2>6. BENEFITS.</h2>
    <p>During the term of employment, the Remote Worker shall be entitled to participate in all Remote Worker benefit plans as follow:</p>
    <ul>
      <li><span class="highlight">Commission:</span> The Remote Worker shall receive a commission equal to five percent (5%) of gross profits from products/services sold to new customers and generated directly by the Remote Worker.</li>
      <li><span class="highlight">Bonus:</span> The Remote Worker agrees that bonuses or other similar incentive compensation will be at the sole discretion of the Employer.</li>
      <li><span class="highlight">Allowance:</span> The Employer will reimburse the Remote Worker every month for a maximum amount of INR <span class="highlight">${data.allowanceAmount}</span> (Indian Rupees) for internet and telephone charges related to the Employer's operations.</li>
      <li><span class="highlight">Life insurance:</span> The Remote Worker will be provided with life and health insurance at the Employer's expense, in such amounts as the Employer may determine.</li>
      <li><span class="highlight">Social security (EPF):</span> The Employer will register the Remote Worker with Social Security.</li>
    </ul>
    <h2>7. PERFORMANCE EVALUATION.</h2>
    <p>The Remote Worker's performance will be evaluated annually, with the first evaluation occurring after <span class="highlight">three (3) months</span> of remote work. The evaluation will assess task completion, work quality, meeting deadlines, communication skills, teamwork, and overall job performance. During the evaluation, the Remote Worker will receive feedback on their strengths and areas for improvement, supported by specific examples and measurable achievements. The evaluation results will be considered for decisions regarding promotions, salary adjustments, bonuses, and other employment-related matters.</p>
    <h2>8. COMMUNICATION AND COLLABORATION.</h2>
    <p>The Parties shall establish effective communication channels, including email, phone calls, video conferencing, and instant messaging to maintain regular contact throughout the remote working arrangement, ensuring prompt responses, regular check-ins, and updates to foster collaboration and transparency.</p>
    <p>Project management and collaboration tools such as software, cloud storage, and virtual platforms will be used to facilitate efficient workflow, task management, and secure sharing of sensitive information in compliance with relevant laws.</p>
    <p>The Remote Worker will provide work updates, milestones, and address challenges impacting deadlines or performance. The Remote Worker agrees to participate in virtual meetings foster teamwork, open communication, and professional development. Prompt reporting and alternative solutions will be prioritized for technical difficulties.</p>
    <h2>9. EQUIPMENT AND TECHNOLOGY.</h2>
    <p>The Employer shall provide necessary equipment and technology to enable the Remote Worker to perform their job duties effectively. This may include, but is not limited to [computer, software and other relevant tools, e.g., a laptop, monitor, and necessary software licenses]. The Remote Worker agrees to use the provided equipment and technology solely for work-related purposes and in compliance with the employer's policies and guidelines.</p>
    <p>The Remote Worker shall take reasonable care to safeguard the equipment and technology from damage, loss, or unauthorized use.</p>
    <p>The Remote Worker shall promptly report any malfunction, damage, or technical issues related to the provided equipment or technology to the employer. The employer shall make reasonable efforts to address and resolve such issues in a timely manner.</p>
    <h2>10. DATA SECURITY AND CONFIDENTIALITY.</h2>
    <p>During the employment period, and after two (2) years from the employment termination, the Remote Worker shall not disclose any confidential information. The Remote Worker acknowledges that the confidential information is the exclusive property of the Employer. Confidential information will include all files, data, clients and prospects information, software, research, materials, or other intellectual property that shall belong to the Company.</p>
    <p>The remote worker shall adhere to all applicable data protection and privacy laws, regulations, and guidelines in handling and storing confidential information. He shall implement appropriate security measures to prevent unauthorized access, loss, theft, or misuse of confidential data.</p>
    <p>The Remote Worker shall use designated systems, networks, and software provided by the employer for handling confidential information. Personal or unauthorized devices or applications that may compromise data security and confidentiality are prohibited.</p>
    <h2>11. VACATION.</h2>
    <p>The Remote Worker will be entitled to the following paid vacation each year during the term of this Agreement:</p>
    <ul>
      <li><span class="highlight">Annual leave:</span> The Employee shall be entitled to seven (7) working days of paid vacation leave if he has been employed with the Company for at least <span class="highlight">three (3) months.</span> The Employee must give the Employer at least<span class="highlight">seven (7) days'</span> notice before taking a vacation.</li>
      <li><span class="highlight">Sick leave:</span> The Remote Worker will be granted sick leave with pay upon informing the Employer before and providing a medical certificate to the Employer.</li>
      <li><span class="highlight">Additional leave:</span> Additional leave taken will be granted and granted at the Employer's discretion.</li>
    </ul>
    <h2>12. EXPENSES.</h2>
    <p>The Remote Worker is entitled to reimbursement of approved work-related expenses incurred during remote work. This includes <span class="highlight">equipment and supplies, travel expenses, and professional development costs.</span> Reimbursement is subject to prior approval from the employer and compliance with reimbursement procedures. The Remote Worker must submit accurate expense reports with supporting documentation at least <span class="highlight">one (1) week</span> before the monthly accounting closing date to be eligible for reimbursement.</p>
    <h2>13. TERMINATION.</h2>
    <p>Either party may terminate this Agreement for any reason or without providing a specific cause by providing thirty (30) days' written notice to the other party. Upon termination for convenience, the terminating party shall not be liable for any compensation or damages to the non-terminating party, except for any outstanding payment obligations or liabilities accrued before the effective date of termination.</p>
    <p>Either party may terminate this Agreement in the event of a material breach by the other party by providing written notice specifying the nature of the breach. The breaching party shall have a cure period of thirty (30) days from the receipt of the notice to remedy the breach. If the breach is not cured within the specified period, the non-breaching party may terminate this Agreement with immediate effect.</p>
    <p>Either party may terminate this Agreement if the performance of its obligations under this Agreement is prevented or delayed due to force majeure events beyond its reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, strikes, labor disputes, or government regulations.</p>
    <h2>14. ENTIRE AGREEMENT.</h2>
    <p>This Agreement contains all terms and conditions agreed to by the Parties, including any attachments or appendices. This Agreement replaces all previous oral discussions, agreements, and understandings relating to the remote work.</p>
    <h2>15. GOVERNING LAW.</h2>
    <p>This Employment Agreement shall be governed by and construed and interpreted in accordance with Indian laws.</p>
    <p>This Agreement is drawn up in two (2) identical copies, one for each Party. Both Parties have read and fully understood this Agreement. This Agreement shall become effective and legally binding upon signature by each of the Parties.</p>
    
    <h2>SIGNED BY:</h2>
    <div class="signatures">
      <div class="signature-block" style="display: flex; justify-content: space-between; margin-top: 40px;">
        <div>
          <p>The Employer</p>
          <p>The Remote Worker</p>
        </div>
        <div>
          <p>The Witness</p>
          <p>The Witness</p>
        </div>
      </div>
    </div>
  </div>
</div>`;
