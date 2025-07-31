export const leaseAmendmentFields = [
    "executionDate",
    "landlordFullName",
    "tenantFullName",
    "newMonthlyRent",
    "leaseExtensionStartDate",
    "leaseExtensionEndDate",
    "newTenantFullName"
];

export const generateLeaseAmendment = (data) => `<div class="agreement-template">
    <h1 class="agreement-title">LEASE AMENDMENT</h1>
     <style>
    .highlight { font-weight: bold; }
    </style>
    
    <div class="agreement-body">
        <p>This Lease Amendment shall become effective on <span class="highlight">${data.executionDate}</span> (the "Execution Date") and is subject to the terms and conditions stated below by and between <span class="highlight">${data.landlordFullName}</span> (the "Landlord") and <span class="highlight">${data.tenantFullName}</span> (the "Tenant"), collectively referred to as the "Parties".</p>
        
        <p>1. LEASE APPLICATION. The Parties have entered into an existing Lease Agreement for the property (the "Premises"). By this Amendment, the Parties wish to amend the terms and conditions of the lease agreement signed between the Parties. Except as otherwise expressly provided in this Amendment, all the terms and conditions of the lease agreement remain unchanged and are in full force and effect.</p>

        <h2>2. AMENDMENT OF RENT FEES</h2>
        <p>In consideration of the acceptance by the Parties to amend the lease agreement, both Parties agree to perform the following conditions:</p>
        <ul class="agreement-list">
            <li>Rent Adjustment: The Parties agree to increase the monthly rental as set out in the lease agreement. The new monthly rent due during this Amendment shall be INR <span class="highlight">${data.newMonthlyRent}</span> per month. The new rent fees shall be effective on the date of this Lease Amendment is signed.</li>
            <li>No Other Changes: Unless amended, all terms and provisions of the lease agreement shall remain in effect and form part of this Amendment.</li>
        </ul>

        <h2>3. LEASE EXTENSION</h2>
        <p>The Parties agree to extend the term of the lease agreement from <span class="highlight">${data.leaseExtensionStartDate}</span> to <span class="highlight">${data.leaseExtensionEndDate}</span>.</p>

        <h2>4. NEW TENANT</h2>
        <p>The Parties hereby acknowledge and agree that <span class="highlight">${data.newTenantFullName}</span> (the "New Tenant") will move into the Premises under the terms and conditions set out in the lease agreement. The New Tenant agrees to be jointly and severally liable under the lease agreement for all sums due and payable, whether overdue, currently due, or to become due.</p>

        <h2>5. GOVERNING LAW AND JURISDICTION</h2>
        <p>This Amendment is governed by and shall be construed following the laws of India. The Parties submit all their disputes arising out of or connected with this Amendment to the jurisdiction of the Courts of India.</p>

        <p>This Amendment is drawn up in two (2) identical copies, one for each Party. Both Parties have read and fully understood this Amendment. This Amendment shall become effective and legally binding upon signature by each of the Parties.</p>

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

