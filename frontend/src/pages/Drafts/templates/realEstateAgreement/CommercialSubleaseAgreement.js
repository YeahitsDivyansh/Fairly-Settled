export const commercialSubleaseAgreementFields = [
    "executionDate",
    "sublessorFullName",
    "companyName",
    "registrationNumber",
    "sublesseeFullName",
    "address",
    "rentAmount",
    "securityDepositAmount",
    "percentageOfLateFee"
];

export const generateCommercialSubleaseAgreement = (data) => `<div class="agreement-template">
    <h1 class="agreement-title">COMMERCIAL SUBLEASE AGREEMENT</h1>
    <style>
    .highlight { font-weight: bold; }
    </style>
    <div class="agreement-body">
        <h2>1. COMMERCIAL ACTIVITY</h2>
        <p>The Sublessor agrees to authorize the same commercial activity as mentioned in the Master Lease and for the Property located at <span class="highlight">${data.address}</span> (the "Premises").</p>

        <h2>2. MASTER LEASE</h2>
        <p>The provisions of this Agreement are subject to an initial lease agreement (the "Master Lease"). The Sublessor certifies that the Landlord has given the consent to sublease the Premises. This Sublease contains all the terms and conditions established between the Parties to this Sublease and shall not be modified orally or in any other manner except by a written Agreement signed by all Parties to this Sublease or their respective successors in interest. This Sublease is subject to the Master Lease, a copy of which has been or will hereafter be provided to the Sublessee.</p>

        <h2>3. PAYMENTS AND LATE FEES</h2>
        <p>The monthly rent due under this Agreement is INR <span class="highlight">${data.rentAmount}</span> (Indian Rupees) per month. This amount must be paid in full each month, no later than the date that corresponds to the Execution Date. The first rent payment is due upon signing this Agreement. If the rent is paid late, a penalty of <span class="highlight">${data.percentageOfLateFee}%</span> per day will be applied to the unpaid amount, calculated from the original due date until full payment is made.</p>

        <h2>4. SECURITY DEPOSIT</h2>
        <p>The security deposit must be paid to the Sublessor no later than the Execution Date. The Sublessee must deliver INR <span class="highlight">${data.securityDepositAmount}</span> (Indian Rupees) which is equivalent to two (2) months of rent, to be paid at the signing of the Agreement. The security deposit is not a prepayment of rent, and the Sublessee shall not use it as a reason or excuse for not paying the rent as stipulated in this Agreement.</p>

        <p>The security deposit shall be returned to the Sublessee, without interest, within thirty (30) business days after the expiry date or the date on which all utilities, maintenance, and other services relating to the leased Premises have been paid, unless the term of the Master Lease is extended or renewed, in which case the deposit shall be retained by the Sublessor during the extension or renewal and returned within the same time upon expiry.</p>

        <h2>5. USE OF PREMISES</h2>
        <p>Except as otherwise provided in this Sublease, the Sublessee will only use the subleased Premises for a purpose consistent with the permitted use allowed in the Master Lease. Further, the Sublessee agrees to comply with all other applicable provisions of the Master Lease and will not do anything that would constitute a violation of any part or condition of the Master Lease. In addition, the Sublessee agrees to comply with all other applicable provisions of the Master Lease and shall not do anything that would constitute a breach of any part or condition of the Master Lease.</p>

        <h2>6. UTILITIES AND SERVICES</h2>
        <p>All payments for utilities and other costs related to the subleased Premises, which are to be paid by the Sublessor under the Master Lease, shall be paid by the Sublessee during the term of the Sublease.</p>

        <h2>7. REPAIR AND MAINTENANCE</h2>
        <p>The Sublessee agrees to surrender and deliver to the Sublessor the subleased Premises and all furniture and decorations within the subleased Premises in as good a condition as they were at the beginning of the term, except for reasonable wear and tear. The Sublessee will be liable to the Sublessor and the Lessor for any damages occurring to the subleased Premises or to the building which are done by the Sublessee or the Sublessee's guests. The Sublessee will immediately report all general maintenance issues and needed repairs to the Sublessor.</p>

        <h2>8. TAXES</h2>
        <p>The Sublessee is responsible for all taxes and fees that arise with the use of the Premises as mentioned in the Master Lease.</p>

        <h2>9. DISPUTE</h2>
        <p>If a dispute arises during or after the term or after of this Agreement between the Sublessor and Sublessee, the Parties will use their reasonable best efforts to resolve any dispute. The Parties agree to hold the negotiations amongst themselves, in "good faith" before any litigation.</p>

        <h2>10. GOVERNING LAW AND JURISDICTION</h2>
        <p>This Agreement shall be governed by and shall be construed following the laws of India. The Parties submit all their disputes arising out of or connected with this Agreement to the jurisdiction of the Courts of India.</p>

        <p>This Agreement is drawn up in two (2) identical copies, one for each Party.</p>

        <h2>SIGNED BY:</h2>
        <div class="signatures">
            <div class="signature-block" style="display: flex; justify-content: space-between; margin-bottom: 40px;">
                <div>
                    <p>The Sublessor</p>
                </div>
                <div>
                    <p>The Sublessee</p>
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

