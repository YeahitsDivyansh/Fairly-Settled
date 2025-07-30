export const leaseAgreementFields = [
    "executionDate",
    "landlordFullName",
    "tenantFullName",
    "premisesAddress",
    "leaseStart",
    "leaseEnd",
    "monthlyRent",
    "rentDueDay",
    "lateFee",
    "securityDeposit"
];

export const generateLeaseAgreement = (data) => `<div class="agreement-template">
    <h1 class="agreement-title">LEASE AGREEMENT</h1>
    <style>
        .highlight { font-weight: bold; }
    </style>

    <div class="agreement-body">
        <p>This Lease Agreement shall become effective on <span class="highlight">${data.executionDate}</span> (the "Execution Date") and is subject to the terms and conditions stated below between <span class="highlight">${data.landlordFullName}</span> (the "Landlord") and <span class="highlight">${data.tenantFullName}</span> (the "Tenant"), collectively referred to as the "Parties".</p>
        
        <h2>1. PREMISES</h2>
        <p>This Lease Agreement is for the property (The "Premises") located at <span class="highlight">${data.premisesAddress}</span>, India.</p>
        
        <h2>2. LEASE DURATION</h2>
        <p>The lease term begins on <span class="highlight">${data.leaseStart}</span> and ends on <span class="highlight">${data.leaseEnd}</span>. The Tenant must move at the end of the lease term if the Parties do not agree on a new lease agreement or an extension of this Agreement.</p>
        
        <h2>3. PAYMENTS</h2>
        <p>The monthly rent due under this Agreement is INR <span class="highlight">${data.monthlyRent}</span> (Indian Rupees) per month. The rent must be paid in full every month no later than the <span class="highlight">${data.rentDueDay}</span> day of the Execution Date. The first payment of rent must be paid upon the signature of this Lease Agreement. If the rent is not paid on the due date, the Landlord shall pay a late fee of INR <span class="highlight">${data.lateFee}</span> (Indian Rupees) for each day of delay after the first day of rent.</p>
        
        <h2>4. SECURITY DEPOSIT</h2>
        <p>The security deposit must be paid to the Landlord no later than the Execution Date of this Lease Agreement by the Tenant. The Tenant shall deliver INR <span class="highlight">${data.securityDeposit}</span> (Indian Rupees) equivalent to two (2) months of the lease payment. The security deposit should not be a prepayment of any rental, nor shall it be raised by the Tenant as a reason or excuse to not paying the rent as stipulated in this Agreement. The full amount of the security deposit must be returned to the Tenant within thirty (30) days of the Tenant fully vacating the Premises, less any amount the Tenant is required to pay.</p>
        <ul>
            <li>Any unpaid rent.</li>
            <li>Cleaning costs.</li>
            <li>Key replacement costs.</li>
            <li>Cost of repairing any damage beyond normal wear and tear.</li>
            <li>Any other amount legally authorized under the terms of this Agreement.</li>
        </ul>
        <p>If the security deposit paid by the Tenant does not cover such costs and damages, the Tenant should immediately pay the additional costs for the damages of the Premises.</p>
        
        <h2>5. PROPERTY RULES</h2>
        <ul>
            <li>Smoking Policy: The Tenant and/or guests shall not smoke inside the Premises without the consent of the Landlord.</li>
            <li>Purpose Policy: The Tenant and/or guests may only use the Premises as residential accommodation. It may not be used for commercial use unless otherwise specified in this Agreement.</li>
            <li>Safety Policy: The Tenant shall be responsible for any damage caused by fire, water, or any other source originating from the rented Premises.</li>
            <li>Pets: Pets of any kind shall be kept on the Premises, for any length of time, without the prior written consent and satisfaction of the Landlord.</li>
            <li>Guests: Only the Tenant, and no other person, may occupy the Premises without the prior written consent of the Landlord. Guests who occupy the Premises without the Landlord's consent will be considered a breach of this Agreement.</li>
            <li>Nuisance: The Tenant shall not do anything that may cause a nuisance in any way with the quiet enjoyment of the neighboring properties. Any violation of any of the above shall be considered a breach of this Agreement.</li>
        </ul>
        
        <h2>6. CONSENT TO SUBLEASE</h2>
        <p>Without the Landlord's prior written consent, the Tenant shall not assign, mortgage, or sublet the Premises or permit the Premises' use by any party other than the Tenant.</p>
        
        <h2>7. KEYS AND ADDENDA</h2>
        <p>The Tenant will receive the keys to the Premises upon the signature of this Agreement. The Tenant will not make copies of the keys to the Premises. If the keys are lost, the Tenant may obtain them from the Landlord at a reasonable replacement cost. All keys shall be returned to the Landlord at the end of this Agreement.</p>
        
        <h2>8. UTILITIES AND SERVICES</h2>
        <p>The Tenant is responsible for the timely payment of all electricity, water, gas, and any other bills (if any) present during the lease term. If utilities and services are temporarily interrupted due to an accident, emergency, and/or repairs, the Tenant's obligation to pay the rent in full shall not be affected.</p>
        
        <h2>9. MAINTENANCE AND REPAIRS</h2>
        <p>The Tenant is required to maintain the premises at its own expense, except in the case of reasonable wear and tear. In the event of damage, the Tenant shall pay the costs of repair and/or replacement of any damaged furniture in the Premises.</p>
        
        <h2>10. ALTERATIONS</h2>
        <p>The Tenant shall not paint, redecorate, or install any items that alter the Premises without the Landlord's written consent.</p>
        
        <h2>11. TERMINATION</h2>
        <p>The Landlord should have the right to terminate this Agreement by written notice upon the occurrence of any of the following circumstances:</p>
        <ul>
            <li>The Tenant fails to pay the rent, or any other amount owed to the Landlord.</li>
            <li>Third parties occupy the Premises without the Landlord's permission.</li>
            <li>The Tenant fails to comply with the terms and conditions of this Agreement.</li>
        </ul>
        <p>The Landlord has the right to terminate this Agreement under this clause, the Landlord shall also have the right to forfeit the security deposit and shall be entitled to financial compensation in respect of any damage or loss suffered.</p>
        <p>The Premises will only be considered as vacated once all the Tenant's property has been emptied and the keys intended for the Tenant's use have been returned to the Landlord.</p>
        
        <h2>12. GOVERNING LAW AND JURISDICTION</h2>
        <p>This Agreement is governed by and shall be construed following the laws of India. The Parties submit all their disputes arising out of or connected with this Agreement to the jurisdiction of the Courts of India.</p>
        <p>This Agreement is drawn up in two (2) identical copies, one for each Party. Both Parties have read and fully understood this Agreement. This Agreement shall become effective and legally binding upon signature by each of the Parties.</p>

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

