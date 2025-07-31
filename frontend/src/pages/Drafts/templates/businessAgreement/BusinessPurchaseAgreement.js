export const businessPurchaseAgreementFields = [
  "signingDate",
  "sellerName",
  "sellerId",
  "buyerName",
  "buyerId",
  "totalPurchaseAmount",
  "closingDate",
  "financialStatementDate",
];

export const generateBusinessPurchaseAgreement = (data) => `
<div class="agreement-template">
  <h1 class="agreement-title">BUSINESS PURCHASE AGREEMENT</h1>
  <div class="agreement-body">
    <p>This Business Purchase Agreement shall become effective on <strong>${data.signingDate}</strong> (the "Execution Date") and is subject to the terms and conditions stated below between <strong>${data.sellerName}</strong> holding ID/Passport number <strong>${data.sellerId}</strong> (the "Seller"), and <strong>${data.buyerName}</strong> holding ID/Passport number <strong>${data.buyerId}</strong> (the "Buyer"), collectively referred to as the "Parties".</p>
    <p><strong>THEREFORE,</strong> Parties hereby agree to enter into this Agreement according to the following terms and conditions contained therein.</p>

    <h2>1. PURCHASE PRICE.</h2>
    <p>The Parties shall be agreed on the total purchase price of INR <strong>${data.totalPurchaseAmount}</strong> (Indian Rupees) for the business assets and/or shares being transferred under this Agreement.</p>
    <p>The purchase price may be subject to adjustment based on certain factors, including but not limited to:</p>
    <ul>
      <p>a) The completion of due diligence investigations and verification of the financial statements and records of the business.</p>
      <p>b) The determination of the net working capital and the level of indebtedness of the business as on <strong>${data.closingDate}</strong> (the "Closing Date").</p>
      <p>c) Any other mutually agreed-upon adjustments to the purchase price based on the assets, liabilities, or performance of the business.</p>
    </ul>
    <p>The parties shall make best efforts to finalize and agree on the purchase price within thirty (30) days from the execution of this Agreement. In the event the parties are unable to reach an agreement on the purchase price within the specified time, either party may terminate this Agreement by providing written notice to the other party.</p>
    <p>The total purchase price shall be paid as follows:</p>
    <ul>
      <p>a) The Buyer shall make a non-refundable deposit of ten percent (10%) of the total purchase price within three (3) days from the execution of this Agreement.</p>
      <p>b) The remaining balance of the total purchase price shall be paid in full on the Closing Date through a wire transfer to the Seller's designated bank account.</p>
    </ul>
    <p>The Buyer shall have the right to conduct a final review and inspection of the business assets and records prior to the completion of the purchase. If any material discrepancies or issues are discovered during the review process, the purchase price may be adjusted accordingly or the Buyer may have the right to terminate this Agreement.</p>
    <p>All taxes, duties, and fees arising from the purchase and transfer of the business assets and/or shares, including any applicable value-added tax (VAT), shall be the responsibility of the Buyer.</p>

    <h2>2. ASSETS AND LIABILITIES.</h2>
    <p>The Seller agrees to transfer and assign to the Buyer all of its rights, title, and interest in the assets of the business being sold. The assets may include, but are not limited to, tangible assets (such as equipment, inventory, fixtures, and furniture), intangible assets (such as intellectual property, trademarks, patents, and trade secrets), contracts, licenses, permits, and any other assets necessary for the operation of the business.</p>
    <p>The Seller shall retain all liabilities and obligations related to the business, except as expressly assumed by the Buyer under this Agreement. The liabilities may include, but are not limited to, outstanding debts, loans, accounts payable, tax liabilities, litigation, contractual obligations, and any other liabilities incurred prior to the closing date.</p>
    <p>The Buyer agrees to assume certain specified liabilities of the business. The assumed liabilities may include, but are not limited to, specific debts, contractual obligations, warranties, guarantees, and other liabilities agreed upon by the parties.</p>
    <p>The Seller shall provide the Buyer with a complete and accurate disclosure of all known liabilities and contingent liabilities of the business as of the effective date of this Agreement. The Seller shall promptly notify the Buyer in writing of any newly discovered or incurred liabilities prior to the closing date.</p>
    <p>The transfer of assets from the Seller to the Buyer shall be completed in accordance with applicable laws, regulations, and any necessary third-party consents or approvals. The parties shall cooperate in executing any required transfer documents, assignments, or filings to effectuate the transfer of assets.</p>

    <h2>3. DUE DILIGENCE.</h2>
    <p>The Buyer shall have the right to conduct a thorough due diligence investigation of the business being sold, including its assets, liabilities, financial records, contracts, operations, licenses, permits, intellectual property, and any other relevant aspects. The Seller shall provide reasonable access to all necessary information and documents to facilitate the due diligence process.</p>
    <p>All information, records, and documents provided by the Seller during the due diligence process shall be treated as confidential and used solely for the purpose of evaluating the business for potential purchase. The Buyer shall not disclose such information to any third party without the prior written consent of the Seller, unless required by law.</p>
    <p>The Buyer shall complete its due diligence investigation within <strong>thirty (30) days.</strong> If the Buyer requires additional time, it shall notify the Seller in writing and seek an extension, which shall be subject to the Seller's approval.</p>
    <p>If, based on the results of the due diligence investigation, the Buyer determines that the business does not meet its requirements or that the Seller has materially misrepresented any information, the Buyer shall have the right to terminate this Agreement by providing written notice within <strong>fourteen (14) days</strong> to the Seller. In such case, any earnest money or deposits paid by the Buyer shall be returned promptly.</p>

    <h2>4. REPRESENTATIONS AND WARRANTIES.</h2>
    <p>The Seller represents and warrants to the Buyer as follows:</p>
    <ul>
      <li><strong>Organization and existence:</strong> The Seller is a legally organized and existing entity under the laws of India and has the necessary authority to enter into and perform its obligations under this Agreement.</li>
      <li><strong>Title to assets:</strong> The Seller has good and marketable title to all assets being sold as part of the business, free and clear of any liens, encumbrances, or claims.</li>
      <li><strong>Authority and approval:</strong> The execution, delivery, and performance of this Agreement by the Seller have been duly authorized by all necessary corporate actions and do not violate any law, regulation, or agreement to which the Seller is a party.</li>
      <li>Financial statements: The financial statements provided by the Seller to the Buyer fairly represent the financial condition of the business as on <strong>${data.financialStatementDate}</strong>, and there have been no material adverse changes since those dates, except as disclosed in writing.</li>
      <li><strong>Compliance with laws:</strong> The Seller has complied with all applicable laws, regulations, permits, licenses, and agreements related to the operation of the business, and there are no ongoing or pending legal actions, claims, or proceedings that would materially affect the business.</li>
      <li><strong>Contracts and agreements:</strong>The Seller has provided the Buyer with a complete and accurate list of all material contracts, agreements, and obligations related to the business, and there are no known breaches or defaults under any such contracts.</li>
      <li><strong>Intellectual property:</strong> The Seller owns or has valid licenses for all intellectual property rights necessary for the operation of the business, and there are no known infringements or claims of infringement by third parties.</li>
      <li><strong>Taxes:</strong> The Seller has duly filed all tax returns and has paid all taxes, fees, and assessments required by law. There are no ongoing tax audits, disputes, or claims against the Seller.</li>
    </ul>
    <p>The representations and warranties made by the Seller shall survive the closing of the transaction for a period of <strong>one (1) year.</strong></p>

    <h2>5. COVENANTS.</h2>
    <p>Until the closing of the transaction, the Seller shall operate the business in the ordinary course of business, consistent with past practices, and shall make reasonable efforts to preserve the goodwill, relationships, and assets of the business.</p>
    <p>The Seller and the Buyer shall cooperate with each other and use their best efforts to ensure a smooth transition of the business and facilitate the closing of the transaction. This includes providing access to information, records, and personnel as reasonably necessary for the Buyer's due diligence and integration planning.</p>
    <p>The Seller shall maintain the confidentiality of all confidential information related to the business and the transaction for a period of five (5) years.</p>
    <p>The Seller shall agree to a non-competition provision, wherein the Seller shall not directly or indirectly engage in any business activity that competes with the business being sold, within India and for a period of five (5) years.</p>
    <p>The Seller shall agree to a non-solicitation provision, wherein the Seller shall not solicit or attempt to solicit the employees, customers, suppliers, or business relationships of the business being sold, within India and for a period of five (5) years.</p>

    <h2>6. CLOSING CONDITIONS.</h2>
    <ul>
      <p>The Buyer's satisfaction with its due diligence investigation of the business, including but not limited to the financial, legal, and operational aspects of the business, in its sole discretion.</p>
      <li><strong>Consents and approvals:</strong> Obtaining all necessary consents, approvals, permits, licenses, or authorizations from any third parties, including regulatory authorities, required for the consummation of the transaction.</li>
      <li><strong>Material adverse change:</strong> The absence of any material adverse change in the financial condition, assets, liabilities, operations, or prospects of the business from the date of the Agreement to the closing, except as otherwise disclosed or agreed upon in writing.</li>
      <li><strong>Compliance with agreements:</strong> The Seller's compliance with all agreements, contracts, leases, licenses, and other obligations related to the business, and the absence of any default or breach of such agreements that would have a material adverse effect on the business.</li>
      <li><strong>Legal compliance:</strong> The Seller's confirmation that the business has complied with all applicable laws, regulations, and legal requirements, including those related to the operation of the business and the transfer of assets.</li>
      <li><strong>Release of liens and encumbrances:</strong> The Seller shall provide evidence satisfactory to the Buyer that all liens, encumbrances, or security interests affecting the assets being transferred have been released or will be released prior to the closing, except as otherwise agreed upon.</li>
      <li><strong>Tax clearance:</strong> The Seller shall provide evidence satisfactory to the Buyer that all tax obligations, including income taxes, sales taxes, and other applicable taxes, have been fully paid or adequately provided for, and that no outstanding tax assessments or claims exist against the business.</li>
      <li><strong>Closing deliverables:</strong> The Seller shall deliver all necessary closing documents, including but not limited to certificates of good standing, resolutions authorizing the transaction, transfer documents, and any other documents required to effectuate the transfer of ownership and assets.</li>
      <li><strong>Third-party consents:</strong> Obtaining any required consents or approvals from third parties, including customers, suppliers, landlords, or other contractual parties, necessary for the transfer of contracts, licenses, or other business relationships.</li>
      <li><strong>Purchase price payments:</strong> The Buyer shall have delivered the agreed-upon purchase price or the necessary funds for the purchase in accordance with the terms specified in the agreement.</li>
      <li><strong>Closing opinion:</strong> The Buyer shall have received a favorable legal opinion from its legal counsel regarding the legality, enforceability, and binding effect of the agreement and the transaction.</li>
    </ul>

    <h2>7. LIMITATION OF LIABILITY.</h2>
    <p>To the fullest extent permitted by applicable law, neither party shall be liable to the other for any indirect, incidental, punitive, or special damages, including but not limited to lost profits, loss of business opportunity, or loss of goodwill, regardless of whether such damages were foreseeable or whether the party has been advised of the possibility of such damages.</p>
    <p>The limitations of liability set forth in this clause shall apply solely to the parties to this Agreement, and no third party shall have any right to claim or enforce any limitation of liability under this Agreement.</p>
    <p>The Buyer shall have the right to rely on any applicable insurance policies held by the Seller or the acquired business to the extent of coverage and subject to the terms and conditions of such insurance policies.</p>

    <h2>8. DISPUTE RESOLUTION.</h2>
    <p>In the event of any dispute, controversy, or claim arising out of or relating to this Agreement, the parties shall make all reasonable efforts to resolve the dispute through good-faith negotiations.</p>
    <p>If the dispute cannot be resolved through negotiation within a reasonable period, either party may propose mediation as an alternative dispute resolution mechanism. The costs of mediation shall be shared equally between the parties unless otherwise agreed upon.</p>
    <p>If mediation is unsuccessful or not chosen as the preferred method of dispute resolution, any unresolved dispute, controversy, or claim arising out of or relating to this Agreement shall be finally settled by arbitration in accordance with the rules of arbitration agreed upon by the parties. The arbitration award shall be final and binding on both parties.</p>

    <h2>9. ENTIRE AGREEMENT.</h2>
    <p>This Agreement contains all terms and conditions agreed to by the Parties, including any attachments or appendices. This Agreement replaces all previous oral discussions, agreements, and understandings relating to the sale of the business.</p>

    <h2>10. GOVERNING LAW AND JURISDICTION.</h2>
    <p>This Agreement is governed by and shall be construed and interpreted in accordance with the laws of India. The Parties agree to submit to the exclusive jurisdiction of the courts of India for any legal actions or proceedings arising from this Agreement.</p>
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
</div>
`;

