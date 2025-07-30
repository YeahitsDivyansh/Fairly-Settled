export const nonCompeteAgreementFields = [
  "executionDate",
  "companyName",
  "companyRegistrationNumber",
  "employerFullName",
  "employeeFullName"
];

export const generateNonCompeteAgreement = (data) => `<div class="agreement-template">
  <h1 class="agreement-title">Non-compete Agreement</h1>
  <style>
    .highlight { font-weight: bold; }
    .signature-line { margin-top: 40px; margin-bottom: 20px; }
  </style>
  <div class="agreement-body">
    <p>
      This Non-compete Agreement shall become effective on <span class="highlight">${data.executionDate}</span> (the "Execution Date") and is subject to the terms and conditions stated below by and between <span class="highlight">${data.companyName}</span> (the "Company") having registration number <span class="highlight">${data.companyRegistrationNumber}</span> and represented by <span class="highlight">${data.employerFullName}</span>, authorized Director (the "Employer") and <span class="highlight">${data.employeeFullName}</span> (the "Employee"), collectively referred to as the "Parties".
    </p>
    <p>
      IN CONSIDERATION and as a condition of the Employer, the Parties to this Agreement agree as follows:
    </p>
    <h2>1. NON-COMPETITION.</h2>
    <p>
      During the employment period with the Employer and after two (2) years after the employment termination, the Employee shall not:
      <ul>
        <li>Directly or indirectly engage in any business or activity that competes with the Company, its subsidiaries, or affiliated entities.</li>
        <li>Engage in other activities that may cause conflicts with the Company's interests during the term of the employment agreement.</li>
      </ul>
      The Employee hereby undertakes to immediately inform the Company of any offer of employment, or any other commitment or arrangement made to him/her by one or more third parties that may result in a violation of this clause.
    </p>
    <h2>2. NON-SOLICITATIONS.</h2>
    <p>
      During the employment period with the Company and after two (2) years after the employment termination, the Employee shall not:
      <ul>
        <li>Induce or attempt to induce any employee or contractor of the Company to quit employment or retainer with the Employer.</li>
        <li>Interfere with or disrupt the Company's relationship with its employees and contractors.</li>
        <li>Provide information about competitive employment to any of the Company's employees or contractors, or</li>
        <li>Solicit, entice, or hire away any employee or contractor of the Company for an employment opportunity that competes with the Employer.</li>
      </ul>
    </p>
    <h2>3. GOVERNING LAW.</h2>
    <p>
      This Agreement shall be governed by and construed in accordance with the laws of India.<br>
      This Agreement is drawn up in two (2) identical copies, one for each Party. Both Parties have read and fully understood this Agreement. This Agreement shall become effective and legally binding upon signature by each of the Parties.
    </p>
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
