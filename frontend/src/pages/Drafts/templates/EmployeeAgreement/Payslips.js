export const payslipFields = [
  "employeeFullName",
  "employeeId",
  "designation",
  "department",
  "payPeriod",
  "payDate",
  "companyName",
  "companyAddress",
  "basicSalary",
  "allowances",
  "overtime",
  "grossSalary",
  "providentFund",
  "professionalTax",
  "incomeTax",
  "totalDeductions",
  "netSalary"
];

export const generatePayslip = (data) => `<div class="agreement-template">
  <h1 class="agreement-title">Payslip</h1>

  <style>
    .highlight { font-weight: bold; }
    .payslip-header { background-color: #f5f5f5; text-align: center; padding: 10px; margin-bottom: 20px; }
    .employee-details { margin: 20px 0; }
    .salary-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
    .salary-table th, .salary-table td { border: 1px solid #000; padding: 8px; text-align: left; }
    .salary-table th { background-color: #f5f5f5; }
    .total-row { font-weight: bold; }
  </style>
  
  <div class="agreement-body">
    <div class="payslip-header">
      <h2><span class="highlight">${data.companyName}</span></h2>
      <p>${data.companyAddress}</p>
    </div>

    <div class="employee-details">
      <h3>Employee Details</h3>
      <div style="display: flex; justify-content: space-between;">
        <div>
          <p><strong>Employee Name:</strong> <span class="highlight">${data.employeeFullName}</span></p>
          <p><strong>Employee ID:</strong> <span class="highlight">${data.employeeId}</span></p>
          <p><strong>Designation:</strong> <span class="highlight">${data.designation}</span></p>
        </div>
        <div>
          <p><strong>Department:</strong> <span class="highlight">${data.department}</span></p>
          <p><strong>Pay Period:</strong> <span class="highlight">${data.payPeriod}</span></p>
          <p><strong>Pay Date:</strong> <span class="highlight">${data.payDate}</span></p>
        </div>
      </div>
    </div>

    <table class="salary-table">
      <thead>
        <tr>
          <th>Earnings</th>
          <th>Amount (INR)</th>
          <th>Deductions</th>
          <th>Amount (INR)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Basic Salary</td>
          <td><span class="highlight">${data.basicSalary}</span></td>
          <td>Provident Fund</td>
          <td><span class="highlight">${data.providentFund}</span></td>
        </tr>
        <tr>
          <td>Allowances</td>
          <td><span class="highlight">${data.allowances}</span></td>
          <td>Professional Tax</td>
          <td><span class="highlight">${data.professionalTax}</span></td>
        </tr>
        <tr>
          <td>Overtime</td>
          <td><span class="highlight">${data.overtime}</span></td>
          <td>Income Tax</td>
          <td><span class="highlight">${data.incomeTax}</span></td>
        </tr>
        <tr class="total-row">
          <td><strong>Gross Salary</strong></td>
          <td><strong><span class="highlight">${data.grossSalary}</span></strong></td>
          <td><strong>Total Deductions</strong></td>
          <td><strong><span class="highlight">${data.totalDeductions}</span></strong></td>
        </tr>
      </tbody>
    </table>

    <div style="text-align: center; margin: 20px 0; padding: 10px; background-color: #f5f5f5;">
      <h3><strong>Net Salary: INR <span class="highlight">${data.netSalary}</span></strong></h3>
    </div>

    <div style="margin-top: 40px;">
      <p><strong>Note:</strong> This is a computer-generated payslip and does not require a signature.</p>
    </div>
  </div>
</div>`;
