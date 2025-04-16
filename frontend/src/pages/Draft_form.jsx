import { motion } from "framer-motion";
import { useRef, useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Draft_form = () => {
  const [formData, setFormData] = useState({
    tenantName: "",
    landlordName: "",
    address: "",
    period: "",
    startDate: "",
    endDate: "",
    amount: "",
  });
  const [language, setLanguage] = useState("english");

  const pdfRef = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const element = pdfRef.current;

    // Wait for the canvas to be properly generated
    html2canvas(element, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      // Create a PDF document
      const pdf = new jsPDF("p", "mm", "a4");

      // Get the image properties
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      // Add the image to the PDF
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      
      // Save the PDF
      pdf.save("Rent_Agreement.pdf");
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 p-4">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8 space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-purple-700">
          Rent Agreement Form
        </h2>

        <div className="flex justify-end">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="mb-4 p-2 rounded border border-gray-400"
          >
            <option value="english">English</option>
            <option value="hindi">हिंदी</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Tenant Name"
            name="tenantName"
            value={formData.tenantName}
            onChange={handleChange}
          />
          <Input
            label="Landlord Name"
            name="landlordName"
            value={formData.landlordName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-gray-600 mb-1 block">
            Address
          </label>
          <textarea
            name="address"
            rows="4"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Start Date"
            name="startDate"
            type="date"
            value={formData.startDate}
            onChange={handleChange}
          />
          <Input
            label="End Date"
            name="endDate"
            type="date"
            value={formData.endDate}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Period (in years)"
            name="period"
            type="number"
            value={formData.period}
            onChange={handleChange}
          />
          <Input
            label="Rent Amount (₹)"
            name="amount"
            type="number"
            value={formData.amount}
            onChange={handleChange}
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          type="submit"
          className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl shadow-md transition-all duration-300"
        >
          Generate & Download PDF
        </motion.button>
      </motion.form>

      {/* Hidden PDF content */}
      <div
        className="fixed left-[-9999px] top-0 p-10 w-[800px]"
        ref={pdfRef}
      >
        <div className="bg-white p-8 rounded-xl shadow-md text-black">
          <h1 className="text-2xl font-bold mb-4 text-center underline">
            {language === "english" ? "Rent Agreement" : "किराया समझौता"}
          </h1>
          {language === "english" ? (
            <>
              <p>
                This Rent Agreement is made and executed on this day between{" "}
                <b>{formData.landlordName}</b> ("Landlord") and{" "}
                <b>{formData.tenantName}</b> ("Tenant").
              </p>
              <p className="mt-4">
                The premises located at <b>{formData.address}</b> shall be
                rented for a term of <b>{formData.period} year(s)</b> starting
                from <b>{formData.startDate}</b> to <b>{formData.endDate}</b>.
              </p>
              <p className="mt-4">
                The monthly rent shall be ₹<b>{formData.amount}</b>, payable in
                advance on or before the 5th day of each month.
              </p>
              <p className="mt-4">
                This agreement is governed by the Rent Control Act and both
                parties agree to abide by the terms stated herein.
              </p>
            </>
          ) : (
            <>
              <p>
                यह किराया समझौता <b>{formData.landlordName}</b> (मालिक) और{" "}
                <b>{formData.tenantName}</b> (किरायेदार) के बीच किया जा रहा है।
              </p>
              <p className="mt-4">
                चुनी गई जाया संपत्ति <b>{formData.address}</b> पर{" "}
                <b>{formData.startDate}</b> से <b>{formData.endDate}</b> तक{" "}
                <b>{formData.period} वर्ष</b> के लिए किराए जाएगी।
              </p>
              <p className="mt-4">
                मासिक किराया राशि ₹<b>{formData.amount}</b> होगा, जो प्रत्येक माह
                की 5 तारीख के पूर्व दी जाएगी।
              </p>
              <p className="mt-4">
                यह समझौता किराया नियंत्रणण अधिनियम के अनुसार शासित है और दोनों
                पक्षों द्वारा यहीं की गई शर्तों का पालन करने का वचन करेंगे।
              </p>
            </>
          )}

          <div className="mt-10 flex justify-between">
            <div>
              <p></p>
              <p>{language === "english" ? "Landlord" : "मालिक"}</p>
            </div>
            <div>
              <p></p>
              <p>{language === "english" ? "Tenant" : "किरायेदार"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function Input({ label, name, value, onChange, type = "text" }) {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-semibold text-gray-600 mb-1">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
      />
    </div>
  );
}

export default Draft_form;