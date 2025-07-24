export const powerOfAttorneyFields = [
  "grantorName",
  "grantorAddress",
  "granteeName",
  "granteeCompany",
  "granteeRegNumber",
  "granteeDirector",
  "passportCopy",
  "companyAffidavit",
  "signingDate"
];

export const generatePowerOfAttorney = (data) => `<div class="agreement-template">
  <h1 class="agreement-title">POWER OF ATTORNEY</h1>

  <div class="agreement-body">
    <p>By this Power of Attorney, I, <strong>${data.grantorName}</strong>, (the "Grantor"), hereby authorize and appoint <strong>${data.granteeCompany}</strong> having registration number <strong>${data.granteeRegNumber}</strong> and represented by <strong>${data.granteeDirector}</strong>, authorized Director (the "Grantee"), as my sole Grantee. Copy of Passport of the Grantor and the Grantee's Company Affidavit are attached to this Power of Attorney for identification purposes.</p>

    <p>To protect the Grantor's legal rights in India, the Grantee shall have full power and authority to perform the following acts on the Grantor's behalf:</p>

    <h2>1. TAX DECLARATION</h2>
    <p>1.1 To prepare, sign, and file documents, on behalf of the Grantor, before any governmental body or agency, including, but not limited to:</p>
    <ul>
      <li>Prepare, sign, and file the Grantor's personal income tax returns and other tax-related documents with the Income Tax Department of India and other governmental bodies;</li>
      <li>Obtain information or documents from any government or its agencies, and represent the Grantor in all tax matters, including the authority to negotiate, compromise, or settle any matter with such government or agency.</li>
    </ul>

    <h2>2. COMPANY ADMINISTRATIVE MANAGEMENT</h2>
    <p>2.1 To sign and approve the office contracts, contracts with suppliers, client contracts, and all internal invoices. These documents mentioned shall be executed solely for the company's benefit.</p>

    <h2>3. COMPANY EMPLOYEE MANAGEMENT</h2>
    <p>3.1 To sign and approve the company employment contracts and all letters and documents that will be sent to employees of the company. These documents mentioned shall be executed solely for the benefit of the company.</p>

    <h2>4. REAL ESTATE MANAGEMENT</h2>
    <p>4.1 To manage the property owned by the Grantor, receive rents, make repairs, pay expenses including the property's insured, and generally deal with the Grantor property for recovery of rent in arrears, or eviction of tenants other proceedings related to the property in India.</p>
    <p>4.2 To advertise the property for rent and conduct house-viewing of the Grantor Property.</p>
    <p>4.3 To sign on behalf of the Grantor all documents concerning the management and rent of the Grantor's real estate property located in India.</p>

    <h2>5. SALE AND PURCHASE REAL ESTATE</h2>
    <p>5.1 To negotiate and prepare relevant documents concerning the sale and purchase of premises in India owned by the Grantor.</p>
    <p>5.2 To advertise the property for rent and conduct house-viewing of the Grantor Property.</p>
    <p>5.3 To sign on behalf of the Grantor all documents concerning the sale and purchase of the Grantor's real estate property located in India.</p>

    <h2>6. FAMILY CARE</h2>
    <p>6.1 Carry out the necessary expenses for maintenance, education, benefits, and medical care for The Grantor's benefit. This power includes, but is not limited to, the power to pay for housing, clothing, food, travel, and other living costs on behalf of the Grantor.</p>

    <h2>7. PROVIDE STATEMENT</h2>
    <p>7.1 Represent and give a statement(s), fact(s), certify document(s) before the relevant person(s) or authorities on the Grantor's behalf to fulfill the appointment and continue the obligations of this Power of Attorney to complete the transaction. This Power of Attorney shall include such incidental acts as are reasonably required to carry out and perform the specific authorities granted herein.</p>

    <p>The Grantee agrees to accept this appointment subject to its terms and agrees to act and perform in a said fiduciary capacity consistent with the Grantor's best interests.</p>

    <p>Issued on <strong>${data.signingDate}</strong>.</p>


    <h2>SIGNED BY-</h2>
    <div class="signatures">
      <div class="signature-block" style="display: flex; justify-content: space-between;">
        <p>The Grantor</p>
        <p>The Grantee</p>
      </div>
      <div class="signature-block" style="display: flex; justify-content: space-between;">
        <p>The Witness</p>
        <p>The Witness</p>
      </div>
      </div>
  </div>
</div>`;

