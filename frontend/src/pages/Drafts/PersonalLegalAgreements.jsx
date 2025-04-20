import { useState, useEffect } from "react";
import jsPDF from "jspdf";
import { useNavigate } from "react-router-dom";

const agreementTypes = [
  "Will & Testament",
  "Power of Attorney",
  "Adoption Agreements",
  "Postnuptial Agreement",
];

const templates = {
    "Will & Testament": {
  fields: [
    "testatorName", "fatherName", "address", "age", "legalHeirs",
    "propertyDetails", "settlementDetails",
    "executor1Name", "executor1Relation", "executor1Address",
    "executor2Name", "executor2Relation", "executor2Address",
    "signedDate", "signedMonth", "signedYear",
    "witness1Name", "witness1Father", "witness1Address",
    "witness2Name", "witness2Father", "witness2Address"
  ],
  generateText: (data) => `Note: This is a model draft and may be customized according to individual requirement.

Will

This is my last will and testament. I, ${data.testatorName}, S/o ${data.fatherName}, R/o ${data.address}, aged about ${data.age} years, presently residing at the above address in sound disposing mind and without any pressure from any person, do hereby make this will as my last will and cancel all my previous wills and codicils to avoid any dispute or difference regarding my moveable and immovable properties after my death.

I am blessed with:
${data.legalHeirs}

All my above-mentioned children are married and well settled in their respective lives and they have looked after me very well.

I am the owner and in possession of:
${data.propertyDetails}

Life is uncertain and I do not know when the God calls me and I don’t know when I will leave this beautiful world. Therefore, during my lifetime I want to make settlement of all my movable and immovable properties so as to avoid any difference or dispute over sharing of my properties among my legal heirs.

Therefore, I am making the present will. So long as I am alive I will continue to be the owner of all my properties. However, after my death:
${data.settlementDetails}

I bequeath all my movable and immovable properties to my aforesaid legal heirs as per the arrangement made above.

I appoint Mr/Mrs. ${data.executor1Name}, ${data.executor1Relation}, R/o ${data.executor1Address}, and in case of his/her demise Mr/Mrs. ${data.executor2Name}, ${data.executor2Relation}, R/o ${data.executor2Address} as executor of this will.

All my previous will and testament are hereby cancelled.

Signed on this ${data.signedDate} day of ${data.signedMonth}, ${data.signedYear} in the presence of the following witnesses who have also signed in presence of each other and in my presence.

In Compliance of Section 32A of the Registration Act, 1908  
Name of the first party (Testator/Testatrix): ${data.testatorName}

[Left hand fingers impressions of Testator/Testatrix]  
Thumb  | Index | Middle | Ring | Little

[Right hand fingers impressions of Testator/Testatrix]  
Thumb  | Index | Middle | Ring | Little

Signature of Testator/Testatrix

Certified that the above will has been signed by the above-mentioned testator in our presence and we have also signed as attesting witnesses in presence of the Testator/Testatrix and in the presence of each other after the contents of will were explained to the testator in Hindi, he understood and agreed with the same on the date and time mentioned above.

Witnesses:

1. ${data.witness1Name}, S/o ${data.witness1Father}, R/o ${data.witness1Address}  
2. ${data.witness2Name}, S/o ${data.witness2Father}, R/o ${data.witness2Address}`
}
,
  
    "Power of Attorney": {
  fields: [
    "executantName", "executantParent", "executantAge", "executantAddress",
    "attorneyName", "attorneyParent", "attorneyAge", "attorneyAddress",
    "propertyNumber", "propertySize", "boundEast", "boundWest", "boundSouth", "boundNorth",
    "day", "month", "year", "witness1", "witness2"
  ],
  generateText: (data) => `GENERAL POWER OF ATTORNEY

KNOW ALL MEN BY THESE PRESENTS THAT I, ${data.executantName} S/o. / W/o. ${data.executantParent}, aged ${data.executantAge} about years, residing at ${data.executantAddress} do hereby nominate, appoint constitute and appoint Sri./Smt. ${data.attorneyName}, S/o. / W/o. ${data.attorneyParent}, aged about ${data.attorneyAge} years, residing at ${data.attorneyAddress} as my true and lawful power of attorney holder to do the following acts, deeds and things on my behalf and in my name in respect of the schedule property.

Whereas, I am the sole and absolute owner in and possession of the schedule property, which is self-acquired property.

Whereas, I am being unable to maintain, manage and look after the affairs of the said property, I hereby appoint the said attorney holder to the following acts, deeds and perform things on my behalf and in my name with entire powers thereon:

1. To appear before the authorities of BDA Corporation, Revenue office / Village Panchayath Office, or any other office pertaining to state or central Government or any other office and to represent in all respect.  
2. To make payment of taxes, rates, cesses, assessments, to get plan sanction to any competent authority levied by them from time to time on my behalf.  
3. To appoint advocate/s, pleader/s, prosecutor/s, or any other competent authority for all purpose.  
4. To file cases either civil or criminal in any competent court/s and to complete the proceedings.  
5. To apply and to obtain relevant document in respect of the schedule property on my behalf, and to put up any constructions in the schedule property.  
6. To sign all documents, papers, agreements, affidavits forms vakalaths, receipts, declarations, etc., and to derive all kind of benefits and profits in respect of the schedule property on my behalf.  
7. I have not given any power to this attorney holder to alienate property.  

I hereby agree to ratify and confirm all and what so ever that my said attorney shall lawfully do or cause to be done by virtue of this document.

SCHEDULE

All the piece and parcel of immovable property bearing No. ${data.propertyNumber}  
Measuring: ${data.propertySize}

Bounded by:  
On the East  : ${data.boundEast}  
On the West  : ${data.boundWest}  
On the South : ${data.boundSouth}  
On the North : ${data.boundNorth}

Stamp duty paid as per Article 41(f) of the Schedule to the Karnataka Stamp Act, 1957.

IN WITNESS WHEREOF I, the executant above named, have signed this general power of attorney on this ${data.day} day of ${data.month} ${data.year}.

WITNESS:  
1. ${data.witness1}  
2. ${data.witness2}

EXECUTANT: ${data.executantName}

[*Full details of the property number such as Khata number, street/road with reference to the local authority records and boundaries shall be furnished. If the scheduled-A property is a Flat / Apartment, details of the property on which the Flat / Apartment is constructed, flat number, floor number, name of the apartment etc., full details of the schedule-A property so as to identify shall be furnished.]`
}
,
    
    "Adoption Agreements": {
  fields: [
    "husbandName1", "husbandFather1", "husbandAge1", "husbandID1", "husbandMobile1",
    "wifeName1", "wifeHusband1", "wifeAge1", "wifeID1", "wifeMobile1", "address1",
    "husbandName2", "husbandFather2", "husbandAge2", "husbandID2", "husbandMobile2",
    "wifeName2", "wifeHusband2", "wifeAge2", "wifeID2", "wifeMobile2", "address2",
    "marriageDate", "childName", "childAge", "childDOB", "adoptionDate",
    "witness1", "witness2"
  ],
  generateText: (data) => `DEED OF ADOPTION

THIS DEED OF ADOPTION executed at _____ this the __ day of ____2017

BETWEEN

1. Mr. ${data.husbandName1}, son of Mr. ${data.husbandFather1}, aged about ${data.husbandAge1}, (ID NO: ${data.husbandID1}) (Mobile no ${data.husbandMobile1})

2. Mrs. ${data.wifeName1}, w/o of Mr. ${data.wifeHusband1}, aged about ${data.wifeAge1} years (ID NO: ${data.wifeID1}) (Mobile no ${data.wifeMobile1})

Both residing at ${data.address1}, hereinafter referred to as the PARTIES OF THE FIRST PART

AND

1. Mr. ${data.husbandName2}, son of Mr. ${data.husbandFather2}, aged about ${data.husbandAge2}, (ID NO: ${data.husbandID2}) (Mobile no ${data.husbandMobile2})

2. Mrs. ${data.wifeName2}, w/o of Mr. ${data.wifeHusband2}, aged about ${data.wifeAge2} years (ID NO: ${data.wifeID2}) (Mobile no ${data.wifeMobile2})

Both residing at ${data.address2}, hereinafter referred to as the PARTIES OF THE SECOND PART.

WHEREAS the Parties of the First Part were married on ${data.marriageDate} and have no children of their own since several years of marriage.

WHEREAS as per medical reports the Parties of the First Part have no hope of begetting any child of their own.

WHEREAS the Parties of the First Part were desirous of having a child of their own who would perpetuate the family name and safeguard the family assets and maintenance of the same.

WHEREAS the Parties of the Second Part have xxxx son and xxx daughters all unmarried aged about xxxx, xxx, xxx years, respectively.

WHEREAS in pursuance of their above said desire, the Parties of the First Part had approached the Parties of the Second Part so as to adopt the youngest daughter, ${data.childName}, of the second part, minor, Hindu, aged about ${data.childAge} years (Date of Birth being ${data.childDOB}), hereinafter called "The adopted Child", to which the Parties of the Second Part had also agreed.

WHEREAS the Parties of the First Part, as husband and wife took the said Child, ${data.childName}, in adoption as their daughter on ${data.adoptionDate} and the Parties of the Second Part, as husband and wife, gave the said Child, in adoption to the Parties of the First Part.

Both the parties are desirous of recording and registering the said Adoption to safeguard and protect the interests and rights of the said Child with regard to her Succession and to the personal laws applicable to the Hindus.

NOW THIS DEED OF ADOPTION WITNESSETH:

1. That in pursuance of the above said Act of Adoption, the Parties of the Second Part, as husband and wife, gave their daughter, ${data.childName}, in adoption to the Parties of the First Part and the Parties of the First Part, as husband and wife, have taken the said Child, ${data.childName}, in adoption as their daughter on ${data.adoptionDate}, as per the religious rites and customs.

2. Both the Parties do hereby declare and confirm that the Parties of the First Part have duly adopted the said Child, ${data.childName}, as their daughter.

3. The said Child, ${data.childName}, has and shall have all the legal rights of a daughter in the family of the Parties of the First Part from the date of adoption, that is, ${data.adoptionDate}.

4. That from the date of adoption, the said Child, ${data.childName}, has relinquished all her rights and claims against her natural parents, i.e., the Parties of the Second Part.

5. The Parties of the First Part shall be responsible for the maintenance and education of the said Child, and they agree to bring up the said Child as their daughter according to their status in life.

6. The Parties of the Second Part shall have no claim and responsibility hereinafter as the custody of or any other right against the said Child.

7. Both the parties hereby confirm that the adoption of the said Child, ${data.childName}, done by them is in accordance with the Provisions of Section 5 and 6 of Chapter II of The Hindu Adoptions and Maintenance Act, 1956 and that the said adoption is valid and complete in all respects.

8. Both the parties hereby confirm that the adoption of the said Child, ${data.childName}, is irrevocable.

IN WITNESS WHEREOF the Parties of the First Part and the Parties of the Second Part hereto have signed this Deed of Adoption on the day, month and year first above mentioned.

WITNESSES:
1. ${data.witness1}
2. ${data.witness2}`
}
,
  
    "Postnuptial Agreement": {
  "fields": [
    "husbandName", "husbandFather", "husbandAge", "husbandID", "husbandMobile",
    "wifeName", "wifeFather", "wifeAge", "wifeID", "wifeMobile", "address",
    "marriageDate", "propertyScheduleA", "propertyScheduleB", "debtsScheduleA", "debtsScheduleB"
  ],
  "generateText": (data) => `MEDIATED POSTNUPTIAL AGREEMENT

This Mediated Postnuptial Agreement (hereafter the "Agreement") sets out the terms and conditions upon which ${data.husbandName} (hereafter "John") and ${data.wifeName} (hereafter "Jane") shall manage their financial and legal affairs on the event of their separation or divorce.

RECITALS:  
A. ${data.husbandName} and ${data.wifeName} have been married since ${data.marriageDate} (the "Marriage").  
B. ${data.husbandName} and ${data.wifeName} are currently living together.  
C. ${data.husbandName} and ${data.wifeName} are each desirous of formalizing their respective joint and several financial and legal rights, obligations, liabilities and property rights in the event of their legal separation or divorce.  
D. ${data.husbandName} and ${data.wifeName} have made a complete and accurate disclosure of their intended separation of assets and liabilities, Schedules A and B, which are attached hereto and by reference incorporated herein.  
E. Now the parties wish to set forth in this Agreement their respective rights in and to all property either owned at the date of their marriage and in and to all property that may be acquired by either or both of them after their marriage, in the event of a divorce or dissolution of the marriage, or on the death of one of the parties.  

IT IS AGREED:

1. DEFINITIONS. In this Agreement:  
1.1 "Income" shall mean any income howsoever arising due to the commercial activity, work, employment, endeavors, skills, passive holding of assets, dividends, inheritance, pensions, interest, rent, inheritance, investments, property, or arising from any other source.  
1.2 Unless it is evident from the context and having regards to the generality of this Agreement that a provision intends to mean otherwise: words denoted in the singular only shall include the plural and vice versa; words denoted in any gender shall include all genders; and, terms denoting people or persons shall include both natural and legal persons (such as corporations) and vice versa.

2. EXCLUSIVE JURISDICTION OF THIS AGREEMENT. In the event of their legal separation or divorce, ${data.husbandName} and ${data.wifeName} will submit to the exclusive jurisdiction of this Agreement and hereby irrevocably waive the right to make any claims arising out of their marriage against the estate of the other except under this Agreement ________ [including / not including, however,] the right for one party to seek spousal maintenance from the other under applicable statutes.

3. DIVISION OF PROPERTY. In the event of legal separation or divorce:  
3.1 ${data.husbandName} shall transfer to ${data.wifeName} all property and income listed in Schedule A or any property or income ${data.wifeName} may own or acquire separately in the future, including all appreciation.  
3.2 ${data.wifeName} shall transfer to ${data.husbandName} all property and income listed in Schedule B or any property or income ${data.husbandName} may own or acquire separately in the future, including all appreciation.

4. DIVISION OF DEBTS AND OBLIGATIONS. In the event of legal separation or divorce:  
4.1 ${data.wifeName} shall assume full responsibility for those debts listed in Schedule A and agrees to indemnify ${data.husbandName} against any and all actions brought in respect of those debts.

INTENTION TO FORM BINDING AGREEMENT:  
5.1 The parties warrant that: (A) they have thoroughly read and understood every provision in this Agreement; (B) they are aware that this Agreement is a binding legal document and that they have each been given adequate time to consider the consequences of signing it; (C) they are entering into this Agreement entirely of their own free-will and volition and expressly declare that they are acting entirely free from any kind of influence, interference, pressure, duress or undue influence from any third-party whatsoever; and, (D) this Agreement is fair and accurately reflects their intention generally and with regard to past and future assets and liabilities.

End of Sample`
},

  };

