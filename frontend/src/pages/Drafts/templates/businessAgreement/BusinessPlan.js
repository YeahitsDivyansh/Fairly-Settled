export const businessPlanFields = [
  "companyName",
  "founderName", 
  "founderTitle",
  "industry",
  "businessDescription",
  "missionStatement",
  "companyAddress",
  "inceptionDate",
  "targetMarket",
  "marketSize",
  "productName1",
  "productDesc1",
  "productName2",
  "productDesc2",
  "serviceName1",
  "serviceDesc1",
  "serviceName2",
  "serviceDesc2",
  "productsServices",
  "marketingStrategy",
  "financialProjections",
  "fundingRequirements",
  "creationDate",
  "department1",
  "department2",
  "department3",
  // Financial data - Gross Revenue
  "unitPriceY1", "unitPriceY2", "unitPriceY3", "unitPriceY4", "unitPriceY5",
  "unitSoldY1", "unitSoldY2", "unitSoldY3", "unitSoldY4", "unitSoldY5",
  "totalRevenueY1", "totalRevenueY2", "totalRevenueY3", "totalRevenueY4", "totalRevenueY5",
  // Unit Expenses
  "cogsY1", "cogsY2", "cogsY3", "cogsY4", "cogsY5",
  "partAY1", "partAY2", "partAY3", "partAY4", "partAY5",
  "partBY1", "partBY2", "partBY3", "partBY4", "partBY5",
  "totalExpensesY1", "totalExpensesY2", "totalExpensesY3", "totalExpensesY4", "totalExpensesY5",
  // Operations
  "processingY1", "processingY2", "processingY3", "processingY4", "processingY5",
  "packagingY1", "packagingY2", "packagingY3", "packagingY4", "packagingY5",
  "shippingY1", "shippingY2", "shippingY3", "shippingY4", "shippingY5",
  "totalOperationsY1", "totalOperationsY2", "totalOperationsY3", "totalOperationsY4", "totalOperationsY5",
  // Marketing
  "socialMediaY1", "socialMediaY2", "socialMediaY3", "socialMediaY4", "socialMediaY5",
  "emailAdsY1", "emailAdsY2", "emailAdsY3", "emailAdsY4", "emailAdsY5",
  "totalMarketingY1", "totalMarketingY2", "totalMarketingY3", "totalMarketingY4", "totalMarketingY5",
  // Sales
  "salesCommissionY1", "salesCommissionY2", "salesCommissionY3", "salesCommissionY4", "salesCommissionY5",
  "creditCardFeeY1", "creditCardFeeY2", "creditCardFeeY3", "creditCardFeeY4", "creditCardFeeY5",
  "totalSalesY1", "totalSalesY2", "totalSalesY3", "totalSalesY4", "totalSalesY5",
  // Returns
  "processingCostsY1", "processingCostsY2", "processingCostsY3", "processingCostsY4", "processingCostsY5",
  "revenueLossY1", "revenueLossY2", "revenueLossY3", "revenueLossY4", "revenueLossY5",
  "totalReturnsY1", "totalReturnsY2", "totalReturnsY3", "totalReturnsY4", "totalReturnsY5",
  // Operating Income
  "operatingIncomeY1", "operatingIncomeY2", "operatingIncomeY3", "operatingIncomeY4", "operatingIncomeY5",
  // Employee Expenses
  "teamY1", "teamY2", "teamY3", "teamY4", "teamY5",
  "salaryY1", "salaryY2", "salaryY3", "salaryY4", "salaryY5",
  "benefitsY1", "benefitsY2", "benefitsY3", "benefitsY4", "benefitsY5",
  "payrollTaxesY1", "payrollTaxesY2", "payrollTaxesY3", "payrollTaxesY4", "payrollTaxesY5",
  "equipmentY1", "equipmentY2", "equipmentY3", "equipmentY4", "equipmentY5",
  "totalEmployeeExpensesY1", "totalEmployeeExpensesY2", "totalEmployeeExpensesY3", "totalEmployeeExpensesY4", "totalEmployeeExpensesY5",
  // Company Overhead
  "officeExpensesY1", "officeExpensesY2", "officeExpensesY3", "officeExpensesY4", "officeExpensesY5",
  "rentY1", "rentY2", "rentY3", "rentY4", "rentY5",
  "operationsY1", "operationsY2", "operationsY3", "operationsY4", "operationsY5",
  "utilitiesY1", "utilitiesY2", "utilitiesY3", "utilitiesY4", "utilitiesY5",
  "externalExpensesY1", "externalExpensesY2", "externalExpensesY3", "externalExpensesY4", "externalExpensesY5",
  "prY1", "prY2", "prY3", "prY4", "prY5",
  "accountingY1", "accountingY2", "accountingY3", "accountingY4", "accountingY5",
  "legalY1", "legalY2", "legalY3", "legalY4", "legalY5",
  "miscAdsY1", "miscAdsY2", "miscAdsY3", "miscAdsY4", "miscAdsY5",
  "totalOverheadY1", "totalOverheadY2", "totalOverheadY3", "totalOverheadY4", "totalOverheadY5",
];

