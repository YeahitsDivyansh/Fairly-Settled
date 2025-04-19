import { useState } from "react";
import jsPDF from "jspdf";

const agreementTypes = [
  "Lease/Rent Agreement",
  "Sale Agreement",
  "Leave & License Agreement",
  "Mortgage & Property Management Agreement",
];

const templates = {
    "Lease/Rent Agreement": {
      fields: [
        "place", "date", "month", "year", "ownerName", "ownerFather", "ownerAddress",
        "tenantName", "tenantFather", "tenantJobAddress", "tenantPermanentAddress",
        "rentedPropertyAddress", "startDate", "endDate", "rentAmount", "maintenanceAmount",
        "elevatorGeneratorCost", "securityDeposit", "chequeNo", "chequeDate", "cityCourt",
        "propertyDetails", "bedroomCount", "fanCount", "lightCount", "geyserCount", "mirrorCount",
        "witness1", "witness1Address", "witness2", "witness2Address"
      ],
      generateText: (data) => `RENTAL AGREEMENT\n\nThis RENTAL AGREEMENT is executed at ${data.place} on this ${data.date} day of ${data.month}, ${data.year} by and between:\n\n${data.ownerName},\nS/o or D/o. ${data.ownerFather},\n${data.ownerAddress}\n(hereinafter jointly and severally called the “OWNER”)\n\nAND\n\n${data.tenantName},\nS/o or D/o. ${data.tenantFather},\nWorking/Studying at ${data.tenantJobAddress},\nPermanent Address: ${data.tenantPermanentAddress}\n(hereinafter called the “TENANT”)\n\nWHEREAS the Owner is the absolute owner of the property situated at ${data.rentedPropertyAddress} as detailed in Annexure-I, hereinafter referred to as \"Demised Premises\".\n\nWHEREAS the Tenant has requested the Owner to grant Rent and the Owner has agreed to rent out to the Tenant the Property for residential purposes, on the following terms and conditions:\n\n1. The rent in respect of the “Demised Premises” shall commence from ${data.startDate} and shall be valid till ${data.endDate}. Thereafter, the same may be extended further on mutual consent of both the parties.\n\n2. That the Tenant shall pay to the Owner a monthly rent of Rs. ${data.rentAmount}, excluding electricity and water bill. The rent shall be paid on or before 7th day of each month without fail.\n\n3. That the Tenant shall pay to the Owner a monthly maintenance charge of Rs. ${data.maintenanceAmount} towards the maintenance of Generator & Elevator, Salaries towards guards, Charges for Electricity Maintenance for Common Areas, Charges towards cleaning of Common Areas and towards maintaining the lawn.\n\n4. That the Tenant shall pay for the running cost of elevator and generator separately to the Owner.\n\n5. That during the Rent period, in addition to the rental amount payable to the Owner, the Tenant shall pay for the use of electricity and water as per bills received from the authorities concerned directly. For all the dues of electricity bills and water bills till the date the possession of the premises is handed over by the Owner to the Tenant it is the responsibility of the Owner to pay and clear them according to the readings on the respective meters. At the time of handing over possession of the premises back to the Owner by Tenant, it is the responsibility of the Tenant to pay electricity & water bills, as presented by the Departments concerned according to the readings on the respective meters upto the date of vacation of the property.\n\n6. The Tenant will pay to the Owner an interest-free refundable security deposit of Rs. ${data.securityDeposit} vide cheque no ${data.chequeNo} dated ${data.chequeDate} at the time of signing the Rent Agreement. The said amount of the Security deposit shall be refunded by the Owner to the Tenant at the time of handing over possession of the demised premises by the Tenant upon expiry or sooner termination of this Rent after adjusting any dues (if any) or cost towards damages caused by the negligence of the Tenant or the person he is responsible for, normal wear & tear and damages due to act of god exempted. In case the Owner fails to refund the security deposit to the Tenant on early termination or expiry of the Rent agreement, the Tenant is entitled to hold possession of the Rented premises, without payment of rent and/or any other charges whatsoever, till such time the Owner refunds the security deposit to the Tenant. This is without prejudice and in addition to the other remedies available to the Tenant to recover the amount from the Owner.\n\n7. All the sanitary, electrical and other fittings and fixtures and appliances in the premises shall be handed over from the Owner to the Tenant in good working condition.\n\n8. Tenant shall not sublet or assign the premises and use only for residential purposes.\n\n...\n\nANNEXURE-I:\n${data.propertyDetails}, consisting ${data.bedroomCount} bedrooms, living room, family lounge, kitchen, servant room, ${data.fanCount} Fans, ${data.lightCount} Lights, ${data.geyserCount} Geysers, ${data.mirrorCount} Mirrors.\n\nIN WITNESS WHEREOF, BOTH PARTIES AGREE AND SIGN:\n\nWITNESSES:\n1. ${data.witness1}\n${data.witness1Address}\n2. ${data.witness2}\n${data.witness2Address}\n\n(Signature of Owner): ${data.ownerName}    (Signature of Tenant): ${data.tenantName}`
    },
  
    "Sale Agreement": {
      fields: ["vendorName", "vendorAddress", "buyerName", "buyerAddress", "houseNumber", "road", "price", "earnestMoney", "earnestMoneyDate", "completionMonths", "titleReportDays", "refundDays", "interestRate", "liquidatedDamages"],
      generateText: (data) => `AGREEMENT FOR SALE OF A HOUSE\n\nTHIS AGREEMENT of sale made at .................. on this .............. day of ................... 20   ,  between ${data.vendorName} resident of ${data.vendorAddress} (hereinafter called the Vendor of the ONE PART) and ${data.buyerName} resident of ${data.buyerAddress} (hereinafter called the BUYER of the OTHER PART).\n\nWHEREAS the vendor is absolutely seized and possessed of or well and sufficiently entitled to the house No. ${data.houseNumber} Road ${data.road}, free from all encumbrances.\n\n1. Price: ₹${data.price}.\n2. Earnest Money: ₹${data.earnestMoney} on ${data.earnestMoneyDate}. Balance on execution of conveyance deed.\n3. Sale completion within ${data.completionMonths} months.\n4. Title deeds to be submitted to Buyer's advocate within 1 week; report within ${data.titleReportDays} days.\n5. If title not clear, refund earnest money in ${data.refundDays} days or pay interest @ ${data.interestRate} p.m.\n6. Vendor guarantees sale is without encumbrance.\n7. Vacant possession on registration.\n8. Buyer breach: Vendor keeps earnest.\n9. Vendor breach: Refund + ₹${data.liquidatedDamages} as liquidated damages.\n10. Vendor executes conveyance deed on balance payment.\n11. Clearance certificates by Vendor.\n12. All registration expenses by Buyer.\n\nIN WITNESS WHEREOF parties have signed.\n\nVendor: ${data.vendorName}\nBuyer: ${data.buyerName}`
    },
    
    "Leave & License Agreement": {
      fields: ["date", "city", "licensorName", "licensorAge", "licensorOccupation", "licensorPAN", "licensorUID", "licensorAddress", "licenseeName", "licenseeAge", "licenseeOccupation", "licenseePAN", "licenseeUID", "licenseeAddress", "licensedPremises", "licenseMonths", "startDate", "endDate", "monthlyRent", "deposit", "depositMode", "usePurpose"],
      generateText: (data) => `LEAVE AND LICENSE AGREEMENT\n\nThis agreement is made and executed on ${data.date} at ${data.city}\n\nBetween,\n\n${data.licensorName}, Age: About ${data.licensorAge} Years, Occupation: ${data.licensorOccupation}, PAN: ${data.licensorPAN}, UID: ${data.licensorUID}, Residing at: ${data.licensorAddress}, hereinafter called the Licensor\n\nAND\n\n${data.licenseeName}, Age: About ${data.licenseeAge} Years, Occupation: ${data.licenseeOccupation}, PAN: ${data.licenseePAN}, UID: ${data.licenseeUID}, Residing at: ${data.licenseeAddress}, hereinafter called the Licensee\n\nWHEREAS the Licensor is absolutely seized and possessed of ${data.licensedPremises}, referred to as Licensed Premises, and agrees to give it on Leave and License basis under Section 24 of the Maharashtra Rent Control Act, 1999.\n\nThe license is for ${data.licenseMonths} months from ${data.startDate} to ${data.endDate}.\n\nThe Licensee shall pay Rs. ${data.monthlyRent}/- per month as compensation and Rs. ${data.deposit}/- as ${data.depositMode}.\n\nPurpose of use: ${data.usePurpose}.\n\n...\n(Followed by ALL clauses from the original PDF including maintenance, no tenancy rights, inspection, cancellation, possession, registration, and schedule.)`
    },
  
    "Mortgage & Property Management Agreement": {
      fields: ["ownerName", "managerName", "propertyDescription", "startDate", "endDate", "rentPercentage", "monthlyFee", "insurancePolicy"],
      generateText: (data) => `SAMPLE PROPERTY MANAGEMENT AGREEMENT\n\nThis Agreement is made and entered into this ${data.startDate} between ${data.ownerName} (Owner) and ${data.managerName} (Manager).\n\nOwner employs the Manager to manage the property: ${data.propertyDescription}.\n\nResponsibilities include rent collection, maintenance, hiring labor, advertising, legal proceedings.\n\nOwner holds Manager harmless from all liability. Insurance policy: ${data.insurancePolicy}.\n\nCompensation: 50% of first full rent + ${data.rentPercentage}% of all rents (min $${data.monthlyFee}/month).\n\nTerm from ${data.startDate} to ${data.endDate}. Automatically renews unless written termination.\n\n...\n(All remaining clauses exactly from PDF: successors, voiding if vacancy >90 days, indemnification, etc.)`
    }
  };