export default function RealEstateForm() {
  const [type, setType] = useState("Will & Testament");
  const [formData, setFormData] = useState({});
  const [generatedText, setGeneratedText] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (showSuccessMessage) {
      const timeout = setTimeout(() => setShowSuccessMessage(false), 5000);
      return () => clearTimeout(timeout);
    }
  }, [showSuccessMessage]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = templates[type].generateText(formData);
    setGeneratedText(text);
    setSubmitted(true);
    setShowSuccessMessage(true);
    window.scrollTo({ top: 0, behavior: "smooth" }); 
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
    window.alert("Document downloaded successfully!");
    navigate("/draft-doc");

  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex flex-col items-center">

     
      {showSuccessMessage && (
        <div className="w-full max-w-3xl mb-4 relative bg-green-500 text-white p-4 rounded-lg shadow-md text-center animate-fadeIn transition-all">
          <span>Agreement draft has been successfully generated!</span>
          <button
            onClick={() => setShowSuccessMessage(false)}
            className="absolute top-2 right-3 text-white text-xl font-bold hover:text-red-200 transition"
            aria-label="Close"
          >
            &times;
          </button>
        </div>
      )}

      <div className="w-full max-w-3xl mb-6 bg-white/50 backdrop-blur-xl shadow-xl rounded-2xl p-4 animate-fadeIn transition-all">
        <select
          value={type}
          onChange={(e) => {
            setType(e.target.value);
            setFormData({});
            setSubmitted(false);
            setShowSuccessMessage(false);
            window.scrollTo({ top: 0, behavior: "smooth" }); 
          }}
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm text-lg font-medium focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-400 transition duration-300 bg-white"
        >
          {agreementTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-3xl bg-white/60 backdrop-blur-md p-8 rounded-3xl shadow-2xl space-y-6 animate-fadeIn transition-all"
        >
          <h2 className="text-3xl font-bold text-purple-700 text-center mb-4 drop-shadow">
            {type}
          </h2>
          {templates[type].fields.map((field) => (
            <div key={field} className="flex flex-col">
              <label className="text-gray-700 font-medium capitalize text-sm mb-2">
                {field.replace(/([A-Z])/g, " $1")}
              </label>
              <input
                type="text"
                name={field}
                value={formData[field] || ""}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm transition duration-200"
                required
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-semibold p-3 rounded-xl shadow-md hover:bg-purple-700 hover:scale-[1.03] transition-transform duration-300"
          >
            Generate Agreement
          </button>
        </form>
      ) : (
        <div className="w-full max-w-3xl bg-white/60 backdrop-blur-md p-6 rounded-3xl shadow-2xl space-y-4 animate-fadeIn transition-all">
          <h2 className="text-2xl font-bold text-purple-700 text-center mb-2">
            Preview & Download
          </h2>
          <textarea
            value={generatedText}
            rows="25"
            onChange={(e) => setGeneratedText(e.target.value)}
            className="w-full border border-gray-300 p-4 rounded-lg shadow-inner font-mono text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 transition"
          />
          <button
            onClick={handleDownload}
            className="w-full bg-green-600 text-white font-semibold p-3 rounded-xl shadow-md hover:bg-green-700 hover:scale-[1.03] transition-transform duration-300"
          >
            Download PDF
          </button>
        </div>
      )}
    </div>
  );
}