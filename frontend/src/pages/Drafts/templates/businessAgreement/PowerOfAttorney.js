export const powerOfAttorneyFields = [
  "principalName",
  "principalAddress",
  "agentName",
  "agentAddress",
  "powersGranted",
  "effectiveDate",
  "expirationDate",
  "revocationConditions",
  "signingDate"
];

export const generatePowerOfAttorney = (data) => `<div class="agreement-template">
  <h1 class="agreement-title">POWER OF ATTORNEY</h1>

  <div class="agreement-body">
    <p>I, <span class="highlight">${data.principalName}</span>, residing at <span class="highlight">${data.principalAddress}</span> (the "Principal"), hereby appoint <span class="highlight">${data.agentName}</span>, residing at <span class="highlight">${data.agentAddress}</span> (the "Agent" or "Attorney-in-Fact"), as my true and lawful attorney-in-fact.</p>

    <h2>1. POWERS GRANTED</h2>
    <p>1.1 I hereby grant to my Agent the following powers: <span class="highlight">${data.powersGranted}</span></p>

    <h2>2. EFFECTIVE DATE</h2>
    <p>2.1 This Power of Attorney shall become effective on <span class="highlight">${data.effectiveDate}</span> and shall remain in effect until <span class="highlight">${data.expirationDate}</span>.</p>

    <h2>3. REVOCATION</h2>
    <p>3.1 This Power of Attorney may be revoked under the following conditions: <span class="highlight">${data.revocationConditions}</span></p>

    <h2>4. RELIANCE BY THIRD PARTIES</h2>
    <p>4.1 Any third party may rely upon the authority granted herein until they receive actual notice of revocation.</p>

    <h2>5. INDEMNIFICATION</h2>
    <p>5.1 I agree to indemnify and hold harmless my Agent from any claims, damages, or expenses incurred as a result of acting in good faith under this Power of Attorney.</p>

    <h2>6. GOVERNING LAW</h2>
    <p>6.1 This Power of Attorney shall be governed by applicable laws.</p>

    <div class="signatures">
      <h2>IN WITNESS WHEREOF, I have executed this Power of Attorney.</h2>
      
      <div class="signature-block">
        <p>_________________________</p>
        <p>PRINCIPAL</p>
        <p>Name: <span class="highlight">${data.principalName}</span></p>
        <p>Date: <span class="highlight">${data.signingDate}</span></p>
      </div>

      <div class="signature-block">
        <p>_________________________</p>
        <p>NOTARY PUBLIC</p>
        <p>Date: <span class="highlight">${data.signingDate}</span></p>
      </div>

      <div class="signature-block">
        <p>_________________________</p>
        <p>AGENT/ATTORNEY-IN-FACT</p>
        <p>Name: <span class="highlight">${data.agentName}</span></p>
        <p>Date: <span class="highlight">${data.signingDate}</span></p>
        <p>(Acceptance of Appointment)</p>
      </div>
    </div>
  </div>
</div>`;
