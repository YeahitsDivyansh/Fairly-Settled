export const resignationLetterFields = [
  "companyName",
  "reason",
  "lastDay",
  "executionDate",
  "employeeName"
];

export const generateResignationLetter = (data) => `<div class="agreement-template"></div>
  <h1 class="agreement-title">Resignation Letter</h1>
  <style>
    .highlight { font-weight: bold; }
  </style>
  <div class="agreement-body">
    <p>To whom It May Concern,</p>
    <p>
      Please accept this letter as notice of my resignation from <span class="highlight">${data.companyName}</span> (the "Company").
    </p>
    <p>
      I have enjoyed my time at <span class="highlight">${data.companyName}</span> but have chosen to leave to <span class="highlight">${data.reason}</span>. My last day will be <span class="highlight">${data.lastDay}</span>.
    </p>
    <p>
      Thank you for your help and guidance during my employment with the Company. I wish you and the Company much success in the future. If I can do anything to help during this transition, please let me know.
    </p>
    <p>Sincerely,</p>
    <p>Issued on <span class="highlight">${data.executionDate}</span>.</p>
    <div style="margin-top:40px;">
      <p>_________________________</p>
      <p>The Employee</p>
    </div>
  </div>
</div>`;
