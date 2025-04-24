import React, { useState, useEffect } from "react";
import { useUserAuth } from "@/context/UserAuthContext";
import { useNavigate } from "react-router-dom";
import {  db, storage } from "../../firebase";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { ref, deleteObject } from "firebase/storage";



const Profile = () => {
  const { loading, userData, logOut } = useUserAuth();
  const [activeTab, setActiveTab] = useState("profile");
  const [history, setHistory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHistory = async () => {
      if (!userData) return;
      const snapshot = await getDocs(
        collection(db, `UserHistory/${userData.id}/files`)
      );
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setHistory(data);
    };

    if (activeTab === "history") fetchHistory();
  }, [activeTab]);

  const handleLogout = async () => {
    await logOut();
    navigate("/phonesignin");
  };

  const handleDelete = async (file) => {
    const uid = userData.id;
    await deleteDoc(doc(db, `UserHistory/${uid}/files/${file.id}`));
    const storageRef = ref(storage, `user_files/${uid}/${file.fileName}`);
    await deleteObject(storageRef);
    setHistory((prev) => prev.filter((item) => item.id !== file.id));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg animate-pulse">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-purple-700 to-indigo-800 text-white p-6">
        <div className="mb-8">
          <h2 className="text-xl font-bold">{userData?.username || "User"}</h2>
          <p className="text-sm">{userData?.phone}</p>
        </div>
        <nav className="space-y-4">
          <button
            onClick={() => setActiveTab("profile")}
            className={`block w-full text-left px-4 py-2 rounded ${
              activeTab === "profile" ? "bg-white/20" : ""
            } hover:bg-white/20`}
          >
            My Profile
          </button>
          <button
            onClick={() => setActiveTab("history")}
            className={`block w-full text-left px-4 py-2 rounded ${
              activeTab === "history" ? "bg-white/20" : ""
            } hover:bg-white/20`}
          >
            Download History
          </button>
          <button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 bg-red-600 hover:bg-red-700 rounded text-white mt-12"
          >
            Logout
          </button>
        </nav>
      </aside>

      {/* Content Area */}
      <main className="flex-1 p-8 bg-gray-50">
        {activeTab === "profile" && (
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Welcome, {userData?.username} 👋</h2>
            <p className="text-gray-700 mb-2">
              <strong>Username:</strong> {userData?.username}
            </p>
            <p className="text-gray-700">
              <strong>Phone:</strong> {userData?.phone}
            </p>
          </div>
        )}

        {activeTab === "history" && (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-purple-700">📄 Your Download History</h2>
            {history.length === 0 ? (
              <p className="text-gray-500">No downloads yet.</p>
            ) : (
              <ul className="space-y-4">
                {history.map((file) => (
                  <li key={file.id} className="bg-white rounded-xl p-4 shadow-sm border">
                    <div className="font-semibold">{file.fileName}</div>
                    <div className="text-sm text-gray-600">Type: {file.fileType}</div>
                    <div className="mt-2 flex gap-4">
                      <a
                        href={file.downloadURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        Download Again
                      </a>
                      <button
                        onClick={() => handleDelete(file)}
                        className="text-red-500 hover:underline"
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default Profile;
