export const freelanceContractFields = [
  "freelancerName",
  "freelancerAddress",
  "clientName",
  "clientAddress",
  "projectDescription",
  "projectFee",
  "paymentTerms",
  "deadline",
  "revisions",
  "copyrightTerms",
  "signingDate"
];

export const generateFreelanceContract = (data) => `<div class="agreement-template">
  <h1 class="agreement-title">FREELANCE CONTRACT</h1>

  <div class="agreement-body">
    <p>This Freelance Contract (the "Contract") is entered into on <span class="highlight">${data.signingDate}</span>, between:</p>

    <p><strong>FREELANCER:</strong> <span class="highlight">${data.freelancerName}</span>, residing at <span class="highlight">${data.freelancerAddress}</span> (the "Freelancer")</p>

    <p><strong>CLIENT:</strong> <span class="highlight">${data.clientName}</span>, located at <span class="highlight">${data.clientAddress}</span> (the "Client")</p>

    <h2>1. PROJECT DESCRIPTION</h2>
    <p>1.1 The Freelancer agrees to complete the following project: <span class="highlight">${data.projectDescription}</span></p>

    <h2>2. COMPENSATION</h2>
    <p>2.1 Project Fee: <span class="highlight">${data.projectFee}</span></p>

    <p>2.2 Payment Terms: <span class="highlight">${data.paymentTerms}</span></p>

    <h2>3. TIMELINE</h2>
    <p>3.1 Project Deadline: <span class="highlight">${data.deadline}</span></p>

    <p>3.2 Time is of the essence in this Contract.</p>

    <h2>4. REVISIONS</h2>
    <p>4.1 Number of revisions included: <span class="highlight">${data.revisions}</span></p>

    <p>4.2 Additional revisions beyond the agreed number may incur extra charges.</p>

    <h2>5. COPYRIGHT AND OWNERSHIP</h2>
    <p>5.1 Copyright Terms: <span class="highlight">${data.copyrightTerms}</span></p>

    <h2>6. INDEPENDENT CONTRACTOR</h2>
    <p>6.1 The Freelancer is an independent contractor and not an employee of the Client.</p>

    <h2>7. CANCELLATION</h2>
    <p>7.1 Either party may cancel this Contract with written notice. The Client shall pay for work completed up to the cancellation date.</p>

    <h2>8. CONFIDENTIALITY</h2>
    <p>8.1 The Freelancer agrees to keep all Client information confidential.</p>

    <div class="signatures">
      <h2>IN WITNESS WHEREOF, the parties have executed this Contract.</h2>
      
      <div class="signature-block">
        <p>_________________________</p>
        <p>FREELANCER</p>
        <p>Name: <span class="highlight">${data.freelancerName}</span></p>
        <p>Date: <span class="highlight">${data.signingDate}</span></p>
      </div>

      <div class="signature-block">
        <p>_________________________</p>
        <p>CLIENT</p>
        <p>Name: <span class="highlight">${data.clientName}</span></p>
        <p>Date: <span class="highlight">${data.signingDate}</span></p>
      </div>
    </div>
  </div>
</div>`;
