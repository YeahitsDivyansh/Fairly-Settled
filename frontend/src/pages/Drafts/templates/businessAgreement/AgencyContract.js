export const agencyContractFields = [
  "principalName",
  "principalAddress",
  "agentName",
  "agentAddress",
  "territory",
  "productOrServiceDescription",
  "commissionRate",
  "term",
  "exclusivity",
  "nonCompeteClause",
  "terminationNotice",
  "performanceTargets",
  "signingDate"
];

export const generateAgencyContract = (data) => `<div class="agreement-template">
  <h1 class="agreement-title">AGENCY CONTRACT</h1>

  <div class="agreement-body">
    <p>This Agency Contract (the "Contract") is entered into as of <span class="highlight">${data.signingDate}</span> (the "Effective Date"), by and between:</p>

    <p><span class="highlight">${data.principalName}</span>, a company organized and existing under the laws of [Jurisdiction], with its registered office at <span class="highlight">${data.principalAddress}</span> (the "Principal"); and</p>

    <p><span class="highlight">${data.agentName}</span>, a company organized and existing under the laws of [Jurisdiction], with its registered office at <span class="highlight">${data.agentAddress}</span> (the "Agent").</p>

    <p>The Principal and the Agent may be referred to individually as a "Party" and collectively as the "Parties".</p>

    <h2>RECITALS</h2>
    <p>WHEREAS, the Principal is engaged in the business of providing or manufacturing certain products or services as described herein;</p>
    <p>WHEREAS, the Principal desires to appoint the Agent to promote the sale of such products or services within the Territory (as defined below); and</p>
    <p>WHEREAS, the Agent desires to accept such appointment and to promote the sale of the Principal's products or services in the Territory, subject to the terms and conditions of this Contract.</p>
    <p>NOW, THEREFORE, in consideration of the mutual covenants and agreements hereinafter set forth, the Parties agree as follows:</p>

    <h2>1. DEFINITIONS</h2>
    <p>1.1 "Products or Services" means <span class="highlight">${data.productOrServiceDescription}</span>.</p>
    <p>1.2 "Territory" means <span class="highlight">${data.territory}</span>.</p>
    <p>1.3 "Exclusivity" status: <span class="highlight">${data.exclusivity}</span>.</p>

    <h2>2. APPOINTMENT</h2>
    <p>2.1 The Principal hereby appoints the Agent as its <span class="highlight">${data.exclusivity}</span> agent for the promotion and sale of the Products or Services in the Territory, and the Agent accepts such appointment.</p>
    <p>2.2 The Agent shall not actively promote the Products or Services outside the Territory without the prior written consent of the Principal.</p>

    <h2>3. TERM AND TERMINATION</h2>
    <p>3.1 This Contract shall commence on the Effective Date and shall remain in effect for a period of <span class="highlight">${data.term}</span>, unless earlier terminated in accordance with the provisions of this Contract.</p>
    <p>3.2 Either Party may terminate this Contract by providing written notice to the other Party at least <span class="highlight">${data.terminationNotice}</span> in advance of the termination date.</p>
    <p>3.3 Either Party may terminate this Contract immediately upon written notice if the other Party materially breaches this Contract and fails to cure such breach within thirty (30) days after receiving written notice thereof.</p>

    <h2>4. DUTIES OF THE AGENT</h2>
    <p>4.1 The Agent shall use commercially reasonable efforts to promote and solicit orders for the Products or Services in the Territory.</p>
    <p>4.2 The Agent shall provide the Principal with regular reports on market conditions, customer feedback, and competitor activities within the Territory.</p>
    <p>4.3 Performance Targets: <span class="highlight">${data.performanceTargets}</span>.</p>
    <p>4.4 The Agent shall comply with all applicable laws, regulations, and industry standards in performing its duties under this Contract.</p>

    <h2>5. COMMISSION</h2>
    <p>5.1 The Principal shall pay the Agent a commission of <span class="highlight">${data.commissionRate}</span> on all sales of the Products or Services in the Territory that result from the Agent's efforts.</p>
    <p>5.2 Commissions shall be calculated on the net sales price of the Products or Services, excluding taxes, shipping costs, returns, and discounts.</p>
    <p>5.3 The Principal shall provide the Agent with a monthly statement of all sales made in the Territory and shall pay the commissions due within thirty (30) days after the end of each calendar month.</p>

    <h2>6. NON-COMPETE CLAUSE</h2>
    <p>6.1 During the term of this Contract and for a period of [timeframe] thereafter, the Agent shall not: <span class="highlight">${data.nonCompeteClause}</span>.</p>

    <h2>7. INTELLECTUAL PROPERTY</h2>
    <p>7.1 All intellectual property rights in and to the Products or Services, including but not limited to trademarks, trade names, logos, designs, copyrights, and patents, shall remain the exclusive property of the Principal.</p>
    <p>7.2 The Agent shall not register or use any trademark, trade name, domain name, or other designation that is identical or confusingly similar to any trademark or trade name of the Principal.</p>

    <h2>8. CONFIDENTIALITY</h2>
    <p>8.1 Each Party acknowledges that it may receive confidential information of the other Party in connection with this Contract. Each Party agrees to maintain the confidentiality of such information and not to disclose it to any third party without prior written consent of the disclosing Party.</p>

    <h2>9. GOVERNING LAW</h2>
    <p>9.1 This Contract shall be governed by and construed in accordance with the laws of [Jurisdiction], without giving effect to any choice of law or conflict of law provisions.</p>

    <h2>10. ENTIRE AGREEMENT</h2>
    <p>10.1 This Contract constitutes the entire agreement between the Parties with respect to the subject matter hereof and supersedes all prior and contemporaneous agreements and understandings, whether oral or written.</p>

    <div class="signatures">
      <h2>IN WITNESS WHEREOF, the Parties have executed this Contract as of the Effective Date.</h2>
      
      <div class="signature-block">
        <p>_________________________</p>
        <p>PRINCIPAL</p>
        <p>By: <span class="highlight">${data.principalName}</span></p>
        <p>Date: <span class="highlight">${data.signingDate}</span></p>
      </div>

      <div class="signature-block">
        <p>_________________________</p>
        <p>AGENT</p>
        <p>By: <span class="highlight">${data.agentName}</span></p>
        <p>Date: <span class="highlight">${data.signingDate}</span></p>
      </div>
    </div>

    <h2>11. DOCUMENTS ATTACHED TO THE CONTRACT</h2>
    <div class="documents-table">
      <table border="1">
        <tr>
          <th>S.No</th>
          <th>Document Title</th>
          <th>Description</th>
          <th>Date</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Product or Service Specifications</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Commission Schedule</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Territory Map</td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
  </div>
</div>`;
