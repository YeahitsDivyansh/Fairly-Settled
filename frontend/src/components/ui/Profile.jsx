import React, { useState, useEffect } from "react";
import { useUserAuth } from "@/context/UserAuthContext";
import { useNavigate } from "react-router-dom";
import { db, storage } from "../../firebase";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { ref, deleteObject } from "firebase/storage";
import { motion } from "framer-motion";

const Profile = () => {
  const { loading, userData, logOut } = useUserAuth();
  const [activeTab, setActiveTab] = useState("profile");
  const [history, setHistory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHistory = async () => {
      if (!userData) return;

      try {
        const snapshot = await getDocs(
          collection(db, `UserHistory/${userData.id}/files`)
        );

        const data = snapshot.docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          .sort((a, b) => b.uploadedAt?.toMillis() - a.uploadedAt?.toMillis());

        setHistory(data);
      } catch (error) {
        console.error("Error fetching history:", error);
      }
    };

    if (activeTab === "history") fetchHistory();
  }, [activeTab, userData]);

  const handleLogout = async () => {
    await logOut();
    navigate("/phonesignin");
  };

  const handleDelete = async (file) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${file.fileName}"?`
    );
    if (!confirmed) return;

    try {
      const uid = userData.id;
      await deleteDoc(doc(db, `UserHistory/${uid}/files/${file.id}`));
      const storageRef = ref(storage, `user_files/${uid}/${file.fileName}`);
      await deleteObject(storageRef);
      setHistory((prev) => prev.filter((item) => item.id !== file.id));
    } catch (error) {
      console.error("Failed to delete file:", error);
      alert("Failed to delete file. Try again.");
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
    <div className="flex min-h-screen mt-12 bg-gradient-to-r from-blue-500 to-indigo-600 relative overflow-hidden">
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
            {userData?.username || "User"}
          </motion.h2>
          <p className="text-sm">{userData?.phone}</p>
        </div>
        <nav className="space-y-4">
          <motion.button
            onClick={() => setActiveTab("profile")}
            className={`block w-full text-left px-4 py-2 rounded-lg transition-all duration-200 ease-in-out ${
              activeTab === "profile" ? "bg-indigo-700" : "hover:bg-indigo-600"
            }`}
            whileHover={{ scale: 1.05, backgroundColor: "#4c6b94" }}
          >
            My Profile
          </motion.button>
          <motion.button
            onClick={() => setActiveTab("history")}
            className={`block w-full text-left px-4 py-2 rounded-lg transition-all duration-200 ease-in-out ${
              activeTab === "history" ? "bg-indigo-700" : "hover:bg-indigo-600"
            }`}
            whileHover={{ scale: 1.05, backgroundColor: "#4c6b94" }}
          >
            Download History
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
      <main className="flex-1 p-8 bg-white shadow-xl rounded-tl-3xl rounded-br-3xl transition-all duration-300">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeTab === "profile" && (
            <div className="bg-white shadow-xl rounded-lg p-6 transition-all duration-500 transform hover:scale-105">
              <h2 className="text-3xl font-bold mb-4 text-blue-800">
                Welcome, {userData?.username} 👋
              </h2>
              <p className="text-gray-700 mb-2">
                <strong>Username:</strong> {userData?.username}
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> {userData?.phone}
              </p>
            </div>
          )}

          {activeTab === "history" && (
            <motion.div className="transition-all duration-500 ease-in-out">
              <h2 className="text-3xl font-bold mb-4 text-blue-700">📄 Your Download History</h2>
              {history.length === 0 ? (
                <motion.p
                  className="text-gray-500"
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  No downloads yet.
                </motion.p>
              ) : (
                <ul className="space-y-4">
                  {history.map((file) => (
                    <motion.li
                      key={file.id}
                      className="bg-white rounded-xl p-4 shadow-lg border transition-all duration-300"
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <div className="font-semibold text-lg text-blue-600">{file.fileName}</div>
                      <div className="text-sm text-gray-600">Type: {file.fileType}</div>
                      <div className="mt-2 flex gap-4">
                        <motion.a
                          href={file.downloadURL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 underline transition-all duration-200 hover:text-blue-700"
                          whileHover={{ scale: 1.1 }}
                        >
                          Download Again
                        </motion.a>
                        <motion.button
                          onClick={() => handleDelete(file)}
                          className="text-red-500 hover:text-red-700 underline transition-all duration-200"
                          whileHover={{ scale: 1.1 }}
                        >
                          Delete
                        </motion.button>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              )}
            </motion.div>
          )}
        </motion.div>
      </main>
    </div>
  );
};

export default Profile;
