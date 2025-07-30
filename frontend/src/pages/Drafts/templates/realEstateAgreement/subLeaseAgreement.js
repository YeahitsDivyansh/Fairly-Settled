export const subleaseAgreementFields = [
    "executionDate",
    "sublandlordFullName",
    "subtenantFullName",
    "address",
    "rent",
    "lateFee",
    "securityDeposit",
    "leaseDuration"
];

export const generateSubleaseAgreement = (data) => {
    const {leaseDuration = {startDate: "", endDate: ""}} = data;
    return `<div class="agreement-template">
    <h1 class="agreement-title">SUBLEASE AGREEMENT</h1>
     <style>
    .highlight { font-weight: bold; }
    </style>
    
    <div class="agreement-body">
        <p>This Sublease Agreement shall become effective on <span class="highlight">${data.executionDate}</span> (the "Execution Date") and is subject to the terms and conditions stated below by and between <span class="highlight">${data.sublandlordFullName}</span> (the "Sublandlord") and <span class="highlight">${data.subtenantFullName}</span> (the "Subtenant"), collectively referred to as the "Parties".</p>
        
        <p>This Agreement aims to sublease the property (the "Premises") located at <span class="highlight">${data.address}</span>, India for residential purposes only during the term of this Agreement.</p>

        <h2>1. PREMISES</h2>
        <ul class="agreement-list">
            <li>The Premises are located at <span class="highlight">${data.address}</span>, India.</li>
        </ul>

        <h2>2. MASTER LEASE</h2>
        <ul class="agreement-list">
            <li>The provisions of this Sublease Agreement are subject to an initial lease agreement (the "Master Lease") and as provided by the Sublandlord to the Subtenant.</li>
            <li>The Sublandlord certifies that the Landlord has given the consent to sublease the Premises.</li>
        </ul>

        <h2>3. SUBLEASED PREMISES</h2>
        <ul class="agreement-list">
            <li>The Sublandlord agrees to sublease to the Subtenant all the Premises for residential purposes only during the term of this Agreement.</li>
        </ul>

        <h2>4. SUBLEASE DURATION</h2>
        <ul class="agreement-list">
            <li>The sublease term begins on <span class="highlight">${leaseDuration.startDate}</span> and ends on <span class="highlight">${leaseDuration.endDate}</span>.</li>
            <li>The Subtenant requires moving-out at the end of the sublease term if the two Parties do not agree on a new contract or lease extension.</li>
        </ul>

        <h2>5. PAYMENTS</h2>
        <ul class="agreement-list">
            <li>The monthly rent due under this Agreement is INR <span class="highlight">${data.rent}</span> (Indian Rupees) per month.</li>
            <li>The rent must be paid in full every month no later than the day of the Execution Date.</li>
            <li>The first payment of rent must be paid upon the signature of this Agreement.</li>
            <li>If the rent is not paid on the due date, the Sublandlord shall pay a late fee of INR <span class="highlight">${data.lateFee}</span> (Indian Rupees) for each day of delay after the first day of rent.</li>
        </ul>

        <h2>6. SECURITY DEPOSIT</h2>
        <ul class="agreement-list">
            <li>The security deposit must be paid to the Sublandlord no later than the Execution Date of this Agreement by the Subtenant.</li>
            <li>The Sublandlord will hold it as security to meet the Subtenant's obligations under this Agreement.</li>
            <li>The Subtenant shall deliver INR <span class="highlight">${data.securityDeposit}</span> (Indian Rupees) equivalent to two (2) months of the lease payment.</li>
            <li>The security deposit should not be a prepayment of any rental, nor shall it be raised by the Subtenant as a reason or excuse to not paying the rent as stipulated in this Agreement.</li>
        </ul>

        <h2>7. UTILITIES AND SERVICES</h2>
        <ul class="agreement-list">
            <li>The Subtenant is responsible for the timely payment of all electricity, water, gas, and any other bills (if any) present during the lease term.</li>
            <li>If utilities and services are temporarily interrupted due to an accident, emergency, and/or repairs, the Subtenant's obligation to pay the rent in full shall not be affected.</li>
        </ul>

        <h2>8. DISPUTE</h2>
        <ul class="agreement-list">
            <li>If a dispute arises during or after the term or after of this Agreement between the Sublandlord and Subtenant, the Parties will use their reasonable best efforts to resolve any dispute.</li>
            <li>The Parties agree to hold the negotiations amongst themselves, in "good faith" before any litigation.</li>
        </ul>

        <h2>9. GOVERNING LAW AND JURISDICTION</h2>
        <ul class="agreement-list">
            <li>This Agreement is governed by and shall be construed following the laws of India.</li>
            <li>The Parties submit all their disputes arising out of or connected with this Agreement to the jurisdiction of the Courts of India.</li>
        </ul>

        <p>This Agreement is drawn up in two (2) identical copies, one for each Party. Both Parties have read and fully understood this Agreement. This Agreement shall become effective and legally binding upon signature by each of the Parties.</p>

        <h2>SIGNED BY:</h2>
        <div class="signatures">
            <div class="signature-block" style="display: flex; justify-content: space-between; margin-bottom: 40px;">
                <div>
                    <p>The Sublandlord</p>
                </div>
                <div>
                    <p>The Subtenant</p>
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
};

