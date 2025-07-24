export const businessPurchaseAgreementFields = [
  "sellerName",
  "sellerAddress",
  "buyerName",
  "buyerAddress",
  "businessName",
  "businessDescription",
  "purchasePrice",
  "paymentTerms",
  "assetsIncluded",
  "liabilities",
  "closingDate",
  "signingDate"
];

export const generateBusinessPurchaseAgreement = (data) => `<div class="agreement-template">
  <h1 class="agreement-title">BUSINESS PURCHASE AGREEMENT</h1>

  <div class="agreement-body">
    <p>This Business Purchase Agreement (the "Agreement") is entered into on <span class="highlight">${data.signingDate}</span>, between:</p>

    <p><strong>SELLER:</strong> <span class="highlight">${data.sellerName}</span>, located at <span class="highlight">${data.sellerAddress}</span> (the "Seller")</p>

    <p><strong>BUYER:</strong> <span class="highlight">${data.buyerName}</span>, located at <span class="highlight">${data.buyerAddress}</span> (the "Buyer")</p>

    <h2>1. BUSINESS BEING SOLD</h2>
    <p>1.1 Business Name: <span class="highlight">${data.businessName}</span></p>

    <p>1.2 Business Description: <span class="highlight">${data.businessDescription}</span></p>

    <h2>2. PURCHASE PRICE</h2>
    <p>2.1 Purchase Price: <span class="highlight">${data.purchasePrice}</span></p>

    <p>2.2 Payment Terms: <span class="highlight">${data.paymentTerms}</span></p>

    <h2>3. ASSETS AND LIABILITIES</h2>
    <p>3.1 Assets Included: <span class="highlight">${data.assetsIncluded}</span></p>

    <p>3.2 Liabilities: <span class="highlight">${data.liabilities}</span></p>

    <h2>4. CLOSING</h2>
    <p>4.1 Closing Date: <span class="highlight">${data.closingDate}</span></p>

    <h2>5. REPRESENTATIONS AND WARRANTIES</h2>
    <p>5.1 The Seller represents that they have good and marketable title to the business assets.</p>

    <div class="signatures">
      <h2>IN WITNESS WHEREOF, the parties have executed this Agreement.</h2>
      
      <div class="signature-block">
        <p>_________________________</p>
        <p>SELLER</p>
        <p>Name: <span class="highlight">${data.sellerName}</span></p>
        <p>Date: <span class="highlight">${data.signingDate}</span></p>
      </div>

      <div class="signature-block">
        <p>_________________________</p>
        <p>BUYER</p>
        <p>Name: <span class="highlight">${data.buyerName}</span></p>
        <p>Date: <span class="highlight">${data.signingDate}</span></p>
      </div>
    </div>
  </div>
</div>`;
