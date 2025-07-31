export const evictionNoticeFields = [
    "tenantFullName",
    "propertyAddress",
    "unpaidRentStartDate",
    "unpaidRentEndDate",
    "daysToPay",
    "vacateDate",
    "noticeDate"
];

export const generateEvictionNotice = (data) => `<div class="eviction-notice-template">
    <h1 class="notice-title">EVICTION NOTICE</h1>
    
    <div class="notice-body">
        <p>To the attention of the Tenant, <span class="highlight">${data.tenantFullName}</span>. Following our Agreement, you have rented the property located at <span class="highlight">${data.propertyAddress}</span>, India.</p>
        
        <h2>PAY OR QUIT</h2>
        <p>It appears that you have not paid the rent of the property from <span class="highlight">${data.unpaidRentStartDate}</span> to <span class="highlight">${data.unpaidRentEndDate}</span> in accordance with our Lease Agreement. You are required to pay the said rents in full upon receipt of this notice. If I do not receive the unpaid rents within <span class="highlight">${data.daysToPay}</span> days from the reception of this notice, I elect to terminate the Agreement and deduct your security deposit from the rents totaling the amount you shall pay.</p>

        <h2>TERMINATION FOR NON-PAYMENT</h2>
        <p>You have not paid the rent of the property from <span class="highlight">${data.unpaidRentStartDate}</span> to <span class="highlight">${data.unpaidRentEndDate}</span> in accordance with our Lease Agreement. Following your breach of the Agreement, I hereby inform you that I am terminating the Lease Agreement with this letter. As a result of such breaches, you are notified that your security deposit will be deducted from the amount you are required to pay because of your obligations as a Tenant. You are invited to vacate and surrender the Premises on <span class="highlight">${data.vacateDate}</span>.</p>

        <h2>TERMINATION FOR UNAUTHORIZED PETS</h2>
        <p>Following our Lease Agreement, you were required not to bring pets on the Premises without my consent. Accordingly, I am giving you this notice of termination of our Agreement because of this breach. You are invited to vacate and surrender the Premises on <span class="highlight">${data.vacateDate}</span>.</p>

        <h2>TERMINATION FOR DAMAGES</h2>
        <p>It appears that you have caused several damages to the Premises. Therefore, I give you notice to terminate our Lease Agreement following this breach of our Agreement. Following the said violations, you are notified that your security deposit will be deducted from the amount you will have to pay because of your obligations as Tenant. You are invited to vacate and surrender the Premises on <span class="highlight">${data.vacateDate}</span>.</p>

        <h2>UNAUTHORIZED SUBLEASE</h2>
        <p>Following our Lease Agreement, you are required not to sublet the property without the Landlord's consent. It appears that you are subletting the Premises to a third party without my authorization. Consequently, I give you notice to terminate our Agreement following this breach. You are invited to vacate and surrender the Premises on <span class="highlight">${data.vacateDate}</span>.</p>

        <p>THIS NOTICE IS GIVEN, ACCORDING TO THE LAWS OF INDIA AND IN NO WAY IMPAIRS OR LIMITS ANY OF THE OTHER REMEDIES OR RIGHTS THAT I MAY HAVE UNDER THE LEASE OR UNDER THE SAID LAWS.</p>

        <p>Issued on <span class="highlight">${data.noticeDate}</span>.</p>
        
        <div class="signature">
            <p>_________________________</p>
            <p>The Landlord</p>
        </div>
    </div>
</div>`;

