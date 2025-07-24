export const profitSharingAgreementFields = [
  "executionDate",
  "party1Name",
  "party1Id",
  "party1Address",
  "party2Name",
  "party2Id",
  "party2Address",
  "productDescription",
  "contributionDetails",
  "profitSharePercentage",
  "paymentMethod",
  "taxJurisdiction",
  "witness1Name",
  "witness2Name"
];

export const generateProfitSharingAgreement = (data) => `<div class="agreement-template">
  <h1 class="agreement-title">PROFIT SHARING AGREEMENT</h1>

  <div class="agreement-body">
    <p>This Profit Sharing Agreement shall become effective on <span class="highlight">${data.executionDate}</span> (the "Execution Date") and is subject to the terms and conditions stated below between <span class="highlight">${data.party1Name}</span> holding ID/Passport number <span class="highlight">${data.party1Id}</span> (the "First Party"), and <span class="highlight">${data.party2Name}</span> holding ID/Passport number <span class="highlight">${data.party2Id}</span> (the "Second Party"), collectively referred to as the "Parties".</p>
    
    <p>THEREFORE, Parties hereby agree to enter into this Agreement according to the following terms and conditions contained therein.</p>

    <h2>1. PURPOSE</h2>
    <p>The purpose of this Agreement is to outline the specific objectives and intentions of the parties involved in sharing the profits generated from the sale of <span class="highlight">${data.productDescription}</span>.</p>
    
    <p>The Parties recognize the value of their respective contributions, including <span class="highlight">${data.contributionDetails}</span>, in achieving the success and profitability of the products and services.</p>
    
    <p>The primary objective of this Agreement is to establish a fair and transparent mechanism for distributing profits among the parties based on their proportional contributions to the overall sales and revenue. The parties aim to incentivize collaboration, maximize sales potential, and promote the growth and sustainability of the products and services through a mutually beneficial profit-sharing arrangement. This Agreement serves to foster a cooperative and results-oriented relationship, ensuring that all parties involved are motivated to actively participate and contribute to the success of the venture.</p>

    <h2>2. PROFIT ALLOCATION</h2>
    <p>The Parties agree to allocate the net profits generated from the sale of the products and services. The profit share shall be determined using the following formula: Profit Share = (Net Profit * Profit Share Percentage)</p>
    
    <p>a. Net Profit refers to the total profit generated from the business operations after deducting all applicable expenses, costs, and taxes.</p>
    <p>b. Profit Share Percentage represents an equal amount of <span class="highlight">${data.profitSharePercentage}</span> assigned to each party's share of the net profit.</p>
    
    <p>The profits shall be allocated on a monthly basis, within seven (7) days after the end of the accounting period. The allocated profits shall be paid to each party by <span class="highlight">${data.paymentMethod}</span> or any other agreed-upon method.</p>
    
    <p>Each party shall provide accurate and timely financial statements, including sales, expenses, and profit calculations, to ensure transparency and facilitate the proper allocation of profits.</p>
    
    <p>The profit allocation may be subject to review and amendment by mutual agreement of the parties, based on the evolving circumstances, market conditions, or any other relevant factors that may impact the profitability and success of the venture.</p>

    <h2>3. COSTS AND EXPENSES</h2>
    <p>The Parties acknowledge that certain costs and expenses may be necessary for the operation of the business and the generation of profits. Such costs and expenses shall be incurred by the parties individually and shall not be considered as part of the net profits subject to sharing, but may be eligible for reimbursement under the following conditions:</p>

    <ul>
      <li><strong>Pre-approved costs:</strong> Any costs and expenses that are pre-approved in writing by all parties shall be eligible for reimbursement. Prior written approval must be obtained for each specific cost or expense, indicating the nature, estimated amount, and purpose of the expenditure.</li>
      <li>Reasonable and necessary costs: Reimbursable costs must be reasonable and necessary for the proper functioning of the business. They should be directly related to the operations, marketing, production, distribution, or any other activities agreed upon by the parties.</li>
      <li>Documentation and submission: Any party seeking reimbursement for costs and expenses must maintain accurate and detailed records, invoices, receipts, or other supporting documents. These documents shall be submitted to the other parties within seven (7) days after the end of each accounting period, accompanied by a written reimbursement request.</li>
    </ul>

    <p>The following costs and expenses shall not be eligible for reimbursement and shall not be considered as part of the net profits subject to sharing:</p>

    <ul>
      <li>Personal expenses: Any personal expenses incurred by the parties or their respective employees, officers, or agents that are not directly related to the business operations.</li>
      <li>Non-business expenses: Costs and expenses incurred for non-business purposes or unrelated ventures that do not contribute to the generation of profits in the company.</li>
      <li>Excessive or unreasonable expenses: Costs and expenses that are excessive, unreasonable, or inconsistent with industry standards and practices.</li>
    </ul>

    <p>Each party shall maintain accurate and up-to-date financial records and provide periodic financial statements, including details of costs, expenses, and reimbursements, as required for transparency and accountability. The provisions of this Costs and Expenses Clause may be reviewed and amended by mutual agreement of the parties to reflect changing circumstances, business needs, or any other relevant factors. Any amendments shall be made in writing and incorporated as an addendum to this agreement.</p>

    <h2>4. TAXATION</h2>
    <p>The Parties are individually responsible for their tax liabilities arising from the profits generated through this agreement and shall comply with applicable tax laws.</p>
    <p>Each party shall fulfill their tax obligations, including filing timely tax returns and reports for their share of the profits derived from this Agreement, covering income tax, withholding tax, VAT, and other applicable taxes.</p>
    <p>In case of a tax audit, investigation, or dispute related to the profits from this agreement, the Parties shall collaborate, provide mutual support, promptly notify each other, and work together in good faith to resolve the issue.</p>
    <p>The Parties may hire tax professionals or consultants for tax planning and compliance regarding the profits from this agreement. The costs for these services shall be borne individually by the party/parties seeking the advice.</p>

    <h2>5. TERMINATION</h2>
    <p>Either party may terminate this Agreement for any reason or without providing a specific cause by providing thirty (30) days written notice to the other party. Upon termination for convenience, the terminating party shall not be liable for any compensation or damages to the non-terminating party, except for any outstanding payment obligations or liabilities accrued before the effective date of termination.</p>
    <p>Either party may terminate this Agreement in the event of a material breach by the other party by providing written notice specifying the nature of the breach. The breaching party shall have a cure period of thirty (30) days from the receipt of the notice to remedy the breach. If the breach is not cured within the specified period, the non-breaching party may terminate this Agreement with immediate effect.</p>
    <p>Either party may terminate this Agreement if the performance of its obligations under this Agreement is prevented or delayed due to force majeure events beyond its reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, strikes, labor disputes, or government regulations.</p>

    <h2>6. CONFIDENTIALITY</h2>
    <p>The Parties acknowledge that during the course of their involvement in this <span class="highlight">Profit Sharing Agreement</span>, they may have access to confidential information belonging to the other party. Confidential information includes, but is not limited to, financial data, business strategies, customer lists, marketing plans, trade secrets, and any other proprietary or sensitive information disclosed or obtained in connection with this agreement. Each party agrees to maintain the confidentiality of the other party's confidential information and not to disclose, divulge, or communicate such information to any third party without the prior written consent of the disclosing party, except as required by law.</p>
    <p>The receiving party shall use the confidential information solely for the purpose of fulfilling its obligations under this agreement and shall take all reasonable measures to protect and safeguard the confidentiality of the disclosed information.</p>
    <p>The obligations of confidentiality shall not apply to information that:</p>
    <ul class="agreement-list">
      <li>a) Is already publicly known or becomes publicly known through lawful means;</li>
      <li>b) Is rightfully received by the receiving party from a third party without any confidentiality obligations;</li>
      <li>c) Is independently developed by the receiving party without reference to the disclosing party's confidential information; or</li>
      <li>d) Is required to be disclosed by law or regulatory authorities, provided that the receiving party provides prompt notice to the disclosing party to enable them to seek appropriate protective measures.</li>
    </ul>

    <h2>7. DISPUTE RESOLUTION</h2>
    <p>In the event of any dispute, controversy, or claim arising out of or relating to this Agreement, the parties shall make all reasonable efforts to resolve the dispute through good-faith negotiations. If the dispute cannot be resolved through negotiation within a reasonable period, either party may propose mediation as an alternative dispute resolution mechanism. The costs of mediation shall be shared equally between the parties unless otherwise agreed upon. If mediation is unsuccessful or not chosen as the preferred method of dispute resolution, any unresolved dispute, controversy, or claim arising out of or relating to this Agreement shall be finally settled by arbitration in accordance with the rules of arbitration agreed upon by the parties. The arbitration award shall be final and binding on both parties.</p>

    <h2>8. ENTIRE AGREEMENT</h2>
    <p>This Agreement contains all terms and conditions agreed to by the Parties, including any attachments or appendices. This Agreement replaces all previous oral discussions, agreements, and understandings relating to the share of profits.</p>

    <h2>9. GOVERNING LAW AND JURISDICTION</h2>
    <p>This Agreement is governed by and interpreted in accordance with the laws of <span class="highlight">${data.taxJurisdiction}</span>.</p>
    <p>The Parties submit to the exclusive jurisdiction of the courts of <span class="highlight">${data.taxJurisdiction}</span> for any legal actions or proceedings arising from this Agreement.</p>

  <h2>SIGNED BY-</h2>
    <div class="signatures">
      <div class="signature-block" style="display: flex; justify-content: space-between;">
        <p>The First part</p>
        <p>The Second Party</p>
      </div>
      <div class="signature-block" style="display: flex; justify-content: space-between;">
        <p>The Witness</p>
        <p>The Witness</p>
      </div>
    </div>
  </div>
</div>`;
