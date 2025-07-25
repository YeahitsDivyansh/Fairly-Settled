export const freelanceContractFields = [
  "effectiveDate",
  "freelancerName",
  "freelancerId",
  "clientCompanyName",
  "clientRegistrationNumber",
  "clientDirectorName",
  "clientFee",
  "deposit",
];

export const generateFreelanceContract = (data) => `<div class="agreement-template">
  <h1 class="agreement-title">FREELANCE CONTRACT</h1>

  <div class="agreement-body">
    <p>This Freelance Agreement shall become effective on <span><strong>${data.effectiveDate}</strong></span> (the "Execution Date") and is subject to the terms and conditions stated below between <span><strong>${data.freelancerName}</strong></span> holding ID/Passport number <span><strong>${data.freelancerId}</strong></span> (the "Freelancer"), and <span><strong>${data.clientCompanyName}</strong></span> having registration number <span><strong>${data.clientRegistrationNumber}</strong></span> and represented by <span><strong>${data.clientDirectorName}</strong></span>, authorized Director (the "Client"), collectively referred to as the "Parties".</p>

    <p><strong>THEREFORE,</strong> Parties hereby agree to enter into this Agreement according to the following terms and conditions contained therein.</p>

    <h2>1. SCOPE OF WORK</h2>
    <p>
      The Client hereby agrees to engage the Freelancer to provide the Client with the following freelancing services (the "Project"):
      <br />
      <strong>Copywriter</strong>
      <ul>
        <li>Writing blog posts, articles, and website content.</li>
        <li>Creating engaging social media captions and posts.</li>
        <li>Crafting compelling sales copy for advertisements and marketing materials.</li>
        <li>Developing email newsletters and promotional campaigns.</li>
        <li>Editing and proofreading content for accuracy, grammar and style.</li>
      </ul>
      <strong>Graphic Designer</strong>
      <ul>
        <li>Designing logos, brand identities, and visual assets.</li>
        <li>Creating eye-catching graphics for websites and social media platforms.</li>
        <li>Designing brochures, posters, and other marketing collateral.</li>
        <li>Developing layouts for magazines, books, and print materials.</li>
        <li>Creating illustrations and infographics for various purposes.</li>
      </ul>
      <strong>Web/Software Developer</strong>
      <ul>
        <li>Building and maintaining websites and web applications.</li>
        <li>Developing custom software solutions for clients' specific needs.</li>
        <li>Optimizing websites for performance, security, and user experience.</li>
        <li>Integrating third-party APIs and plugins into existing systems.</li>
        <li>Troubleshooting and debugging code issues to ensure functionality.</li>
      </ul>
      <strong>Digital Marketer</strong>
      <ul>
        <li>Conducting keyword research and optimizing websites for search engines (SEO).</li>
        <li>Managing social media accounts and creating engaging content.</li>
        <li>Planning and executing digital advertising campaigns (PPC, display ads).</li>
        <li>Analyzing data and generating reports on campaign performance.</li>
        <li>Developing and implementing content marketing strategies.</li>
      </ul>
      <strong>Photographer/Videographer</strong>
      <ul>
        <li>Capturing high-quality photographs or videos for events, products, or portraits.</li>
        <li>Editing and retouching images or videos for a polished final product.</li>
        <li>Managing and organizing a portfolio of visual assets.</li>
        <li>Collaborating with clients to understand their specific requirements and goals.</li>
        <li>Staying updated with the latest trends and techniques in photography or videography.</li>
      </ul>
    </p>

    <h2>2. PAYMENT TERMS</h2>
    <p>
     The Freelance shall charge the Client a flat fee of INR <span><strong>${data.clientFee}</strong></span> (Indian Rupees) for the Project (the "Freelance Fee"). The Client agrees to make payments to the Freelancer according to the following schedule:
      
     <p> a) Initial payment: A non-refundable deposit of INR <span><strong>${data.deposit}</strong></span> (Indian Rupees) is payable by the Client upon signing of this Agreement.</p>
      
      <p>b) Milestone payments: The remaining Project fee will be divided into milestones as mutually agreed upon by both parties. Each milestone payment will be due upon the completion of the specified deliverables or as outlined in the Project timeline.</p>
      <p>c) Final payment: The final payment, including any additional fees or expenses incurred during the Project, shall be due within thirty (30) days of the Project's completion or as agreed upon in writing.</p> 
      <p>If the Client terminates this Agreement before the Project' completion, the Freelancer shall be entitled to pro-rata payment of the Freelance Fee as of the date of termination, if there has been no breach of the Agreement by the Freelancer.</p>

      <p>The Client shall make payments to the Freelancer via bank transfer or any other mutually agreed-upon method. Any fees or charges associated with the chosen payment method shall be borne by the Client.</p> 
      <p>In the event of late payment, the Client shall be responsible for paying a late fee of INR [amount in figures, e.g., 500] (Indian Rupees) for each day the payment remains outstanding beyond the due date specified in the invoice or agreed upon payment schedule.</p>
      <p>The Client shall be responsible for any applicable taxes, duties, or other fees imposed by the relevant authorities in accordance with the laws and regulations of India.</p>
    </p>
  
    <h2>3. INTELLECTUAL PROPERTY.</h2>
    <p>The Client is the sole and exclusive owner of all intellectual property rights, including but not limited to the Client's products and information, data, marketing materials, accounting, and administrative information, trademarks, logos, domain names, and any distinctive sign used by the Client.</p>
    <p>The Freelancer expressly acknowledges that it has no rights in the Client's intellectual property related to the Seller's properties and products.</p>
    <p>In the event of termination of this Contract between the Parties, the Freelancer shall return to the Client all goods, documents, records, or confidential information that are the Client's property.</p>

    <h2>4. CONFIDENTIALITY</h2>
    <p>During the term of this Agreement and after five (5) years from its termination, the Parties shall not disclose confidential information under this Agreement. The Parties shall use their best efforts to prevent the use or disclosure of confidential information. The Parties agree to keep all confidential information relating to the business, including but not limited to lead, clients, supplier information, financial information, software and data, trade secrets, inventions, business methods, corporate plans, marketing, sales information, development projects, and all other business information that is supplied by the Parties, together with all intellectual property rights which exist concerning the above.</p>

    <h2>5. REVISIONS AND CHANGES.</h2>
    <p>The Client understands that the agreed-upon scope of work is outlined in the project description or proposal. Any revisions or changes requested by the Client that fall within the defined scope shall be considered as part of the original project agreement.</p>
    <ul>
    <li>Requesting revisions: The Client shall submit all revision requests to the Freelancer in writing, clearly specifying the desired changes and the reasons behind them. The Freelancer will review the request and determine the feasibility and impact of the proposed revisions on the project timeline and fees.</li>
    <li>Revisions fees: If the requested revisions or changes fall outside the originally agreed scope of work, the Freelancer shall provide a written estimate of the additional fees or costs associated with implementing the revisions. The Client will have the opportunity to accept or decline the proposed revisions and associated fees in writing before any work commences.</li>
    <li>Timelines for revisions: The Freelancer will provide an estimated timeline for completing the requested revisions, taking into account the complexity and impact on the project schedule. Both parties shall mutually agree upon the revised timeline in writing.</li>
    </ul>

    <h2>6. TERMINATION</h2>
    <p>Either party may terminate this Agreement by providing thirty (30) days' written notice. Upon termination for convenience, the terminating party shall not be liable for compensation or damages, except for outstanding payment obligations or liabilities accrued before the termination date.</p>
    <p>Either party may terminate this Agreement for a material breach by providing written notice. The breaching party has thirty (30) days to remedy the breach. If not cured within the specified period, the non-breaching party may terminate this Agreement immediately.</p>
    <p>Upon project completion, this contract is terminated. Any remaining obligations or outstanding payments shall be settled as per the agreed terms. In case of termination, compensation for completed work or services rendered will be based on the proportion of completed work in the project timeline.</p>

    <h2>7. ENTIRE AGREEMENT.</h2>
    <p>This Agreement contains all terms and conditions agreed to by the Parties, including any attachments or appendices. This Agreement replaces all previous oral discussions, agreements, and understandings relating to the Project.</p>

    <h2>8. GOVERNING LAW AND JURISDICTION.</h2>
    <p>This Agreement shall be governed by and interpreted in accordance with the laws of India. The Parties agree to submit to the exclusive jurisdiction of the courts of India for any legal actions or proceedings arising from this Agreement.</p>

    <h2>9. DOCUMENTS ATTACHED TO THE AGREEMENT.</h2>
    <p>Both Parties agree that the documents attached and signed by the Parties are considered as a part of this Agreement. These documents are as follows:</p>

    <table style="border: 1px solid #000; border-collapse: collapse; width: 100%;">
      <thead>
      <tr style="border: 1px solid #000;">
      <th style="border: 1px solid #000; width: 50%;">Freelancer details:</th>
      <th style="border: 1px solid #000; width: 50%;">Client details:</th>
      </tr>
      </thead>

      <tbody>
      <tr style="border: 1px solid #000;">
      <td style="border: 1px solid #000;">
      * Copy of ID-card
      </td>
      <td style="border: 1px solid #000;">
      * Copy of the company affidavit
      </td>
      </tr>

      <tr style="border: 1px solid #000;">
      <td style="border: 1px solid #000;">
      * Proof of address
      </td>
      <td style="border: 1px solid #000;">
      * Copy of the Director's ID-card
      </td>
      </tr>

      <tr style="border: 1px solid #000;">
      <td style="border: 1px solid #000;">
      * Bank account details
      </td>
      <td style="border: 1px solid #000;">
      
      </td>
      </tr>

      </tbody>
    </table>

     <p>This Agreement is drawn up in two (2) identical copies, one for each party. Both Parties have read and fully understood this Agreement. This Agreement shall become effective and legally binding upon signature by each of the Parties.</p>


    <h2>SIGNED BY-</h2>
    <div class="signatures">
      <div class="signature-block" style="display: flex; justify-content: space-between;">
        <p>The Freelancer</p>
        <p>The Client</p>
      </div>
      <div class="signature-block" style="display: flex; justify-content: space-between;">
        <p>The Witness</p>
        <p>The Witness</p>
      </div>
    </div>
  </div>
</div>`;
