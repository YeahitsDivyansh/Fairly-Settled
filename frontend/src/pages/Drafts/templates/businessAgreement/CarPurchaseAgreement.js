export const carPurchaseAgreementFields = [
  "executionDate",
  "sellerName",
  "sellerId",
  "buyerName",
  "buyerId",
  "vehicleMakerCompanyName",
  "vehicleModel",
  "vehicleVIN",
  "vehicleMilage",
  "vehicleColor",
  "vehicleTransmission",
  "vehicleEngine",
  "vehicleFeaturesANDaccessories",
  "vehiclePrice",
  "downPaymentValue",
  "downPaymentDeadline",
  "remainingBalanceValue",
  "deliveryLocation",
  
 
];

export const generateCarPurchaseAgreement = (data) => `<div class="agreement-template">
  <h1 class="agreement-title">CAR PURCHASE AGREEMENT</h1>

  <div class="agreement-body">
    <p>This Car Purchase Agreement shall become effective on <span><strong>${data.executionDate}</strong></span> (the "Execution Date") and is subject to the terms and conditions stated below between <span><strong>${data.sellerName}</strong></span> holding ID/Passport number <span><strong>${data.sellerId}</strong></span> (the "Seller"), and <span><strong>${data.buyerName}</strong></span> holding ID/Passport number <span><strong>${data.buyerId}</strong></span> (the "Buyer"), collectively referred to as the "Parties".

    <p><strong>THEREFORE,</strong> Parties hereby agree to enter into this Agreement according to the following terms and conditions contained therein.</p>

    <h2>1. DESCRIPTION OF VEHICLE.</h2>
    <p>The Buyer acknowledges that the description provided in this clause is accurate to the best of their knowledge and that they are responsible for verifying the accuracy of the information. Any disputes arising from inaccurate or misleading information will be resolved in accordance with the provisions set forth in this Agreement.</p>
    <p>The Buyer understands that the Seller may have provided information about the vehicle's history, maintenance records, or any known defects. However, the Buyer agrees that they have conducted their own due diligence and is satisfied with the provided information.</p>


  <table style="border: 1px solid #000; border-collapse: collapse; width: 100%;">
  <tr>
    <td style="border: 1px solid #000; padding: 8px; font-weight: bold;">Make:</td>
    <td style="border: 1px solid #000; padding: 8px;"><span>${data.vehicleMakerCompanyName}</span></td>
  </tr>
  <tr>
    <td style="border: 1px solid #000; padding: 8px; font-weight: bold;">Model:</td>
    <td style="border: 1px solid #000; padding: 8px;"><span>${data.vehicleModel}</span></td>
  </tr>
  <tr>
    <td style="border: 1px solid #000; padding: 8px; font-weight: bold;">
      <span style="text-decoration: underline; color: red;">VIN</span> (Vehicle Identification Number):
    </td>
    <td style="border: 1px solid #000; padding: 8px;"><span>${data.vehicleVIN}</span></td>
  </tr>
  <tr>
    <td style="border: 1px solid #000; padding: 8px; font-weight: bold;">Mileage:</td>
    <td style="border: 1px solid #000; padding: 8px;"><span>${data.vehicleMilage}</span></td>
  </tr>
  <tr>
    <td style="border: 1px solid #000; padding: 8px; font-weight: bold;">Color:</td>
    <td style="border: 1px solid #000; padding: 8px;"><span>${data.vehicleColor}</span></td>
  </tr>
  <tr>
    <td style="border: 1px solid #000; padding: 8px; font-weight: bold;">Features and accessories:</td>
    <td style="border: 1px solid #000; padding: 8px;"><span>${data.vehicleFeaturesANDaccessories}</span></td>
  </tr>
</table>


    <p>This description of the vehicle is an integral part of this Agreement and supersedes any previous oral or written descriptions, representations, or agreements relating to the vehicle.</p>

    <h2>2. PURCHASE PRICE.</h2>
    <p>The Buyer agrees to purchase the vehicle for the total purchase price of INR <span><strong>${data.vehiclePrice}</strong></span> (Indian Rupees). The purchase price shall be paid as follows:</p>
    <ul>
    <p>a) INR <span><strong>${data.downPaymentValue}</strong></span> (Indian Rupees) as a down payment, to be paid by the Buyer to the Seller on or before <span><strong>${data.downPaymentDate}</strong></span> (the "Due Date").</p>
    <p>b) The remaining balance of INR <span><strong>${data.remainingBalanceValue}</strong></span> (Indian Rupees) shall be paid by the Buyer to the Seller on or before the delivery of the vehicle.</p>
    </ul>
    <p>The Buyer acknowledges that any applicable taxes, duties, registration fees, or other charges imposed by the relevant authorities in India, including but not limited to the Ministry of Road Transport and Highways (MoRTH) shall be the sole responsibility of the Buyer. The Buyer agrees to pay these charges in addition to the purchase price.</p>
    <p>In the event of a default by the Buyer in making any payment due under this Agreement, the Seller reserves the right to pursue legal remedies available under the law of India, including but not limited to the right to cancel this Agreement and retain any payments made by the Buyer as liquidated damages.</p>

    <h2>3. VEHICLE CONDITION.</h2>
    <p>The Buyer acknowledges that they have had the opportunity to inspect the vehicle and conduct their own due diligence to their satisfaction. The Buyer agrees that they are solely responsible for verifying the accuracy of the information provided and for assessing the suitability of the vehicle for their intended use.</p>
    <p>The Buyer acknowledges that they have been informed of any known defects or damages to the vehicle. The Seller agrees to disclose any unknown defects or damages to the best of their knowledge. However, it is the Buyer's responsibility to satisfy themselves with the condition of the vehicle and perform any desired inspections or assessments before the purchase.</p>
    <p>The Buyer may, at their own expense, arrange for a professional inspection of the vehicle by a qualified mechanic or inspection service of their choice. The Seller agrees to cooperate and provide reasonable access to the vehicle for the purpose of inspection.</p>
    <p>If the Buyer chooses to proceed with a professional inspection, they shall notify the Seller in writing of their intention to conduct such an inspection within <strong>fourteen (14) days</strong> from the date of this Agreement. The inspection shall be conducted promptly, and the Buyer shall bear all costs associated with the inspection.</p>
    <p>In the event that the inspection reveals any undisclosed defects or damages that materially affect the safety, functionality, or value of the vehicle, the Buyer may choose to either:</p>
    <ul>
    <p>a) Request the Seller to rectify the identified defects or damages before the completion of the purchase; or</p>
    <p>b) Terminate this Agreement and request a refund of any payments made by the Buyer.</p>    
    </ul>
    <p>The Seller may offer a warranty for the vehicle, subject to separate terms and conditions specified in a separate warranty agreement, if applicable. Any warranty offered by the Seller should be stated explicitly in writing and attached to this Agreement.</p>

    <h2>4. TITLE AND OWNERSHIP TRANSFER.</h2>
    <p>The Seller warrants that they are the lawful owner of the vehicle and have full authority to sell and transfer the title and ownership of the vehicle to the Buyer.</p>
    <p>The Seller agrees to transfer the title and ownership of the vehicle to the Buyer upon receipt of the full payment of the purchase price as specified in this Agreement.</p>
    <p>The Seller agrees to provide all necessary documentation to facilitate the transfer of title and ownership, including but not limited to:</p>
    <ul>
    <p>a) The original Vehicle Registration Certificate or any equivalent document reflecting the Seller's ownership.</p>
    <p>b) Any other relevant documents required by the Ministry of Road Transport and Highways (MoRTH) for the transfer of title and ownership.</p>
    </ul>
     <p>The Buyer agrees to cooperate with the Seller and provide any information or documentation necessary for the completion of the title and ownership transfer process.</p>
  <p>The Seller shall be responsible for ensuring that the vehicle has no liens, encumbrances, or claims that could hinder the transfer of title and ownership. The Seller agrees to indemnify and hold the Buyer harmless from any claims or disputes related to the vehicle's title and ownership.</p>
  <p>The Buyer and the Seller shall complete the necessary paperwork for the transfer of title and ownership at the the Ministry of Road Transport and Highways (MoRTH) or any other relevant authority as required by the law of India.</p>
  <p>Upon completion of the title and ownership transfer, the Buyer shall be solely responsible for the vehicle and any associated liabilities, including but not limited to insurance, maintenance, and compliance with Motor Vehicles Act, 1988, and the Central Motor Vehicle Rules, 1989.</p>
    <h2>5. REPRESENTATIONS AND WARRANTIES.</h2>
    <p>The Seller further represents and warrants that, at the time of delivery of the vehicle:</p>
    <ul>
      <p>a) The vehicle will be in the same condition as described in this Agreement, except for normal wear and tear.</li>
      <p>b) The Seller has disclosed all material defects, damages, or issues known to them that materially affect the safety, functionality, or value of the vehicle.</p>
    </ul>
    <p>The Buyer acknowledges that the Seller makes no other representations or warranties, expressed or implied, regarding the condition, merchantability, or fitness for a particular purpose of the vehicle, except as explicitly stated in this Agreement.</p>


    <h2>6. LIMITATION OF LIABILITY.</h2>
    <p>To the fullest extent permitted by law, the Seller shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the purchase, sale, or use of the vehicle, including but not limited to loss of profits, loss of business, or loss of data.The Seller's liability under this Agreement shall be limited to the purchase price paid by the Buyer for the vehicle.</p>
    <p>The Buyer acknowledges that any warranties or guarantees provided by third-party manufacturers or service providers, if applicable, are separate and independent from this Agreement.The Buyer agrees to refer to the terms and conditions of such warranties or guarantees, if any, for their rights and remedies.</p>

    <h2>7. DELIVERY AND ACCEPTANCE.</h2>
    <p>The Seller agrees to deliver the vehicle to the Buyer in its current condition at <span><strong>${data.deliveryLocation}</strong></span>, India.</p>
    <p>The Seller shall make reasonable efforts to deliver the vehicle to the Buyer on or before [date, e.g., August 1, 2025], unless otherwise agreed upon in writing by both parties.</p>
    <p>The Buyer acknowledges that they have the right to inspect the vehicle upon delivery to ensure that it conforms to the description provided in this Agreement.</p>
    <p>Any discrepancies or issues identified during the inspection should be reported to the Seller promptly.</p>
    <p>The Buyer shall have seven (7) days from the date of delivery to inspect and test the vehicle.</p>
    <ul>
      <p>a) Verify the accuracy of the vehicle's description and features.</p>
      <p>b) Confirm that the vehicle is in the condition as represented in this Agreement.</p>
      <p>c) Assess the vehicle's performance and functionality.</p>
    </ul>
    <p>If the Buyer determines that the vehicle does not meet the agreed-upon specifications or if there are material defects or damages that were not disclosed by the Seller, the Buyer shall notify the Seller in writing within the inspection period.</p>
    <p>If the Buyer fails to notify the Seller within the inspection period, the vehicle shall be deemed accepted by the Buyer in its current condition.</p>
    <p>In the event that the Buyer identifies material defects or damages during the inspection period, the Seller shall have the option to:</p>
    <ul>
      <p>a) Repair the identified defects or damages at their own expense and deliver the vehicle to the Buyer in an acceptable condition within a reasonable timeframe; or</p>
      <p>b) Offer an appropriate adjustment to the purchase price to compensate for the identified defects or damages, as agreed upon by both parties.</p>
    </ul>
    <p>Upon acceptance of the vehicle, the Buyer shall be responsible for all risks associated with the vehicle, including but not limited to loss, damage, or liability arising from its use.</p>

    <h2>8. DISPUTE RESOLUTION.</h2>
    <p>In the event of a breach of this Agreement by either party, the non-breaching party may choose to terminate this Agreement if the breach is material and not cured within a reasonable timeframe.Upon termination, the non-breaching party shall be entitled to a refund of any payments made, subject to any adjustments for reasonable wear and tear or depreciation of the vehicle.</p>
    <p>Any dispute, controversy, or claim arising out of or relating to this Agreement, including its interpretation, validity, performance, or termination, shall be resolved amicably through good-faith negotiations between the Buyer and the Seller.</p>
    <p>If the parties are unable to reach a resolution through negotiations within thirty (30) days after written notice of the dispute, either party may initiate a mediation proceeding.</p>
    <p>The parties agree to submit the dispute to mediation in accordance with the rules and procedures of a recognized mediation institution in India.If mediation does not result in a resolution within a reasonable timeframe, either party may initiate legal proceedings.</p>

    <h2>9. ENTIRE AGREEMENT.</h2>
    <p>This Agreement contains all terms and conditions agreed to by the Parties, including any attachments or appendices.This Agreement replaces all previous oral discussions, agreements, and understandings relating to the purchase of the vehicle.</p>
    <h2>10. GOVERNING LAW AND JURISDICTION.</h2>
    <p>This Agreement is governed by and shall be construed and interpreted in accordance with the laws of India.The Parties agree to submit to the exclusive jurisdiction of the courts of India for any legal actions or proceedings arising from this Agreement.</p>
    <p>This Agreement is drawn up in two (2) identical copies, one for each Party. Both Parties have read and fully understood this Agreement. This Agreement shall become effective and legally binding upon signature by each of the Parties.</p>



    
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
