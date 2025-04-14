import React from "react";
import { useUserAuth } from "@/context/UserAuthContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const { loading ,userData, logOut } = useUserAuth();
   
  const handleLogout = async () => {
    await logOut();
    navigate("/phonesignin");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg animate-pulse">Loading...</p>
      </div>
    );
  }

  return (
    <div
    style={{
      backgroundImage:
        "url('https://cdn.pixabay.com/photo/2016/01/16/10/01/legal-1143114_640.jpg')",
    }}
    className="flex object-fit justify-center items-center min-h-screen bg-no-repeat bg-cover bg-center"
  >   
      <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md transition-all duration-500 ease-in-out">
        {userData ? (
          <>
            <h3 className="text-2xl font-bold text-center text-blue-700 mb-4 animate-fade-in">
              Welcome, {userData.username} 👋
            </h3>
            <div className="text-center text-gray-700 space-y-2 mb-6">
              <p><span className="font-semibold">Username:</span> {userData.username}</p>
              <p><span className="font-semibold">Phone:</span> {userData.phone}</p>
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleLogout}
                className="bg-blue-600 hover:bg-blue-700 transition-all text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:scale-105"
              >
                Logout
              </button>
            </div>
          </>
        ) : (
          <p className="text-center text-gray-500 text-lg">No user data found.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
