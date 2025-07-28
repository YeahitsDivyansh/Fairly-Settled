export const rentReceiptFields = [
    "receiptDate",
    "propertyAddress",
    "tenantName",
    "rentPeriodStart",
    "rentPeriodEnd",
    "landlordName",
    "amountPaid",
    "paymentReceivedBy"
];

export const generateRentReceipt = (data) => `<div class="receipt-template">
    <h1 class="receipt-title">Rent Receipt</h1>
    <style>
    .highlight { font-weight: bold; }
    .receipt-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
    .receipt-table td { border: 1px solid #000; padding: 8px; }
    .receipt-table .label { background-color: #f0f0f0; font-weight: bold; width: 30%; }
    </style>
    
    <div class="receipt-body">
        <p>Receipt Date: <span class="highlight">${data.receiptDate}</span></p>
        
        <table class="receipt-table">
            <tr>
                <td class="label">Property Address:</td>
                <td>${data.propertyAddress}, India</td>
            </tr>
            <tr>
                <td class="label">Tenant Name(s):</td>
                <td>${data.tenantName}</td>
            </tr>
            <tr>
                <td class="label">Rent Period Paid:</td>
                <td>${data.rentPeriodStart} to ${data.rentPeriodEnd}</td>
            </tr>
            <tr>
                <td class="label">Paid To Landlord:</td>
                <td>${data.landlordName}</td>
            </tr>
            <tr>
                <td class="label">Amount Paid:</td>
                <td>INR ${data.amountPaid} (Indian Rupees)</td>
            </tr>
        </table>

        <p>This receipt serves as proof that the rental fee has been received in full for the rental period of <span class="highlight">${data.rentPeriodStart} to ${data.rentPeriodEnd}</span>.</p>

        <p>Payment Received By: <span class="highlight">${data.paymentReceivedBy}</span></p>

        <p>For any questions or concerns please contact the Landlord and or his Agent.</p>
    </div>
</div>`;
