export const termsAndConditionsFields = [
    "companyName",
    "contactEmail",
    "contactPhone"
];

export const generateTermsAndConditions = (data) => `<div class="agreement-template">
      <h1 class="agreement-title">Terms and Conditions</h1>
    <style>
        .highlight { font-weight: bold; }
    </style>
    <div class="agreement-body">
        <p>These Terms and Conditions (the "Terms") govern your use of our website and its associated services. By accessing and using our website, you agree to comply with these Terms. Please read them carefully before using our website. These Terms apply to all visitors, users, and others who access or use our website.</p>
        <h2 class="highlight">1. ACCEPTANCE OF TERMS.</h2>
        <p>By accessing or using our website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. It is your responsibility to review these Terms periodically for any updates or changes. If you do not agree to the Terms, you should discontinue your use of our website.</p>
        <h2 class="highlight">2. USER CONDUCT.</h2>
        <p>When using our website, you agree to comply with the following guidelines:</p>
        <ul>
            <li>Adhere to all applicable laws and regulations in India and other jurisdictions.</li>
            <li>Refrain from engaging in unlawful, fraudulent, or unauthorized activities.</li>
            <li>Avoid uploading, posting, or sharing content that is unlawful, harmful, defamatory, obscene, offensive, or infringing upon others' rights.</li>
            <li>Do not disrupt or interfere with the website's functionality or related services.</li>
            <li>Do not attempt to gain unauthorized access to our website, accounts, or connected information or systems.</li>
            <li>Avoid distributing spam, viruses, or malicious software or content.</li>
            <li>Respect the privacy of other users and do not collect their personally identifiable information without consent.</li>
            <li>Do not impersonate or falsely represent affiliation with any person or entity.</li>
            <li>Avoid any activity that could damage, disable, or impair the website's integrity or performance or disrupt other users' experience.</li>
            <li>Obtain our written consent before using the website for commercial purposes.</li>
            <li>Failure to comply with these guidelines may result in the suspension, termination, or restriction of your website access.</li>
        </ul>
        <h2 class="highlight">3. INTELLECTUAL PROPERTY.</h2>
        <p>All content on our website is protected by intellectual property laws in India and internationally and is owned by the website owner or its licensors. You are granted a limited, non-transferable license to access and use the content for personal, non-commercial purposes, as stated in these Terms and Conditions. Any modification, copying, distribution, transmission, display, publication, creation of derivative works, or sale of the content without prior written consent is prohibited. Unauthorized use of trademarks, logos, or service marks displayed on our website is also prohibited. If you believe your intellectual property rights have been violated, please notify us with the necessary information. We reserve the right to remove or disable access to infringing content and terminate the accounts of repeat infringers.</p>
        <h2 class="highlight">4. PRIVACY AND DATA PROTECTION.</h2>
        <p>By using our website, you consent to the collection, use, and disclosure of your personal information as outlined in our Privacy Policy. We prioritize the security of your information and have implemented measures to protect it from unauthorized access. We may use cookies to enhance your browsing experience and gather data about your usage. Trusted third-party service providers may have access to your personal information to assist us in operating the website. We may disclose your information if required by law or to protect our rights and the rights of others. You have the right to access, correct, or delete your personal information and can withdraw your consent for its processing. Please refer to our Privacy Policy for a comprehensive understanding of how we handle your information. By using our website, you agree to the terms of our Privacy Policy and the processing of your personal information as described therein.</p>
        <h2 class="highlight">5. PAYMENT AND FEES.</h2>
        <p>When making payments on our website, the following terms apply:</p>
        <ul>
            <li>Payment obligations: You agree to pay the specified fees and charges associated with your purchase or use of paid services on our website.</li>
            <li>Payment methods: We accept various payment methods, and you must provide accurate payment information.</li>
            <li>Pricing and taxes: Prices displayed are inclusive of applicable taxes, and you are responsible for any additional fees imposed by authorities.</li>
            <li>Refunds: Refunds, if applicable, are subject to our refund policy.</li>
            <li>Third-party payment processors: We may use third-party payment processors, and their terms and privacy policies apply.</li>
            <li>Payment security: We implement reasonable security measures, but we cannot guarantee absolute security of payment information.</li>
            <li>Fee changes: We may modify fees at any time, and the updated fees will be effective upon posting on our website.</li>
            <li>Non-payment: Failure to pay may result in the suspension or termination of access to certain features or services.</li>
        </ul>
        <p>Please review these terms and our payment policies carefully before making any payments.</p>
        <h2 class="highlight">6. LIMITATION OF LIABILITY.</h2>
        <p>We provide our website and its content on an "as is" basis and make no warranties or representations. We are not liable for any damages arising from your use of the website, including loss of profits, data, or other intangible losses. We disclaim liability for unauthorized access to your data and any material sent or received through the website. Your use of the website is at your own risk. Some jurisdictions may not allow these limitations, so they may not apply to you.</p>
        <h2 class="highlight">7. DISPUTE RESOLUTION.</h2>
        <p>Any disputes arising from these Terms and Conditions shall be resolved through negotiation between the parties. If no resolution can be reached, the dispute will be referred to mediation in accordance with India mediation rules. If mediation fails, the dispute will be finally resolved through arbitration in accordance with India arbitration rules. The arbitration will be conducted by a single arbitrator appointed by mutual agreement or by the President of the India Arbitration Association.</p>
        <h2 class="highlight">8. TERMINATION.</h2>
        <p>Either party may terminate these Terms and Conditions at any time by providing written notice to the other party. Upon termination, you will no longer have access to our website and must cease all use of our services. Any provisions that by their nature should survive termination, including but not limited to intellectual property rights, limitation of liability, and dispute resolution, shall continue to apply. We reserve the right to suspend, terminate, or restrict your access to our website at any time without prior notice if you violate these Terms and Conditions or engage in any prohibited activities.</p>
        <h2 class="highlight">9. UPDATES TO THE TERMS.</h2>
        <p>We may modify these Terms and Conditions at any time, and the updated version will be effective immediately upon posting on our website. It is your responsibility to review these Terms and Conditions periodically. Your continued use of our website constitutes your acceptance of any modifications. If you disagree with the changes, please cease using our website.</p>
        <h2 class="highlight">10. ENTIRE AGREEMENT.</h2>
        <p>These Terms and Conditions, along with any referenced additional terms or policies, constitute the entire agreement between you and <span class="highlight">${data.companyName || '[company name]'}</span> regarding the use of our website. Any modifications must be made in writing and signed by both parties. If any provision is found invalid or unenforceable, the remaining provisions shall remain in effect. Our failure to enforce any right or provision does not constitute a waiver unless acknowledged in writing. By using our website, you acknowledge and agree to these Terms and Conditions.</p>
        <h2 class="highlight">11. CONTACT INFORMATION.</h2>
        <p>For any inquiries, questions, or concerns regarding these Terms and Conditions or our website, please contact us at <span class="highlight">${data.contactEmail || '[email address]'}</span> or <span class="highlight">${data.contactPhone || '[phone number]'}</span>. We will make our best effort to respond to your inquiries in a timely manner.</p>
    </div>
</div>`;
