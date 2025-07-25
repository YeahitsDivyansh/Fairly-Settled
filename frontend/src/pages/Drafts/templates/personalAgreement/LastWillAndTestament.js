export const lastWillAgreementFields = [
    "executionDate",
    "testatorFullName",
    "testatorIdPassport",
    "executorFullName",
    "executorAddress",
    "executorCompensation",
    "alternateExecutorFullName",
    "alternateExecutorAddress",
    "beneficiary1FullName",
    "beneficiary1Bequest",
    "beneficiary2FullName",
    "beneficiary2Bequest",
    "beneficiary3FullName",
    "beneficiary3Bequest",
    "beneficiary1ResidualPercent",
    "beneficiary2ResidualPercent",
    "beneficiary3ResidualPercent",
    "alternateDistribution",
    "beneficiary4FullName",
    "beneficiary4Bequest",
    "beneficiary5FullName",
    "beneficiary5Bequest",
    "beneficiary6FullName",
    "beneficiary6Bequest",
    "guardianFullName",
    "child1FullName",
    "child2FullName",
    "child3FullName",
    "alternateGuardianFullName",
    "trustName",
    "trusteeFullName",
    "trustBeneficiary1",
    "trustBeneficiary2",
    "trustBeneficiary3",
    "successorTrusteeFullName",
    "funeralType",
    "religionBeliefs",
    "funeralHomeName",
    "burialCremationPreference",
    "cemeteryName",
    "digitalExecutorFullName"
];

