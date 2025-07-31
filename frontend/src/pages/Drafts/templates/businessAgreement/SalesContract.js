export const salesContractFields = [
  "executionDate",
  "sellerName",
  "buyerName",
  "productName",
  "itemDescription",
  "totalAmount",
  "amountDeposited",
];

export const generateSalesContract = (data) => {
  // Split items and descriptions by comma, trim whitespace
  const items = (data.productName || "").split(",").map((i) => i.trim());
  const descriptions = (data.itemDescription || "")
    .split(",")
    .map((d) => d.trim());
  // Build table rows with border and padding styles
  const rows = items
    .map((item, idx) => {
      const desc = descriptions[idx] || "";
      return `<tr style="border: 1px solid black;"><td style="border: 1px solid black; padding: 5px;">${item}</td><td style="border: 1px solid black; padding: 5px;">${desc}</td></tr>`;
    })
    .join("");

  return `<div class="agreement-template">
  <h1 class="agreement-title">SALES CONTRACT</h1>

  <div class="agreement-body">
    <p>This Sales Contract shall become effective on <span><strong>${data.executionDate}</strong></span> (the "Execution Date") and is subject to the terms and conditions stated below between <span><strong>${data.sellerName}</strong></span> (the "Seller") and <span><strong>${data.buyerName}</strong></span> (the "Buyer"), collectively referred to as the "Parties".</p>
    <p><strong>THEREFORE,</strong> the Parties hereby agree to enter into this Agreement according to the following terms and conditions contained therein.</p>

    <h2>1. SALE OF GOOD.</h2>
    <p>The Seller hereby agrees to sell the following (the "Goods"):</p>

    <table style="border: 1px solid #000; border-collapse: collapse; width: 100%;">
      <thead>
      <tr style="border: 1px solid black;">
        <th style="border: 1px solid black; padding: 5px;"><b>Item(s)</b></th>
        <th style="border: 1px solid black; padding: 5px;"><b>Description(s)</b></th>
      </tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
    </table>

    <h2>2. PURCHASE PRICE</h2>
    <p>The Buyer hereby agrees to purchase the Goods for a total price of INR <span><strong>${data.totalAmount}</strong></span> (Indian Rupees). A deposit of INR <span><strong>${data.amountDeposited}</strong></span> (Indian Rupees) is payable by the Buyer upon signing this Agreement. The deposit shall not be refunded to the Buyer if the transaction is not complete.</p>
    <p>The Buyer will proceed to the remaining payment for the Goods when and at the place where the goods are received and/or when the title deed has been registered to the Buyer's benefit.</p>

    <h2>3. DELIVERY OF GOODS</h2>
    <p>The Goods will be delivered to the Buyer at the address provided by him after this Agreement's signature. The risk of loss is the responsibility of the Seller upon delivery to the carrier.</p>
    <p>If not otherwise agreed in writing, the shipment for standard Goods shall take place no later than <strong>two (2) weeks</strong> from the order date.</p>
    <p>The Buyer has had the opportunity to inspect or have the Goods inspected, and the Buyer has accepted the Goods in their current condition. Besides, the Seller disclaims any warranty as to the state of the Goods.</p>

    <h2>4. LIMITATION OF LIABILITY.</h2>
    <p>Seller shall not be liable for any delay, non-delivery, or failure to ship beyond Seller's control or its suppliers. If the Seller is prevented from delivering the goods at the specified time or within one month of the date hereof, the Seller shall have the right to terminate this agreement by sending a written notice to the buyer, such notice to be accompanied by a full refund.</p>
    <p>Seller's liability is limited to an amount equal to the amounts paid or payable in connection with Buyer's order for the goods to which the claim relates.</p>

    <h2>5. TERMINATION.</h2>
    <p>If one of the Parties is in breach of any of its obligations under this Agreement and such breach persists after thirty (30) days from notification of such breach, the party that has not breached the Agreement may terminate it by written notice with immediate effect. The Parties may terminate the Agreement without delay following a serious breach by the Parties and detailed as follows:</p>
    <ul>
      <li>Dishonestly performs its duties or intentionally commits a criminal offense.</li>
      <li>Willfully cause prejudice to the Parties.</li>
      <li>Commit any negligent act causing severe harm to the Parties.</li>
      <li>Disclose confidential information from the Parties.</li>
      <li>Having been sentenced by a final judgment of the Court to a penalty of reorganization, or having been placed in liquidation or insolvency, except for an offense committed by negligence or a minor violation.</li>
    </ul>
    
    <h2>6. FORCE MAJEURE.</h2>
    <p>If the performance of any obligation of either of a party under this Agreement prevented or restricted by reason of:</p>
    <ul>
      <p>a) Strike, lockout, epidemic, dispute protest, casualty, or accident.</p>
      <p>b) Flood, tsunami, earthquake, storm, lack of power or supplies.</p>
      <p>c) War, revolution, civil commotion, acts of public enemies, blockage, embargo.</p>
      <p>d) Any law, proclamation, regulation, ordinance, demand, or requirement of any government or authority. Upon giving prompt notice to all the Parties, the party so affected shall be excused such performance to the extent of such prevention or restriction (but only for so long as it continues). </p>
    </ul>

    <h2>7. ENTIRE AGREEMENT.</h2>
    <p>This Agreement contains all terms and conditions agreed to by the Parties, including any attachments or appendices. This Agreement replaces all previous oral discussions, agreements, and understandings.</p>

    <h2>8. GOVERNING LAW AND JURISDICTION.</h2>
    <p>This Agreement is governed by and shall be construed following the laws of India. The Parties submit all their disputes arising out of or connected with this Agreement to the jurisdiction of the Courts of India.</p>

    <h2>9. DOCUMENTS ATTACHED TO THE AGREEMENT.</h2>
    <p>Both Parties agree that the documents attached and signed by the Parties are considered as a part of this Agreement. These documents are as follows:</p>

    <table style="border: 1px solid #000; border-collapse: collapse; width: 100%;">
      <thead>
      <tr style="border: 1px solid #000;">
      <th style="border: 1px solid #000; width: 50%;">Buyers details:</th>
      <th style="border: 1px solid #000; width: 50%;">Seller details:</th>
      </tr>
      </thead>

      <tbody>
      <tr style="border: 1px solid #000;">
      <td style="border: 1px solid #000;">
      * ID card of the Buyer
      </td>
      <td style="border: 1px solid #000;">
      * ID card of the Seller
      </td>
      </tr>

      <tr style="border: 1px solid #000;">
      <td style="border: 1px solid #000;">
      * Proof of address
      </td>
      <td style="border: 1px solid #000;">
      * Proof of address
      </td>
      </tr>

      <tr style="border: 1px solid #000;">
      <td style="border: 1px solid #000;">
      * Shipping address
      </td>
      <td style="border: 1px solid #000;">
      * Bank account details
      </td>
      </tr>

      <tr style="border: 1px solid #000;">
      <td style="border: 1px solid #000;">
      
      </td>
      <td style="border: 1px solid #000;">
      * Description and photos of the Goods
      </td>
      </tr>

      </tbody>
    </table>

    <p>This Agreement is drawn up in two (2) identical copies, one for each Party. Both Parties have read and fully understood this Agreement. This Agreement shall become effective and legally binding upon signature by each Party.</p>


    <h2>SIGNED BY-</h2>
    <div class="signatures">
      <div class="signature-block" style="display: flex; justify-content: space-between;">
        <p>The Seller</p>
        <p>The Buyer</p>
      </div>
      <div class="signature-block" style="display: flex; justify-content: space-between;">
        <p>The Witness</p>
        <p>The Witness</p>
      </div>
    </div>
  </div>
</div>`;
};