export const generateBusinessPlan = (data) => `<div class="agreement-template">
  <h1 class="agreement-title">BUSINESS PLAN</h1>

  <div class="agreement-body">
    <p><span class="highlight">${data.companyName || "[Company name, e.g., Innovate Solutions Pvt. Ltd.]"}</span> is a dynamic and innovative company ready to make a significant impact on the Indian market. Our business plan outlines our strategies for capitalizing on the unique opportunities present in India. We are driven by a passion for innovation and a commitment to excellence. By focusing on adaptability, market intelligence and customer orientation, we aim to establish ourselves as leaders in <span class="highlight">${data.industry || "[industry/sector, e.g., the technology sector]"}</span>.</p>
    <p>Prepared by: <span class="highlight">${data.founderName}</span></p>
    <p>Date: <span class="highlight">${data.creationDate}</span></p>

    <h2>1. EXECUTIVE SUMMARY.</h2>
    <p>Our business plan presents a compelling vision of <span class="highlight">${data.companyName || "[Company name, e.g., Innovate Solutions Pvt. Ltd.]"}</span> in India's dynamic business landscape. We are focused on delivering innovative solutions and service to our valued customers. Our objectives are clear: to establish a market leadership position, drive sales growth and foster long-term customer relationships.</p>
    <p>To achieve these goals, we have developed comprehensive strategies that draw on our expertise, market knowledge and cutting-edge technologies. Our customer-centric approach adds value and exceeds expectations. Our marketing and sales strategies use a variety of channels, including digital platforms and strategic partnerships, to reach our target audience and build brand awareness.</p>

    <h2>2. COMPANY DESCRIPTION.</h2>
    <p><span class="highlight">${data.companyName || "[Company name, e.g., Innovate Solutions Pvt. Ltd.]"}</span> is an India-based company dedicated to providing exceptional products and services to its customers. Since our inception on <span class="highlight">${data.inceptionDate || "[date, e.g., January 1, 2023]"}</span>, we have focused on revolutionizing the industry through innovative solutions and unparalleled customer service. With headquarters strategically located at <span class="highlight">${data.companyAddress || "[address, e.g., 123 Business Hub, Bengaluru]"}</span>, India, we efficiently serve both local and international markets.</p>
    <p>Our focus on quality, reliability and customer satisfaction has earned us a solid reputation. Our team of highly qualified professionals guarantees outstanding results, and we are proud of our close ties with the Indian community.</p>
    <p>Our ownership structure is made up of people who share a vision of innovation and positive impact on the industry. We stay at the forefront of market trends by using state-of-the-art facilities, advanced technologies, and strategic partnerships. Our commitment to high ethical standards and integrity guides every aspect of our business.</p>
    <p>Cultivating lasting relationships with our customers is our priority, as we provide tailor-made solutions that address unique challenges and stimulate growth. Our customer-centric approach sets us apart and drives us to strive for excellence.</p>

    <h2>3. VALUE PROPOSITION.</h2>
    <p><span class="highlight">${data.companyName || "[Company name, e.g., Innovate Solutions Pvt. Ltd.]"}</span> offers a diverse range of high-quality products and services designed to meet the changing needs of our customers in India.</p>
    <p>Our offerings cover a wide range of industries, including <span class="highlight">${data.industry || "[industry/sector, e.g., IT, consulting, manufacturing]"}</span>. Our products are developed with an emphasis on innovation, functionality, and reliability. They are carefully designed to solve specific problems and bring tangible benefits to our customers. Each product undergoes rigorous testing and quality control measures to ensure it meets the highest standards of excellence.</p>

  <table style="border: 1px solid #000; border-collapse: collapse; width: 100%;">
  <tr>
    <th style="border: 1px solid #000; padding: 8px; background: #f8fafd;">Item(s)</th>
    <th style="border: 1px solid #000; padding: 8px; background: #f8fafd;">Description(s)</th>
  </tr>
  <tr>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.productName1 || "[Product name 1]"}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.productDesc1 || "[Product description 1]"}</span></td>
  </tr>
  <tr>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.productName2 || "[Product name 2]"}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.productDesc2 || "[Product description 2]"}</span></td>
  </tr>
</table>  

    <p>In addition to our products, we also provide a full range of services that complement and enhance their value. Our services are delivered by a team of experienced professionals with in-depth domain knowledge and a customer-centric approach. We pride ourselves on offering customized solutions tailored to each customer's unique needs.</p>
    
  <table style="border: 1px solid #000; border-collapse: collapse; width: 100%;">
  <tr>
    <th style="border: 1px solid #000; padding: 8px; background: #f8fafd;">Item(s)</th>
    <th style="border: 1px solid #000; padding: 8px; background: #f8fafd;">Description(s)</th>
  </tr>
  <tr>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.serviceName1 || "[Service name 1]"}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.serviceDesc1 || "[Service description 1]"}</span></td>
  </tr>
  <tr>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.serviceName2 || "[Service name 2]"}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.serviceDesc2 || "[Service description 2]"}</span></td>
  </tr>
</table>

    <p>Our competitive edge lies in our ability to stay at the cutting edge of technology and industry trends. Through ongoing investment in research and development, we improve our existing products and explore new and innovative avenues. This commitment enables us to offer cutting-edge solutions that give our customers a competitive edge.</p>
    <p>Our priority is to cultivate long-term relationships and consistently exceed our customers' expectations. With responsive customer service, on-time delivery, and comprehensive after-sales support, we guarantee our customers a seamless and rewarding experience with every interaction.</p>

    <h2>4. MARKET ANALYSIS.</h2>
    <p>Our company operates in a dynamic market with a diverse Indian customer base. Extensive market research has identified key factors shaping our target market, including industry trends, customer demographics, competition, and market size.</p>
    <p>There is a growing demand for our innovative products or services as companies seek solutions to enhance their operations and gain a competitive edge. Our offerings align perfectly with market needs and preferences.</p>
    <p>Our target audience consists of <span class="highlight">${data.targetMarket || "[target audience, e.g., small and medium-sized enterprises (SMEs) in the manufacturing sector]"}</span> with whom we have deep insights into their difficulties, challenges, and objectives. This enables us to tailor our products and services to their specific needs.</p>
    <p>Despite strong competition from established players and emerging startups, our in-depth analysis has revealed unique competitive advantages that set us apart. By leveraging these advantages, we are confident in carving out a significant market share. The market segment for our products and services represents an INR <span class="highlight">${data.marketSize || "[amount, e.g., 100 Crore]"}</span> industry in India, offering substantial growth potential.</p>
    <p>To effectively reach our target audience, we have developed a comprehensive marketing and sales strategy encompassing digital marketing, strategic partnerships, and targeted advertising. Through these channels, we aim to build brand awareness, generate leads, and foster long-term customer relationships. Data-driven insights and market segmentation will drive our marketing campaigns, ensuring maximum impact and ROI.</p>


    <p><strong>Competitive Landscape</strong></p>
    <pre style="font-family: 'Courier New', Courier, monospace; font-size: 15px;">
        Competitive Landscape
          ^ Market Share
          |
        +---+-----+
        |   |     |
        Contenders O | X Leaders
        |   X     |
        +---+-----+
        | X   | X |
        X +-----+----+
        Niche   | X High Performers
        +---+-----+
            |
            v 
        Satisfaction
    </pre>

    <h2>5. ORGANIZATION AND MANAGEMENT.</h2>
    <p><span class="highlight">${data.companyName || "[Company name, e.g., Innovate Solutions Pvt. Ltd.]"}</span> prides itself on a well-structured organizational framework, fostering operational efficiency and a culture of excellence. Our team comprises talented professionals with diverse expertise and a shared commitment to our company's success.</p>
    <p><span class="highlight">${data.founderName || "[Founder/CEO/President]"}</span><span class="highlight">${data.founderTitle ? ", " + data.founderTitle : ""}</span> leads our management team, setting strategic direction and overseeing day-to-day operations with visionary leadership and extensive industry experience. Supported by key individuals in various roles, each team member brings unique skills and qualifications that contribute to our success. Additionally, our Board of Directors, composed of seasoned industry professionals and experts, provides invaluable advice and strategic vision.</p>
    <p>We prioritize continuous learning and development, offering ongoing training to broaden our team's skills. With this structure, a qualified staff, and guidance from our Board of Directors, we are well-equipped to navigate India's business landscape and drive sustainable growth.</p>

<p><strong>Organizational Chart</strong></p>
<pre style="font-family: 'Courier New', Courier, monospace; font-size: 15px;">
              +--------------+
              |  ${data.founderName || "Full name"}   |
              | ${data.founderTitle || "Job position"} |
              +--------------+
                      |
   +------------------+--------------------+
   |                  |                    |
+--------------+   +--------------+   +--------------+
| ${data.department1 || "Department 1"} |   | ${data.department2 || "Department 2"} |   | ${data.department3 || "Department 3"} |
+--------------+   +--------------+   +--------------+
|  Full name   |   |  Full name   |   |  Full name   |
| Job position |   | Job position |   | Job position |
+--------------+   +--------------+   +--------------+
|  Full name   |   |  Full name   |   |  Full name   |
| Job position |   | Job position |   | Job position |
+--------------+   +--------------+   +--------------+


    <h2>6. MARKETING AND SALES STRATEGY.</h2>
    <p><span class="highlight">${data.marketingStrategy || "Our company implements a comprehensive marketing and sales approach to maximize customer reach and engagement."}</span> We have developed a pricing strategy based on in-depth market research and an understanding of customer expectations, to ensure a balance between value and profitability.</p>
    <p>To effectively distribute our products/services, we use a strong network of online platforms and physical outlets strategically located in key market areas. Our promotional activities encompass a mix of traditional and digital marketing channels, including targeted advertising, social media marketing, content creation and SEO techniques. Customer acquisition is a priority, and we use personalized marketing campaigns, loyalty programs and exceptional customer service to attract and retain customers. By analyzing data and customer feedback, we continually refine our approach to deliver an exceptional customer experience.</p>
    <p>In addition, we focus on customer relationship management through proactive communication, prompt responses and personalized interactions to ensure satisfaction and loyalty. Our customer-centric mindset and enlightened strategies keep us at the forefront of market trends, enabling us to respond to the evolving needs and preferences of our target audience.</p>

    <h2>7. OPERATIONS AND IMPLEMENTATION.</h2>
    <p>Our company prioritizes efficient, streamlined operations to ensure smooth production activities. We have optimized our production processes for maximum productivity and quality, under the supervision of a dedicated team of skilled professionals.</p>
    <p>Our close relationships with reputable suppliers enable us to obtain high-quality materials, guaranteeing a stable supply chain. Advanced inventory management systems enable us to monitor stock levels, minimize costs and fulfill customer orders on time. Rigorous quality control processes are implemented at every stage of production to maintain high standards. We prioritize compliance, obtaining the necessary permits and licenses and conducting regular assessments to ensure adherence to regulations.</p>
    <p>In addition, we are committed to sustainable development and corporate social responsibility, integrating sustainable practices into our operations, and supporting local communities.</p>
    
    <h2>8. FINANCIAL PROJECTIONS.</h2>
    <p>Our financial forecasts provide valuable information about our company's performance, including revenues, expenses, and overall financial health.</p>
    <p>The income statement helps us assess profitability by estimating revenues and deducting operating expenses to determine net income. The balance sheet provides an overview of our financial situation, detailing assets, liabilities, and shareholders' equity. The cash flow statement tracks cash inflows and outflows to ensure sufficient liquidity to meet obligations and future growth. Break-even analysis helps us to determine the sales volume needed to cover costs, and to make informed decisions on pricing, cost control and sales targets. Sales forecasts project future sales based on market analysis and historical data, facilitating resource allocation and performance evaluation.</p>
    <p>Our financial projections are guided by assumptions about market trends, competition, prices, costs, and economic changes. Regular revisions guarantee the accuracy and relevance of the data. Analysis of these statements and projections guides strategic decision-making, financial planning and resource allocation for growth and financial performance.</p>

    <p><strong>Gross revenue</strong></p>
     <table style="border: 1px solid #000; border-collapse: collapse; width: 100%;">
     <tr>
    <th style="border: 1px solid #000; padding: 8px; background: #f8fafd;">Product/Service</th>
    <th style="border: 1px solid #000; padding: 8px; background: #f8fafd;">Year 1</th>
    <th style="border: 1px solid #000; padding: 8px; background: #f8fafd;">Year 2</th>
    <th style="border: 1px solid #000; padding: 8px; background: #f8fafd;">Year 3</th>
    <th style="border: 1px solid #000; padding: 8px; background: #f8fafd;">Year 4</th>
    <th style="border: 1px solid #000; padding: 8px; background: #f8fafd;">Year 5</th>
    </tr>
  <tr>
    <td style="border: 1px solid #000; padding: 8px;">Unit price (₹)</td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.unitPriceY1 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.unitPriceY2 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.unitPriceY3 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.unitPriceY4 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.unitPriceY5 || "INR..."}</span></td>
  </tr>
  <tr>
    <td style="border: 1px solid #000; padding: 8px;">Unit sold (u)</td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.unitSoldY1 || "..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.unitSoldY2 || "..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.unitSoldY3 || "..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.unitSoldY4 || "..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.unitSoldY5 || "..."}</span></td>
  </tr>
  <tr>
    <td style="border: 1px solid #000; padding: 8px;">Total (₹)</td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.totalRevenueY1 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.totalRevenueY2 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.totalRevenueY3 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.totalRevenueY4 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.totalRevenueY5 || "INR..."}</span></td>
  </tr>
</table>  

<p><strong>Unit expenses</strong></p>
<table style="border: 1px solid #000; border-collapse: collapse; width: 100%;">
     <tr>
    <th style="border: 1px solid #000; padding: 8px; background: #f8fafd;">Products</th>
    <th style="border: 1px solid #000; padding: 8px; background: #f8fafd;">Year 1</th>
    <th style="border: 1px solid #000; padding: 8px; background: #f8fafd;">Year 2</th>
    <th style="border: 1px solid #000; padding: 8px; background: #f8fafd;">Year 3</th>
    <th style="border: 1px solid #000; padding: 8px; background: #f8fafd;">Year 4</th>
    <th style="border: 1px solid #000; padding: 8px; background: #f8fafd;">Year 5</th>
    </tr>
  <tr>
    <td style="border: 1px solid #000; padding: 8px;">Cost of Goods Sold (COGS)</td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.cogsY1 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.cogsY2 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.cogsY3 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.cogsY4 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.cogsY5 || "INR..."}</span></td>
  </tr>
  <tr>
    <td style="border: 1px solid #000; padding: 8px;">Part A (₹)</td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.partAY1 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.partAY2 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.partAY3 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.partAY4 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.partAY5 || "INR..."}</span></td>
  </tr>
  <tr>
    <td style="border: 1px solid #000; padding: 8px;">Part B (₹)</td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.partBY1 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.partBY2 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.partBY3 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.partBY4 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.partBY5 || "INR..."}</span></td>
  </tr>
  <tr>
    <td style="border: 1px solid #000; padding: 8px;">Total (₹)</td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.totalExpensesY1 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.totalExpensesY2 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.totalExpensesY3 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.totalExpensesY4 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.totalExpensesY5 || "INR..."}</span></td>
  </tr>
</table>  

<p><strong>Operations</strong></p>
<table style="border: 1px solid #000; border-collapse: collapse; width: 100%;">
     <tr>
    <th style="border: 1px solid #000; padding: 8px; background: #f8fafd;">Operations</th>
    <th style="border: 1px solid #000; padding: 8px; background: #f8fafd;">Year 1</th>
    <th style="border: 1px solid #000; padding: 8px; background: #f8fafd;">Year 2</th>
    <th style="border: 1px solid #000; padding: 8px; background: #f8fafd;">Year 3</th>
    <th style="border: 1px solid #000; padding: 8px; background: #f8fafd;">Year 4</th>
    <th style="border: 1px solid #000; padding: 8px; background: #f8fafd;">Year 5</th>
    </tr>
  <tr>
    <td style="border: 1px solid #000; padding: 8px;">Processing (₹)</td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.processingY1 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.processingY2 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.processingY3 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.processingY4 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.processingY5 || "INR..."}</span></td>
  </tr>
  <tr>
    <td style="border: 1px solid #000; padding: 8px;">Packaging (₹)</td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.packagingY1 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.packagingY2 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.packagingY3 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.packagingY4 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.packagingY5 || "INR..."}</span></td>
  </tr>
  <tr>
    <td style="border: 1px solid #000; padding: 8px;">Shipping (₹)</td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.shippingY1 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.shippingY2 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.shippingY3 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.shippingY4 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.shippingY5 || "INR..."}</span></td>
  </tr>
  <tr>
    <td style="border: 1px solid #000; padding: 8px;">Total (₹)</td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.totalOperationsY1 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.totalOperationsY2 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.totalOperationsY3 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.totalOperationsY4 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.totalOperationsY5 || "INR..."}</span></td>
  </tr>
</table>  

<p><strong>Marketing</strong></p>
<table style="border: 1px solid #000; border-collapse: collapse; width: 100%;">
     <tr>
    <th style="border: 1px solid #000; padding: 8px; background: #f8fafd;">Marketing</th>
    <th style="border: 1px solid #000; padding: 8px; background: #f8fafd;">Year 1</th>
    <th style="border: 1px solid #000; padding: 8px; background: #f8fafd;">Year 2</th>
    <th style="border: 1px solid #000; padding: 8px; background: #f8fafd;">Year 3</th>
    <th style="border: 1px solid #000; padding: 8px; background: #f8fafd;">Year 4</th>
    <th style="border: 1px solid #000; padding: 8px; background: #f8fafd;">Year 5</th>
    </tr>
  <tr>
    <td style="border: 1px solid #000; padding: 8px;">Social media (₹)</td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.socialMediaY1 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.socialMediaY2 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.socialMediaY3 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.socialMediaY4 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.socialMediaY5 || "INR..."}</span></td>
  </tr>
  <tr>
    <td style="border: 1px solid #000; padding: 8px;">Email ads (₹)</td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.emailAdsY1 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.emailAdsY2 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.emailAdsY3 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.emailAdsY4 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.emailAdsY5 || "INR..."}</span></td>
  </tr>
  <tr>
    <td style="border: 1px solid #000; padding: 8px;">Total (₹)</td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.totalMarketingY1 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.totalMarketingY2 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.totalMarketingY3 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.totalMarketingY4 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.totalMarketingY5 || "INR..."}</span></td>
  </tr>
</table>

<p><strong>Sales</strong></p>
<table style="border: 1px solid #000; border-collapse: collapse; width: 100%;">
     <tr>
    <th style="border: 1px solid #000; padding: 8px; background: #f8fafd;">Sales</th>
    <th style="border: 1px solid #000; padding: 8px; background: #f8fafd;">Year 1</th>
    <th style="border: 1px solid #000; padding: 8px; background: #f8fafd;">Year 2</th>
    <th style="border: 1px solid #000; padding: 8px; background: #f8fafd;">Year 3</th>
    <th style="border: 1px solid #000; padding: 8px; background: #f8fafd;">Year 4</th>
    <th style="border: 1px solid #000; padding: 8px; background: #f8fafd;">Year 5</th>
    </tr>
  <tr>
    <td style="border: 1px solid #000; padding: 8px;">Sales commission (₹)</td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.salesCommissionY1 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.salesCommissionY2 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.salesCommissionY3 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.salesCommissionY4 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.salesCommissionY5 || "INR..."}</span></td>
  </tr>
  <tr>
    <td style="border: 1px solid #000; padding: 8px;">Credit card fee (₹)</td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.creditCardFeeY1 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.creditCardFeeY2 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.creditCardFeeY3 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.creditCardFeeY4 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.creditCardFeeY5 || "INR..."}</span></td>
  </tr>
  <tr>
    <td style="border: 1px solid #000; padding: 8px;">Total (₹)</td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.totalSalesY1 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.totalSalesY2 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.totalSalesY3 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.totalSalesY4 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.totalSalesY5 || "INR..."}</span></td>
  </tr>
</table>  

<p><strong>Returns</strong></p>
<table style="border: 1px solid #000; border-collapse: collapse; width: 100%;">
    <tr>
        <th style="border: 1px solid #000; padding: 8px; background: #f8fafd;">Returns</th>
        <th style="border: 1px solid #000; padding: 8px; background: #f8fafd;">Year 1</th>
        <th style="border: 1px solid #000; padding: 8px; background: #f8fafd;">Year 2</th>
        <th style="border: 1px solid #000; padding: 8px; background: #f8fafd;">Year 3</th>
        <th style="border: 1px solid #000; padding: 8px; background: #f8fafd;">Year 4</th>
        <th style="border: 1px solid #000; padding: 8px; background: #f8fafd;">Year 5</th>
    </tr>
    <tr>
        <td style="border: 1px solid #000; padding: 8px;">Processing costs (₹)</td>
        <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.processingCostsY1 || "INR..."}</span></td>
        <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.processingCostsY2 || "INR..."}</span></td>
        <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.processingCostsY3 || "INR..."}</span></td>
        <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.processingCostsY4 || "INR..."}</span></td>
        <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.processingCostsY5 || "INR..."}</span></td>
    </tr>
    <tr>
        <td style="border: 1px solid #000; padding: 8px;">Revenue loss (₹)</td>
        <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.revenueLossY1 || "INR..."}</span></td>
        <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.revenueLossY2 || "INR..."}</span></td>
        <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.revenueLossY3 || "INR..."}</span></td>
        <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.revenueLossY4 || "INR..."}</span></td>
        <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.revenueLossY5 || "INR..."}</span></td>
    </tr>
    <tr>
        <td style="border: 1px solid #000; padding: 8px;">Total (₹)</td>
        <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.totalReturnsY1 || "INR..."}</span></td>
        <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.totalReturnsY2 || "INR..."}</span></td>
        <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.totalReturnsY3 || "INR..."}</span></td>
        <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.totalReturnsY4 || "INR..."}</span></td>
        <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.totalReturnsY5 || "INR..."}</span></td>
    </tr>
</table>

<p><strong>Operating income</strong></p>
<table style="border: 1px solid #000; border-collapse: collapse; width: 100%;">
     <tr>
    <th style="border: 1px solid #000; padding: 8px; background: #f8fafd;">Operating Income</th>
    <th style="border: 1px solid #000; padding: 8px; background: #f8fafd;">Year 1</th>
    <th style="border: 1px solid #000; padding: 8px; background: #f8fafd;">Year 2</th>
    <th style="border: 1px solid #000; padding: 8px; background: #f8fafd;">Year 3</th>
    <th style="border: 1px solid #000; padding: 8px; background: #f8fafd;">Year 4</th>
    <th style="border: 1px solid #000; padding: 8px; background: #f8fafd;">Year 5</th>
    </tr>
  <tr>
    <td style="border: 1px solid #000; padding: 8px;">Total (₹)</td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.operatingIncomeY1 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.operatingIncomeY2 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.operatingIncomeY3 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.operatingIncomeY4 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.operatingIncomeY5 || "INR..."}</span></td>
  </tr>
</table>  

<p><strong>Employee expenses</strong></p>
<table style="border: 1px solid #000; border-collapse: collapse; width: 100%;">
     <tr>
    <th style="border: 1px solid #000; padding: 8px; background: #f8fafd;">Employee expenses</th>
    <th style="border: 1px solid #000; padding: 8px; background: #f8fafd;">Year 1</th>
    <th style="border: 1px solid #000; padding: 8px; background: #f8fafd;">Year 2</th>
    <th style="border: 1px solid #000; padding: 8px; background: #f8fafd;">Year 3</th>
    <th style="border: 1px solid #000; padding: 8px; background: #f8fafd;">Year 4</th>
    <th style="border: 1px solid #000; padding: 8px; background: #f8fafd;">Year 5</th>
    </tr>
  <tr>
    <td style="border: 1px solid #000; padding: 8px;">Team (₹)</td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.teamY1 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.teamY2 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.teamY3 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.teamY4 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.teamY5 || "INR..."}</span></td>
  </tr>
  <tr>
    <td style="border: 1px solid #000; padding: 8px;">Salary (₹)</td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.salaryY1 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.salaryY2 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.salaryY3 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.salaryY4 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.salaryY5 || "INR..."}</span></td>
  </tr>
  <tr>
    <td style="border: 1px solid #000; padding: 8px;">Benefits (₹)</td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.benefitsY1 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.benefitsY2 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.benefitsY3 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.benefitsY4 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.benefitsY5 || "INR..."}</span></td>
  </tr>
  <tr>
    <td style="border: 1px solid #000; padding: 8px;">Payroll taxes (₹)</td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.payrollTaxesY1 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.payrollTaxesY2 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.payrollTaxesY3 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.payrollTaxesY4 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.payrollTaxesY5 || "INR..."}</span></td>
  </tr>
  <tr>
    <td style="border: 1px solid #000; padding: 8px;">Equipment (₹)</td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.equipmentY1 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.equipmentY2 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.equipmentY3 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.equipmentY4 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.equipmentY5 || "INR..."}</span></td>
  </tr>
  <tr>
    <td style="border: 1px solid #000; padding: 8px;">Total (₹)</td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.totalEmployeeExpensesY1 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.totalEmployeeExpensesY2 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.totalEmployeeExpensesY3 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.totalEmployeeExpensesY4 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.totalEmployeeExpensesY5 || "INR..."}</span></td>
  </tr>
</table>

<p><strong>Company overhead</strong></p>
<table style="border: 1px solid #000; border-collapse: collapse; width: 100%;">
     <tr>
    <th style="border: 1px solid #000; padding: 8px; background: #f8fafd;">Company overhead</th>
    <th style="border: 1px solid #000; padding: 8px; background: #f8fafd;">Year 1</th>
    <th style="border: 1px solid #000; padding: 8px; background: #f8fafd;">Year 2</th>
    <th style="border: 1px solid #000; padding: 8px; background: #f8fafd;">Year 3</th>
    <th style="border: 1px solid #000; padding: 8px; background: #f8fafd;">Year 4</th>
    <th style="border: 1px solid #000; padding: 8px; background: #f8fafd;">Year 5</th>
    </tr>
  <tr>
    <td style="border: 1px solid #000; padding: 8px;">Office expenses (₹)</td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.officeExpensesY1 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.officeExpensesY2 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.officeExpensesY3 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.officeExpensesY4 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.officeExpensesY5 || "INR..."}</span></td>
  </tr>
  <tr>
    <td style="border: 1px solid #000; padding: 8px;">Rent (₹)</td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.rentY1 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.rentY2 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.rentY3 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.rentY4 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.rentY5 || "INR..."}</span></td>
  </tr>
  <tr>
    <td style="border: 1px solid #000; padding: 8px;">Operations (₹)</td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.operationsY1 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.operationsY2 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.operationsY3 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.operationsY4 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.operationsY5 || "INR..."}</span></td>
  </tr>
  <tr>
    <td style="border: 1px solid #000; padding: 8px;">Utilities (₹)</td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.utilitiesY1 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.utilitiesY2 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.utilitiesY3 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.utilitiesY4 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.utilitiesY5 || "INR..."}</span></td>
  </tr>
  <tr>
    <td style="border: 1px solid #000; padding: 8px;">External expenses (₹)</td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.externalExpensesY1 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.externalExpensesY2 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.externalExpensesY3 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.externalExpensesY4 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.externalExpensesY5 || "INR..."}</span></td>
  </tr>
  <tr>
    <td style="border: 1px solid #000; padding: 8px;">PR (₹)</td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.prY1 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.prY2 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.prY3 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.prY4 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.prY5 || "INR..."}</span></td>
  </tr>
  <tr>
    <td style="border: 1px solid #000; padding: 8px;">Accounting (₹)</td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.accountingY1 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.accountingY2 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.accountingY3 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.accountingY4 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.accountingY5 || "INR..."}</span></td>
  </tr>
  <tr>
    <td style="border: 1px solid #000; padding: 8px;">Legal Search (₹)</td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.legalY1 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.legalY2 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.legalY3 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.legalY4 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.legalY5 || "INR..."}</span></td>
  </tr>
  <tr>
    <td style="border: 1px solid #000; padding: 8px;">Misc. ads (₹)</td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.miscAdsY1 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.miscAdsY2 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.miscAdsY3 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.miscAdsY4 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.miscAdsY5 || "INR..."}</span></td>
  </tr>
  <tr>
    <td style="border: 1px solid #000; padding: 8px;">Total (₹)</td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.totalOverheadY1 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.totalOverheadY2 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.totalOverheadY3 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.totalOverheadY4 || "INR..."}</span></td>
    <td style="border: 1px solid #000; padding: 8px;"><span class="highlight">${data.totalOverheadY5 || "INR..."}</span></td>
  </tr>
</table>

    
    

    <h2>9. FUNDING REQUEST OR INVESTMENT OPPORTUNITY</h2>
    <p><span class="highlight">${data.fundingRequirements || "To fuel growth and achieve strategic objectives, we are seeking funding to support expansion, operational improvements, and market opportunities."}</span></p>
    <p>Funds will be allocated strategically, primarily to research and development to foster innovation and competitiveness. A significant proportion will be devoted to marketing and sales, with the aim of raising brand awareness, customer acquisition and sales growth. Investments in operational infrastructure and technology will optimize production, supply chain management and overall efficiency.</p>
    <p>Investors can expect attractive returns as our business grows and gains market share, while we are committed to strong financial performance. We recognize the importance of providing investors with a clear exit strategy, such as an IPO, merger, or acquisition, in order to generate substantial returns.</p>
    <p>By outlining funding requirements, allocation of funds and potential returns, we aim to attract strategic partners and raise the capital necessary for long-term success and value creation.</p>

  <h2>10. RISK ANALYSIS AND MITIGATION</h2>
  <p>Proactively identifying and managing risks is crucial to the long-term viability of the company in India. </p>
  <p>Market volatility and competition demand continuous market research, competitive monitoring and strategic adaptability. Compliance with regulations requires rigorous measures and close collaboration with the authorities. Economic factors and financial stability are addressed through diversified customer bases, strong supplier relationships and prudent financial management. Talent acquisition and retention involves comprehensive remuneration, career development and a positive working environment. Technological advances are addressed through innovation, R&D, and technology adoption. Supply chain disruptions are mitigated through contingency plans and supplier relationships. Cybersecurity and data confidentiality are ensured through robust measures and employee training. </p>
  <p>By proactively addressing these risks and challenges, the company can seize opportunities and achieve sustainable growth in India's dynamic business landscape.</p>

  <h2>11. EXIT STRATEGY</h2>
  <p>The preferred exit strategy is to sell the company within the next five to seven years, considering market conditions, growth opportunities and financial performance. During this period, value-enhancing strategies will be implemented, focusing on broadening the customer base, improving operating efficiency and strengthening the competitive position.</p>
  <p>Experienced professionals, such as business brokers or investment bankers, will be engaged to help identify potential buyers, carry out valuations and negotiate favorable terms. Financial and legal documents will be well-organized and updated to streamline the due diligence process.</p>
  <p>An IPO may also be considered if market conditions and the company's growth trajectory match. This could provide access to additional capital and strengthen market presence. Another option is to pass the business on to a successor, whether a family member, trusted employee, or strategic partner, with succession planning being a key element of long-term strategy.</p>
  <p>The specific exit strategy will be based on market assessment, company performance, and the objectives and preferences of owners and investors. Through careful planning and flexibility, the company aims to maximize the value of the investment and achieve a successful exit in line with its overall objectives.</p>

    
  </div>
</div>`;
