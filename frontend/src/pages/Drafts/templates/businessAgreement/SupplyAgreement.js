export const supplyAgreementFields = [
  "supplierName",
  "supplierAddress",
  "buyerName",
  "buyerAddress",
  "goodsDescription",
  "quantity",
  "unitPrice",
  "totalValue",
  "deliveryTerms",
  "paymentTerms",
  "qualityStandards",
  "contractPeriod",
  "signingDate"
];

export const generateSupplyAgreement = (data) => `<div class="agreement-template">
  <h1 class="agreement-title">SUPPLY AGREEMENT</h1>

  <div class="agreement-body">
    <p>This Supply Agreement (the "Agreement") is entered into on <span class="highlight">${data.signingDate}</span>, between:</p>

    <p><strong>SUPPLIER:</strong> <span class="highlight">${data.supplierName}</span>, having its principal place of business at <span class="highlight">${data.supplierAddress}</span> (the "Supplier")</p>

    <p><strong>BUYER:</strong> <span class="highlight">${data.buyerName}</span>, having its principal place of business at <span class="highlight">${data.buyerAddress}</span> (the "Buyer")</p>

    <h2>1. GOODS</h2>
    <p>1.1 The Supplier agrees to supply the following goods: <span class="highlight">${data.goodsDescription}</span></p>

    <p>1.2 Quantity: <span class="highlight">${data.quantity}</span></p>

    <p>1.3 Unit Price: <span class="highlight">${data.unitPrice}</span></p>

    <p>1.4 Total Contract Value: <span class="highlight">${data.totalValue}</span></p>

    <h2>2. DELIVERY</h2>
    <p>2.1 Delivery Terms: <span class="highlight">${data.deliveryTerms}</span></p>

    <p>2.2 The Supplier shall deliver the goods in accordance with the agreed schedule and specifications.</p>

    <h2>3. PAYMENT</h2>
    <p>3.1 Payment Terms: <span class="highlight">${data.paymentTerms}</span></p>

    <h2>4. QUALITY STANDARDS</h2>
    <p>4.1 All goods supplied must meet the following quality standards: <span class="highlight">${data.qualityStandards}</span></p>

    <p>4.2 The Buyer has the right to inspect and test the goods upon delivery.</p>

    <h2>5. CONTRACT PERIOD</h2>
    <p>5.1 This Agreement shall remain in effect for <span class="highlight">${data.contractPeriod}</span> from the date of signing.</p>

    <h2>6. WARRANTIES</h2>
    <p>6.1 The Supplier warrants that all goods supplied will be free from defects and conform to specifications.</p>

    <h2>7. FORCE MAJEURE</h2>
    <p>7.1 Neither party shall be liable for delays or failures due to circumstances beyond their reasonable control.</p>

    <div class="signatures">
      <h2>IN WITNESS WHEREOF, the parties have executed this Agreement.</h2>
      
      <div class="signature-block">
        <p>_________________________</p>
        <p>SUPPLIER</p>
        <p>Name: <span class="highlight">${data.supplierName}</span></p>
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
