export const landLeaseAgreementFields = [
    "executionDate",
    "landlordFullName",
    "tenantFullName",
    "landAddress",
    "leaseDuration",
    "monthlyRent",
    "securityDeposit",
    "landlordSignature",
    "tenantSignature",
    "witness1Signature",
    "witness2Signature"
];

export const generateLandLeaseAgreement = (data) => `<div class="agreement-template">
    <h1 class="agreement-title">LAND LEASE AGREEMENT</h1>
    <style>
        .highlight { font-weight: bold; }
    </style>
    <div class="agreement-body">
        <p>This Land Lease Agreement shall become effective on <span class="highlight">${data.executionDate}</span> (the "Execution Date") and is subject to the terms and conditions stated below by and between <span class="highlight">${data.landlordFullName}</span> (the "Landlord") and <span class="highlight">${data.tenantFullName}</span> (the "Tenant"), collectively referred to as the "Parties".</p>
        <h2>1. LAND TO BE LEASE.</h2>
        <p>The Landlord agrees to rent the Land located at <span class="highlight">${data.landAddress}</span> (the "Land"). The Land title is attached to this Lease Agreement and indicates the area of the Land. The Landlord grants the Tenant permission to use the Land for <span class="highlight">${data.leaseDuration}</span> months.</p>

        <h2>2. LEASE DURATION.</h2>
        <p>The term of the Land Lease begins on <span class="highlight">${data.leaseDuration}</span> and ends on <span class="highlight">${data.leaseDuration}</span>.</p>

        <h2>3. PAYMENTS.</h2>
        <p>The monthly rent due under this Agreement is INR <span class="highlight">${data.monthlyRent}</span> (Indian Rupees) per month. The rent must be paid in full every month no later than the day of the Execution Date. The first payment of rent must be paid upon the signature of this Agreement. If the rent is not paid on the due date, the Landlord shall pay a late fee of INR <span class="highlight">${data.securityDeposit}</span> (Indian Rupees) for each day of delay after the first day of rent.</p>

        <h2>4. SECURITY DEPOSIT.</h2>
        <p>The security deposit must be paid to the Landlord no later than the Execution Date of this Agreement by the Tenant. The Landlord will hold it as security to meet the Tenant's obligations under this Agreement. The Tenant shall deliver INR <span class="highlight">${data.securityDeposit}</span> (Indian Rupees) equivalent to two (2) months of the lease payment.</p>

        <h2>5. TERMS AND CONDITION.</h2>
        <p>With the Landlord's prior consent, the Tenant is authorized to:</p>
        <ul class="agreement-list">
            <li>Install constructions likely to alter the Land.</li>
            <li>Install equipment or items likely to alter the Land.</li>
            <li>Dig holes, wells, excavate the Land or perform other actions that will affect the condition of the leased Land.</li>
            <li>Clearing the Land or performing other actions that will affect the condition of the leased Land.</li>
        </ul>
        <p>Nevertheless, at the expiration of this Agreement and if requested by the Landlord, the Tenant shall demolish such building or structure and restore the leased Land to its former condition.</p>

        <h2>6. TAX.</h2>
        <p>The Tenant must pay the property tax or other taxes related to the lease. All the above expenses are considered additional rental charges paid by the Tenant when requested by the Landlord.</p>

        <h2>7. TRANSFER OF LEASE.</h2>
        <p>Without the Landlord's prior written consent, the Tenant shall not assign, mortgage, or sublet the Land leased or permit the use of the Land by any party other than the Tenant.</p>

        <h2>8. BREACH OF CONTRACT.</h2>
        <p>If a party fails to comply with any of its obligations under this Agreement, the Tenant or Landlord shall have the right to send a notice requiring compliance with the requirements of this Agreement within an appropriate time. If the defaulting party continues to fail to comply with the terms of the Agreement, the other party may terminate the lease, take legal action against the defaulting party, and seek compensation.</p>

        <h2>9. TERMINATION.</h2>
        <p>The Landlord should have the right to terminate this Agreement by written notice upon the occurrence of any of the following circumstances:</p>
        <ul class="agreement-list">
            <li>The Tenant fails to pay the rent, or any other amount owed to the Landlord.</li>
            <li>Third parties occupy the Land without the Landlord's permission.</li>
            <li>The Tenant fails to comply with the terms and conditions of this Agreement.</li>
            <li>The Landlord has the right to terminate this Agreement under this clause, the Landlord shall also have the right to forfeit the security deposit and shall be entitled to financial compensation in respect of any damage or loss suffered.</li>
        </ul>
        <p>The Land is vacated when all areas are cleared of all the Tenant's property.</p>

        <h2>10. GOVERNING LAW AND JURISDICTION.</h2>
        <p>This Agreement is governed by and shall be construed following the laws of India. The Parties submit all their disputes arising out of or connected with this Agreement to the jurisdiction of the Courts of India.</p>

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

