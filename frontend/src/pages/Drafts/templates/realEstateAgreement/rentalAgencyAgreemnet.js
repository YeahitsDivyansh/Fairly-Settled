export const rentalAgencyAgreementFields = [
    "executionDate",
    "agentCompanyName",
    "agentDirectorName",
    "landlordFullName",
    "landlordIdPassport",
    "propertyAddress",
    "bookingDepositAmount",
];

export const generateRentalAgencyAgreement = (data) => `<div class="agreement-template">
    <h1 class="agreement-title">RENTAL AGENCY AGREEMENT</h1>
    <style>
    .highlight { font-weight: bold; }
    </style>

    <div class="agreement-body">
        <p>This Rental Agency Agreement shall be effective on <span class="highlight">${data.executionDate}</span> (the "Execution Date") and is subject to the terms and conditions stated below by and between <span class="highlight">${data.agentCompanyName}</span> (the "Agent") and represented by <span class="highlight">${data.agentDirectorName}</span>, authorized Director, and <span class="highlight">${data.landlordFullName}</span> holding ID/Passport number <span class="highlight">${data.landlordIdPassport}</span> (the "Landlord"), collectively referred to as the "Parties". THEREFORE, Parties hereby agree to enter into this Agreement according to the following terms and conditions contained therein.</p>

        <h2>1. SCOPE OF SERVICES</h2>
        <ul class="agreement-list">
            <li><strong>Property marketing and advertising:</strong> The Agent agrees to market and advertise the rental property on various platforms and channels to attract potential tenants.</li>
            <li><strong>Tenant screening:</strong> The Agent shall conduct thorough tenant screening processes, including background checks, credit checks, and verification of references.</li>
            <li><strong>Rental price evaluation:</strong> The Agent, in consultation with the Landlord, shall determine the appropriate rental price for the property.</li>
            <li><strong>Property showings and viewings:</strong> The Agent shall arrange and conduct property showings and viewings for interested prospective tenants.</li>
            <li><strong>Contract drafting:</strong> The Agent shall prepare the lease agreement between the Landlord and the tenant.</li>
            <li><strong>Rent collection:</strong> The Agent shall assure that the Landlord collect rental payments from the tenant as per the agreed terms.</li>
            <li><strong>Tenant relations:</strong> The Agent shall serve as the primary point of contact for tenant inquiries, concerns, and issue resolution.</li>
            <li><strong>Reporting and communication:</strong> The Agent shall provide regular reports to the Landlord regarding property occupancy, rental income, expenses, and other relevant information.</li>
        </ul>

        <p>The service fee does not include property management or tenancy services during the time of the lease such as rental preparation, management of repair or cleaning personnel, proactive rental payment, bill payments, eviction support, legal support, or property inspections during renting period.</p>

        <h2>2. PROPERTY DESCRIPTION</h2>
        <p>The Agent agrees to represent the Landlord in the lease of the property located at <span class="highlight">${data.propertyAddress}</span>, India (the "Property").</p>

        <h2>3. TERMS</h2>
        <p>This agreement shall remain in effect for a period of six (6) months from the date of signing, unless terminated earlier by either party.</p>

        <h2>4. EXCLUSIVE AGENCY</h2>
        <p>The Landlord hereby grants the Agent exclusive rights to market, advertise, and rent the Property during the term of this Agreement.</p>

        <h2>5. SERVICE FEES</h2>
        <ul class="agreement-list">
            <li>a) For lease agreements with a duration of one (1) year: The commission fee shall be equal to ten percent (10%) of the total rental value.</li>
            <li>b) For lease agreements with a duration of two (2) years: The commission fee shall be equal to eight percent (8%) of the total rental value.</li>
            <li>c) For lease agreements with a duration of three (3) years: The commission fee shall be equal to fifteen percent (15%) of the total rental value.</li>
            <li>d) For lease extension with a duration of minimum one (1) year: The commission fee shall be equal to five percent (5%) of the total renewed rental value.</li>
        </ul>

        <p>The Landlord shall transfer the service fee to the Agent within one (1) day, after receiving the advance rental payment and the security deposit payment from the tenant.</p>

        <h2>6. RENTAL PRICE AND LEASE AGREEMENTS</h2>
        <ul class="agreement-list">
            <li><strong>Rental price:</strong> The Agent shall work with the Landlord to determine an appropriate rental price for the property.</li>
            <li><strong>Lease term:</strong> The duration of the lease agreement shall be determined by mutual agreement between the Landlord and the tenant, with a minimum term of one (1) year.</li>
            <li><strong>Rent payment:</strong> The tenant shall be responsible for paying the rent to the Landlord as per the terms specified in the lease agreement.</li>
            <li><strong>Rent increases:</strong> If the Landlord wishes to increase the rental price, the Landlord shall notify the Agent in writing.</li>
            <li><strong>Lease renewal:</strong> If the tenant expresses an interest in renewing the lease agreement, the Agent shall work with the Landlord to negotiate the terms and conditions of the lease renewal.</li>
            <li><strong>Termination of agreement:</strong> In the event of lease agreement termination, the Agent shall assist the Landlord in the smooth transition of the Property.</li>
        </ul>

        <h2>7. BOOKING DEPOSIT ARRANGEMENT</h2>
        <p>The Landlord agrees that the booking deposit shall be paid by the tenant to the Agent upon signing the lease agreement. The booking deposit shall serve as a reservation fee and shall be deducted from the total rental amount payable by the tenant.</p>

        <h2>8. DISCLOSURE AND COMPLIANCE</h2>
        <p>The Agent will provide necessary disclosures and ensure compliance with applicable laws and regulations.</p>

        <h2>9. TERMINATION</h2>
        <p>Either party may terminate this agreement at any time without cause by providing written notice to the other party.</p>

        <h2>10. INDEMNIFICATION</h2>
        <p>Both Parties agree to indemnify and hold the other party harmless from any losses, damages, costs, or expenses incurred as a result of such failure or early termination.</p>

        <h2>11. DISPUTE RESOLUTION</h2>
        <p>In the event of any dispute, controversy, or claim arising out of or relating to this Rental Agency Agreement, the Parties shall first attempt to resolve the matter amicably through good-faith negotiations.</p>

        <h2>12. FORCE MAJEURE</h2>
        <p>If either party is unable to perform their obligations under this agreement due to a force majeure event, the affected party shall promptly notify the other party.</p>

        <h2>13. ENTIRE AGREEMENT</h2>
        <p>This Agreement contains all terms and conditions agreed to by the Parties, including any attachments or appendices.</p>

        <h2>14. GOVERNING LAW AND JURISDICTION</h2>
        <p>This Rental Agency Agreement shall be governed by and interpreted in accordance with the laws of India.</p>

        <h2>15. DOCUMENTS ATTACHED TO THE AGREEMENT</h2>
        <p>Both Parties agree that the following documents attached and signed by the Parties are considered as a part of this Agreement:</p>
        <ul class="agreement-list">
            <li>Agent details: Copy of the ID-card, Proof of address, Bank account details</li>
            <li>Landlord details: Copy of the ID-card, Proof of address, Copy of the property title deed, Property details</li>
        </ul>

        <p>This Agreement is drawn up in two (2) identical copies, one for each Party. Both Parties have read and fully understood this Agreement. This Agreement shall become effective and binding upon both Parties as of the date of the last signature below.</p>

        <h2>SIGNED BY:</h2>
        <div class="signatures">
            <div class="signature-block" style="display: flex; justify-content: space-between; margin-bottom: 40px;">
                <div>
                    <p>The Agent</p>
                </div>
                <div>
                    <p>The Landlord</p>
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

