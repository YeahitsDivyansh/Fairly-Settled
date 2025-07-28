export const commercialLeaseAgreementFields = [
    "executionDate",
    "lessorFullName",
    "lesseeCompanyName",
    "lesseeRegistrationNumber",
    "lesseeAuthorizedDirector",
    "commercialActivity",
    "premisesAddress",
    "leaseStartDate",
    "leaseEndDate",
    "monthlyRentAmount",
    "lateFeePercentage",
    "securityDepositAmount",
    "propertyTaxPercentage",
    "breachNoticeDays",
    "interestRateOverdue"
];

export const generateCommercialLeaseAgreement = (data) => `<div class="agreement-template">
    <h1 class="agreement-title">COMMERCIAL LEASE AGREEMENT</h1>
    <style>
    .highlight { font-weight: bold; }
    .agreement-list { margin: 10px 0; padding-left: 20px; }
    .agreement-list li { margin: 5px 0; }
    .signatures { margin-top: 40px; }
    .signature-block { display: flex; justify-content: space-between; margin-top: 40px; }
    </style>
    
    <div class="agreement-body">
        <p>This Commercial Lease Agreement shall become effective on <span class="highlight">${data.executionDate}</span> (the "Execution Date") and is subject to the terms and conditions stated below between <span class="highlight">${data.lessorFullName}</span> (the "Lessor") and <span class="highlight">${data.lesseeCompanyName}</span> having registration number <span class="highlight">${data.lesseeRegistrationNumber}</span> and represented by <span class="highlight">${data.lesseeAuthorizedDirector}</span>, authorized Director, collectively referred to as the "Parties".</p>

        <p><strong>BOTH PARTIES HEREBY AGREE AS FOLLOWS:</strong></p>

        <h2>1. COMMERCIAL ACTIVITY</h2>
        <p>The Lessor agrees to authorize an <span class="highlight">${data.commercialActivity}</span> in the property located at <span class="highlight">${data.premisesAddress}</span>, India (the "Premises").</p>

        <h2>2. LEASE DURATION</h2>
        <p>The rental period begins on <span class="highlight">${data.leaseStartDate}</span> and ends on <span class="highlight">${data.leaseEndDate}</span>. The Lessee must relocate at the end of the lease term if both Parties do not agree to a new lease agreement or an extension of this Agreement.</p>

        <h2>3. PAYMENTS AND LATE FEES</h2>
        <p>The monthly rent due under this Agreement is INR <span class="highlight">${data.monthlyRentAmount}</span> (Indian Rupees) per month. This amount must be paid in full each month, no later than the date that corresponds to the Execution Date. The first rent payment is due upon signing this Agreement. If the rent is paid late, a penalty of <span class="highlight">${data.lateFeePercentage}%</span> per day will be applied to the unpaid amount, calculated from the original due date until full payment is made.</p>

        <h2>4. SECURITY DEPOSIT</h2>
        <p>The security deposit must be paid to the Lessor no later than the date of the signature of this Agreement by the Lessee. The Lessor shall hold it as security for the Lessee's obligations under this Agreement.</p>
        <p>The Lessee must deliver INR <span class="highlight">${data.securityDepositAmount}</span> (Indian Rupees) which is equivalent to two (2) months of rent, to be paid at the signing of this Agreement. The security deposit is not a prepayment of rent, and the Lessee shall not use it as a reason or excuse for not paying the rent as stipulated in this Agreement.</p>
        <p>The security deposit shall be returned to the Lessee, without interest, within thirty (30) business days after the expiry date or the date on which all utilities, maintenance, and other services relating to the leased Premises have been paid, unless the term of the lease is extended or renewed, in which case the deposit shall be retained by the Lessor during the extension or renewal and returned within the same time upon expiry.</p>

        <h2>5. LESSEE'S OBLIGATIONS</h2>
        <p>The Lessee agrees to comply with all additional obligations as follows:</p>
        <ul class="agreement-list">
            <li><strong>Entering the Premises:</strong> Lessee agrees to permit the Lessor or the Lessor's agent to enter the Premises at any reasonable time or with reasonable notice to inspect the condition and/or repair the leased Premises, except in case of emergency.</li>
            <li><strong>Use of the leased Premises:</strong> The Lessee shall only use the Premises for <span class="highlight">${data.commercialActivity}</span> and not for any other purposes including but not limited to:
                <ol style="list-style-type: lower-alpha; margin: 10px 0; padding-left: 20px;">
                    <li>For any illegal or immoral purpose.</li>
                    <li>For any sales by auction.</li>
                    <li>For sleeping, or as a dwelling house or any domestic purpose.</li>
                    <li>For the keeping or storage of any goods, explosives, firearms, ammunition, bottled gas, or toxic materials.</li>
                    <li>For the keeping or allow to be kept or brought into the Premises any animals.</li>
                </ol>
            </li>
            <li><strong>Repair and maintenance:</strong> The Lessee is required to maintain and repair at its own expense the interior of the Premises in the same clean and sanitary condition, as it received them, except for reasonable wear and tear that could affect the business activity in the Premises.</li>
            <li><strong>Furnishing within Premises:</strong> The Lessee shall not furnish, paint, decorate the Premises or replace the Lessor's equipment without submitting the detailed plan and obtaining the Lessor's prior approval. The Lessee shall submit the plans or modifications to the Lessor for approval before making any changes. The Lessee shall comply with all rules and restrictions related to the Premises and building, if any.</li>
            <li><strong>Nuisance and safety:</strong> The Lessee agree to immediately resolve any security, sanitary, and ventilation issues related to the use of the Premises that would be contrary to the law and public safety.</li>
            <li><strong>Sublease and assign:</strong> Lessee shall not sublet, assign, or transfer the Premises or any part thereof without the prior written consent of the Lessor.</li>
            <li><strong>Return of Premises:</strong> If requested by the Lessor, the Lessee shall at the Lessee's expense, remove all fixtures, fittings, floor coverings, electrical wiring, pipes, ducts, machinery, partitions, and at any time before or after the execution of this Agreement. The Lessee shall repair and restore any damage caused by such removal. If the Lessee does not restore and reinstate the Premises, the Lessee shall pay the Lessor the cost of such restoration and reinstatement.</li>
            <li><strong>Compliance with rules and regulations:</strong> The Lessee is required to comply with all rules and regulations. If the Lessor is obliged to pay to government authorities or any other expenses that may arise from the commercial activity, the Lessee must immediately and fully reimburse the Lessor if the security deposit shall not cover those expenses. Lessee shall indemnify the Lessor against all claims, actions, suits, demands, losses, damages, costs, and expenses whatever incurred by Lessee or its employees, servants, agents, contractors, or visitors.</li>
            <li><strong>Fees and tax assessment:</strong> The Parties agree:
                <ol style="list-style-type: lower-alpha; margin: 10px 0; padding-left: 20px;">
                    <li><strong>Property Tax:</strong> The Lessor shall be responsible for paying the property tax as determined by the local municipal authority or any other competent authority in India. If the property tax amount exceeds <span class="highlight">${data.propertyTaxPercentage}%</span> of the annual rent, the Lessee shall reimburse the Lessor for the excess amount within 7 days of receiving a written notice detailing the excess amount. In the event of any new tax or statutory levy that replaces or supplements the property tax under this Agreement, the Lessee shall be responsible for paying the additional tax.</li>
                    <li><strong>Value Added Tax (VAT):</strong> It is recognized that currently, VAT on the rental of the Premises is exempt. If VAT is to be paid or collected in connection with the rent or the rented Premises, the Lessee agrees to pay this tax.</li>
                    <li><strong>Withholding Tax:</strong> The Lessee shall deduct the applicable withholding tax from rent payments as required under Indian tax laws. The Lessee shall provide the Lessor with the necessary tax certificates or proof of deduction within the timeframe specified by the relevant tax authorities.</li>
                    <li><strong>Other taxes and fees:</strong> The Lessee is responsible for any other taxes, fees, or charges arising from the use of the Premises, including but not limited to service charges, licensing fees, or any other statutory charges imposed by local, state, or central authorities.</li>
                </ol>
            </li>
        </ul>

        <h2>6. INSURANCE</h2>
        <p>The Lessor shall obtain insurance to cover all risks related to the Lessor's property, fixtures, fittings, and any potential damage to the Premises. If the Lessor fails to carry out necessary repairs or restoration within a reasonable timeframe, the Lessor has the right to perform the repairs on the Lessor's behalf. The Lessor shall fully reimburse the Lessor for the incurred costs upon receiving the relevant charges.</p>

        <h2>7. LIMITATION OF LESSOR'S LIABILITY</h2>
        <p>The Lessor shall not hold the Lessee liable in any way in respect of any injury, damages, loss of business, or other liability suffered by the Lessee, especially under the following events:</p>
        <ol style="list-style-type: lower-alpha;" class="agreement-list">
            <li>Any interruption of services because of necessary repair or maintenance.</li>
            <li>Damage or destruction by fire, water, Act of God, Force Majeure, or other causes beyond the Lessor's control.</li>
            <li>The act, neglect, or default of other lessees and their employees, contractors, and visitors.</li>
            <li>Any defect in the supply of electricity or default in the supply of electrical power.</li>
        </ol>

        <h2>8. BREACH OF CONTRACT</h2>
        <p>If the Lessee fails to make payments on time or meet any obligations under this Agreement:</p>
        <ul class="agreement-list">
            <li>The Lessor may claim overdue amounts along with any related costs, losses, or damages. Interest on overdue amounts will be charged at a rate of <span class="highlight">${data.interestRateOverdue}%</span> per annum, calculated daily, until full payment is made, as per the prevailing rates for commercial transactions under Indian law.</li>
            <li>The Lessor has <span class="highlight">${data.breachNoticeDays}</span> days from receiving written notice from the Lessor to remedy any breach of the Agreement. If the Lessee fails to rectify the breach within this period, the Lessor may seek additional compensation for any further losses or damages incurred due to the breach.</li>
        </ul>

        <h2>9. TERMINATION</h2>
        <p>If the Lessee fails to pay the monthly rental fees or any other payments required under this Agreement when due, the Lessor may terminate the lease period immediately. Such termination will be effective upon written notice from the Lessor to the Lessee, and this Agreement will be deemed terminated.</p>
        <p>If either party fails to fulfill its obligations under this Agreement and does not rectify the breach within 30 days of receiving written notice from the non-breaching party, the non-breaching party may terminate the Agreement with immediate effect by providing written notice.</p>
        <p><strong>Insolvency or Bankruptcy:</strong> If the Lessee becomes insolvent, is declared bankrupt, or initiates legal proceedings for winding up or dissolution, the Lessor may terminate the lease period and this Agreement immediately by providing written notice to the Lessee. In such an event, the Lessee shall forfeit the entire security deposit as compensation for the Lessor's losses.</p>
        <p>Should the Lessor terminate this Agreement due to the Lessee's failure to comply with its obligations under this Agreement or applicable law, the termination will be effective immediately upon the Lessor's request. In this case, the Lessee will not be entitled to any compensation from the Lessor and will be solely responsible for any damages suffered by third parties.</p>

        <h2>10. FORCE MAJEURE</h2>
        <p>If the performance of any obligation of either of the Parties under this Agreement prevented or restricted by reason of:</p>
        <ol style="list-style-type: lower-alpha;" class="agreement-list">
            <li>Strike, lockout, epidemic, dispute protest, casualty, or accident.</li>
            <li>Flood, tsunami, earthquake, storm, lack of power or supplies.</li>
            <li>War, revolution, civil commotion, acts of public enemies, blockage, embargo.</li>
            <li>Any law, proclamation, regulation, ordinance, demand, or requirement of any government or authority.</li>
        </ol>
        <p>The party so affected shall, upon giving prompt notice to the other party, be excused such performance to the extent of such prevention or restriction (but only for so long as it continues).</p>

        <h2>11. ENTIRE AGREEMENT</h2>
        <p>This Agreement contains all terms and conditions agreed to by the Parties, including any attachments or appendices. This Agreement replaces all previous oral discussions, agreements, and understandings.</p>

        <h2>12. GOVERNING LAW AND JURISDICTION</h2>
        <p>This Agreement is governed by and shall be construed following the laws of India. The Parties submit all their disputes arising out of or connected with this Agreement to the jurisdiction of the Courts of India.</p>

        <p>This Agreement is drawn up in two (2) identical copies, one for each Party. Both Parties have read and fully understood this Agreement. This Agreement shall become effective and legally binding upon signature by each of the Parties.</p>

        <h2>SIGNED BY:</h2>
        <div class="signatures">
            <div class="signature-block">
                <div style="text-align: center;">
                    <div style="border-bottom: 1px solid #000; width: 200px; margin-bottom: 5px;"></div>
                    <p>The Lessor</p>
                </div>
                <div style="text-align: center;">
                    <div style="border-bottom: 1px solid #000; width: 200px; margin-bottom: 5px;"></div>
                    <p>The Lessee</p>
                </div>
            </div>
            <div class="signature-block">
                <div style="text-align: center;">
                    <div style="border-bottom: 1px solid #000; width: 200px; margin-bottom: 5px;"></div>
                    <p>The Witness</p>
                </div>
                <div style="text-align: center;">
                    <div style="border-bottom: 1px solid #000; width: 200px; margin-bottom: 5px;"></div>
                    <p>The Witness</p>
                </div>
            </div>
        </div>
    </div>
</div>`;
