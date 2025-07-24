export const salesContractFields = [
  "sellerName",
  "sellerAddress",
  "buyerName",
  "buyerAddress",
  "itemDescription",
  "salePrice",
  "paymentMethod",
  "deliveryDate",
  "warranties",
  "returnsPolicy",
  "signingDate"
];

export const generateSalesContract = (data) => `<div class="agreement-template">
  <h1 class="agreement-title">SALES CONTRACT</h1>

  <div class="agreement-body">
    <p>This Sales Contract (the "Contract") is entered into on <span class="highlight">${data.signingDate}</span>, between:</p>

    <p><strong>SELLER:</strong> <span class="highlight">${data.sellerName}</span>, located at <span class="highlight">${data.sellerAddress}</span> (the "Seller")</p>

    <p><strong>BUYER:</strong> <span class="highlight">${data.buyerName}</span>, located at <span class="highlight">${data.buyerAddress}</span> (the "Buyer")</p>

    <h2>1. ITEM FOR SALE</h2>
    <p>1.1 Description: <span class="highlight">${data.itemDescription}</span></p>

    <p>1.2 Sale Price: <span class="highlight">${data.salePrice}</span></p>

    <h2>2. PAYMENT</h2>
    <p>2.1 Payment Method: <span class="highlight">${data.paymentMethod}</span></p>

    <h2>3. DELIVERY</h2>
    <p>3.1 Delivery Date: <span class="highlight">${data.deliveryDate}</span></p>

    <p>3.2 Risk of loss transfers to the Buyer upon delivery.</p>

    <h2>4. WARRANTIES</h2>
    <p>4.1 Warranties: <span class="highlight">${data.warranties}</span></p>

    <h2>5. RETURNS</h2>
    <p>5.1 Returns Policy: <span class="highlight">${data.returnsPolicy}</span></p>

    <h2>6. GOVERNING LAW</h2>
    <p>6.1 This Contract shall be governed by applicable laws.</p>

    <div class="signatures">
      <h2>IN WITNESS WHEREOF, the parties have executed this Contract.</h2>
      
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
