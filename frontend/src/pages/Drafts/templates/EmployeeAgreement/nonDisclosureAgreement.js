export const nonDisclosureAgreementFields = [
  "executionDate",
  "companyName",
  "companyRegistrationNumber",
  "employerFullName",
  "employeeFullName"
];

export const generateNonDisclosureAgreement = (data) => `<div class="agreement-template">
  <h1 class="agreement-title">Non-disclosure Agreement</h1>
  <style>
    .highlight { font-weight: bold; }
  </style>
  <div class="agreement-body">
    <p>
      This Non-disclosure Agreement shall become effective on <span class="highlight">${data.executionDate}</span> (the "Execution Date") and is subject to the terms and conditions stated below by and between <span class="highlight">${data.companyName}</span> (the "Company") having registration number <span class="highlight">${data.companyRegistrationNumber}</span> and represented by <span class="highlight">${data.employerFullName}</span>, authorized Director (the "Employer") and <span class="highlight">${data.employeeFullName}</span> (the "Employee"), collectively referred to as the "Parties".
    </p>
    <p>
      <span class="highlight">IN CONSIDERATION</span> and as a condition of the Employer, the Parties agree as follows:
    </p>
    <h2>1. CONFIDENTIAL INFORMATION.</h2>
    <p>
      Written and oral information and materials disclosed or provided by the Employer to the Employee during his employment term constitute confidential information (the "Confidential Information"), whether such information was provided before or after the Execution Date of this Agreement.
    </p>
    <p>
      The Employee acknowledges that the Confidential Information is the exclusive property of the Employer. Confidential Information includes but not limited to all data and information relating to the Employer, employees, suppliers, clients and any information of any kind, nature, or description concerning any matters affecting or relating to Employee's services for the Employer, the business, or operations of the Employer, and/or the processes, or other data of the Employer.
    </p>
    <h2>2. NON-DISCLOSURE OBLIGATION.</h2>
    <p>
      During the employment period, and after <span class="highlight">two (2) years</span> from the Employer's termination, the Employee shall not disclose any confidential information to anyone outside of the Employer, or use, copied, published, or summarized any confidential information. Such obligations shall continue indefinitely.
    </p>
    <h2>3. INFORMATION EXCLUDED.</h2>
    <p>
      The following information is not subject to the obligations of this Agreement:
      <br>
      <ul>
      <li>Information that is or becomes publicly available without breach of this Agreement; or</li>
      <li>Information that the Employer has authorized the Employee to disclose.</li>
      </ul>
    </p>
    <h2>4. GOVERNING LAW.</h2>
    <p>This Agreement shall be governed by and construed in accordance with the laws of India.</p>
    <p>This Agreement is drawn up in two (2) identical copies, one for each Party. Both Parties have read and fully understood this Agreement. This Agreement shall become effective and legally binding upon signature by each of the Parties.</p>

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
  </div>
</div>`;
