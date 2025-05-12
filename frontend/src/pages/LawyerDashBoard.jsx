import React, { useState, useEffect } from "react";
import { useUserAuth } from "@/context/UserAuthContext";
import { useNavigate } from "react-router-dom";
import { db, storage } from "../firebase.js";
import {
  getDocs,
  collection,
  updateDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { motion } from "framer-motion";

const LawyerProfile = () => {
  const { loading, userData, logOut } = useUserAuth();
  const [activeTab, setActiveTab] = useState("personal");
  const [lawyerData, setLawyerData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  // Practice areas available for selection
  const practiceAreas = [
    "Civil Law",
    "Criminal Law",
    "Family Law (Divorce, Maintenance, Child Custody)",
    "Corporate / Company Law",
    "Contract Law",
    "Intellectual Property Rights (IPR): Copyright, Trademark, Patent, Design",
    "Property / Real Estate Law",
    "Consumer Protection Law",
    "Environmental Law",
    "Cyber Law / IT Law",
    "Arbitration & Mediation / ADR",
    "Insurance Law",
    "Public Interest Litigation (PIL)",
    "Education Law",
    "Service Matters (Government Employees)",
    "Election Law",
    "Immigration Law",
    "Securities & Investment Law (SEBI/Stock Market)",
    "Bankruptcy & Insolvency Law (IBC, NCLT)",
    "Health / Medical Law",
    "Mining & Energy Law",
    "Media & Entertainment Law",
    "International Law / Cross-Border Disputes",
    "Motor Accident Claims (MACT)",
    "Rent Control / Tenancy Law",
    "Legal Notices & Documentation Only",
  ];

  useEffect(() => {
    const fetchLawyerData = async () => {
      if (!userData) return;

      try {
        const docRef = doc(db, "lawyers", userData.id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setLawyerData(docSnap.data());
          setFormData(docSnap.data());
        }
      } catch (error) {
        console.error("Error fetching lawyer data:", error);
      }
    };

    fetchLawyerData();
  }, [userData]);

  const handleLogout = async () => {
    await logOut();
    navigate("/lawyer-signin");
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        practiceAreas: {
          ...prev.practiceAreas,
          [name]: checked,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleFileUpload = async (e, fieldName) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const storageRef = ref(
        storage,
        `lawyer_documents/${userData.id}/${fieldName}_${file.name}`
      );
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);

      setFormData((prev) => ({
        ...prev,
        [fieldName]: downloadURL,
      }));
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleSubmit = async () => {
    try {
      const docRef = doc(db, "lawyers", userData.id);
      await updateDoc(docRef, formData);
      setLawyerData(formData);
      setIsEditing(false);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.p
          className="text-gray-500 text-lg"
          animate={{ scale: 1.2 }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}
        >
          Loading...
        </motion.p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 relative overflow-hidden">
      {/* Sidebar with Motion */}
      <motion.aside
        className="w-64 bg-gradient-to-b from-blue-600 to-blue-700 text-white p-6 shadow-lg"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="mb-8">
          <motion.h2
            className="text-2xl font-extrabold text-shadow"
            whileHover={{ scale: 1.1, color: "#FFF" }}
          >
            {lawyerData?.fullName || userData?.username || "Lawyer"}
          </motion.h2>
          <p className="text-sm">{userData?.phone}</p>
          {lawyerData?.barCouncilEnrolment && (
            <p className="text-sm mt-1">{lawyerData.barCouncilEnrolment}</p>
          )}
        </div>
        <nav className="space-y-4">
          <motion.button
            onClick={() => setActiveTab("personal")}
            className={`block w-full text-left px-4 py-2 rounded-lg transition-all duration-200 ease-in-out ${
              activeTab === "profile"
                ? "font-bold border-l-4 border-blue-600 bg-transparent"
                : "hover:bg-indigo-100"
            }`}
            whileHover={{ scale: 1.05, backgroundColor: "#4c6b94" }}
          >
            Personal Information
          </motion.button>
          <motion.button
            onClick={() => setActiveTab("identity")}
            className={`block w-full text-left px-4 py-2 rounded-lg transition-all duration-200 ease-in-out ${
              activeTab === "identity" ? "bg-indigo-700" : "hover:bg-indigo-600"
            }`}
            whileHover={{ scale: 1.05, backgroundColor: "#4c6b94" }}
          >
            Identity & Credentials
          </motion.button>
          <motion.button
            onClick={() => setActiveTab("practice")}
            className={`block w-full text-left px-4 py-2 rounded-lg transition-all duration-200 ease-in-out ${
              activeTab === "practice" ? "bg-indigo-700" : "hover:bg-indigo-600"
            }`}
            whileHover={{ scale: 1.05, backgroundColor: "#4c6b94" }}
          >
            Practice Details
          </motion.button>
          <motion.button
            onClick={() => setActiveTab("services")}
            className={`block w-full text-left px-4 py-2 rounded-lg transition-all duration-200 ease-in-out ${
              activeTab === "services" ? "bg-indigo-700" : "hover:bg-indigo-600"
            }`}
            whileHover={{ scale: 1.05, backgroundColor: "#4c6b94" }}
          >
            Service Offerings
          </motion.button>

          <motion.button
            onClick={() => setActiveTab("finalProfile")}
            className={`block w-full text-left px-4 py-2 rounded-lg transition-all duration-200 ease-in-out ${
              activeTab === "finalProfile"
                ? "bg-indigo-700"
                : "hover:bg-indigo-600"
            }`}
            whileHover={{ scale: 1.05, backgroundColor: "#4c6b94" }}
          >
            Final Profile
          </motion.button>

          <motion.button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 bg-red-600 hover:bg-red-700 rounded text-white mt-12"
            whileHover={{ scale: 1.05 }}
          >
            Logout
          </motion.button>
        </nav>
      </motion.aside>

      {/* Content Area with Smooth Transition */}
      <main className="flex-1 p-8 bg-white shadow-xl rounded-tl-3xl rounded-br-3xl transition-all duration-300 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-blue-800">Lawyer Dashboard</h1>
          {!isEditing ? (
            <motion.button
              onClick={() => setIsEditing(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              whileHover={{ scale: 1.05 }}
            >
              Edit Profile
            </motion.button>
          ) : (
            <div className="space-x-3">
              <motion.button
                onClick={handleSubmit}
                className="bg-green-600 text-white px-4 py-2 rounded-lg"
                whileHover={{ scale: 1.05 }}
              >
                Save Changes
              </motion.button>
              <motion.button
                onClick={() => {
                  setFormData(lawyerData);
                  setIsEditing(false);
                }}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg"
                whileHover={{ scale: 1.05 }}
              >
                Cancel
              </motion.button>
            </div>
          )}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg p-6 shadow-md"
        >
          {/* Personal Information Section */}
          {activeTab === "personal" && (
            <div>
              <h2 className="text-2xl font-bold mb-6 text-blue-700 border-b pb-2">
                SECTION A: Personal Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">
                    Full Name (as per Bar Council)
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName || ""}
                      onChange={handleChange}
                      className="w-full border rounded p-2"
                    />
                  ) : (
                    <p className="text-gray-800">
                      {lawyerData.fullName || "Not provided"}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Gender</label>
                  {isEditing ? (
                    <select
                      name="gender"
                      value={formData.gender || ""}
                      onChange={handleChange}
                      className="w-full border rounded p-2"
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  ) : (
                    <p className="text-gray-800">
                      {lawyerData.gender || "Not provided"}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Date of Birth
                  </label>
                  {isEditing ? (
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth || ""}
                      onChange={handleChange}
                      className="w-full border rounded p-2"
                    />
                  ) : (
                    <p className="text-gray-800">
                      {lawyerData.dateOfBirth || "Not provided"}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Photo Upload (Passport size, professional)
                  </label>
                  {isEditing ? (
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload(e, "profilePhoto")}
                      className="w-full"
                    />
                  ) : lawyerData.profilePhoto ? (
                    <img
                      src={lawyerData.profilePhoto}
                      alt="Profile"
                      className="h-20 w-20 object-cover rounded"
                    />
                  ) : (
                    <p className="text-gray-800">No photo uploaded</p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Mobile Number
                  </label>
                  {isEditing ? (
                    <input
                      type="tel"
                      name="mobileNumber"
                      value={formData.mobileNumber || ""}
                      onChange={handleChange}
                      className="w-full border rounded p-2"
                    />
                  ) : (
                    <p className="text-gray-800">
                      {lawyerData.mobileNumber || "Not provided"}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Email ID</label>
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={formData.email || ""}
                      onChange={handleChange}
                      className="w-full border rounded p-2"
                    />
                  ) : (
                    <p className="text-gray-800">
                      {lawyerData.email || "Not provided"}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Alternate Contact Number (optional)
                  </label>
                  {isEditing ? (
                    <input
                      type="tel"
                      name="alternateContact"
                      value={formData.alternateContact || ""}
                      onChange={handleChange}
                      className="w-full border rounded p-2"
                    />
                  ) : (
                    <p className="text-gray-800">
                      {lawyerData.alternateContact || "Not provided"}
                    </p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-gray-700 mb-2">
                    Residential Address
                  </label>
                  {isEditing ? (
                    <textarea
                      name="residentialAddress"
                      value={formData.residentialAddress || ""}
                      onChange={handleChange}
                      className="w-full border rounded p-2"
                      rows="3"
                    ></textarea>
                  ) : (
                    <p className="text-gray-800">
                      {lawyerData.residentialAddress || "Not provided"}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">City</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="city"
                      value={formData.city || ""}
                      onChange={handleChange}
                      className="w-full border rounded p-2"
                    />
                  ) : (
                    <p className="text-gray-800">
                      {lawyerData.city || "Not provided"}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">State</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="state"
                      value={formData.state || ""}
                      onChange={handleChange}
                      className="w-full border rounded p-2"
                    />
                  ) : (
                    <p className="text-gray-800">
                      {lawyerData.state || "Not provided"}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">PIN Code</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="pinCode"
                      value={formData.pinCode || ""}
                      onChange={handleChange}
                      className="w-full border rounded p-2"
                    />
                  ) : (
                    <p className="text-gray-800">
                      {lawyerData.pinCode || "Not provided"}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Languages Spoken
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="languagesSpoken"
                      value={formData.languagesSpoken || ""}
                      onChange={handleChange}
                      className="w-full border rounded p-2"
                      placeholder="e.g., English, Hindi, Marathi"
                    />
                  ) : (
                    <p className="text-gray-800">
                      {lawyerData.languagesSpoken || "Not provided"}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Identity & Credentials Section */}
          {activeTab === "identity" && (
            <div>
              <h2 className="text-2xl font-bold mb-6 text-blue-700 border-b pb-2">
                SECTION B: Identity Verification
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-gray-700 mb-2">
                    Aadhaar Number
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="aadhaarNumber"
                      value={formData.aadhaarNumber || ""}
                      onChange={handleChange}
                      className="w-full border rounded p-2"
                    />
                  ) : (
                    <p className="text-gray-800">
                      {lawyerData.aadhaarNumber || "Not provided"}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">PAN Number</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="panNumber"
                      value={formData.panNumber || ""}
                      onChange={handleChange}
                      className="w-full border rounded p-2"
                    />
                  ) : (
                    <p className="text-gray-800">
                      {lawyerData.panNumber || "Not provided"}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Upload Aadhaar Card (PDF/JPG)
                  </label>
                  {isEditing ? (
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => handleFileUpload(e, "aadhaarCard")}
                      className="w-full"
                    />
                  ) : (
                    <p className="text-gray-800">
                      {lawyerData.aadhaarCard
                        ? "Document uploaded"
                        : "No document uploaded"}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Upload PAN Card (PDF/JPG)
                  </label>
                  {isEditing ? (
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => handleFileUpload(e, "panCard")}
                      className="w-full"
                    />
                  ) : (
                    <p className="text-gray-800">
                      {lawyerData.panCard
                        ? "Document uploaded"
                        : "No document uploaded"}
                    </p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-gray-700 mb-2">
                    Upload Address Proof (if not Aadhaar)
                  </label>
                  {isEditing ? (
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => handleFileUpload(e, "addressProof")}
                      className="w-full"
                    />
                  ) : (
                    <p className="text-gray-800">
                      {lawyerData.addressProof
                        ? "Document uploaded"
                        : "No document uploaded"}
                    </p>
                  )}
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-6 text-blue-700 border-b pb-2">
                SECTION C: Academic Qualifications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-gray-700 mb-2">
                    Law Degree (LLB) University Name
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="llbUniversity"
                      value={formData.llbUniversity || ""}
                      onChange={handleChange}
                      className="w-full border rounded p-2"
                    />
                  ) : (
                    <p className="text-gray-800">
                      {lawyerData.llbUniversity || "Not provided"}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Year of Graduation
                  </label>
                  {isEditing ? (
                    <input
                      type="number"
                      name="graduationYear"
                      value={formData.graduationYear || ""}
                      onChange={handleChange}
                      className="w-full border rounded p-2"
                    />
                  ) : (
                    <p className="text-gray-800">
                      {lawyerData.graduationYear || "Not provided"}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Upload LLB Certificate
                  </label>
                  {isEditing ? (
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => handleFileUpload(e, "llbCertificate")}
                      className="w-full"
                    />
                  ) : (
                    <p className="text-gray-800">
                      {lawyerData.llbCertificate
                        ? "Document uploaded"
                        : "No document uploaded"}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Postgraduate Qualification (if any)
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="pgQualification"
                      value={formData.pgQualification || ""}
                      onChange={handleChange}
                      className="w-full border rounded p-2"
                    />
                  ) : (
                    <p className="text-gray-800">
                      {lawyerData.pgQualification || "Not provided"}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Upload Additional Certificate(s)
                  </label>
                  {isEditing ? (
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) =>
                        handleFileUpload(e, "additionalCertificates")
                      }
                      className="w-full"
                    />
                  ) : (
                    <p className="text-gray-800">
                      {lawyerData.additionalCertificates
                        ? "Document uploaded"
                        : "No document uploaded"}
                    </p>
                  )}
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-6 text-blue-700 border-b pb-2">
                SECTION D: Bar Council Registration
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">
                    Bar Council Name
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="barCouncilName"
                      value={formData.barCouncilName || ""}
                      onChange={handleChange}
                      className="w-full border rounded p-2"
                      placeholder="e.g., Delhi, Maharashtra"
                    />
                  ) : (
                    <p className="text-gray-800">
                      {lawyerData.barCouncilName || "Not provided"}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Enrolment Number
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="barCouncilEnrolment"
                      value={formData.barCouncilEnrolment || ""}
                      onChange={handleChange}
                      className="w-full border rounded p-2"
                      placeholder="e.g., D/1234/2022"
                    />
                  ) : (
                    <p className="text-gray-800">
                      {lawyerData.barCouncilEnrolment || "Not provided"}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Date of Enrolment
                  </label>
                  {isEditing ? (
                    <input
                      type="date"
                      name="enrolmentDate"
                      value={formData.enrolmentDate || ""}
                      onChange={handleChange}
                      className="w-full border rounded p-2"
                    />
                  ) : (
                    <p className="text-gray-800">
                      {lawyerData.enrolmentDate || "Not provided"}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Upload Certificate of Enrolment
                  </label>
                  {isEditing ? (
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) =>
                        handleFileUpload(e, "enrolmentCertificate")
                      }
                      className="w-full"
                    />
                  ) : (
                    <p className="text-gray-800">
                      {lawyerData.enrolmentCertificate
                        ? "Document uploaded"
                        : "No document uploaded"}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    AIBE Passed?
                  </label>
                  {isEditing ? (
                    <select
                      name="aibePassed"
                      value={formData.aibePassed || ""}
                      onChange={handleChange}
                      className="w-full border rounded p-2"
                    >
                      <option value="">Select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  ) : (
                    <p className="text-gray-800">
                      {lawyerData.aibePassed || "Not provided"}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    AIBE Certificate Number (if applicable)
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="aibeCertificateNumber"
                      value={formData.aibeCertificateNumber || ""}
                      onChange={handleChange}
                      className="w-full border rounded p-2"
                    />
                  ) : (
                    <p className="text-gray-800">
                      {lawyerData.aibeCertificateNumber || "Not provided"}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Upload AIBE Certificate (if available)
                  </label>
                  {isEditing ? (
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => handleFileUpload(e, "aibeCertificate")}
                      className="w-full"
                    />
                  ) : (
                    <p className="text-gray-800">
                      {lawyerData.aibeCertificate
                        ? "Document uploaded"
                        : "No document uploaded"}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Practice Details Section */}
          {activeTab === "practice" && (
            <div>
              <h2 className="text-2xl font-bold mb-6 text-blue-700 border-b pb-2">
                SECTION E: Practice Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-gray-700 mb-2">
                    Total Years of Practice
                  </label>
                  {isEditing ? (
                    <input
                      type="number"
                      name="yearsOfPractice"
                      value={formData.yearsOfPractice || ""}
                      onChange={handleChange}
                      className="w-full border rounded p-2"
                    />
                  ) : (
                    <p className="text-gray-800">
                      {lawyerData.yearsOfPractice || "Not provided"}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Primary Courts Practiced In
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="primaryCourts"
                      value={formData.primaryCourts || ""}
                      onChange={handleChange}
                      className="w-full border rounded p-2"
                      placeholder="High Court, District Court, Tribunals, Supreme Court"
                    />
                  ) : (
                    <p className="text-gray-800">
                      {lawyerData.primaryCourts || "Not provided"}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Bar Association Membership (if any)
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="barAssociationMembership"
                      value={formData.barAssociationMembership || ""}
                      onChange={handleChange}
                      className="w-full border rounded p-2"
                    />
                  ) : (
                    <p className="text-gray-800">
                      {lawyerData.barAssociationMembership || "Not provided"}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Upload Court ID / Chamber Proof (if applicable)
                  </label>
                  {isEditing ? (
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => handleFileUpload(e, "courtIdProof")}
                      className="w-full"
                    />
                  ) : (
                    <p className="text-gray-800">
                      {lawyerData.courtIdProof
                        ? "Document uploaded"
                        : "No document uploaded"}
                    </p>
                  )}
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-gray-700 mb-4 text-lg font-semibold">
                  Practice Areas (Multiple selection)
                </label>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2">
                  {practiceAreas.map((area, index) => (
                    <div key={index} className="flex items-center">
                      {isEditing ? (
                        <input
                          type="checkbox"
                          id={`area-${index}`}
                          name={area}
                          checked={formData.practiceAreas?.[area] || false}
                          onChange={handleChange}
                          className="mr-2"
                        />
                      ) : (
                        <span
                          className={`w-5 h-5 inline-block mr-2 border rounded ${
                            lawyerData.practiceAreas?.[area]
                              ? "bg-blue-500"
                              : "bg-white"
                          }`}
                        ></span>
                      )}
                      <label htmlFor={`area-${index}`}>{area}</label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">
                    Languages Used in Practice
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="practiceLanguages"
                      value={formData.practiceLanguages || ""}
                      onChange={handleChange}
                      className="w-full border rounded p-2"
                    />
                  ) : (
                    <p className="text-gray-800">
                      {lawyerData.practiceLanguages || "Not provided"}
                    </p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-gray-700 mb-2">
                    Work Description / Bio (200-500 words)
                  </label>
                  {isEditing ? (
                    <textarea
                      name="workDescription"
                      value={formData.workDescription || ""}
                      onChange={handleChange}
                      className="w-full border rounded p-2"
                      rows="6"
                      maxLength="500"
                    ></textarea>
                  ) : (
                    <p className="text-gray-800">
                      {lawyerData.workDescription || "Not provided"}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Upload Resume / Portfolio (optional)
                  </label>
                  {isEditing ? (
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => handleFileUpload(e, "resume")}
                      className="w-full"
                    />
                  ) : (
                    <p className="text-gray-800">
                      {lawyerData.resume
                        ? "Document uploaded"
                        : "No document uploaded"}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Service Offerings Section */}
          {activeTab === "services" && (
            <div>
              <h2 className="text-2xl font-bold mb-6 text-blue-700 border-b pb-2">
                SECTION F: Service Preferences
              </h2>

              <div className="mb-8">
                <label className="block text-gray-700 mb-4 text-lg font-semibold">
                  Types of Services Offered
                </label>

                <div className="space-y-6">
                  {/* 1. Legal Consultation */}
                  <div>
                    <h3 className="font-medium mb-2">
                      1. Legal Consultation / Advice
                    </h3>
                    <div className="ml-4 flex flex-wrap gap-4">
                      {isEditing ? (
                        <>
                          <label className="inline-flex items-center">
                            <input
                              type="checkbox"
                              name="servicesInPerson"
                              checked={formData.servicesInPerson || false}
                              onChange={(e) =>
                                setFormData((prev) => ({
                                  ...prev,
                                  servicesInPerson: e.target.checked,
                                }))
                              }
                              className="mr-2"
                            />
                            In-person
                          </label>
                          <label className="inline-flex items-center">
                            <input
                              type="checkbox"
                              name="servicesPhone"
                              checked={formData.servicesPhone || false}
                              onChange={(e) =>
                                setFormData((prev) => ({
                                  ...prev,
                                  servicesPhone: e.target.checked,
                                }))
                              }
                              className="mr-2"
                            />
                            Phone
                          </label>
                          <label className="inline-flex items-center">
                            <input
                              type="checkbox"
                              name="servicesVideo"
                              checked={formData.servicesVideo || false}
                              onChange={(e) =>
                                setFormData((prev) => ({
                                  ...prev,
                                  servicesVideo: e.target.checked,
                                }))
                              }
                              className="mr-2"
                            />
                            Video
                          </label>
                        </>
                      ) : (
                        <>
                          <p
                            className={`mr-4 ${
                              lawyerData.servicesInPerson
                                ? "text-blue-600 font-medium"
                                : "text-gray-400"
                            }`}
                          >
                            In-person
                          </p>
                          <p
                            className={`mr-4 ${
                              lawyerData.servicesPhone
                                ? "text-blue-600 font-medium"
                                : "text-gray-400"
                            }`}
                          >
                            Phone
                          </p>
                          <p
                            className={`mr-4 ${
                              lawyerData.servicesVideo
                                ? "text-blue-600 font-medium"
                                : "text-gray-400"
                            }`}
                          >
                            Video
                          </p>
                        </>
                      )}
                    </div>
                  </div>

                  {/* 2. Legal Drafting */}
                  <div>
                    <h3 className="font-medium mb-2">2. Legal Drafting</h3>
                    <div className="ml-4 space-y-3">
                      <p className="font-medium">Contracts & Agreements</p>
                      <div className="ml-4 grid grid-cols-1 md:grid-cols-2 gap-2">
                        {[
                          "Contract Drafting",
                          "Contract Review",
                          "Wills & Trusts",
                          "Legal Notices",
                          "Deeds (Sale, Lease, Gift)",
                        ].map((item, idx) => (
                          <div key={idx}>
                            {isEditing ? (
                              <label className="inline-flex items-center">
                                <input
                                  type="checkbox"
                                  name={`service_${item
                                    .replace(/\s+/g, "_")
                                    .toLowerCase()}`}
                                  checked={
                                    formData[
                                      `service_${item
                                        .replace(/\s+/g, "_")
                                        .toLowerCase()}`
                                    ] || false
                                  }
                                  onChange={(e) =>
                                    setFormData((prev) => ({
                                      ...prev,
                                      [`service_${item
                                        .replace(/\s+/g, "_")
                                        .toLowerCase()}`]: e.target.checked,
                                    }))
                                  }
                                  className="mr-2"
                                />
                                {item}
                              </label>
                            ) : (
                              <p
                                className={
                                  lawyerData[
                                    `service_${item
                                      .replace(/\s+/g, "_")
                                      .toLowerCase()}`
                                  ]
                                    ? "text-blue-600 font-medium"
                                    : "text-gray-400"
                                }
                              >
                                {item}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* 3-24. All Other Service Types */}
                  {[
                    "3. Document Review & Vetting",
                    "4. Court Representation",
                    "5. Bail / Anticipatory Bail Applications",
                    "6. Legal Research / Opinions",
                    "7. Arbitration / Mediation / ADR Services",
                    "8. Company Incorporation & Compliance",
                    "9. Filing & Follow-Up of Legal Cases",
                    "10. Consumer Complaints",
                    "11. Intellectual Property Registration (Trademark, Copyright, Patent)",
                    "12. Tax Filing / Tax Disputes",
                    "13. Property Title Search & Due Diligence",
                    "14. Succession / Probate & Will Registration",
                    "15. RTI Filing",
                    "16. Service Matters (Disciplinary, Promotions, etc.)",
                    "17. Employment Dispute Resolution",
                    "18. Online Dispute Resolution (ODR)",
                    "19. Contract Management",
                    "20. Startup Legal Advisory",
                    "21. Privacy & Data Protection Compliance",
                    "22. Cybercrime & IT-related Legal Help",
                    "23. Human Rights / PIL / NGO Support",
                    "24. Other (Please Specify)",
                  ].map((service, idx) => (
                    <div key={idx}>
                      <h3 className="font-medium mb-2">{service}</h3>
                      {service === "4. Court Representation" ? (
                        <div className="ml-4 grid grid-cols-1 md:grid-cols-2 gap-2">
                          {[
                            "Trial Court / District Court",
                            "High Court",
                            "Supreme Court",
                            "Tribunals / Forums (NCLT, DRT, CAT, etc.)",
                          ].map((court, courtIdx) => (
                            <div key={courtIdx}>
                              {isEditing ? (
                                <label className="inline-flex items-center">
                                  <input
                                    type="checkbox"
                                    name={`court_${court
                                      .replace(/\s+/g, "_")
                                      .toLowerCase()}`}
                                    checked={
                                      formData[
                                        `court_${court
                                          .replace(/\s+/g, "_")
                                          .toLowerCase()}`
                                      ] || false
                                    }
                                    onChange={(e) =>
                                      setFormData((prev) => ({
                                        ...prev,
                                        [`court_${court
                                          .replace(/\s+/g, "_")
                                          .toLowerCase()}`]: e.target.checked,
                                      }))
                                    }
                                    className="mr-2"
                                  />
                                  {court}
                                </label>
                              ) : (
                                <p
                                  className={
                                    lawyerData[
                                      `court_${court
                                        .replace(/\s+/g, "_")
                                        .toLowerCase()}`
                                    ]
                                      ? "text-blue-600 font-medium"
                                      : "text-gray-400"
                                  }
                                >
                                  {court}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      ) : service === "24. Other (Please Specify)" ? (
                        <div className="ml-4">
                          {isEditing ? (
                            <input
                              type="text"
                              name="otherServiceSpecify"
                              value={formData.otherServiceSpecify || ""}
                              onChange={handleChange}
                              placeholder="Please specify other services"
                              className="w-full border rounded p-2"
                            />
                          ) : (
                            <p className="text-gray-800">
                              {lawyerData.otherServiceSpecify ||
                                "None specified"}
                            </p>
                          )}
                        </div>
                      ) : (
                        <div className="ml-4">
                          {isEditing ? (
                            <label className="inline-flex items-center">
                              <input
                                type="checkbox"
                                name={`service_${service
                                  .replace(/\d+\.\s+/g, "")
                                  .replace(/\s+/g, "_")
                                  .toLowerCase()}`}
                                checked={
                                  formData[
                                    `service_${service
                                      .replace(/\d+\.\s+/g, "")
                                      .replace(/\s+/g, "_")
                                      .toLowerCase()}`
                                  ] || false
                                }
                                onChange={(e) =>
                                  setFormData((prev) => ({
                                    ...prev,
                                    [`service_${service
                                      .replace(/\d+\.\s+/g, "")
                                      .replace(/\s+/g, "_")
                                      .toLowerCase()}`]: e.target.checked,
                                  }))
                                }
                                className="mr-2"
                              />
                              Available
                            </label>
                          ) : (
                            <p
                              className={
                                lawyerData[
                                  `service_${service
                                    .replace(/\d+\.\s+/g, "")
                                    .replace(/\s+/g, "_")
                                    .toLowerCase()}`
                                ]
                                  ? "text-blue-600 font-medium"
                                  : "text-gray-400"
                              }
                            >
                              {lawyerData[
                                `service_${service
                                  .replace(/\d+\.\s+/g, "")
                                  .replace(/\s+/g, "_")
                                  .toLowerCase()}`
                              ]
                                ? "Available"
                                : "Not available"}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Preferred Communication Mode */}
                  <div>
                    <h3 className="font-medium mb-2">
                      Preferred Communication Mode
                    </h3>
                    <div className="ml-4 flex flex-wrap gap-4">
                      {isEditing ? (
                        <>
                          {[
                            "Phone",
                            "Video Call",
                            "In-Person",
                            "Messaging",
                          ].map((mode, idx) => (
                            <label
                              key={idx}
                              className="inline-flex items-center"
                            >
                              <input
                                type="checkbox"
                                name={`comm_${mode
                                  .replace(/\s+/g, "_")
                                  .toLowerCase()}`}
                                checked={
                                  formData[
                                    `comm_${mode
                                      .replace(/\s+/g, "_")
                                      .toLowerCase()}`
                                  ] || false
                                }
                                onChange={(e) =>
                                  setFormData((prev) => ({
                                    ...prev,
                                    [`comm_${mode
                                      .replace(/\s+/g, "_")
                                      .toLowerCase()}`]: e.target.checked,
                                  }))
                                }
                                className="mr-2"
                              />
                              {mode}
                            </label>
                          ))}
                        </>
                      ) : (
                        <>
                          {[
                            "Phone",
                            "Video Call",
                            "In-Person",
                            "Messaging",
                          ].map((mode, idx) => (
                            <p
                              key={idx}
                              className={`mr-4 ${
                                lawyerData[
                                  `comm_${mode
                                    .replace(/\s+/g, "_")
                                    .toLowerCase()}`
                                ]
                                  ? "text-blue-600 font-medium"
                                  : "text-gray-400"
                              }`}
                            >
                              {mode}
                            </p>
                          ))}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION G: Legal Compliance */}
              <h2 className="text-2xl font-bold mb-6 text-blue-700 border-b pb-2 mt-12">
                SECTION G: Legal Compliance
              </h2>
              <div className="space-y-6 mb-8">
                <div>
                  <label className="block text-gray-700 mb-2">
                    Do you hold a valid Professional Indemnity Insurance?
                  </label>
                  {isEditing ? (
                    <select
                      name="hasIndemnityInsurance"
                      value={formData.hasIndemnityInsurance || ""}
                      onChange={handleChange}
                      className="w-full md:w-1/3 border rounded p-2"
                    >
                      <option value="">Select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  ) : (
                    <p className="text-gray-800">
                      {lawyerData.hasIndemnityInsurance || "Not provided"}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Upload Policy Document (optional)
                  </label>
                  {isEditing ? (
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => handleFileUpload(e, "policyDocument")}
                      className="w-full"
                    />
                  ) : (
                    <p className="text-gray-800">
                      {lawyerData.policyDocument
                        ? "Document uploaded"
                        : "No document uploaded"}
                    </p>
                  )}
                </div>
              </div>

              {/* SECTION H: Platform Consent & Declarations */}
              <h2 className="text-2xl font-bold mb-6 text-blue-700 border-b pb-2 mt-12">
                SECTION H: Platform Consent & Declarations
              </h2>
              <div className="space-y-4">
                {isEditing ? (
                  <>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="confirmTruth"
                        name="confirmTruth"
                        checked={formData.confirmTruth || false}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            confirmTruth: e.target.checked,
                          }))
                        }
                        className="mr-2"
                      />
                      <label htmlFor="confirmTruth" className="text-gray-700">
                        I confirm all information is true and accurate
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="agreeEthics"
                        name="agreeEthics"
                        checked={formData.agreeEthics || false}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            agreeEthics: e.target.checked,
                          }))
                        }
                        className="mr-2"
                      />
                      <label htmlFor="agreeEthics" className="text-gray-700">
                        I agree to abide by professional ethics and platform
                        policies
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="consentVisible"
                        name="consentVisible"
                        checked={formData.consentVisible || false}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            consentVisible: e.target.checked,
                          }))
                        }
                        className="mr-2"
                      />
                      <label htmlFor="consentVisible" className="text-gray-700">
                        I consent to my profile being visible on the platform
                      </label>
                    </div>

                    <div className="mt-6">
                      <label className="block text-gray-700 mb-2">
                        Digital Signature / E-sign
                      </label>
                      <div className="border border-gray-300 p-4 rounded-lg min-h-[100px]">
                        {/* This would normally be a canvas or a signature component */}
                        <p className="text-gray-500">
                          Signature area - would implement a signature pad
                          component here
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <p
                      className={`text-gray-800 ${
                        lawyerData.confirmTruth
                          ? "text-blue-600 font-medium"
                          : "text-gray-400"
                      }`}
                    >
                      ✓ I confirm all information is true and accurate
                    </p>

                    <p
                      className={`text-gray-800 ${
                        lawyerData.agreeEthics
                          ? "text-blue-600 font-medium"
                          : "text-gray-400"
                      }`}
                    >
                      ✓ I agree to abide by professional ethics and platform
                      policies
                    </p>

                    <p
                      className={`text-gray-800 ${
                        lawyerData.consentVisible
                          ? "text-blue-600 font-medium"
                          : "text-gray-400"
                      }`}
                    >
                      ✓ I consent to my profile being visible on the platform
                    </p>

                    {lawyerData.digitalSignature && (
                      <div className="mt-4">
                        <p className="text-gray-700 font-medium">
                          Digital Signature:
                        </p>
                        <img
                          src={lawyerData.digitalSignature}
                          alt="Digital Signature"
                          className="max-h-20 mt-2 border rounded p-2"
                        />
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          )}

          {/* Final Profile section here: */}
          {activeTab === "finalProfile" && (
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-blue-700">
                Lawyer Profile Preview
              </h2>
              <div className="space-y-8">
                {/* Section A: Personal Info */}
                <section>
                  <h3 className="text-xl font-semibold mb-2 text-blue-600">
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <strong>Full Name:</strong> {lawyerData.fullName}
                    </div>
                    <div>
                      <strong>Gender:</strong> {lawyerData.gender}
                    </div>
                    <div>
                      <strong>Date of Birth:</strong> {lawyerData.dateOfBirth}
                    </div>
                    <div>
                      <strong>Mobile Number:</strong> {lawyerData.mobileNumber}
                    </div>
                    <div>
                      <strong>Email:</strong> {lawyerData.email}
                    </div>
                    <div>
                      <strong>Alternate Contact:</strong>{" "}
                      {lawyerData.alternateContact}
                    </div>
                    <div>
                      <strong>City:</strong> {lawyerData.city}
                    </div>
                    <div>
                      <strong>State:</strong> {lawyerData.state}
                    </div>
                    <div>
                      <strong>PIN Code:</strong> {lawyerData.pinCode}
                    </div>
                    <div>
                      <strong>Languages Spoken:</strong>{" "}
                      {lawyerData.languagesSpoken}
                    </div>
                    <div className="md:col-span-2">
                      <strong>Residential Address:</strong>{" "}
                      {lawyerData.residentialAddress}
                    </div>
                    <div>
                      <strong>Photo:</strong>
                      <br />
                      {lawyerData.profilePhoto && (
                        <img
                          src={lawyerData.profilePhoto}
                          alt="Profile"
                          className="h-20 w-20 object-cover rounded"
                        />
                      )}
                    </div>
                  </div>
                </section>

                {/* Section B: Identity */}
                <section>
                  <h3 className="text-xl font-semibold mb-2 text-blue-600">
                    Identity & Credentials
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <strong>Aadhaar Number:</strong>{" "}
                      {lawyerData.aadhaarNumber}
                    </div>
                    <div>
                      <strong>PAN Number:</strong> {lawyerData.panNumber}
                    </div>
                    <div>
                      <strong>Aadhaar Card:</strong>{" "}
                      {lawyerData.aadhaarCard && (
                        <a
                          href={lawyerData.aadhaarCard}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 underline"
                        >
                          View
                        </a>
                      )}
                    </div>
                    <div>
                      <strong>PAN Card:</strong>{" "}
                      {lawyerData.panCard && (
                        <a
                          href={lawyerData.panCard}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 underline"
                        >
                          View
                        </a>
                      )}
                    </div>
                    <div>
                      <strong>Address Proof:</strong>{" "}
                      {lawyerData.addressProof && (
                        <a
                          href={lawyerData.addressProof}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 underline"
                        >
                          View
                        </a>
                      )}
                    </div>
                  </div>
                </section>

                {/* Section C: Academic */}
                <section>
                  <h3 className="text-xl font-semibold mb-2 text-blue-600">
                    Academic Qualifications
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <strong>LLB University:</strong>{" "}
                      {lawyerData.llbUniversity}
                    </div>
                    <div>
                      <strong>Graduation Year:</strong>{" "}
                      {lawyerData.graduationYear}
                    </div>
                    <div>
                      <strong>LLB Certificate:</strong>{" "}
                      {lawyerData.llbCertificate && (
                        <a
                          href={lawyerData.llbCertificate}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 underline"
                        >
                          View
                        </a>
                      )}
                    </div>
                    <div>
                      <strong>PG Qualification:</strong>{" "}
                      {lawyerData.pgQualification}
                    </div>
                    <div>
                      <strong>Additional Certificates:</strong>{" "}
                      {lawyerData.additionalCertificates && (
                        <a
                          href={lawyerData.additionalCertificates}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 underline"
                        >
                          View
                        </a>
                      )}
                    </div>
                  </div>
                </section>

                {/* Section D: Bar Council */}
                <section>
                  <h3 className="text-xl font-semibold mb-2 text-blue-600">
                    Bar Council Registration
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <strong>Bar Council Name:</strong>{" "}
                      {lawyerData.barCouncilName}
                    </div>
                    <div>
                      <strong>Enrolment Number:</strong>{" "}
                      {lawyerData.barCouncilEnrolment}
                    </div>
                    <div>
                      <strong>Date of Enrolment:</strong>{" "}
                      {lawyerData.enrolmentDate}
                    </div>
                    <div>
                      <strong>Certificate of Enrolment:</strong>{" "}
                      {lawyerData.enrolmentCertificate && (
                        <a
                          href={lawyerData.enrolmentCertificate}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 underline"
                        >
                          View
                        </a>
                      )}
                    </div>
                    <div>
                      <strong>AIBE Passed:</strong> {lawyerData.aibePassed}
                    </div>
                    <div>
                      <strong>AIBE Certificate Number:</strong>{" "}
                      {lawyerData.aibeCertificateNumber}
                    </div>
                    <div>
                      <strong>AIBE Certificate:</strong>{" "}
                      {lawyerData.aibeCertificate && (
                        <a
                          href={lawyerData.aibeCertificate}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 underline"
                        >
                          View
                        </a>
                      )}
                    </div>
                  </div>
                </section>

                {/* Section E: Practice Details */}
                <section>
                  <h3 className="text-xl font-semibold mb-2 text-blue-600">
                    Practice Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <strong>Years of Practice:</strong>{" "}
                      {lawyerData.yearsOfPractice}
                    </div>
                    <div>
                      <strong>Primary Courts:</strong>{" "}
                      {lawyerData.primaryCourts}
                    </div>
                    <div>
                      <strong>Bar Association Membership:</strong>{" "}
                      {lawyerData.barAssociationMembership}
                    </div>
                    <div>
                      <strong>Court ID/Chamber Proof:</strong>{" "}
                      {lawyerData.courtIdProof && (
                        <a
                          href={lawyerData.courtIdProof}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 underline"
                        >
                          View
                        </a>
                      )}
                    </div>
                    <div>
                      <strong>Languages Used in Practice:</strong>{" "}
                      {lawyerData.practiceLanguages}
                    </div>
                    <div className="md:col-span-2">
                      <strong>Work Description:</strong>{" "}
                      {lawyerData.workDescription}
                    </div>
                    <div>
                      <strong>Resume/Portfolio:</strong>{" "}
                      {lawyerData.resume && (
                        <a
                          href={lawyerData.resume}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 underline"
                        >
                          View
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="mt-4">
                    <strong>Practice Areas:</strong>
                    <ul className="list-disc ml-6">
                      {lawyerData.practiceAreas &&
                        Object.entries(lawyerData.practiceAreas)
                          .filter(([, val]) => val)
                          .map(([area], i) => <li key={i}>{area}</li>)}
                    </ul>
                  </div>
                </section>

                {/* Section F: Service Preferences */}
                <section>
                  <h3 className="text-xl font-semibold mb-2 text-blue-600">
                    Service Preferences
                  </h3>
                  <div>
                    <strong>Consultation Modes:</strong>
                    <ul className="list-disc ml-6">
                      {lawyerData.servicesInPerson && <li>In-person</li>}
                      {lawyerData.servicesPhone && <li>Phone</li>}
                      {lawyerData.servicesVideo && <li>Video</li>}
                    </ul>
                  </div>
                  <div>
                    <strong>Other Services:</strong>
                    <ul className="list-disc ml-6">
                      {Object.entries(lawyerData)
                        .filter(
                          ([key, val]) => key.startsWith("service_") && val
                        )
                        .map(([key]) => (
                          <li key={key}>
                            {key.replace("service_", "").replace(/_/g, " ")}
                          </li>
                        ))}
                      {lawyerData.otherServiceSpecify && (
                        <li>Other: {lawyerData.otherServiceSpecify}</li>
                      )}
                    </ul>
                  </div>
                  <div>
                    <strong>Preferred Communication:</strong>
                    <ul className="list-disc ml-6">
                      {lawyerData.comm_phone && <li>Phone</li>}
                      {lawyerData.comm_video_call && <li>Video Call</li>}
                      {lawyerData.comm_in_person && <li>In-Person</li>}
                      {lawyerData.comm_messaging && <li>Messaging</li>}
                    </ul>
                  </div>
                </section>

                {/* Section G: Legal Compliance */}
                <section>
                  <h3 className="text-xl font-semibold mb-2 text-blue-600">
                    Legal Compliance
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <strong>Professional Indemnity Insurance:</strong>{" "}
                      {lawyerData.hasIndemnityInsurance}
                    </div>
                    <div>
                      <strong>Policy Document:</strong>{" "}
                      {lawyerData.policyDocument && (
                        <a
                          href={lawyerData.policyDocument}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 underline"
                        >
                          View
                        </a>
                      )}
                    </div>
                  </div>
                </section>

                {/* Section H: Consent & Declaration */}
                <section>
                  <h3 className="text-xl font-semibold mb-2 text-blue-600">
                    Consent & Declaration
                  </h3>
                  <ul className="list-disc ml-6">
                    <li
                      className={
                        lawyerData.confirmTruth
                          ? "text-blue-600"
                          : "text-gray-400"
                      }
                    >
                      I confirm all information is true and accurate
                    </li>
                    <li
                      className={
                        lawyerData.agreeEthics
                          ? "text-blue-600"
                          : "text-gray-400"
                      }
                    >
                      I agree to abide by professional ethics and platform
                      policies
                    </li>
                    <li
                      className={
                        lawyerData.consentVisible
                          ? "text-blue-600"
                          : "text-gray-400"
                      }
                    >
                      I consent to my profile being visible on the platform
                    </li>
                  </ul>
                  {lawyerData.digitalSignature && (
                    <div className="mt-4">
                      <strong>Digital Signature:</strong>
                      <br />
                      <img
                        src={lawyerData.digitalSignature}
                        alt="Signature"
                        className="h-16"
                      />
                    </div>
                  )}
                </section>
              </div>
            </div>
          )}
        </motion.div>
      </main>
    </div>
  );
};

export default LawyerProfile;
