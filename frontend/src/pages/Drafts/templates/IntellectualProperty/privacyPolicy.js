export const privacyPolicyFields = [
  "executionDate",
  "parentFullName",
  "childFullName",
  "childDateOfBirth",
  "childIdPassport",
  "countryName",
  "designatedAdultName",
  "travelStartDate",
  "travelEndDate",
  "airlineCompanyName",
  "flightNumber",
  "hotelName",
  "hotelAddress",
  "insuranceProviderName",
  "policyNumber",
  "emergencyContactNumber",
  "parentIdPassport",
  "parentAddress",
  "parentEmail",
  "parentPhone",
  "designatedAdultIdPassport",
  "designatedAdultAddress",
  "designatedAdultEmail",
  "designatedAdultPhone"
];

export const generatePrivacyPolicy = (data) => `<div class="agreement-template">
  <h1 class="agreement-title">Child Travel Consent Letter</h1>

  <style>
    .highlight { font-weight: bold; }
    </style>
  
  <div class="agreement-body">
    <p><strong>To Whom It May Concern,</strong></p>
    
    <p>I, <span class="highlight">${data.parentFullName}</span>, (the "Parent or Legal Guardian"), hereby grant my full consent for my child, <span class="highlight">${data.childFullName}</span>, born on <span class="highlight">${data.childDateOfBirth}</span>, and holding ID/Passport number <span class="highlight">${data.childIdPassport}</span> to travel to <span class="highlight">${data.countryName}</span> accompanied by <span class="highlight">${data.designatedAdultName}</span> (the "Designated Adult"), a family member of the child.</p>

    <h2>1. PARENT'S CONSENT.</h2>
    <p>This letter serves as authorization and consent for my child's travel from <span class="highlight">${data.travelStartDate}</span> to <span class="highlight">${data.travelEndDate}</span>. I understand that the Designated Adult will be responsible for the supervision and care of my child throughout the trip.</p>

    <div class="agreement-table">
      <table border="1" cellpadding="8" cellspacing="0" style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr>
          <td style="width: 50%; border: 1px solid #000; padding: 8px; background-color: #f5f5f5;">
            <strong>Flight details</strong>
          </td>
          <td style="width: 50%; border: 1px solid #000; padding: 8px; background-color: #f5f5f5;">
            <strong>Accommodation details</strong>
          </td>
        </tr>
        <tr>
          <td style="border: 1px solid #000; padding: 8px;">
            * Airline company name: <span class="highlight">${data.airlineCompanyName}</span>
          </td>
          <td style="border: 1px solid #000; padding: 8px;">
            * Hotel name: <span class="highlight">${data.hotelName}</span>
          </td>
        </tr>
        <tr>
          <td style="border: 1px solid #000; padding: 8px;">
            * Flight number: <span class="highlight">${data.flightNumber}</span>
          </td>
          <td style="border: 1px solid #000; padding: 8px;">
            * Address: <span class="highlight">${data.hotelAddress}</span>
          </td>
        </tr>
      </table>
    </div>

    <h2>2. TRAVEL EXPENSES.</h2>
    <p>The travel expenses will be the responsibility of the Parent or Legal Guardian. This includes transportation costs, accommodation fees, meals, and any other necessary expenses incurred during the travel period. I acknowledge and agree to bear all the financial obligations related to the child's travel.</p>

    <h2>3. MEDICAL AUTHORIZATION.</h2>
    <p>I authorize the Designated Adult to seek medical treatment for my child, in case of any medical emergencies. This includes consent for medical procedures, administration of medication, and access to medical records, if required.</p>

    <h2>4. TRAVEL INSURANCE.</h2>
    <p>It is important to note that the child is covered by comprehensive travel insurance for the duration of the stay. The insurance policy provides coverage for any medical emergencies, accidents, or travel-related incidents that may occur during the trip. The designated adult is aware of the insurance coverage and will ensure that the necessary steps are taken to utilize the insurance benefits if required.</p>

    <div class="agreement-table">
      <table border="1" cellpadding="8" cellspacing="0" style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr>
          <td style="border: 1px solid #000; padding: 8px; background-color: #f5f5f5;" colspan="2">
            <strong>Insurance provider details</strong>
          </td>
        </tr>
        <tr>
          <td style="border: 1px solid #000; padding: 8px;" colspan="2">
            * Insurance provider name: <span class="highlight">${data.insuranceProviderName}</span>
          </td>
        </tr>
        <tr>
          <td style="border: 1px solid #000; padding: 8px;" colspan="2">
            * Policy number: <span class="highlight">${data.policyNumber}</span>
          </td>
        </tr>
        <tr>
          <td style="border: 1px solid #000; padding: 8px;" colspan="2">
            * Emergency contact number: <span class="highlight">${data.emergencyContactNumber}</span>
          </td>
        </tr>
      </table>
    </div>

    <h2>5. EMERGENCY CONTACT INFORMATION.</h2>
    <p>In case of any emergencies or unforeseen circumstances, please contact the Parent or Legal Guardian at any time by phone or email contacts as provided below:</p>

    <div class="agreement-table">
      <table border="1" cellpadding="8" cellspacing="0" style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr>
          <td style="width: 50%; border: 1px solid #000; padding: 8px; background-color: #f5f5f5;">
            <strong>Parent/Legal Guardian details</strong>
          </td>
          <td style="width: 50%; border: 1px solid #000; padding: 8px; background-color: #f5f5f5;">
            <strong>Designated Adult details</strong>
          </td>
        </tr>
        <tr>
          <td style="border: 1px solid #000; padding: 8px;">
            * Full Name: <span class="highlight">${data.parentFullName}</span>
          </td>
          <td style="border: 1px solid #000; padding: 8px;">
            * Full Name: <span class="highlight">${data.designatedAdultName}</span>
          </td>
        </tr>
        <tr>
          <td style="border: 1px solid #000; padding: 8px;">
            * ID/Passport number: <span class="highlight">${data.parentIdPassport}</span>
          </td>
          <td style="border: 1px solid #000; padding: 8px;">
            * ID/Passport number: <span class="highlight">${data.designatedAdultIdPassport}</span>
          </td>
        </tr>
        <tr>
          <td style="border: 1px solid #000; padding: 8px;">
            * Address: <span class="highlight">${data.parentAddress}</span>
          </td>
          <td style="border: 1px solid #000; padding: 8px;">
            * Address: <span class="highlight">${data.designatedAdultAddress}</span>
          </td>
        </tr>
        <tr>
          <td style="border: 1px solid #000; padding: 8px;">
            * Email: <span class="highlight">${data.parentEmail}</span>
          </td>
          <td style="border: 1px solid #000; padding: 8px;">
            * Email: <span class="highlight">${data.designatedAdultEmail}</span>
          </td>
        </tr>
        <tr>
          <td style="border: 1px solid #000; padding: 8px;">
            * Phone number: <span class="highlight">${data.parentPhone}</span>
          </td>
          <td style="border: 1px solid #000; padding: 8px;">
            * Phone number: <span class="highlight">${data.designatedAdultPhone}</span>
          </td>
        </tr>
      </table>
    </div>

    <h2>6. GOVERNING LAW AND JURISDICTION.</h2>
    <p>This consent letter shall be governed by and interpreted in accordance with the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of the courts of India. Thank you for your attention to this matter. I trust that this consent letter provides the necessary authorization for my child's travel.</p>

    <p>Yours sincerely,</p>
    
    <p>Issued on <span class="highlight">${data.executionDate}</span>.</p>

    <h2>SIGNED BY:</h2>
    <div class="signatures">
      <div class="signature-block" style="display: flex; justify-content: space-between; margin-top: 40px;">
        <div>
          <p>The Parent or Legal Guardian</p>
        </div>
        <div>
          <p>The Designated Adult</p>
        </div>
      </div>
    </div>
  </div>
</div>`;
