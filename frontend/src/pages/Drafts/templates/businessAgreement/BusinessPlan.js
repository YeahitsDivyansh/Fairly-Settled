export const businessPlanFields = [
  "companyName",
  "founderName",
  "businessDescription",
  "missionStatement",
  "targetMarket",
  "productsServices",
  "marketingStrategy",
  "financialProjections",
  "fundingRequirements",
  "creationDate"
];

export const generateBusinessPlan = (data) => `<div class="agreement-template">
  <h1 class="agreement-title">BUSINESS PLAN</h1>

  <div class="agreement-body">
    <p>Business Plan for: <span class="highlight">${data.companyName}</span></p>
    <p>Prepared by: <span class="highlight">${data.founderName}</span></p>
    <p>Date: <span class="highlight">${data.creationDate}</span></p>

    <h2>1. EXECUTIVE SUMMARY</h2>
    <p><span class="highlight">${data.businessDescription}</span></p>

    <h2>2. MISSION STATEMENT</h2>
    <p><span class="highlight">${data.missionStatement}</span></p>

    <h2>3. TARGET MARKET</h2>
    <p><span class="highlight">${data.targetMarket}</span></p>

    <h2>4. PRODUCTS & SERVICES</h2>
    <p><span class="highlight">${data.productsServices}</span></p>

    <h2>5. MARKETING STRATEGY</h2>
    <p><span class="highlight">${data.marketingStrategy}</span></p>

    <h2>6. FINANCIAL PROJECTIONS</h2>
    <p><span class="highlight">${data.financialProjections}</span></p>

    <h2>7. FUNDING REQUIREMENTS</h2>
    <p><span class="highlight">${data.fundingRequirements}</span></p>
  </div>
</div>`;
