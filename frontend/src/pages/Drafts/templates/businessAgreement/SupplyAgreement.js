export const supplyAgreementFields = [
  "signingDate",
  "supplierName",
  "supplierRegNumber",
  "supplierDirectorName",
  "buyerName",
  "buyerRegNumber",
  "buyerDirectorName",
  "buyerAddress",
  "goodsDescription",
  "sizeAndDimensions",
  "materials",
  "functionality",
  "otherSpecifications",
  "price",
  "paymentTerms",
  "additionalTerms"
];

export const generateSupplyAgreement = (data) => `<div class="agreement-template">
  <h1 class="agreement-title">SUPPLY AGREEMENT</h1>

  <div class="agreement-body">
    <p>This Supply Agreement (the "Agreement") is entered into on <span class="highlight">${data.signingDate}</span> (the "Execution Date") and is subject to the terms and conditions stated below between:</p>

    <p><strong>SUPPLIER:</strong> <span class="highlight">${data.supplierName}</span>, having registration number <span class="highlight">${data.supplierRegNumber}</span> and represented by <span class="highlight">${data.supplierDirectorName}</span>, authorized Director (the "Supplier")</p>

    <p><strong>BUYER:</strong> <span class="highlight">${data.buyerName}</span>, having registration number <span class="highlight">${data.buyerRegNumber}</span> and represented by <span class="highlight">${data.buyerDirectorName}</span>, authorized Director (the "Buyer")</p>

    <h2>1. SCOPE OF SUPPLY</h2>
    <p>The Supplier agrees to supply goods/services to the Buyer in accordance with this Agreement and shall meet the specifications and requirements as mutually agreed upon by the parties:</p>

    <table class="agreement-table" style="border-collapse: collapse; width: 100%; margin-top: 1em;">
      <thead>
        <tr>
          <th style="border: 1px solid #000; width: 35%;">Item(s)</th>
          <th style="border: 1px solid #000; width: 65%;">Description(s)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="width: 35%;">Goods/services:</td>
          <td style="width: 65%;">${data.goodsDescription}</td>
        </tr>
        <tr>
          <td style="width: 35%;">Size and dimensions:</td>
          <td style="width: 65%;">${data.sizeAndDimensions}</td>
        </tr>
        <tr>
          <td style="width: 35%;">Materials:</td>
          <td style="width: 65%;">${data.materials}</td>
        </tr>
        <tr>
          <td style="width: 35%;">Functionality:</td>
          <td style="width: 65%;">${data.functionality}</td>
        </tr>
        <tr>
          <td style="width: 35%;">Other specifications:</td>
          <td style="width: 65%;">${data.otherSpecifications}</td>
        </tr>
      </tbody>
    </table>

    <p>The Supplier shall provide the agreed-upon quantities of goods/services as specified in the purchase orders issued by the Buyer. Any changes in quantities must be communicated and agreed upon in writing by both parties.</p>

    <h2>2. PRICE AND PAYMENT TERMS</h2>
    <p>The Parties shall agree on the pricing of the supplied products or services. The agreed-upon prices shall be stated in the purchase orders issued by the Buyer. The prices may be subject to periodic review and adjustment by mutual agreement, taking into account factors such as market conditions, changes in production costs, or fluctuations in currency exchange rates.</p>

    <p>If there is a significant increase in the cost of the products or services, the Supplier may initiate a price review by providing written notice to the Buyer at least thirty (30) days prior to the proposed effective date of the price adjustment. The Buyer and Supplier shall then engage in good faith negotiations to reach a mutually acceptable adjustment.</p>

    <p>The Buyer shall make payment to the Seller for the supplied products or services within thirty (30) days from the date of receipt of a valid invoice, unless otherwise agreed upon in writing. All payments shall be made in the currency specified in the invoice or as agreed upon by the parties.</p>

    <h2>3. ORDERS AND DELIVERY</h2>
    <p>The Supplier shall adhere to the agreed-upon delivery schedule, which includes delivering the products to the Buyer's located at <span class="highlight">${data.buyerAddress}</span> (the "delivery location") on the date of each month, starting from the effective date of this Supply Agreement. Any changes to the delivery schedule must be mutually agreed upon in writing by both parties.</p>

    <p>If the Buyer requests a change in the delivery date, the Supplier shall submit a written request to the Buyer at least fourteen (14) days before the requested change.</p>

    <h2>4. QUALITY ASSURANCE AND INSPECTION</h2>
    <p>The goods/services shall conform to the applicable industry standards, regulations, and any agreed-upon quality standards, including the Indian Standard (IS). The Supplier shall ensure that the goods/services are free from defects in materials, workmanship, and design.</p>

    <p>The Supplier may be required to provide certificates of conformity, test reports, or other relevant documentation to verify the quality and compliance of the supplied products or services.</p>

    <p>The Buyer shall have the right to inspect and test the supplied products or services to ensure their conformity with the agreed-upon specifications and quality standards. The inspection procedures may include sample testing, product or service demonstrations, documentation review, or any other methods necessary to assess the quality and compliance of the supplied products or services.</p>

    <h2>5. INTELLECTUAL PROPERTY</h2>
    <p>All intellectual property rights, including but not limited to trademarks, trade names, logos, copyrights, patents, trade secrets, and any other proprietary rights associated with the products or services, shall remain the sole and exclusive property of the Supplier.</p>

    <p>The Supplier grants the Buyer a non-exclusive, non-transferable, revocable license to use the Supplier's intellectual property solely for the purposes of promoting, marketing, and selling the products or services within the designated territory of India during the term of this Agreement.</p>

    <h2>6. LIMITATION OF LIABILITY</h2>
    <p>Neither party shall be liable to the other party for any indirect, incidental, consequential, special, or punitive damages, including but not limited to loss of profits, loss of business, or loss of data, arising out of or in connection with this Supply Agreement, regardless of the cause of action, whether in contract, tort, or otherwise.</p>

    <p>The total cumulative liability of either party for any and all claims, damages, or losses under this Supply Agreement shall not exceed the total amount paid or payable by the Buyer to the Supplier for the specific supply that gives rise to the liability.</p>

    <h2>7. TERMINATION</h2>
    <p>Either party may terminate this Agreement for any reason or without providing a specific cause by providing thirty (30) days' written notice to the other party.</p>

    <p>Upon termination for convenience, the terminating party shall not be liable for any compensation or damages to the non-terminating party, except for any outstanding payment obligations or liabilities accrued before the effective date of termination.</p>

    <p>Either party may terminate this Agreement in the event of a material breach by the other party by providing written notice specifying the nature of the breach. The breaching party shall have a cure period of thirty (30) days from the receipt of the notice to remedy the breach. If the breach is not cured within the specified period, the non-breaching party may terminate this Agreement with immediate effect.</p>

    <p>Either party may terminate this Agreement if the performance of its obligations under this Agreement is prevented or delayed due to force majeure events beyond its reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, strikes, labor disputes, or government regulations.</p>

    <h2>8. ENTIRE AGREEMENT</h2>
    <p>This Agreement contains all terms and conditions agreed to by the Parties, including any attachments or appendices. This Agreement replaces all previous oral discussions, agreements, and understandings relating to the supply of the products or services.</p>

    <h2>9. GOVERNING LAW AND JURISDICTION</h2>
    <p>This Agreement shall be governed by and interpreted in accordance with the laws of India. The Parties agree to submit to the exclusive jurisdiction of the courts of India for any legal actions or proceedings arising from this Agreement.</p>

    <h2>10. DOCUMENTS ATTACHED TO THE AGREEMENT</h2>
    <p>Both Parties agree that the documents attached and signed by the Parties are considered as a part of this Agreement. These documents are as follows:</p>

    <table class="agreement-table" style="border-collapse: collapse; width: 100%; margin-top: 1em;">
      <thead>
        <tr>
          <th style="border: 1px solid #000;">Supplier details:</th>
          <th style="border: 1px solid #000;">Buyer details:</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            * Copy of the company affidavit<br>
            * Copy of the company affidavit<br>
            * Bank account details
          </td>
          <td>
            * Copy of the director's ID card<br>
            * Copy of the director's ID card
          </td>
        </tr>
      </tbody>
    </table>

    <p>This Agreement is drawn up in two (2) identical copies, one for each party. Both Parties have read and fully understood this Agreement.</p>
    
    <h2>SIGNED BY-</h2>
    <div class="signatures">
      <div class="signature-block" style="display: flex; justify-content: space-between;">
        <p>The Suplier</p>
        <p>The Buyer</p>
      </div>
      <div class="signature-block" style="display: flex; justify-content: space-between;">
        <p>The Witness</p>
        <p>The Witness</p>
      </div>
    </div>
</div>`;



