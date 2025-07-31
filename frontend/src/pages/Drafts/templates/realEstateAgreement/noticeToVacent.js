export const noticeToVacateFields = [
    "landlordFullName",
    "propertyAddress",
    "departureDate",
    "issuedDate"
];

export const generateNoticeToVacate = (data) => `<div class="notice-template">
    <h1 class="notice-title">NOTICE TO VACATE</h1>
    <style>
    .highlight { font-weight: bold; }
    </style>
    
    <div class="notice-body">
        <p>To the attention of the Landlord, <span class="highlight">${data.landlordFullName}</span>,</p>
        <p>Following our Agreement, I rented the property located at <span class="highlight">${data.propertyAddress}</span>, India.</p>
        
        <h2>REPAIR</h2>
        <p>The property requires certain repairs that are the responsibility of the Landlord. You are required to make these repairs. If you do not within a reasonable time after receiving this notice, I elect to terminate our Lease Agreement.</p>
        
        <h2>LEASE NO RENEWAL</h2>
        <p>At the end of our Lease Agreement, I hereby inform you that I do not intend to renew my Lease. Consequently, I will leave the Premises no later than <span class="highlight">${data.departureDate}</span>. You may transfer the amount of my security deposit to my bank account following my departure.</p>

        <p>THIS NOTICE IS GIVEN IN ACCORDANCE WITH THE LAWS OF INDIA AND DOES NOT IN ANY WAY PREJUDICE OR LIMIT ANY OTHER REMEDIES OR RIGHTS I MAY HAVE UNDER THE LEASE TERMS AND CONDITIONS OR SUCH LAWS.</p>

        <p>Sincerely,</p>
        <p>Issued on <span class="highlight">${data.issuedDate}</span>.</p>

        <div class="signature">
            <p>_________________________</p>
            <p>The Tenant</p>
        </div>
    </div>
</div>`;

