export const clientAndUserConsentFields = [
  "executionDate",
  "clientFullName",
  "clientContactInfo",
  "dataProtectionOfficerContact",
  "servicePurpose",
  "personalDataTypes",
  "securityMeasures",
  "thirdParties"
];

export const generateClientAndUserConsentForm = (data) => `<div class="consent-form-template">
  <h1 class="agreement-title">Client & User Consent Form</h1>
  <style>
    .highlight { font-weight: bold; }
  </style>
  <div class="agreement-body">
    <p>Dear <span class="highlight">Client/User</span>,</p>
    <p>We value your trust and are committed to protecting your privacy. In compliance with the Personal Data Protection Bill, 2019 (PDPB) of India, we seek your consent to collect, use, and disclose your personal data for the purposes outlined below.</p>
    
    <h2 class="highlight">1. PURPOSE OF DATA COLLECTION.</h2 class="highlight">
    <p>We collect your personal data for the following purposes: <span class="highlight">${data.servicePurpose}</span></p>
    
    <h2 class="highlight">2. TYPES OF PERSONAL DATA.</h2 class="highlight">
    <p>We may collect the following types of personal data: <span class="highlight">${data.personalDataTypes}</span></p>
    
    <h2 class="highlight">3. CONSENT.</h2 class="highlight">
    <p>By signing this consent form, you agree and consent to the collection, use, and disclosure of your personal data for the specified purposes outlined in section 1. Your consent is necessary for us to provide the requested services and to comply with our legal obligations.</p>
    
    <h2 class="highlight">4. WITHDRAWAL OF CONSENT.</h2 class="highlight">
    <p>You have the right to withdraw your consent at any time. To do so, please contact our Data Protection Officer at <span class="highlight">${data.dataProtectionOfficerContact}</span>. Please note that withdrawing consent may affect our ability to provide certain services to you.</p>
    
    <h2 class="highlight">5. PROTECTION OF PERSONAL DATA.</h2 class="highlight">
    <p>We take reasonable steps to protect your personal data from unauthorized access, disclosure, alteration, and destruction. Our security measures include <span class="highlight">${data.securityMeasures}</span>.</p>
    
    <h2 class="highlight">6. RETENTION OF PERSONAL DATA.</h2 class="highlight">
    <p>We will retain your personal data only for as long as necessary for the purposes stated in section 1 or as required by law. Once your data is no longer needed, it will be securely deleted or anonymized.</p>
    
    <h2 class="highlight">7. DISCLOSURE TO THIRD PARTIES.</h2 class="highlight">
    <p>Your personal data may be disclosed to third parties only for the purposes stated in section 1 or as required by law. These third parties may include <span class="highlight">${data.thirdParties}</span>. We will ensure that any third party who receives your personal data provides a standard of protection comparable to that under the PDPB.</p>
    
    <h2 class="highlight">8. ACKNOWLEDGMENT AND CONSENT.</h2 class="highlight">
    <p>By signing below, you acknowledge that you have read and understood this consent form and agree to the collection, use, and disclosure of your personal data as described above.</p>
    
    <p>Issued on <span class="highlight">${data.executionDate}</span>.</p>
    <br/>
    
    <p>_________________________</p>
    <p><span class="highlight">The Client/User</span></p>
  </div>
</div>`;
