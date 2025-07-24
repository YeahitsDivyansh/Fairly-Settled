export const generalReceiptFields = [
  "payerName",
  "payeeName",
  "amount",
  "purpose",
  "paymentMethod",
  "receiptDate"
];

export const generateGeneralReceipt = (data) => `<div class="agreement-template">
  <h1 class="agreement-title">RECEIPT</h1>

  <div class="agreement-body">
    <p>Receipt Date: <span class="highlight">${data.receiptDate}</span></p>

    <p>Received from: <span class="highlight">${data.payerName}</span></p>

    <p>Amount: <span class="highlight">${data.amount}</span></p>

    <p>Payment Method: <span class="highlight">${data.paymentMethod}</span></p>

    <p>For: <span class="highlight">${data.purpose}</span></p>

    <div class="signatures">
      <div class="signature-block">
        <p>_________________________</p>
        <p>Received by: <span class="highlight">${data.payeeName}</span></p>
        <p>Date: <span class="highlight">${data.receiptDate}</span></p>
      </div>
    </div>
  </div>
</div>`;
