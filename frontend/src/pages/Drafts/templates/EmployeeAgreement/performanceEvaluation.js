export const performanceEvaluationFields = [
  "employeeName",
  "jobTitle",
  "executionDate"
];

export const generatePerformanceEvaluation = (data) => `<div class="agreement-template"></div>
  <h1 class="agreement-title">Performance Evaluation</h1>
  
  <div class="agreement-body">
    <p>The purpose of this evaluation is to assess the employee's performance in his current position and to evaluate his commitment to his duties and field of activity. This assessment highlights the employee's strengths and successes and identifies areas for improvement.</p>
    
    <div class="agreement-table">
      <table border="1" cellpadding="8" cellspacing="0" style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr>
          <th style="width: 40%; border: 1px solid #000; padding: 8px; background-color: #f5f5f5;">Performance</th>
          <th style="width: 20%; border: 1px solid #000; padding: 8px; background-color: #f5f5f5;">Poor</th>
          <th style="width: 20%; border: 1px solid #000; padding: 8px; background-color: #f5f5f5;">Satisfactory</th>
          <th style="width: 20%; border: 1px solid #000; padding: 8px; background-color: #f5f5f5;">Outstanding</th>
        </tr>
        <tr>
          <td style="border: 1px solid #000; padding: 8px;">Communication:</td>
          <td style="border: 1px solid #000; padding: 8px; text-align: center;">[ ]</td>
          <td style="border: 1px solid #000; padding: 8px; text-align: center;">[ ]</td>
          <td style="border: 1px solid #000; padding: 8px; text-align: center;">[ ]</td>
        </tr>
        <tr>
          <td style="border: 1px solid #000; padding: 8px;">Motivation:</td>
          <td style="border: 1px solid #000; padding: 8px; text-align: center;">[ ]</td>
          <td style="border: 1px solid #000; padding: 8px; text-align: center;">[ ]</td>
          <td style="border: 1px solid #000; padding: 8px; text-align: center;">[ ]</td>
        </tr>
        <tr>
          <td style="border: 1px solid #000; padding: 8px;">Behavior:</td>
          <td style="border: 1px solid #000; padding: 8px; text-align: center;">[ ]</td>
          <td style="border: 1px solid #000; padding: 8px; text-align: center;">[ ]</td>
          <td style="border: 1px solid #000; padding: 8px; text-align: center;">[ ]</td>
        </tr>
        <tr>
          <td style="border: 1px solid #000; padding: 8px;">Professionalism:</td>
          <td style="border: 1px solid #000; padding: 8px; text-align: center;">[ ]</td>
          <td style="border: 1px solid #000; padding: 8px; text-align: center;">[ ]</td>
          <td style="border: 1px solid #000; padding: 8px; text-align: center;">[ ]</td>
        </tr>
        <tr>
          <td style="border: 1px solid #000; padding: 8px;">Sales Skills:</td>
          <td style="border: 1px solid #000; padding: 8px; text-align: center;">[ ]</td>
          <td style="border: 1px solid #000; padding: 8px; text-align: center;">[ ]</td>
          <td style="border: 1px solid #000; padding: 8px; text-align: center;">[ ]</td>
        </tr>
        <tr>
          <td style="border: 1px solid #000; padding: 8px;">Decision-making:</td>
          <td style="border: 1px solid #000; padding: 8px; text-align: center;">[ ]</td>
          <td style="border: 1px solid #000; padding: 8px; text-align: center;">[ ]</td>
          <td style="border: 1px solid #000; padding: 8px; text-align: center;">[ ]</td>
        </tr>
        <tr>
          <td style="border: 1px solid #000; padding: 8px;">Responsibility:</td>
          <td style="border: 1px solid #000; padding: 8px; text-align: center;">[ ]</td>
          <td style="border: 1px solid #000; padding: 8px; text-align: center;">[ ]</td>
          <td style="border: 1px solid #000; padding: 8px; text-align: center;">[ ]</td>
        </tr>
        <tr>
          <td style="border: 1px solid #000; padding: 8px;">Teamwork:</td>
          <td style="border: 1px solid #000; padding: 8px; text-align: center;">[ ]</td>
          <td style="border: 1px solid #000; padding: 8px; text-align: center;">[ ]</td>
          <td style="border: 1px solid #000; padding: 8px; text-align: center;">[ ]</td>
        </tr>
        <tr>
          <td style="border: 1px solid #000; padding: 8px;">Creativity:</td>
          <td style="border: 1px solid #000; padding: 8px; text-align: center;">[ ]</td>
          <td style="border: 1px solid #000; padding: 8px; text-align: center;">[ ]</td>
          <td style="border: 1px solid #000; padding: 8px; text-align: center;">[ ]</td>
        </tr>
      </table>
    </div>
    
    <p>I confirm that this report fairly represents the performance evaluation of <span class="highlight">${data.employeeName}</span>, <span class="highlight">${data.jobTitle}</span>.</p>
    
    <p>Issued on <span class="highlight">${data.executionDate}</span>.</p>
    
    <div style="margin-top: 30px;">
      <div style="width: 250px; border-top: 1px solid #000;"></div>
      <p>The Employer</p>
    </div>
  </div>
</div>`;
