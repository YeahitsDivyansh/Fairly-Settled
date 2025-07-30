export const distributionAgreementFields = [
  "supplierName",
  "supplierRegNumber",
  "supplierDirector",
  "supplierAddress",
  "distributorName",
  "distributorRegNumber",
  "distributorDirector",
  "distributorAddress",
  "executionDate",
  "territory",
  "productDescription",
  "productSize",
  "productMaterials",
  "productFunctionality",
  "productOtherSpecs",
  "exclusivity",
  "priceTerms",
  "paymentTerms",
  "discountsRebates",
  "taxesDuties",
  "currencyFluctuations",
  "latePayments",
  "deliveryTerms",
  "inventoryManagement",
  "marketingObligations"
];

export const generateDistributionAgreement = (data) => `<div class="agreement-template">
  <h1 class="agreement-title">DISTRIBUTION AGREEMENT</h1>
  <div class="agreement-body">
    <p>
      This Distribution Agreement shall become effective on <span class="highlight">${data.executionDate}</span> (the "Execution Date") and is subject to the terms and conditions stated below between <span class="highlight">${data.supplierName}</span> having registration number <span class="highlight">${data.supplierRegNumber}</span> and represented by <span class="highlight">${data.supplierDirector}</span>, authorized Director (the "Supplier") and <span class="highlight">${data.distributorName}</span> having registration number <span class="highlight">${data.distributorRegNumber}</span> and represented by <span class="highlight">${data.distributorDirector}</span>, authorized Director (the "Distributor"), collectively referred to as the "Parties".
    </p>
    <p>
      THEREFORE, Parties hereby agree to enter into this Agreement according to the following terms and conditions contained therein.
    </p>

    <h2>1. APPOINTMENT AND TERRITORY</h2>
    <p>
      The Company, referred to as the Supplier, hereby appoints the Distributor as its authorized distributor for the territory of <span class="highlight">${data.territory || "India"}</span>. The Distributor accepts this appointment and agrees to act as the Supplier's <span class="highlight">${data.exclusivity}</span> distributor within the designated territory, subject to the terms and conditions of this agreement. During the term of this agreement, the Distributor shall have the right to distribute, market, promote, and sell <span class="highlight">${data.productDescription}</span>.
    </p>
    <ul>
      <li>
        <b>Exclusivity:</b> The Supplier shall not appoint any other distributors, representatives, or agents within the territory without the prior written consent of the Distributor.
      </li>
      <li>
        <b>Non-exclusivity:</b> The Supplier reserves the right to appoint additional distributors, representatives, or agents within the territory without the Distributor's consent.
      </li>
    </ul>

    <h2>2. PRODUCTS OR SERVICES</h2>
    <p>
      The Supplier provides the Distributor with a detailed description of the products or services to be distributed under this Agreement, including specifications, features, and any applicable technical documentation:
    </p>
    <table class="agreement-table" style="border-collapse:collapse;width:100%;margin-bottom:16px;">
      <colgroup>
        <col style="width:30%;">
        <col style="width:70%;">
      </colgroup>
      <thead>
        <tr>
          <th style="border:1px solid #333;padding:8px;text-align:left;background:#f5f5f5;">Item(s)</th>
          <th style="border:1px solid #333;padding:8px;text-align:left;background:#f5f5f5;">Description(s)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="border:1px solid #333;padding:8px;width:30%;font-weight:normal;">Goods/services</td>
          <td style="border:1px solid #333;padding:8px;width:70%;"><b>${data.productDescription}</b></td>
        </tr>
        <tr>
          <td style="border:1px solid #333;padding:8px;width:30%;font-weight:normal;">Size and dimensions</td>
          <td style="border:1px solid #333;padding:8px;width:70%;"><b>${data.productSize}</b></td>
        </tr>
        <tr>
          <td style="border:1px solid #333;padding:8px;width:30%;font-weight:normal;">Materials</td>
          <td style="border:1px solid #333;padding:8px;width:70%;"><b>${data.productMaterials}</b></td>
        </tr>
        <tr>
          <td style="border:1px solid #333;padding:8px;width:30%;font-weight:normal;">Functionality</td>
          <td style="border:1px solid #333;padding:8px;width:70%;"><b>${data.productFunctionality}</b></td>
        </tr>
        <tr>
          <td style="border:1px solid #333;padding:8px;width:30%;font-weight:normal;">Other specifications</td>
          <td style="border:1px solid #333;padding:8px;width:70%;"><b>${data.productOtherSpecs}</b></td>
        </tr>
      </tbody>
    </table>
    <p>
      The Distributor acknowledges that it has reviewed and understands the nature and characteristics of the products or services.
    </p>
    <p>
      The Supplier shall provide reasonable product or service support to the Distributor, including technical assistance, training, and marketing materials, to facilitate the effective promotion and sales of the products or services. The parties shall collaborate to ensure adequate after-sales support, warranty services, and customer satisfaction.
    </p>
    <p>
      The Supplier shall maintain high-quality standards for the products or services and ensure that they comply with all relevant laws, regulations, and industry standards. The Distributor shall inspect the products or services upon receipt and promptly notify the Supplier of any defects or non-compliance.
    </p>
    <p>
      <b>Product/service changes:</b> If the Supplier introduces any changes, modifications, or upgrades to the products or services, it shall promptly notify the Distributor and provide relevant information and documentation regarding such changes. The parties shall discuss and agree upon any necessary adjustments to pricing, delivery schedules, or inventory management resulting from such changes.
    </p>
    <p>
      <b>Product/service discontinuation:</b> In the event that the Supplier decides to discontinue any products or services covered under this Agreement, it shall provide the Distributor with reasonable notice and propose a plan for managing the existing inventory and fulfilling customer obligations. The parties shall work together in good faith to minimize any adverse impact caused by product/service discontinuation, including potential inventory write-offs or transitioning customers to alternative products or services.
    </p>

    <h2>3. RIGHTS AND OBLIGATIONS</h2>
    <p>
      The Supplier shall supply the agreed-upon products or services to the Distributor in a timely manner and in accordance with the specifications and quality standards provided. The Supplier has the right to monitor the Distributor's performance, including sales activities, inventory management, and compliance with the terms of this Agreement.
    </p>
    <p>
      The Distributor shall use its best efforts to promote, market, and sell the Supplier's products or services within the designated territory of India, while adhering to the Supplier's guidelines and policies. The Distributor shall maintain an adequate inventory of the products or services to meet customer demand and promptly reorder from the Supplier as necessary. The Distributor shall submit regular sales reports and other relevant information to the Supplier as mutually agreed upon.
    </p>
    <p>
      Upon termination of this Agreement, the Distributor shall immediately cease all distribution activities, return any unused promotional materials or inventory of the Supplier's products or services, and discontinue the use of the Supplier's intellectual property rights, trademarks, logos, and trade names. The Distributor shall cooperate with the Supplier in effecting a smooth transition of any ongoing customer relationships, including transferring customer records, pending orders, and other relevant information, as agreed upon by the parties.
    </p>

    <h2>4. PRICING AND PAYMENT TERMS</h2>
    <p>
      The parties shall mutually agree upon the pricing structure for the products or services to be distributed under this Agreement. The agreed-upon pricing shall be communicated in writing and attached as an appendix to this Agreement.
    </p>
    <p>
      The pricing may include the cost of the products or services, applicable taxes, import duties, shipping charges, and any other relevant expenses. Any changes to the pricing structure shall be agreed upon in writing by both parties.
    </p>
    <ul>
      <li>
        <b>Payment terms:</b> <span>The Distributor shall make payments to the Supplier for the products or services in accordance with the agreed-upon payment terms. Payment terms shall specify the currency of payment, due dates, and the accepted methods of payment, such as bank transfers, letters of credit, or other mutually agreed-upon payment methods. Unless otherwise stated, all payments shall be made in Indian Rupees (INR) to the Supplier's designated bank account.</span>
      </li>
      <li>
        <b>Discounts and rebates:</b> <span>The parties may agree to provide discounts or rebates on the products or services based on predetermined criteria, such as volume of sales, promotional activities, or other mutually agreed-upon factors. The terms and conditions for any discounts or rebates, including the calculation method, eligibility requirements, and payment schedule, shall be outlined in writing and attached as an appendix to this Agreement.</span>
      </li>
      <li>
        <b>Taxes and duties:</b> <span>The Distributor shall be responsible for all applicable taxes, duties, and other government charges imposed on the distribution, sale, or importation of the products or services, unless otherwise agreed upon in writing by both parties. The Distributor shall promptly provide the Supplier with any necessary tax certificates, documentation, or information required for customs clearance or compliance with local tax laws.</span>
      </li>
      <li>
        <b>Currency fluctuations:</b> <span>In the event of significant fluctuations in the exchange rate between the Indian Rupees (INR) and any other currency used in pricing, the parties may, upon mutual agreement, revise the pricing structure or payment terms to account for such fluctuations. Any adjustments due to currency fluctuations shall be made in good faith and shall not unreasonably disadvantage either party.</span>
      </li>
      <li>
        <b>Late payments and default:</b> <span>In the event of late payment by the Distributor, the Supplier may charge interest on the overdue amount at a rate specified in the agreement or as permitted by applicable laws. If the Distributor fails to make payment within a specified period after receiving notice of default, the Supplier may, at its discretion, suspend deliveries, terminate the agreement, or pursue any other legal remedies available.</span>
      </li>
    </ul>

    <h2>5. ORDERS AND DELIVERY</h2>
    <p>
      The Distributor shall submit purchase orders to the Supplier in writing, specifying the quantity, product or service description, agreed-upon pricing, and any other relevant details. The Supplier shall acknowledge receipt of the purchase order within a reasonable timeframe and confirm the availability of the requested products or services.
    </p>
    <p>
    </p>

    <h2>6. INVENTORY MANAGEMENT</h2>
    
    <p>
     The Distributor shall maintain an adequate inventory of the products or materials necessary for the performance of its distribution obligations under this Agreement. The Distributor shall regularly review its inventory levels, taking into account market demand, sales forecasts, and any inventory management guidelines provided by the Supplier.
    </p>
    <p>
     The Supplier may request inventory reports from the Distributor at reasonable intervals to assess the inventory levels and ensure that the Distributor has sufficient stock to meet customer demand.
    </p>
    <p>
     The Distributor shall promptly notify the Supplier of any significant changes in inventory levels or potential supply shortages that may impact the fulfillment of customer orders.
    </p>
    <p>
     In the event of excess inventory held by the Distributor, the parties may discuss and agree upon strategies to manage and reduce the excess stock, such as promotional activities, sales incentives, or alternative distribution channels. The Distributor shall make reasonable efforts to minimize excess inventory and avoid stock obsolescence.
    </p>
    

    <h2>7. INTELLECTUAL PROPERTY</h2>
    <p>
      All intellectual property rights, including but not limited to trademarks, trade names, logos, copyrights, patents, trade secrets, and any other proprietary rights associated with the products or services, shall remain the sole and exclusive property of the Supplier.
    </p>
    <p>
      The Supplier grants the Distributor a non-exclusive, non-transferable, revocable license to use the Supplier's intellectual property solely for the purposes of promoting, marketing, and selling the products or services within the designated territory of India during the term of this Agreement.
    </p>
    <p>
      The Distributor shall not engage in any activities that may infringe upon the intellectual property rights of third parties and shall promptly notify the Supplier of any claims or allegations of infringement related to the Supplier's products or services.
    </p>

    <h2>8. MARKETING AND PROMOTION</h2>
    <p>
      The Distributor shall develop and implement marketing plans, strategies, and campaigns in consultation with the Supplier to achieve mutually agreed-upon sales targets and market objectives.
    </p>
    <p>
      The Distributor shall allocate appropriate resources, including personnel, marketing budgets, and materials, to execute the marketing and promotional activities effectively.
    </p>
    <p>
      The Distributor shall ensure that all marketing and promotional materials accurately represent the Supplier's products or services and comply with any applicable laws, regulations, and industry standards.
    </p>
    <p>
      The Distributor may develop advertising and promotional materials, including brochures, catalogs, websites, social media content, and other marketing collateral, to promote the Supplier's products or services, subject to the Supplier's prior written approval.
    </p>
    <p>
      The Distributor shall submit any proposed advertising or promotional materials to the Supplier for review and approval before their use.
    </p>
    <p>
      The Distributor shall not engage in any online price manipulation, unauthorized discounting, or any other activities that may adversely affect the brand image or pricing policies of the Supplier.
    </p>


    <h2>9. TERMINATION</h2>
    <p>
      Either party may terminate this Agreement for any reason or without providing a specific cause by providing thirty (30) days' written notice to the other party. Upon termination for convenience, the terminating party shall not be liable for any compensation or damages to the non-terminating party, except for any outstanding payment obligations or liabilities accrued before the effective date of termination.
    </p>
    <p>
      Either party may terminate this Agreement in the event of a material breach by the other party by providing written notice specifying the nature of the breach. The breaching party shall have a cure period of thirty (30) days from the receipt of the notice to remedy the breach. If the breach is not cured within the specified period, the non-breaching party may terminate this Agreement with immediate effect.
    </p>
    <p>
      Either party may terminate this Agreement if the performance of its obligations under this Agreement is prevented or delayed due to force majeure events beyond its reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, strikes, labor disputes, or government regulations.
    </p>

    <h2>10. ENTIRE AGREEMENT</h2>
    <p>
      This Agreement contains all terms and conditions agreed to by the Parties, including any attachments or appendices. This Agreement replaces all previous oral discussions, agreements, and understandings relating to the products or services.
    </p>

    <h2>11. GOVERNING LAW AND JURISDICTION</h2>
    <p>
      This Agreement shall be governed by and interpreted in accordance with the laws of India. The Parties agree to submit to the exclusive jurisdiction of the courts of India for any legal actions or proceedings arising from this Agreement.
    </p>

    <h2>12. DOCUMENTS ATTACHED TO THE AGREEMENT</h2>
    <p>
      Both Parties agree that the documents attached and signed by the Parties are considered as a part of this Agreement. These documents are as follows:
    </p>
    <table style="border-collapse:collapse;width:100%;margin-bottom:16px;">
      <thead>
        <tr>
          <th style="border:1px solid #333;padding:8px;text-align:left;background:#f5f5f5;">Supplier details:</th>
          <th style="border:1px solid #333;padding:8px;text-align:left;background:#f5f5f5;">Distributor details:</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="border:1px solid #333;padding:8px;">* Copy of the company affidavit</td>
          <td style="border:1px solid #333;padding:8px;">* Copy of the company affidavit</td>
        </tr>
        <tr>
          <td style="border:1px solid #333;padding:8px;">* Copy of the director's ID-card</td>
          <td style="border:1px solid #333;padding:8px;">* Copy of the director's ID-card</td>
        </tr>
        <tr>
          <td style="border:1px solid #333;padding:8px;"></td>
          <td style="border:1px solid #333;padding:8px;">* Bank account details</td>
        </tr>
      </tbody>
    </table>
    <p>
      This Agreement is drawn up in two (2) identical copies, one for each Party. Both Parties have read and fully understood this Agreement. This Agreement shall become effective and legally binding upon signature by each of the Parties.
    </p>

    <h2>SIGNED BY:</h2>
    <div class="signatures">
      <div class="signature-block" style="display: flex; justify-content: space-between;">
        <p>The Supplier</p>
        <p>The Distributor</p>
      </div>
      <div class="signature-block" style="display: flex; justify-content: space-between;">
        <p>Witness</p>
        <p>Witness</p>
      </div>
    </div>
  </div>
</div>`;
