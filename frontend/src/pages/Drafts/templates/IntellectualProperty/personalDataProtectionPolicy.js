export const personalDataProtectionPolicyFields = [
    "companyName",
    "dpoName",
    "dpoEmail",
    "dpoPhone"
];

export const generatePersonalDataProtectionPolicy = (data) => `<div class="agreement-template">
    <h1 class="agreement-title">Personal Data Protection Policy</h1>
     <style>
        .highlight { font-weight: bold; }
    </style>

     <div class="agreement-body">

     <p><span class="highlight">${data.companyName}</span> (the "Company") values and respects the privacy of the Personal Data you provide to us. This policy outlines our commitment to complying with India's Information Technology Act, 2000, and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 ("IT Rules"), as well as other applicable laws. It sets out the purposes for which Personal Data is collected, used, disclosed, and stored, as well as the rights of data subjects and our data protection policies.</p>
    
    <h2 class="highlight">1. SCOPE.</h2">
    <p>This Personal Data Protection Policy applies to all individuals ("data subjects") who interact with the Company, including customers, employees, partners, and other stakeholders whose Personal Data is collected, used, or disclosed by the Company in India.</p>
    
    <h2 class="highlight">2. DEFINITIONS.</h2">
    <ul>
        <li><strong>Personal Data:</strong> Any information that relates to a natural person, which, either directly or indirectly, in combination with other information available or likely to be available with a body corporate, is capable of identifying such person.</li>
        <li><strong>Sensitive Personal Data or Information (SPDI):</strong> Categories of Personal Data that require higher levels of protection, such as passwords, financial information, health records, or any other information categorized as sensitive under the IT Rules.</li>
        <li><strong>Data Protection Officer (DPO):</strong> The individual appointed by the Company to oversee compliance with the IT Rules and manage data protection matters.</li>
    </ul>
    
    <h2 class="highlight">3. COLLECTION OF PERSONAL DATA.</h2">
    <p>The Company collects Personal Data in a lawful and reasonable manner, ensuring that it is relevant for the intended purposes. Personal Data may be collected directly from you or through third parties, including online platforms, affiliates, and service providers, based on your relationship with the Company.</p>
    
    <h2 class="highlight">4. USE AND DISCLOSURE OF PERSONAL DATA.</h2">
    <p>The Company will only use and disclose your Personal Data for purposes for which consent has been obtained, unless an exception under the IT Rules applies. Examples include processing transactions, providing services, and complying with legal obligations. The Company will not use or disclose Personal Data beyond what is reasonably necessary for these purposes.</p>
    
    <h2 class="highlight">5. NOTIFICATION OF PURPOSE.</h2">
    <p>We will inform you of the purposes for which your Personal Data is collected, used, or disclosed before or at the time of collection. In the event of any new purposes, we will seek your consent before using your Personal Data for those purposes.</p>
    
    <h2 class="highlight">6. CONSENT.</h2">
    <p>Your consent is required for the collection, use, or disclosure of Personal Data, except where the IT Rules permit otherwise. You may withdraw your consent at any time by contacting our Data Protection Officer, though this may affect our ability to provide certain services to you.</p>
    
    <h2 class="highlight">7. ACCESS AND CORRECTION.</h2">
    <p>You have the right to access and correct your Personal Data held by the Company. Requests should be submitted in writing to the DPO, and the Company will respond within a reasonable time. The Company may charge a reasonable fee for access requests to cover administrative costs.</p>
    
    <h2 class="highlight">8. ACCURACY.</h2">
    <p>The Company makes reasonable efforts to ensure that Personal Data collected is accurate and complete. Data subjects are encouraged to update the Company on any changes to their Personal Data.</p>
    
    <h2 class="highlight">9. PROTECTION OF PERSONAL DATA.</h2">
    <p>The Company implements appropriate security measures to protect Personal Data against unauthorized access, collection, use, disclosure, copying, modification, disposal, or similar risks. These measures include both technical and organizational safeguards in line with the IT Rules.</p>
    
    <h2 class="highlight">10. RETENTION OF PERSONAL DATA.</h2">
    <p>Personal Data will be retained only for as long as necessary to fulfill the purposes for which it was collected, or as required by law. The Company will dispose of or anonymize Personal Data once it is no longer needed.</p>
    
    <h2 class="highlight">11. TRANSFER OF PERSONAL DATA OVERSEAS.</h2">
    <p>If your Personal Data is transferred to a jurisdiction outside of India, the Company will ensure that the recipient provides a standard of protection comparable to that under Indian law.</p>
    
    <h2 class="highlight">12. DATA BREACH NOTIFICATION.</h2">
    <p>In the event of a data breach that results in or is likely to result in significant harm to you, the Company will promptly notify both you and the relevant authorities, as required by law.</p>
    
    <h2 class="highlight">13. ACCOUNTABILITY.</h2">
    <p>The Company is responsible for ensuring compliance with the IT Rules. Our Data Protection Officer (DPO) is available to address any queries, concerns, or complaints related to data protection.</p>
    
    <h2 class="highlight">14. CONTACT INFORMATION.</h2">
    <p>For any inquiries, feedback, or concerns regarding your Personal Data, please contact our Data Protection Officer: <span class="highlight">${data.dpoName}</span>, <span class="highlight">${data.dpoEmail}</span>, <span class="highlight">${data.dpoPhone}</span>.</p>
     </div>
</div>`;