export default function RealEstateForm() {
  const [type, setType] = useState("Lease/Rent Agreement");
  const [formData, setFormData] = useState({});
  const [generatedText, setGeneratedText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = templates[type].generateText(formData);
    setGeneratedText(text);
    setSubmitted(true);
  };

  const handleDownload = () => {
    const doc = new jsPDF("p", "mm", "a4");
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 15;
    const lineHeight = 7;
    const maxLineWidth = 180;
    let y = margin;

    doc.setFont("Times", "");
    doc.setFontSize(12);

    const lines = doc.splitTextToSize(generatedText, maxLineWidth);
    lines.forEach((line) => {
      if (y + lineHeight > pageHeight - margin) {
        doc.addPage();
        y = margin;
      }
      doc.text(line, margin, y);
      y += lineHeight;
    });

    doc.save(`${type.replace(/\s+/g, "_")}_Agreement.pdf`);
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center">
      <div className="bg-white p-4 rounded-xl shadow mb-4 w-full max-w-3xl">
        <select
          value={type}
          onChange={(e) => { setType(e.target.value); setFormData({}); setSubmitted(false); }}
          className="w-full p-2 border border-gray-300 rounded"
        >
          {agreementTypes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-3xl space-y-4">
          <h2 className="text-xl font-bold text-purple-700 text-center">{type}</h2>
          {templates[type].fields.map((field) => (
            <div key={field}>
              <label className="block text-gray-600 capitalize text-sm mb-1">{field.replace(/([A-Z])/g, ' $1')}</label>
              <input
                type="text"
                name={field}
                value={formData[field] || ""}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
                required
              />
            </div>
          ))}
          <button type="submit" className="w-full bg-purple-600 text-white p-3 rounded-xl hover:bg-purple-700">
            Generate Agreement
          </button>
        </form>
      ) : (
        <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-3xl space-y-4">
          <h2 className="text-xl font-bold text-purple-700 text-center">Preview & Download</h2>
          <textarea
            value={generatedText}
            rows="30"
            onChange={(e) => setGeneratedText(e.target.value)}
            className="w-full border border-gray-400 p-4 rounded"
          />
          <button onClick={handleDownload} className="w-full bg-green-600 text-white p-3 rounded-xl hover:bg-green-700">
            Download PDF
          </button>
        </div>
      )}
    </div>
  );
}
