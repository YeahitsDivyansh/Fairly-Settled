export const cookieConsentFields = [
    "cookieConsentDate",
    "cookieConsentAcceptance",
    "emailAddress",
    "phoneNumber"
];

export const generateCookieConsent = (data) => `<div class="agreement-template">
    <h1 class="agreement-title">Cookie Consent</h1>
    <style>
        .highlight { font-weight: bold; }
    </style>
    <div class="agreement-body">
        <p>
            This website uses cookies to enhance your browsing experience and provide personalized services. This Cookie Consent notice outlines our use of cookies and similar technologies on our website in compliance with India laws. By continuing to browse and use our website, you consent to the use of cookies as described in this notice. Please review this notice to understand how cookies are used and how you can manage your preferences.
        </p>

        <h2>1. TYPES OF COOKIES.</h2>
        <p>We use various types of cookies on our website:</p>
        <ul>
            <li><span class="highlight">Essential cookies:</span> These cookies are necessary for the functioning of the website and cannot be disabled in our systems. They are usually set in response to your actions on the site, such as setting your privacy preferences, logging in, or filling out forms. You can set your browser to block or alert you about these cookies, but some parts of the website may not function properly without them.</li>
            <li><span class="highlight">Analytical/performance cookies:</span> These cookies allow us to analyze website traffic and measure the performance of our website. They help us understand how visitors interact with our site, which pages are visited most frequently, and if there are any errors. The information collected by these cookies is aggregated and anonymous, and it helps us improve the functionality and performance of our website.</li>
            <li><span class="highlight">Functional cookies:</span> These cookies enable enhanced functionality and personalization of the website. They may be set by us or by third-party providers whose services we have added to our pages. If you do not allow these cookies, some or all of these services may not function properly.</li>
            <li><span class="highlight">Targeting/advertising cookies:</span> These cookies are used to deliver advertisements that are relevant to you and your interests. They are also used to limit the number of times you see an ad and measure the effectiveness of advertising campaigns. These cookies may be set by us or by third-party advertising networks. They do not directly store personal information but are based on uniquely identifying your browser and device.</li>
        </ul>

        <h2>2. PURPOSE OF COOKIES.</h2>
        <p>
            Our website uses cookies for several purposes. These cookies help us provide a personalized and improved browsing experience, analyze website traffic and user behavior, offer targeted advertisements, and enable social media integration. You can manage your cookie preferences through your browser settings or by adjusting your consent preferences on our website.
        </p>

        <h2>3. YOUR CONSENT.</h2>
        <p>
            By using our website, you consent to the use of cookies as described in this Cookie Consent. You can manage your cookie preferences and opt-out of non-essential cookies by adjusting the settings on our cookie banner or using the cookie settings tool provided. You can also control and delete cookies through your web browser settings. However, please note that disabling or deleting cookies may affect the functionality of our website.
        </p>

        <h2>4. THIRD-PARTY COOKIES.</h2>
        <p>
            We may use third-party cookies on our website for various purposes, such as analytics, advertising, and social media integration. These cookies are placed by third-party service providers and are subject to their own privacy policies. We do not have control over the information collected by these cookies. It is your responsibility to review the privacy policies of these third parties to understand how they collect, use, and disclose your information. By using our website and consenting to our cookie policy, you acknowledge and accept that third-party cookies may be used on our site.
        </p>

        <h2>5. DATA COLLECTION AND PRIVACY.</h2>
        <p>
            We value your privacy and are committed to protecting your personal information. Our Privacy Policy governs the use of cookies and similar technologies on our website, explaining how we collect, use, and disclose your personal data. Through cookies, we may gather information such as browsing activities, device details, IP address, and location to improve your browsing experience and offer personalized services. Rest assured, we do not sell or share your personal information with third parties for direct marketing purposes.
            <br>
            By continuing to use our website, you acknowledge that you have read and understood our Privacy Policy, and you consent to the collection and use of your personal information as outlined therein.
        </p>

        <h2>6. OPT-OUT OPTIONS.</h2>
        <p>
            You can manage your cookie preferences and opt-out options through our website's cookie settings. Adjust your preferences for different types of cookies, including essential and non-essential ones, using the provided cookie banner or settings tool. You can disable or delete cookies through your web browser settings, but please note that this may affect your browsing experience and limit website functionality. To opt out of third-party cookies, visit the respective third-party websites or use their opt-out mechanisms.
        </p>

        <h2>7. UPDATES TO THE COOKIE CONSENT.</h2>
        <p>
            We may update this Cookie Consent from time to time to reflect changes in our cookie practices or legal requirements. We encourage you to review this page periodically for any updates. Your continued use of our website after the posting of any changes constitutes your acceptance of such changes.
        </p>

        <h2>8. CONTACT INFORMATION.</h2>
        <p>
            If you have any questions or concerns about our use of cookies or our website, please contact us at <span class="highlight">${data.emailAddress}</span> or <span class="highlight">${data.phoneNumber}</span>.
        </p>

        <p>Last update: <span class="highlight">${data.cookieConsentDate}</span></p>
    </div>
</div>
`;
