export const probationPeriodTerminationFields = [
  "employeeFullName",
  "companyName",
  "terminationDate",
  "hrContactFullName",
  "issueDate"
];

export const generateProbationPeriodTerminationLetter = (data) => `<div class="agreement-template">
  <h1 class="agreement-title">Probation Period Termination Letter</h1>
  <style>
    .highlight { font-weight: bold; }
  </style>
  <div class="agreement-body">
    <p>To the attention of <span class="highlight">${data.employeeFullName}</span>,</p>
    <p>We regret to inform you that, after a thorough evaluation of your skills, capabilities, and overall performance during the probationary period, we have determined that your performance does not meet the expectations set forth for the position.</p>
    <p>As a result, we are unable to continue your employment with <span class="highlight">${data.companyName}</span>. This decision is made in accordance with the terms and conditions outlined in your employment agreement. As per the agreement, we are providing you with a notice period of <span class="highlight">thirty (30) days</span>, effective immediately. During this notice period, you are expected to fulfill your remaining duties and responsibilities to the best of your ability.</p>
    <p>Please be aware that upon the date <span class="highlight">${data.terminationDate}</span> (the "Termination Date"), you will be required to return any company property and any information related to your employment with the company.</p>
    <p>You are reminded of your ongoing responsibility to maintain the confidentiality of proprietary and confidential information acquired during your employment, even after termination. Compliance with these obligations is essential, and you must refrain from disclosing or using such information.</p>
    <p>If you have any questions or require further clarification regarding this termination, please do not hesitate to contact <span class="highlight">${data.hrContactFullName}</span>.</p>
    <p>Yours sincerely,</p>
    <p>Issued on <span class="highlight">${data.issueDate}</span>.</p>
    <p>_________________________</p>
    <p>The Employer</p>

    <h2 class="highlight">Employment Acknowledgment</h2>
    <p>I undersigned <span class="highlight">${data.employeeFullName}</span>, employee of <span class="highlight">${data.companyName}</span> acknowledge my employment termination reception. I have carefully read and fully understand all the provisions of the termination of my employment. My employment will be terminated on <span class="highlight">${data.terminationDate}</span> in accordance with the 30-day notice period required by the Employer. I confirm that all company property and any information related to the employment will be returned by the Termination Date. Furthermore, I understand and agree to maintain the confidentiality of proprietary and confidential information acquired during the employment, even after termination.</p>
    <p>In consideration of the indemnity offered by the company, I release and discharge the Employer from all known and unknown claims, liabilities, demands, and causes of action, which I may have or claim to have against the Employer and I hereby agree not to file any claim or suit to enforce such claims.</p>
    <p>Issued on <span class="highlight">${data.issueDate}</span>.</p>

    <p>_________________________</p>
    <p>The Employee</p>
  </div>
</div>`;
