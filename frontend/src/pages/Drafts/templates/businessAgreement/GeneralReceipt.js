export const generalReceiptFields = [
  "receiptNumber",
  "receiptDate",
  "companyName",
  "companyAddress",
  "companyTaxId",
  "clientName",
  "clientAddress",
  "clientTaxId",
  "items", // Array of { description, pricePerUnit, quantity, total }
  "subTotal",
  "vatPercent",
  "vatAmount",
  "grandTotal",
  "overpayment",
  "deductedWHT"
];

export const generateGeneralReceipt = (data) => `<div class="agreement-template">
  <h1 class="agreement-title">General Receipt</h1>

  <div class="agreement-body">
    <div style="display: flex; justify-content: flex-end; margin-bottom: 20px;">
      <div class="agreement-table">
        <table>
          <tr>
            <td><strong>Receipt number</strong></td>
            <td>${data.receiptNumber || 'N/A'}</td>
          </tr>
          <tr>
            <td><strong>Date</strong></td>
            <td>${data.receiptDate || new Date().toLocaleDateString()}</td>
          </tr>
        </table>
      </div>
    </div>

    <div style="margin: 20px 0;">
      <p>[Company stamp, if applicable]<strong>Company name:</strong> ${data.companyName || 'N/A'}</p>
      <p><strong>Address (Head Office):</strong> ${data.companyAddress || 'N/A'}</p>
      <p><strong>Tax ID:</strong> ${data.companyTaxId || 'N/A'}</p>
      <p><strong>Client name:</strong> ${data.clientName || 'N/A'}</p>
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
          ${(() => {
            // Check if items array exists and has items
            if (Array.isArray(data.items) && data.items.length > 0) {
              // Calculate subtotal dynamically
              const calculatedSubTotal = data.items.reduce((sum, item) => {
                const itemTotal = parseFloat(item.total || 0);
                return sum + itemTotal;
              }, 0).toFixed(2);
              
              // Calculate VAT amount dynamically
              const vatPercent = parseFloat(data.vatPercent || 18);
              const calculatedVatAmount = ((vatPercent / 100) * calculatedSubTotal).toFixed(2);
              
              // Calculate grand total dynamically
              const calculatedGrandTotal = (parseFloat(calculatedSubTotal) + parseFloat(calculatedVatAmount)).toFixed(2);
              
              // Generate table rows for each item
              const itemRows = data.items.map((item, idx) => `
                <tr>
                  <td>${idx + 1}</td>
                  <td>${item.description || 'Item Description'}</td>
                  <td>${item.pricePerUnit || '0.00'}</td>
                  <td>${item.quantity || '1'}</td>
                  <td>${item.total || '0.00'}</td>
                </tr>
              `).join('');
              
              return `
                ${itemRows}
                <tr>
                  <td colspan="4"><strong>TOTAL</strong></td>
                  <td><strong>INR ${data.subTotal || calculatedSubTotal}</strong></td>
                </tr>
                <tr>
                  <td colspan="4"><strong>VAT ${data.vatPercent || '18'}%</strong></td>
                  <td><strong>INR ${data.vatAmount || calculatedVatAmount}</strong></td>
                </tr>
                <tr>
                  <td colspan="4"><strong>GRAND TOTAL</strong></td>
                  <td><strong>INR ${data.grandTotal || calculatedGrandTotal}</strong></td>
                </tr>
              `;
            } else {
              // Default example rows if no items provided
              return `
                <tr>
                  <td>1</td>
                  <td>Example: Consulting Services</td>
                  <td>500.00</td>
                  <td>10</td>
                  <td>5,000.00</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Example: Software License</td>
                  <td>1,000.00</td>
                  <td>5</td>
                  <td>5,000.00</td>
                </tr>
                <tr>
                  <td colspan="4"><strong>TOTAL</strong></td>
                  <td><strong>INR 10,000.00</strong></td>
                </tr>
                <tr>
                  <td colspan="4"><strong>VAT 18%</strong></td>
                  <td><strong>INR 1,800.00</strong></td>
                </tr>
                <tr>
                  <td colspan="4"><strong>GRAND TOTAL</strong></td>
                  <td><strong>INR 11,800.00</strong></td>
                </tr>
              `;
            }
          })()}
        
        </tbody>
      </table>
    </div>

    <div style="margin-top: 20px;">
      <h3>Information about the invoice</h3>
      <p><strong>Invoice number:</strong> ${data.receiptNumber || '[Invoice Number, e.g., INV-2025-001]'}</p>
      <p><strong>Date:</strong> ${data.receiptDate || '[Invoice Date, e.g., July 22, 2025]'}</p>
      <p><strong>Overpayment:</strong> ${data.overpayment || '[Overpayment amount, if any, e.g., INR 0.00]'}</p>
      <p><strong>Deducted WHT:</strong> ${data.deductedWHT || '[Deducted Withholding Tax, if any, e.g., INR 0.00]'}</p>
    </div>
  </div>
</div>`;
