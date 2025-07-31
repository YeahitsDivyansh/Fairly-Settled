export const franchiseAgreementFields = [
  "franchisorName",
  "franchisorOffice",
  "franchisorRep",
  "franchiseeName",
  "franchiseeAddress",
  "territory",
  "website",
  "letterIntentDate",
  "retailExperience",
  "signingDate",
  "openingDate"
];

export const generateFranchiseAgreement = (data) => `<div class="agreement-template">
  <h1 class="agreement-title">FRANCHISE AGREEMENT</h1>

  <div class="agreement-body">
    <p>The undersigned:</p>

    <p>1. <span class="highlight">${data.franchisorName}</span>, having its registered office at <span class="highlight">${data.franchisorOffice}</span>, hereinafter referred to as: "Franchisor", duly represented by <span class="highlight">${data.franchisorRep}</span>;</p>

    <p>And</p>

    <p>2. <span class="highlight">${data.franchiseeName}</span>, representing (New Company), residing at <span class="highlight">${data.franchiseeAddress}</span>, The Netherlands, hereinafter referred to as: "Franchisee"</p>

    <p>The parties under number 1 and 2 referred to individually as the "Party" and together as the "Parties";</p>

    <h2>PREAMBLE</h2>
    <ul class="agreement-list">
      <li>FRANCHISOR has expended time, effort and money to acquire knowledge, experience, methods, skills with regard to the sale and purchase and distribution, establishment, marketing, promotion and operation of businesses by means of websites that provide the sale and purchase of golf equipment, golf clothing, golf holidays and associated products (the "Products");</li>

      <li>FRANCHISOR has expended time, effort and money to acquire knowledge, experience, methods, business plans, procedures, skills with regard to rendering services to the customers with regard to the Products by means of websites ("Services");</li>

      <li>The Products and Services have become identified by a distinctive trade name and trade mark "FRANCHISOR";</li>

      <li>The name "FRANCHISOR" and its logotype, symbols, emblems, slogans, and designs are referred to as "Trademarks";</li>

      <li>Specific manuals and routines (the "Manuals") are used with Products, Services, and Trademarks and form part of this Agreement;</li>

      <li>FRANCHISOR authorizes FRANCHISEE to use Website, Trademarks, Services and Products in <span class="highlight">${data.territory}</span> using <span class="highlight">${data.website}</span>;</li>

      <li>A Letter of Intent was signed on <span class="highlight">${data.letterIntentDate}</span>;</li>

      <li>FRANCHISEE has retail experience in <span class="highlight">${data.retailExperience}</span>;</li>
    </ul>

    <h2>HAVE AGREED AS FOLLOWS:</h2>

    <h3>1. Subject of the Agreement / Master Franchise</h3>
    <p>FRANCHISEE shall:</p>
    <ul class="agreement-list">
      <li>Have exclusive right to operate under FRANCHISOR's name in <span class="highlight">${data.territory}</span>;</li>
      <li>Sell the Products and Services using <span class="highlight">${data.website}</span>;</li>
      <li>Promote use of Products, Services and Trademarks;</li>
      <li>Access Manuals and development materials.</li>
    </ul>

    <p>...</p>

    <h3>13. Term</h3>
    <p>This Agreement is effective and binding for an initial period of 3 years from <span class="highlight">${data.signingDate}</span>. The Dutch website is scheduled to open on <span class="highlight">${data.openingDate}</span>, unless external impediments arise. Agreement may be renewed annually unless terminated in writing by either Party.</p>

    <p>...</p>

    <h3>17. Miscellaneous</h3>
    <p>This Agreement is governed by the laws of the Netherlands. Any disputes shall be submitted to the exclusive jurisdiction of the competent court of [City], the Netherlands.</p>

    <div class="signatures">
      <h2>IN WITNESS WHEREOF, the Parties have executed this Agreement.</h2>
      
      <div class="signature-block">
        <p>_________________________</p>
        <p>FRANCHISOR</p>
        <p>By: <span class="highlight">${data.franchisorRep}</span></p>
        <p>Date: <span class="highlight">${data.signingDate}</span></p>
      </div>

      <div class="signature-block">
        <p>_________________________</p>
        <p>FRANCHISEE</p>
        <p>By: <span class="highlight">${data.franchiseeName}</span></p>
        <p>Date: <span class="highlight">${data.signingDate}</span></p>
      </div>
    </div>
  </div>
</div>`;
