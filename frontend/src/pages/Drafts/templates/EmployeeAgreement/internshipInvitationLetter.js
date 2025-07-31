export const internshipInvitationLetterFields = [
  "internFullName",
  "companyName",
  "internshipStartDate",
  "internshipEndDate",
  "internshipDurationWeeks",
  "internshipField",
  "internshipTasks",
  "internshipResearch",
  "internshipCollaboration",
  "internshipParticipation",
  "workDaysStart",
  "workDaysEnd",
  "workStartTime",
  "workEndTime",
  "workDaysPerWeek",
  "workHoursPerDay",
  "workHoursPerWeek",
  "supervisorFullName",
  "acceptanceDeadline",
  "hrContactFullName",
  "hrContactEmail",
  "hrContactPhone",
  "issueDate"
];

export const generateInternshipInvitationLetter = (data) => `<div class="agreement-template">
  <h1 class="agreement-title">Internship Invitation Letter</h1>
  <style>
    .highlight { font-weight: bold; }
  </style>
  <div class="agreement-body">
    <p>Dear <span class="highlight">${data.internFullName}</span>,</p>
    <p>We are pleased to invite you to join our internship program at <span class="highlight">${data.companyName}</span>. This internship opportunity is in compliance with the relevant laws and regulations governing internships in India. We believe that this program will provide you with valuable hands-on experience, professional development, and insights into our industry.</p>
    <p><span class="highlight">${data.companyName}</span> is a reputable organization committed to fostering talent and supporting the growth of future professionals. We offer a dynamic and inclusive work environment where individuals can thrive and develop their skills. As an intern, you will have the opportunity to work closely with our experienced team members and gain practical knowledge in your field of interest.</p>
    <h2>1. POSITION AND DURATION.</h2>
    <p>The duration of the internship program will be <span class="highlight">${data.internshipStartDate}</span> to <span class="highlight">${data.internshipEndDate}</span>, spanning a total of <span class="highlight">${data.internshipDurationWeeks}</span> weeks. During this period, you will be assigned to various projects and tasks related to <span class="highlight">${data.internshipField}</span>. Your responsibilities may include but are not limited to:</p>
    <p>a) Assisting in <span class="highlight">${data.internshipTasks}</span></p>
    <p>b) Conducting <span class="highlight">${data.internshipResearch}</span></p>
    <p>c) Collaborating with team members on <span class="highlight">${data.internshipCollaboration}</span></p>
    <p>d) Participating in <span class="highlight">${data.internshipParticipation}</span></p>
    <h2>2. WORK SCHEDULE.</h2>
    <p>Your working days will be <span class="highlight">${data.workDaysStart}</span> to <span class="highlight">${data.workDaysEnd}</span> from <span class="highlight">${data.workStartTime}</span> to <span class="highlight">${data.workEndTime}</span>. Your working days will be <span class="highlight">${data.workDaysPerWeek}</span> days per week and you are expected to work <span class="highlight">${data.workHoursPerDay}</span> hours per day with one hour lunch break, totaling <span class="highlight">${data.workHoursPerWeek}</span> hours per week. Punctuality and regular attendance are essential. You may occasionally be required to work beyond your regular hours. Please note that the work schedule may be subject to change.</p>
    <h2>3. REPORTING STRUCTURE.</h2>
    <p>During the internship program, you will report directly to <span class="highlight">${data.supervisorFullName}</span>, who will guide and supervise your work. It is important to follow their guidance and seek clarification when needed. You may also collaborate with other team members or departments as required. Regular check-ins and performance evaluations will be conducted to track your progress and provide feedback on your performance.</p>
    <h2>4. COMPENSATION.</h2>
    <p>Please note that this internship is an unpaid position. However, we will provide you with necessary support, guidance, and a structured learning environment to enhance your skills and knowledge.</p>
    <h2>5. CONFIDENTIALITY.</h2>
    <p>As an intern, you will handle confidential information. It is vital that you maintain strict confidentiality during and after your internship. You are responsible for safeguarding the information by using secure passwords, securing files, and being cautious in discussions. Breaching confidentiality may result in the termination of your internship.</p>
    <h2>6. TERMINATION.</h2>
    <p>Either party may terminate the internship at any time, with or without cause and with or without notice. Upon termination, you are responsible for returning any company property, materials, or confidential information. Termination may occur due to factors such as unsatisfactory performance, policy violations, misconduct, or other reasons as determined by the company.</p>
    <h2>7. INTERN'S ACCEPTANCE.</h2>
    <p>To participate in the internship program, you will need to comply with the following requirements:</p>
    <p>a) Be currently enrolled as a student pursuing a degree or diploma program.</p>
    <p>b) Provide proof of enrollment from your educational institution.</p>
    <p>c) Comply with all relevant laws and regulations in India.</p>
    <p>To accept this internship offer, please confirm your availability and acceptance by <span class="highlight">${data.acceptanceDeadline}</span>. You will need to provide the following documents:</p>
    <p>a) Your updated curriculum vitae (CV)</p>
    <p>b) Proof of enrollment from your educational institution</p>
    <p>c) Any additional documents required by our company (if applicable)</p>
    <p>The internship offer will remain open for fourteen (14) days from the date of this letter, unless previously canceled or modified by our company.</p>
    <p>Upon receipt of your acceptance and required documents, we will provide you with further details regarding the internship program, including reporting instructions, dress code, and any specific guidelines or policies applicable during your internship.</p>
    <h2>8. CONTACT INFORMATION.</h2>
    <p>We are confident that this internship will be a valuable experience for your professional development. Should you have any questions or require further information, please do not hesitate to contact <span class="highlight">${data.hrContactFullName}</span> at <span class="highlight">${data.hrContactEmail}</span> or <span class="highlight">${data.hrContactPhone}</span>.</p>
    <p>Thank you for considering this internship opportunity with <span class="highlight">${data.companyName}</span>. We look forward to welcoming you to our team and working together to achieve mutual success.</p>
    <p>Yours sincerely,</p>
    <p>Issued on <span class="highlight">${data.issueDate}</span>.</p>
    <br/>
    <div style="margin-top:40px;">
      <div style="margin-bottom:40px;">
        ______________________<br/>
        The Training Supervisor
      </div>
      <div>
        ______________________<br/>
        The Intern
      </div>
    </div>
  </div>
</div>`;
