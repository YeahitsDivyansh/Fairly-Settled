export const employeeTerminationFields = [
   "employeeName",
   "companyName",
   "lastWorkingDate",
   "employeeSalary",
   "severancePays",
   "unusedAnnualLeave",
   "itemsReturningLastDate",
   "effectiveDate",
];

export const generatEmployeeTerminationletter = (
  data
) => `<div class="agreement-template">
  <h1 class="agreement-title">Employment Agreement</h1>

  <style>
    .highlight { font-weight: bold; }
    </style>
  
  <div class="agreement-body">    
    <p>To the attention of <span class="highlight">${data.employeeName}</span> (the "Employee"),</p>
    <p>This is to inform you that your employment with <span class="highlight">${data.companyName}</span> (the "Company") has been terminated which your last day of work has been scheduled for <span class="highlight">${data.lastWorkingDate}</span> as a result of your misconduct, namely:</p>
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

    <p>In accordance with your employment agreement, the Company will pay you the following amount as compensation:</p>

    <table>
        <thead>
        <td>
        <tr></tr>
        <tr></tr>
        </td>
        </thead>
        <tbody>
        <td>
        <tr>Last month's salary:</tr>
        <tr>INR <span class="highlight">${data.employeeSalary}</span> (Indian Rupees)</tr>
        </td>
        <td>
        <tr>Severance pays:</tr>
        <tr>INR <span class="highlight">${data.severancePays}</span> (Indian Rupees)</tr>
        </td>
        <td>
        <tr>Unused annual leave:</tr>
        <tr>INR <span class="highlight">${data.unusedAnnualLeave}</span> (Indian Rupees)</tr>
        </td>
        </tbody>
    </table>
    <p>We would kindly request you to return on <span class="highlight">${data.itemsReturningLastDate}</span> all company properties that have been loaned out during your employment.</p>

    <p>Issued on <span class="highlight">${data.effectiveDate}</span>.</p>

    <p>_________________________</p>
    <p>The Employer</br><span class=highlight">Employment Acknowledgment<span></p>





    <p>I undersigned <span class="highlight">${data.employeeName}</span>, Employee of <span class="highlight">${data.companyName}</span>acknowledge my employment termination reception. I have carefully read and fully understand all the provisions of the termination of my employment.</p>

    <p>In consideration of the indemnity offered by <span class="highlight">${data.companyName}</span> the employee releases and discharges the employer from all known and unknown claims,liabilities, demands, and causes of action, which the employee may have or claim to have against the employer and the employee hereby agrees not to file any claim or suit to enforce such claims.</p>

    <p>Issued on .</p>

     p>_________________________</p>
    <p>The Employee</p>


  </div>+
</div>`;
