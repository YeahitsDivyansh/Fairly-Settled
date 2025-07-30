export const warningLetterFields = [
  "employeeFullName"
];

export const generateWarningLetter = (data) => `<div class="agreement-template">
  <h1 class="agreement-title">Warning Letter</h1>
  <style>
    .highlight { font-weight: bold; }
    .signature-line { margin-top: 40px; margin-bottom: 10px; }
  </style>
  <div class="agreement-body">
    <p>To the attention of <span class="highlight">${data.employeeFullName}</span>.</p>
    <p>
      This letter serves as a formal warning letter for the incident that occurred during your work schedule and concerning your misconduct, namely:
      <br>
      <ul>
        <li>[ ] Professional obligation failure</li>
        <li>[ ] Frequently late</li>
        <li>[ ] Absent from work without authorization</li>
        <li>[ ] Confidential information disclosure</li>
        <li>[ ] Health and safety policy violation</li>
        <li>[ ] Drug and alcohol policy violation</li>
        <li>[ ] Company property steal</li>
        <li>[ ] Co-worker threatened</li>
      </ul>
    </p>
    <p>
      Our internal policy aims to make the working environment and corporate culture disciplined and safe for the Company and the employees. We, therefore, expect every employee to comply with our company's policies and rules.
    </p>
    <p>
      We expect you to improve your behavior immediately, as we still believe that you are a valuable employee of the Company.
    </p>
    <p>
      Failure to comply with the terms of this written warning, the emergence of new or related issues and/or continued unsatisfactory performance will result in more serious corrective action up to and including termination of your Employment Agreement.
    </p>
    <p>Sincerely,</p>
    <h2>SIGNED BY:</h2>
    <div class="signatures">
      <div class="signature-block" style="display: flex; justify-content: space-between; margin-top: 40px;">
        <div>
          <p>The Employer</p>
          <p>The Employee</p>
        </div>
        <div>
          <p>The Witness</p>
          <p>The Witness</p>
        </div>
      </div>
    </div>
    <p>
      By signing this letter, the employee does not make any wrong-doing admission, nor is the employee necessarily agreeing with this letter's content. The employee's signature only acknowledges that the employee has received this letter and that the employer, and the company management have discussed the content of this letter, including the specific plans for improvement and the consequences of future infractions.
    </p>
  </div>
</div>`;
