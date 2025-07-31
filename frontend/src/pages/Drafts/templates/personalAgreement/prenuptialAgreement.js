export const prenuptialAgreementFields = [
    "executionDate",
    "firstSpouseFullName",
    "firstSpouseIdPassport",
    "secondSpouseFullName",
    "secondSpouseIdPassport"
];

export const generatePrenuptialAgreement = (data) => `<div class="agreement-template">
    <h1 class="agreement-title">PRENUPTIAL AGREEMENT</h1>
     <style>
    .highlight { font-weight: bold; }
    </style>
    
    <div class="agreement-body">
        <p>This Prenuptial Agreement shall be effective on <span class="highlight">${data.executionDate}</span> (the "Execution Date") and is subject to the terms and conditions stated below by and between <span class="highlight">${data.firstSpouseFullName}</span> holding ID/Passport number <span class="highlight">${data.firstSpouseIdPassport}</span> (the "First Spouse"), and <span class="highlight">${data.secondSpouseFullName}</span> holding ID/Passport number <span class="highlight">${data.secondSpouseIdPassport}</span> (the "Second Spouse"), collectively referred to as the "Parties" in anticipation of their upcoming marriage.</p>
        
        <p>This Agreement sets forth the intentions and understanding of the Parties regarding the division and protection of their respective assets and liabilities during the marriage and in the event of separation, divorce, or death.</p>

        <h2>1. FINANCIAL DISCLOSURES</h2>
        <ul class="agreement-list">
            <li>The Parties confirm that they have made complete and voluntary financial disclosures to each other, providing accurate information about their assets, liabilities, income, and financial obligations.</li>
            <li>The Parties agree to promptly update each other about any significant changes in their financial circumstances that may affect the terms of this Agreement.</li>
            <li>The Parties acknowledge that they have relied on the accuracy and completeness of the financial disclosures in negotiating and entering into this Agreement.</li>
            <li>The Parties agree to keep the financial disclosures confidential, except as required by law or with the other Party's written consent.</li>
        </ul>

        <h2>2. DIVISION OF PROPERTY AND ASSETS</h2>
        <p>The Parties establish clear guidelines for the division of property and assets in the event of divorce, separation, or dissolution of the marriage, promoting transparency and mutual understanding.</p>
        <ul class="agreement-list">
            <li><strong>Separate property:</strong> The Parties acknowledge and agree that any property and assets owned or acquired individually before the marriage, including but not limited to real estate, bank accounts, investments, and personal belongings, shall remain as separate property and shall not be subject to division upon the termination of the marriage.</li>
            <li><strong>Marital property:</strong> The Parties understand that during the course of the marriage, they may acquire joint or marital property and assets. In the event of divorce, separation, or dissolution of the marriage, the Parties agree that the division of such marital property and assets shall be governed by the laws of India, specifically the applicable provisions of the Civil and Commercial Code.</li>
            <li>The Parties further agree that in the event of divorce, separation, or dissolution of the marriage, they shall negotiate in good faith to reach a fair and equitable division of the marital property and assets, taking into consideration the contributions made by each Party and the best interests of both Parties.</li>
            <li>The Parties waive any rights or claims they may have under Indian law to any property or assets that are excluded or specifically allocated as separate property in this Prenuptial Agreement.</li>
        </ul>

        <h2>3. SPOUSAL SUPPORT OR ALIMONY</h2>
        <ul class="agreement-list">
            <li>The Parties agree that in the event of divorce, separation, or dissolution of the marriage, neither Party shall be entitled to claim or receive spousal support or alimony from the other Party, regardless of the circumstances or duration of the marriage.</li>
            <li>The Parties acknowledge and agree that this waiver of spousal support or alimony is a fundamental provision of this Prenuptial Agreement and cannot be modified or revoked, except by written agreement signed by both Parties.</li>
        </ul>

        <h2>4. INHERITANCE AND ESTATE PLANNING</h2>
        <ul class="agreement-list">
            <li>The Parties acknowledge and agree that each Party's separate property, including assets acquired before the marriage and any future inheritances, shall remain the sole and exclusive property of the respective Party. Neither Party shall have any claim or right to the other Party's separate property or any inheritance received by the other Party.</li>
            <li>The Parties further agree to waive any rights to community property that may arise during the course of the marriage. They acknowledge that any assets acquired jointly during the marriage shall be owned in proportion to their respective contributions, as specified in a separate agreement or in accordance with the laws of India.</li>
            <li>The Parties may choose to make provisions for the disposition of their separate property and any jointly acquired assets in the event of their death. They may execute wills or other estate planning documents to ensure their assets are distributed according to their wishes, taking into consideration any legal requirements or limitations imposed by the laws of India.</li>
        </ul>

        <h2>5. DEBT AND LIABILITY</h2>
        <p>The Parties establish their agreement on the division of debts and liabilities, ensuring clarity and protection of their individual financial interests.</p>
        <ul class="agreement-list">
            <li><strong>Separate debts and liabilities:</strong> The Parties acknowledge and agree that each Party shall be solely responsible for any debts, obligations, and liabilities incurred individually before and during the marriage. Any debts or liabilities solely attributable to one Party shall not become the responsibility of the other Party, unless explicitly agreed upon in writing.</li>
            <li><strong>Joint debts and liabilities:</strong> In the event that the Parties incur joint debts, obligations, or liabilities during the course of the marriage, they shall be jointly and severally liable for such debts, obligations, or liabilities in accordance with the laws of India. The division of responsibility for joint debts shall be determined in proportion to each Party's contribution, as specified in a separate agreement or as agreed upon by the Parties.</li>
            <li>The Parties affirm their commitment to maintain financial independence and separate financial management. They acknowledge that the Prenuptial Agreement does not absolve them of their individual financial responsibilities and obligations.</li>
        </ul>

        <h2>6. BUSINESS INTERESTS</h2>
        <ul class="agreement-list">
            <li>The Parties acknowledge that they currently own or may acquire business interests individually during the course of the marriage. They agree that any business interests owned by each Party individually prior to the marriage or acquired individually during the marriage shall be considered separate property and shall remain the sole ownership and responsibility of the respective Party.</li>
            <li>Each Party shall have exclusive management and control over their separate business interests, including the right to make decisions, enter into contracts, and conduct business operations without interference or involvement from the other Party, unless otherwise agreed upon in writing.</li>
            <li>Any income, profits, dividends, or other financial benefits derived from the separate business interests of each Party shall be considered separate property and shall be retained by the respective Party.</li>
            <li>The Parties acknowledge that the Prenuptial Agreement confirms their understanding that they shall have no entitlement to share in the ownership, control, management, or assets of the other Party's separate business interests, both during the marriage and in the event of separation, divorce, or dissolution of marriage.</li>
            <li>In the event of divorce or separation, the value of the separate business interests of each Party shall be determined by an independent valuation expert agreed upon by both Parties. Should one Party wish to acquire the other Party's business interests, a fair and reasonable buyout shall be negotiated based on the determined value.</li>
        </ul>

        <h2>7. DISPUTE RESOLUTION</h2>
        <ul class="agreement-list">
            <li>Any dispute arising from or related to this Prenuptial Agreement shall first be attempted to be resolved through mediation, using a mutually agreed-upon mediator. If mediation fails or is not pursued, any unresolved dispute shall be referred to arbitration in accordance with the laws of India. The arbitrator will be mutually appointed, and the decision rendered will be final and binding.</li>
            <li>All mediation and arbitration proceedings, documents, and information shall remain confidential, except as required by law. The costs of mediation and arbitration shall be shared equally between the parties, unless otherwise determined by the arbitrator. Either party may seek interim relief from a court if necessary before or during mediation or arbitration.</li>
        </ul>

        <h2>8. TERMINATION OR AMENDMENT</h2>
        <p>This Prenuptial Agreement shall only be terminated by the mutual written agreement of both parties. Any amendment or modification to this Prenuptial Agreement must be made in writing and signed by both parties. Such amendments shall be enforceable only if they are in accordance with the laws of India. Both parties agree to comply with any legal formalities required for the termination or amendment of this Prenuptial Agreement, as per the laws of India.</p>

        <h2>9. ENTIRE AGREEMENT</h2>
        <p>This Agreement contains all terms and conditions agreed to by the Parties, including any attachments or appendices. This Agreement replaces all previous oral discussions, agreements, and understandings.</p>

        <h2>10. GOVERNING LAW AND JURISDICTION</h2>
        <p>This Agreement shall be governed by and interpreted in accordance with the laws of India. The Parties agree to submit to the exclusive jurisdiction of the courts of India for any legal actions or proceedings arising from this Agreement.</p>

        <p>This Agreement is drawn up in two (2) identical copies, one for each Party</p>

        <h2>SIGNED BY:</h2>
        <div class="signatures">
            <div class="signature-block" style="display: flex; justify-content: space-between; margin-bottom: 40px;">
                <div>
                    <p>The First Spouse</p>
                </div>
                <div>
                    <p>The Second Spouse</p>
                </div>
            </div>
            <div class="signature-block" style="display: flex; justify-content: space-between;">
                <div>
                    <p>The Witness</p>
                </div>
                <div>
                    <p>The Witness</p>
                </div>
            </div>
        </div>
    </div>
</div>`;
