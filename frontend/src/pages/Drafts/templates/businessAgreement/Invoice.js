export const invoiceFields = [
    "invoiceNumber",
    "invoiceDate",
    "companyName",
    "companyAddress",
    "companyTaxId",
    "clientName",
    "clientAddress",
    "clientTaxId",
    "items", // Array of { description, pricePerUnit, quantity, total }
    "totalBeforeVAT",
    "vatPercent",
    "vatAmount",
    "grandTotal",
    "bankName",
    "branchName",
    "accountantName",
    "accountNumber"
];

export const generateInvoice = (data) => `
<div class="agreement-template">
  <div class="agreement-title">Invoice</div>
  <div class="agreement-body">
    <div style="display: flex; justify-content: flex-end; margin-bottom: 20px;">
      <div class="agreement-table">
        <table>
          <tr>
            <td><strong>Invoice Number</strong></td>
            <td>${data.invoiceNumber || 'N/A'}</td>
          </tr>
          <tr>
            <td><strong>Date</strong></td>
            <td>${data.invoiceDate || new Date().toLocaleDateString()}</td>
          </tr>
        </table>
      </div>
    </div>

    <div style="margin: 20px 0;">
      <p><strong>Company Name:</strong> ${data.companyName || 'N/A'}</p>
      <p><strong>Address (Head Office):</strong> ${data.companyAddress || 'N/A'}</p>
      <p><strong>Tax ID:</strong> ${data.companyTaxId || 'N/A'}</p>
      <br/>
      <p><strong>Client Name:</strong> ${data.clientName || 'N/A'}</p>
      <p><strong>Address:</strong> ${data.clientAddress || 'N/A'}</p>
      <p><strong>Tax ID:</strong> ${data.clientTaxId || 'N/A'}</p>
    </div>

    <div class="agreement-table">
      <table>
        <thead>
          <tr>
            <th>N°</th>
            <th>DESCRIPTION</th>
            <th>PRICE/UNIT</th>
            <th>QUANTITY</th>
            <th>TOTAL (INR)</th>
          </tr>
        </thead>
        <tbody>
          ${Array.isArray(data.items) && data.items.length > 0 ? data.items.map((item, idx) => `
            <tr>
              <td>${idx + 1}</td>
              <td>${item.description || 'Item Description'}</td>
              <td>${item.pricePerUnit || '0.00'}</td>
              <td>${item.quantity || '1'}</td>
              <td>${item.total || '0.00'}</td>
            </tr>
          `).join('') : `
            <tr>
              <td>1</td>
              <td>Sample Item</td>
              <td>0.00</td>
              <td>1</td>
              <td>0.00</td>
            </tr>
          `}
          <tr>
            <td colspan="4"><strong>SUBTOTAL</strong></td>
            <td><strong>INR ${data.totalBeforeVAT || '0.00'}</strong></td>
          </tr>
          <tr>
            <td colspan="4"><strong>VAT ${data.vatPercent || 0}%</strong></td>
            <td><strong>INR ${data.vatAmount || '0.00'}</strong></td>
          </tr>
          <tr>
            <td colspan="4"><strong>GRAND TOTAL</strong></td>
            <td><strong>INR ${data.grandTotal || '0.00'}</strong></td>
          </tr>
        </tbody>
      </table>
    </div>

    <p style="margin: 20px 0;"><em>Note: Withholding tax can be deducted from the price before VAT.</em></p>

    <h3>Payment Information</h3>
    <p><strong>Bank Name:</strong> ${data.bankName || 'N/A'}</p>
    <p><strong>Branch:</strong> ${data.branchName || 'N/A'}</p>
    <p><strong>Account Holder:</strong> ${data.accountantName || 'N/A'}</p>
    <p><strong>Account Number:</strong> ${data.accountNumber || 'N/A'}</p>
    
    <div style="margin-top: 60px;">
      <p><strong>Signature:</strong> _________________________</p>
    </div>
  </div>
</div>
`;
