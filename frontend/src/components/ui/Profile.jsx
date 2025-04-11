import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { useAuth } from "../../context/AuthContext"; 
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
  
const Profile = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
   console.log(user); 
  })

  useEffect(() => {
  const fetchUserData = async () => {
    if (user) {
      try {
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
        } else {
          console.log("No user document found");
        }
      } catch (err) {
        console.error("Error fetching user data", err);
      }
      setLoading(false);
    } else {
      navigate("/signin");
    }
  };

  fetchUserData();
}, [user, navigate]);


const handleLogout = async () => {
  await logout();
  navigate("/signin");
};

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg animate-pulse">Loading...</p>
      </div>
    );
  }

  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200 p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md transition-all duration-500 ease-in-out">
        {userDetails ? (
          <>
            <h3 className="text-2xl font-bold text-center text-blue-700 mb-4 animate-fade-in">
              Welcome, {userDetails.firstName} 👋
            </h3>
            <div className="text-center text-gray-700 space-y-2 mb-6">
              <p><span className="font-semibold">Email:</span> {userDetails.email}</p>
              <p><span className="font-semibold">First Name:</span> {userDetails.firstName}</p>
              <p><span className="font-semibold">Last Name:</span> {userDetails.lastName}</p>
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
