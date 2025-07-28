export const employmentCertificateFields = [
  "employeeFullName",
  "companyName",
  "registrationNumber",
  "companyAddress",
  "directorFullName",
  "position",
  "employmentStartDate",
  "employmentEndDate",
  "monthlySalary",
  "allowance",
  "issueDate"
];

export const generateEmploymentCertificate = (data) => `<div class="employment-certificateagreementass="agreement-title">Employment Certificate</h1>
  <style>
    .highlight { font-weight: bold; }
  </style>
  <div class="agreement-body">
    <p><strong>To Whom It May Concern,</strong></p>
    <p>
      This is to certify that <span class="highlight">${data.employeeFullName}</span> is an employee of <span class="highlight">${data.companyName}</span>, having registration number <span class="highlight">${data.registrationNumber}</span>, having its registered offices at <span class="highlight">${data.companyAddress}</span>, India and represented by <span class="highlight">${data.directorFullName}</span>, authorized Director (the "Employer").
    </p>
    <ul>
      <li><span class="highlight">Position: ${data.position}</span></li>
      <li><span class="highlight">Duration of Employment: From ${data.employmentStartDate}</span> to <span class="highlight">${data.employmentEndDate}</span></li>
      <li><span class="highlight">Monthly salary: INR ${data.monthlySalary}</span> (Indian Rupees)</li>
      <li><span class="highlight">Allowance:</span> INR <span class="highlight">${data.allowance}</span> (Indian Rupees)</li>
    </ul>
    <p>
      This certification is being given upon the request of <span class="highlight">${data.employeeFullName}</span> for whatever purpose it may serve.
    </p>
    <p>Sincerely,</p>
    <p>Issued on <span class="highlight">${data.issueDate}</span>.</p>
    <p>_________________________</p>
    <p>The Employer</p>
  </div>
</div>`;
