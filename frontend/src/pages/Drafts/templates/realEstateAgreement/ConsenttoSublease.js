export const consentToSubleaseFields = [
    "executionDate",
    "landlordFullName",
    "tenantFullName",
    "premisesAddress",
    "subleaseStartDate",
    "subleaseEndDate",
    "monthlyRentAmount",
    "lateFeeAmount",
    "securityDepositAmount",
    "securityDepositEquivalent",
];

export const generateConsentToSublease = (data) => `<div class="agreement-template">
    <h1 class="agreement-title">CONSENT TO SUBLEASE</h1>
    <style>
    .highlight { font-weight: bold; }
    </style>
    
    <div class="agreement-body">
        <p>This Consent to Sublease shall become effective on <span class="highlight">${data.executionDate}</span> (the "Execution Date") and is subject to the terms and conditions stated below by and between <span class="highlight">${data.landlordFullName}</span> (the "Landlord") and <span class="highlight">${data.tenantFullName}</span> (the "Tenant"), collectively referred to as the "Parties".</p>

        <h2>1. SUBLEASE PERMISSION</h2>
        <p>The Landlord grants permission for the Tenant to sublease all the Premises without the Landlord's requirement.</p>

        <h2>2. PREMISES</h2>
        <p>The Landlord consents to the Tenant to sublet the property located at <span class="highlight">${data.premisesAddress}</span>, India (the "Premises").</p>

        <h2>3. TENANT LIABILITY</h2>
        <p>The Parties acknowledges that: 
            <ul>
                <li>The Tenant will remain liable for any breach committed by the new tenant during the sublease.</li>
                <li>The Landlord will be entitled to pursue all remedies available in the event of the Tenant's breach of the initial Lease Agreement.</li>
            </ul>
        </p>

        <h2>4. SUBTENANT LIABILITY</h2>
        <p>It is understood that the new tenant will assume all the responsibilities of the Tenant after agreeing to sublet the Premises.</p>

        <p>This Agreement is drawn up in two (2) identical copies, one for each party. Both Parties have read and fully understood this Agreement. This Agreement shall become effective and legally binding upon signature by each of the Parties.</p>

        <h2>SIGNED BY:</h2>
        <div class="signatures">
            <div class="signature-block" style="display: flex; justify-content: space-between; margin-bottom: 40px;">
                <div>
                    <p>The Landlord</p>
                </div>
                <div>
                    <p>The Tenant</p>
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

