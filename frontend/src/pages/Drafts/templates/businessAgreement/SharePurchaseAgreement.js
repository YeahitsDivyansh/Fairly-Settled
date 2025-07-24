export const sharePurchaseAgreementFields = [
  "sellerName",
  "sellerAddress",
  "buyerName",
  "buyerAddress",
  "companyName",
  "companyRegistration",
  "numberOfShares",
  "shareNumberFrom",
  "shareNumberTo",
  "pricePerShare",
  "totalPurchasePrice",
  "depositAmount",
  "depositDate",
  "balanceAmount",
  "transferDeadlineDays",
];

export const generateSharePurchaseAgreement = (data) => `<div class="agreement-template">
  <h1 class="agreement-title">Share Purchase Agreement</h1>

  <div class="agreement-body">
    <p>
      This Share Purchase Agreement shall become effective on <span class="highlight">${data.signingDate ?? 'undefined'}</span> (the "Execution Date") and is subject to the terms and conditions stated below between <span class="highlight">${data.sellerName ?? 'undefined'}</span> (the "Seller") and <span class="highlight">${data.buyerName ?? 'undefined'}</span> (the "Buyer"), collectively referred to as the "Parties".
    </p>

    <h2>1. SHARE TO BE PURCHASED.</h2>
    <p>The Seller is the registered owner of <span class="highlight">${data.numberOfShares ?? 'undefined'}</span> shares numbered from <span class="highlight">${data.shareNumberFrom ?? 'undefined'}</span> to <span class="highlight">${data.shareNumberTo ?? 'undefined'}</span> (the "Shares") of <span class="highlight">${data.companyName ?? 'undefined'}</span> having registration number <span class="highlight">${data.companyRegistration ?? 'undefined'}</span> (the "Company"). The value of the Company's shares is equal to INR <span class="highlight">${data.pricePerShare ?? 'undefined'}</span> (Indian Rupees) per share, and the Company holds <span class="highlight">${data.totalShares ?? 'undefined'}</span> in total distributed among the shareholders.</p>

    <h2>2. PAYMENT OF THE SHARE.</h2>
    <p>The Seller agrees to sell, and the Buyer agrees to purchase all the Seller's right, title, interest, and property in the Shares for a total purchase price of INR <span class="highlight">${data.totalPurchasePrice ?? 'undefined'}</span> (Indian Rupees) (the "Purchase Price").</p>

    <p>A deposit of INR <span class="highlight">${data.depositAmount ?? 'undefined'}</span> (Indian Rupees) will be payable by <span class="highlight">${data.depositDate ?? 'undefined'}</span>. The balance of INR <span class="highlight">${data.balanceAmount ?? 'undefined'}</span> (Indian Rupees) will be payable no later than the time of transfer of the Shares to the purchaser.</p>

    <h2>3. SHARE TRANSFER.</h2>
    <p>When the Buyer has paid the Purchase Price balance in full, the Seller will provide to the Buyer the updated list of the shareholder of the Company with duly executed transfers of Shares within seven (7) days following the full payment for the Shares.</p>

    <h2>4. SELLER WARRANTIES.</h2>
    <p>The Seller warrants to the Buyer the following:</p>
    <ul class="agreement-list">
      <li>The Seller is the title owner of the shares, and the shares are free and clear of any charges, encumbrances, mortgages, claims, or other restrictions that would prevent the transfer of title to the Buyer.</li>
      <li>The Seller is not bound by any agreement that would prevent any transaction related to this Agreement.</li>
      <li>Based on the Seller's information, no legal action or lawsuit is pending against any party that would materially affect this Agreement.</li>
    </ul>

    <h2>5. GOVERNING LAW.</h2>
    <p>This Agreement shall be governed by and construed in accordance with the laws of India.</p>

    <p>This Agreement is drawn up in two (2) identical copies, one for each party. Both Parties have read and fully understood this Agreement. This Agreement shall become effective and legally binding upon signature by each of the Parties.</p>

    <div class="signatures">
      <h2>SIGNED BY-</h2>
      
      <div class="signature-block">
        <p>_________________________</p>
        <p>The Seller</p>
       </div>

      <div class="signature-block">
        <p>_________________________</p>
        <p>The Buyer</p>
        </div>

      <div class="signature-block">
        <p>_________________________</p>
        <p>The Witness</p>
       </div>

      <div class="signature-block">
        <p>_________________________</p>
        <p>The Witness</p>
        </div>
    </div>
  </div>
</div>`;