export const generateLastWillAgreement = (data) => `<div class="agreement-template">
    <h1 class="agreement-title">LAST WILL AND TESTAMENT</h1>
     <style>
    .highlight { font-weight: bold; }
    </style>
    
    <div class="agreement-body">
        <p>This Last Will and Testament shall be effective on <span class="highlight">${data.executionDate}</span> (the "Execution Date") and is made in accordance with the laws of India. I, <span class="highlight">${data.testatorFullName}</span>, holding ID/Passport number <span class="highlight">${data.testatorIdPassport}</span> (the "Testator"), hereby declare my intentions and wishes regarding the distribution of my assets and the appointment of beneficiaries upon my demise.</p>

        <h2>1. REVOCATION OF PREVIOUS WILLS</h2>
        <p>I hereby declare that this Last Will and Testament revokes any and all previous wills, codicils, or testamentary dispositions made by me, whether oral or written, and executed prior to this date. I intend for this present Last Will and Testament to be the sole and final expression of my wishes regarding the distribution of my assets and the appointment of beneficiaries upon my demise.</p>
        <p>I affirm that I am of sound mind and that the revocation of previous wills is made willingly and with full knowledge of the consequences.</p>

        <h2>2. APPOINTMENT OF EXECUTOR</h2>
        <p>I hereby appoint <span class="highlight">${data.executorFullName}</span> (the "Executor"), residing at <span class="highlight">${data.executorAddress}</span>, India. I entrust the Executor with the responsibility of carrying out the provisions stated herein and overseeing the administration of my estate upon my demise.</p>
        <p>The Executor shall have the authority to collect, manage, and distribute my assets in accordance with the terms outlined in this Will. This includes, but is not limited to, the power to sell, transfer, and liquidate any property, settle debts, pay taxes, and take any other necessary actions for the proper administration of my estate.</p>
        <p>I have full confidence in the Executor's ability to fulfill their duties diligently, impartially, and in the best interests of my estate and beneficiaries. I request that the Executor be granted a compensation of INR <span class="highlight">${data.executorCompensation}</span> (Indian Rupees) for his services, as allowed by law. In the event that the appointed Executor is unable or unwilling to fulfill their duties, I hereby designate <span class="highlight">${data.alternateExecutorFullName}</span> (the "Alternate Executor"), residing at <span class="highlight">${data.alternateExecutorAddress}</span>, India, with the same powers and responsibilities as stated above.</p>

        <h2>3. DISTRIBUTION OF ASSETS</h2>
        <p>Upon my demise, I direct the distribution of my assets and properties in accordance with the laws of India. The distribution shall be carried out as follows:</p>
        
        <h3>Specific bequests:</h3>
        <p>I hereby make the following specific bequests of certain items or properties:</p>
        <ul class="agreement-list">
            <li>To <span class="highlight">${data.beneficiary1FullName}</span> (the "Beneficiary 1"), I bequeath <span class="highlight">${data.beneficiary1Bequest}</span>.</li>
            <li>To <span class="highlight">${data.beneficiary2FullName}</span> (the "Beneficiary 2"), I bequeath <span class="highlight">${data.beneficiary2Bequest}</span>.</li>
            <li>To <span class="highlight">${data.beneficiary3FullName}</span> (the "Beneficiary 3"), I bequeath <span class="highlight">${data.beneficiary3Bequest}</span>.</li>
        </ul>

        <h3>Residuary estate:</h3>
        <p>I designate that the remainder of my estate, known as the residuary estate, shall be distributed among the following beneficiaries in the proportions mentioned below:</p>
        <ul class="agreement-list">
            <li>To <span class="highlight">${data.beneficiary1FullName}</span>: <span class="highlight">${data.beneficiary1ResidualPercent}</span>.</li>
            <li>To <span class="highlight">${data.beneficiary2FullName}</span>: <span class="highlight">${data.beneficiary2ResidualPercent}</span>.</li>
            <li>To <span class="highlight">${data.beneficiary3FullName}</span>: <span class="highlight">${data.beneficiary3ResidualPercent}</span>.</li>
        </ul>
        <p>In the event that any of the above-named beneficiaries predecease me or fail to survive for a specified period of time, their share shall be divided equally among the surviving beneficiaries or their respective heirs.</p>

        <h3>Alternate distribution:</h3>
        <p>If any of the beneficiaries mentioned above predecease me or fail to survive for a specified period of time and no alternate provision has been specified, their share shall be distributed <span class="highlight">${data.alternateDistribution}</span>.</p>

        <h3>Charitable bequests:</h3>
        <p>I may choose to make charitable bequests or donations from my estate. The beneficiaries of these bequests shall be selected at the discretion of the Executor or as stated in a separate document.</p>
        <p>I request that my estate be distributed in accordance with the above provisions and the applicable laws of India. I further authorize the Executor to make all necessary arrangements and transactions to effectuate the distribution of assets as outlined in this section.</p>

        <h2>4. SPECIFIC BEQUESTS AND LEGACIES</h2>
        <p>I hereby make the following specific bequests and legacies of certain items or properties:</p>
        <ul class="agreement-list">
            <li>To <span class="highlight">${data.beneficiary4FullName}</span> (the "Beneficiary 4"), I bequeath <span class="highlight">${data.beneficiary4Bequest}</span>.</li>
            <li>To <span class="highlight">${data.beneficiary5FullName}</span> (the "Beneficiary 5"), I bequeath <span class="highlight">${data.beneficiary5Bequest}</span>.</li>
            <li>To <span class="highlight">${data.beneficiary6FullName}</span> (the "Beneficiary 6"), I bequeath <span class="highlight">${data.beneficiary6Bequest}</span>.</li>
        </ul>
        <p>I intend for these specific bequests and legacies to be delivered to the designated beneficiaries in accordance with the instructions provided. However, if any of the mentioned beneficiaries predecease me or fail to survive for a specified period of time, their bequest shall be null and void, and the property or item shall be distributed as part of my residuary estate. I request that my Executor takes the necessary steps to ensure the prompt and proper delivery of these specific bequests and legacies to the designated beneficiaries.</p>

        <h2>5. GUARDIANSHIP OF MINOR CHILDREN</h2>
        <p>In the event of my death, I appoint <span class="highlight">${data.guardianFullName}</span> (the "Guardian") of my minor children, namely: <span class="highlight">${data.child1FullName}</span>, <span class="highlight">${data.child2FullName}</span>, and <span class="highlight">${data.child3FullName}</span>. I trust that the Guardian will assume the responsibility of caring for and raising my minor children with love, guidance, and support. It is my explicit wish that the Guardian provides a stable and nurturing environment for their physical, emotional, and educational needs.</p>
        <p>I request that the Guardian takes immediate custody of my minor children upon my passing and take all necessary steps to ensure their well-being. This includes making decisions related to their healthcare, education, extracurricular activities, and general upbringing.</p>
        <p>If, for any reason, the Guardian is unable or unwilling to assume guardianship, I appoint <span class="highlight">${data.alternateGuardianFullName}</span> (the "Alternate Guardian") for my minor children.</p>

        <h2>6. TRUSTS OR TRUSTEE APPOINTMENTS</h2>
        <p>I hereby establish a trust fund to safeguard and manage the assets and property that I leave behind upon my passing. The trust fund shall be known as <span class="highlight">${data.trustName}</span> (the "Name of Trust"). The purpose of this trust is to ensure the proper administration and distribution of my estate according to my wishes.</p>
        <p>I appoint <span class="highlight">${data.trusteeFullName}</span> (the "Trustee") of the <span class="highlight">${data.trustName}</span>. The Trustee shall have the authority to manage, invest, and distribute the assets of the trust in accordance with the provisions outlined in this Last Will and Testament and any accompanying trust documents.</p>
        <p>The Trustee shall exercise their duties with utmost care, diligence, and loyalty, ensuring that the trust's assets are preserved and used for the benefit of the beneficiaries as specified herein.</p>
        <p>The beneficiaries of the trust shall include <span class="highlight">${data.trustBeneficiary1}</span>, <span class="highlight">${data.trustBeneficiary2}</span>, and <span class="highlight">${data.trustBeneficiary3}</span>. The Trustee is authorized to make distributions to the beneficiaries as deemed necessary or appropriate, considering their best interests and the intentions expressed in this Last Will and Testament.</p>
        <p>I grant the Trustee full discretion and authority to manage the trust, including the power to invest, sell, or purchase assets, collect income, pay expenses, and undertake any actions necessary for the effective administration of the trust.</p>
        <p>If, for any reason, the appointed trustee is unable or unwilling to fulfill their duties, I appoint <span class="highlight">${data.successorTrusteeFullName}</span> (the "Successor Trustee"). The successor trustee shall assume all the rights, powers, and responsibilities granted to the original trustee. I hereby direct that all expenses incurred in the administration of the trust, including trustee fees, legal fees, and any other reasonable costs, be paid from the assets of the trust.</p>

        <h2>7. FUNERAL AND BURIAL INSTRUCTIONS</h2>
        <p>Upon my passing, I express my wishes regarding my funeral and burial arrangements. I kindly request that my loved ones and the Executor adhere to the following instructions:</p>
        <p>I desire to have a <span class="highlight">${data.funeralType}</span> funeral service to commemorate my life and honor my memory. I request that the service be conducted in a respectful and dignified manner, in accordance with the customs and traditions of <span class="highlight">${data.religionBeliefs}</span>.</p>
        <p>I designate <span class="highlight">${data.funeralHomeName}</span> as the preferred funeral home to handle the arrangements. I trust that my executor(s) will make the necessary arrangements with the chosen funeral home and provide them with any required documentation.</p>
        <p>I hereby specify my preference for <span class="highlight">${data.burialCremationPreference}</span> of my remains. If I choose burial, I request to be buried at <span class="highlight">${data.cemeteryName}</span> or any other cemetery chosen by the Executor that is in accordance with my wishes and available options at the time of my passing. If I choose cremation, I request that my ashes be handled and disposed of in a manner that is respectful and in accordance with the law.</p>
        <p>I have set aside funds specifically for covering the costs associated with my funeral and burial arrangements. I direct the Executor to utilize these funds to ensure that all necessary expenses, including funeral service fees, burial plot costs, transportation, and other related expenses, are adequately covered.</p>
        <p>I grant the Executor the authority to make reasonable adjustments or modifications to these instructions, while keeping in mind the overall intent and spirit of my wishes.</p>

        <h2>8. DIGITAL ASSETS AND DIGITAL EXECUTOR</h2>
        <p>For the purposes of this Last Will and Testament, digital assets refer to any electronic or online accounts, files, data, or other digital content that are owned or controlled by me, including but not limited to:</p>
        <ol class="agreement-list-alpha">
            <li>Email accounts (e.g., Gmail, Yahoo, Outlook)</li>
            <li>Social media accounts (e.g., Facebook, Twitter, Instagram)</li>
            <li>Online banking and financial accounts</li>
            <li>Digital photos, videos, and other media files</li>
            <li>Personal websites or blogs</li>
            <li>Cloud storage accounts (e.g., Dropbox, Google Drive)</li>
            <li>Cryptocurrency accounts</li>
            <li>Any other online or digital assets that may exist at the time of my passing</li>
        </ol>
        <p>I hereby appoint <span class="highlight">${data.digitalExecutorFullName}</span> (the "Digital Executor") of my digital assets. The Digital Executor shall have the authority and responsibility to access, manage, and take control of my digital assets, including but not limited to logging into accounts, transferring or closing accounts, and retrieving important files or information.</p>
        <p>The Digital Executor shall be responsible for notifying the respective service providers or platforms about my passing and providing any necessary documentation to confirm their authority to act on my behalf.</p>
        <p>I request that I maintain an updated inventory of my digital assets, including usernames, passwords, and any additional information necessary for accessing or managing these assets. This inventory shall be securely stored and made available to the Digital Executor.</p>
        <p>The Digital Executor shall respect and maintain the privacy and confidentiality of my digital assets, ensuring that sensitive information is not disclosed or misused.</p>
        <p>I release and discharge any digital platform, service providers, or online entities from any liability arising from the actions of the Digital Executor in managing or accessing my digital assets.</p>
        <p>The authority and powers granted to the Digital Executor shall remain in effect until all necessary actions relating to my digital assets have been completed or as otherwise specified in this Last Will and Testament.</p>

        <h2>9. CONTESTATION CLAUSE</h2>
        <p>I understand that the purpose of this Contestation Clause is to discourage any disputes or challenges to the validity or provisions of this will.</p>
        <p>I hereby include a no contest provision, which states that if any beneficiary or interested party contests or challenges the validity or provisions of this will, or initiates any legal proceedings against its execution or administration, then that person shall forfeit any share or interest they would otherwise have received under this will.</p>

        <h2>10. GOVERNING LAW AND JURISDICTION</h2>
        <p>This Last Will and Testament shall be governed by and interpreted in accordance with the laws of India. Any disputes or contests regarding this will shall be subject to the jurisdiction of the courts of India.</p>

        <h2>SIGNED BY:</h2>
        <div class="signatures">
            <div class="signature-block" style="display: flex; justify-content: space-between; margin-top: 40px;">
                <div style="text-align: center;">
                    <div style="border-bottom: 1px solid #000; width: 200px; margin-bottom: 5px;"></div>
                    <p>The Testator</p>
                </div>
                <div style="text-align: center;">
                    <div style="border-bottom: 1px solid #000; width: 200px; margin-bottom: 5px;"></div>
                    <p>The Witness</p>
                </div>
            </div>
            <div style="text-align: center; margin-top: 40px;">
                <div style="border-bottom: 1px solid #000; width: 200px; margin: 0 auto 5px;"></div>
                <p>The Witness</p>
            </div>
        </div>
    </div>
</div>`;
