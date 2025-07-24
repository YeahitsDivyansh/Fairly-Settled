export const carPurchaseAgreementFields = [
  "sellerName",
  "sellerAddress",
  "buyerName",
  "buyerAddress",
  "vehicleMake",
  "vehicleModel",
  "vehicleYear",
  "vehicleVin",
  "purchasePrice",
  "paymentMethod",
  "condition",
  "signingDate"
];

export const generateCarPurchaseAgreement = (data) => `<div class="agreement-template">
  <h1 class="agreement-title">CAR PURCHASE AGREEMENT</h1>

  <div class="agreement-body">
    <p>This Car Purchase Agreement is entered into on <span class="highlight">${data.signingDate}</span>, between:</p>

    <p><strong>SELLER:</strong> <span class="highlight">${data.sellerName}</span>, located at <span class="highlight">${data.sellerAddress}</span></p>

    <p><strong>BUYER:</strong> <span class="highlight">${data.buyerName}</span>, located at <span class="highlight">${data.buyerAddress}</span></p>

    <h2>1. VEHICLE DESCRIPTION</h2>
    <p>Make: <span class="highlight">${data.vehicleMake}</span></p>
    <p>Model: <span class="highlight">${data.vehicleModel}</span></p>
    <p>Year: <span class="highlight">${data.vehicleYear}</span></p>
    <p>VIN: <span class="highlight">${data.vehicleVin}</span></p>

    <h2>2. PURCHASE TERMS</h2>
    <p>Purchase Price: <span class="highlight">${data.purchasePrice}</span></p>
    <p>Payment Method: <span class="highlight">${data.paymentMethod}</span></p>

    <h2>3. CONDITION</h2>
    <p>Vehicle Condition: <span class="highlight">${data.condition}</span></p>

    <div class="signatures">
      <div class="signature-block">
        <p>_________________________</p>
        <p>SELLER: <span class="highlight">${data.sellerName}</span></p>
        <p>Date: <span class="highlight">${data.signingDate}</span></p>
      </div>

      <div class="signature-block">
        <p>_________________________</p>
        <p>BUYER: <span class="highlight">${data.buyerName}</span></p>
        <p>Date: <span class="highlight">${data.signingDate}</span></p>
      </div>
    </div>
  </div>
</div>`;
