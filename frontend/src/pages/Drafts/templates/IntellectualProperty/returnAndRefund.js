export const returnAndRefundFields = [
    "contactEmail",
    "contactPhone",
];

export const generateReturnAndRefundPolicy = (data) => `<div class="agreement-template">
      <h1 class="agreement-title">Return and Refund Policy</h1>
    <style>
        .highlight { font-weight: bold; }
    </style>
    <div class="agreement-body">
        <p>We value your satisfaction and want to ensure a positive shopping experience with us. This Return and Refund Policy outlines the terms and conditions for returning and refunding products purchased through our website in India. We understand that circumstances may arise where you may need to return a product or request a refund, and we are here to assist you through the process.</p>
        
        <h2 class="highlight">1. ELIGIBILITY FOR RETURNS.</h2>
        <p>We strive to provide you with high-quality products that meet your expectations. If you are not completely satisfied with your purchase, you may be eligible to return the product and request a refund. To be eligible for a return, the following conditions must be met:</p>
        <ul>
            <li><span class="highlight">Timely request:</span> You must initiate the return process within span class="highlight">seven (7) days</span> from the date of purchase.</li>
            <li><span class="highlight">Proof of purchase:</span> You must provide a valid proof of purchase, such as an order confirmation or receipt, showing that the product was purchased from our website.</li>
            <li><span class="highlight">Product condition:</span> The product must be unused, undamaged, and in its original packaging, with all tags, labels, and accessories intact.</li>
            <li><span class="highlight">Exclusions:</span> Certain products may be excluded from our return policy due to hygiene reasons or other restrictions. Any such exclusions will be clearly stated on the product page.</li>
        </ul>
        <p>Please note that we reserve the right to reject return requests that do not meet the eligibility criteria mentioned above. It is important to review the specific return instructions and requirements provided with your purchase or contact our customer support team for further guidance.</p>
        
        <h2 class="highlight">2. TYPES OF RETURNS.</h2>
        <p>We categorize returns into the following types:</p>
        <ul>
            <li><span class="highlight">Defective or Damaged Products:</span> If you receive a product that is defective, damaged, or not as described, please contact our customer support within span class="highlight">seven (7) days</span> to initiate a return for a refund or replacement.</li>
            <li><span class="highlight">Incorrect Product:</span> Notify us within span class="highlight">seven (7) days</span> if you receive an incorrect product to arrange for a return and exchange.</li>
            <li><span class="highlight">Change of Mind:</span> You may return non-defective products within span class="highlight">seven (7) days</span> from the date of purchase if you change your mind. The item must be in its original condition, unused, and with all packaging and accessories intact.</li>
            <li><span class="highlight">Non-returnable Items:</span> Certain items are non-returnable due to hygiene, perishable nature, or other conditions unless they are found to be defective upon arrival.</li>
        </ul>
        <p>Please review the specific instructions for each return type. Our customer support is available to assist you throughout the process.</p>
        

        <h2 class="highlight">3. REFUND AND RETURN PROCESS.</h2>
        <ul>
            <li>Please note the following guidelines regarding return shipping and costs. You are responsible for covering the return shipping costs, unless the return is due to a defective or damaged item. Please use a reliable courier service or follow the instructions provided by our customer support team when shipping the returned item.</li>
            <li>Ensure that the product is securely packaged in its original packaging, including all accessories and documentation. Unless the return is due to a defective or damaged product, you are responsible for the return shipping costs. Generally, the original shipping costs incurred during the purchase will not be refunded unless specified otherwise in our refund policy.</li>
            <li>We'll inspect the returned item to ensure it meets our eligibility criteria for returns. Eligible refunds will be processed within span class="highlight">two (2) days</span> using the original payment method. For eligible exchanges, we'll promptly ship the replacement product.</li>
            <li>Return process may vary based on the type of return and circumstances. Contact our customer support for further assistance.</li>
        </ul>

        <h2 class="highlight">4. EXCLUSIONS AND NON-RETURNABLE ITEMS.</h2>
        <p>Certain items are excluded from our return and refund policy. The following items are non-returnable:</p>
        <ul>
            <p>a) Intimate or sanitary goods, such as underwear, swimwear, or personal care items, for hygiene reasons.</p>
            <p>b) Perishable goods, including food, beverages, or any other items with an an expiration date.</p>
            <p>c) Customized or personalized items that have been specifically made or altered according to your preferences.</p>
            <p>d) Customized or personalized items that have been specifically made or altered according to your preferences.</p>
            <p>e) Gift cards, vouchers, or any other prepaid cards.</p>
        </ul>
        <p>Please note that this list is not exhaustive, and additional non-returnable items may be specified on the product page or during the checkout process.</p>
        
        <h2 class="highlight">5. WARRANTY INFORMATION.</h2>
        <p>Certain products may be covered by a manufacturer's warranty or guarantee, which extends beyond our return and refund policy. Please refer to the product page or packaging for specific warranty details. If you encounter any issues covered by the manufacturer's warranty, we recommend contacting the manufacturer directly for assistance. Our return and refund policy does not affect any rights or remedies you may have under applicable consumer protection laws in India</p>
        
        <h2 class="highlight">6. DISPUTE RESOLUTION.</h2>
        <p>In case of any dispute related to this return and refund policy, we recommend reaching out to our customer support for amicable resolution. If the dispute remains unresolved, both parties agree to submit the matter to mediation in accordance with India mediation rules. If mediation fails, the dispute will be finally resolved through arbitration under India arbitration rules. The arbitration will be conducted by a mutually agreed arbitrator or by the President of the India Arbitration Association. The arbitrator's decision will be final and binding.</p>
        
        <h2 class="highlight">7. LIMITATIONS OF LIABILITY.</h2>
        <p>We strive to provide accurate information and a smooth return and refund process. However, we are not responsible for any damages, including indirect or consequential damages, arising from your use of our website or the return and refund process. Our liability is limited to the amount paid for the product or service subject to the return and refund. We are not liable for any errors, delays, or interruptions in the process. Please review our return and refund policy carefully and contact us if you have any questions or concerns.</p>
        
        <h2 class="highlight">8. UPDATES TO THE POLICY.</h2>
        <p>We reserve the right to update our return and refund policy as needed. Any changes will be effective immediately upon posting on our website. We recommend checking the policy periodically to stay informed. Your continued use of our website and services implies acceptance of any revised policy. We may provide additional notice or obtain consent for significant changes, as required by applicable laws.</p>
        
        <h2 class="highlight">9. CONTACT INFORMATION.</h2>
        <p>For any inquiries, questions, or concerns regarding these return or refund policy or our website, please contact us at <span class="highlight">${data.contactEmail}</span> or <span class="highlight">${data.contactPhone} Our customer support team is available during our business hours to provide you with the necessary guidance and support regarding returns, refunds, or any other related inquiries.</p>
    </div>
</div>`;
