export const consultingAgreementFields = [
  "consultantName",
  "consultantAddress",
  "clientName",
  "clientAddress",
  "servicesDescription",
  "consultingFee",
  "paymentSchedule",
  "projectDuration",
  "deliverables",
  "confidentialityTerms",
  "signingDate"
];

export const generateConsultingAgreement = (data) => `<div class="agreement-template">
  <h1 class="agreement-title">CONSULTING AGREEMENT</h1>

  <div class="agreement-body">
    <p>This Consulting Agreement (the "Agreement") is entered into on <span class="highlight">${data.signingDate}</span>, between:</p>

    <p><strong>CONSULTANT:</strong> <span class="highlight">${data.consultantName}</span>, residing at <span class="highlight">${data.consultantAddress}</span> (the "Consultant")</p>

    <p><strong>CLIENT:</strong> <span class="highlight">${data.clientName}</span>, having its principal place of business at <span class="highlight">${data.clientAddress}</span> (the "Client")</p>

    <h2>1. CONSULTING SERVICES</h2>
    <p>1.1 The Consultant agrees to provide the following services: <span class="highlight">${data.servicesDescription}</span></p>

    <p>1.2 Project Duration: <span class="highlight">${data.projectDuration}</span></p>

    <h2>2. COMPENSATION</h2>
    <p>2.1 Consulting Fee: <span class="highlight">${data.consultingFee}</span></p>

    <p>2.2 Payment Schedule: <span class="highlight">${data.paymentSchedule}</span></p>

    <h2>3. DELIVERABLES</h2>
    <p>3.1 The Consultant shall provide the following deliverables: <span class="highlight">${data.deliverables}</span></p>

    <h2>4. INDEPENDENT CONTRACTOR STATUS</h2>
    <p>4.1 The Consultant is an independent contractor and not an employee of the Client.</p>

    <p>4.2 The Consultant shall be responsible for all taxes and insurance related to the compensation received.</p>

    <h2>5. CONFIDENTIALITY</h2>
    <p>5.1 Confidentiality Terms: <span class="highlight">${data.confidentialityTerms}</span></p>

    <h2>6. INTELLECTUAL PROPERTY</h2>
    <p>6.1 All work products created specifically for the Client shall be the property of the Client.</p>

    <p>6.2 The Consultant retains ownership of pre-existing intellectual property and general methodologies.</p>

    <h2>7. TERMINATION</h2>
    <p>7.1 Either party may terminate this Agreement with 30 days' written notice.</p>

    <div class="signatures">
      <h2>IN WITNESS WHEREOF, the parties have executed this Agreement.</h2>
      
      <div class="signature-block">
        <p>_________________________</p>
        <p>CONSULTANT</p>
        <p>Name: <span class="highlight">${data.consultantName}</span></p>
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
