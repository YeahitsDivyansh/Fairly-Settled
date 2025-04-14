import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useUserAuth } from "../context/UserAuthContext";
import { db } from "../firebase"; // import your db
import { doc, setDoc } from "firebase/firestore"; // import setDoc and doc
import { collection, query, where, getDocs } from "firebase/firestore"; // Add these


const PhoneSignup = () => {
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const navigate = useNavigate();
  const { setUpRecaptha } = useUserAuth();
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  const getOtp = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Validate fields
    if (!username) {
      return setError("Please enter a username");
    }
    if (!number) return setError("Please enter a valid phone number!");

    try {
      // Check if phone already registered
      const q = query(collection(db, "Users"), where("phone", "==", number));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        return setError("Phone number already registered!");
      }
      const response = await setUpRecaptha(number);
      // console.log(response);
      setResult(response);
      setFlag(true);
    } catch (err) {
      setError(err.message);
      // console.log(err);
    }
    setLoading(true);
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!otp) return setError("Please enter the OTP!");
    try {
      const res = await result.confirm(otp); // OTP verification
      const user = res.user;

      // Save username in Firestore
      await setDoc(doc(db, "Users", user.uid), {
        phone: user.phoneNumber,
        username: username,
        id: user.uid
      });

      navigate("/");
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
      className="flex object-fit justify-center items-center min-h-screen bg-no-repeat bg-cover bg-center"
    >
      {
        !flag && (
          <form
            onSubmit={getOtp}
            className="bg-white/40 backdrop-blur-md p-6 rounded-lg shadow-md w-96"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              Sign Up
            </h2>

            {error && (
              <div className="mb-4 p-3 text-sm text-red-700 bg-red-100 rounded">
                {error}
              </div>
            )}

            <input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full p-2 mb-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <PhoneInput
              defaultCountry="IN"
              value={number}
              onChange={setNumber}
              placeholder="Enter Phone Number"
              required
              className="w-full p-2 mb-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <div className="mt-3 flex justify-center">
              <div id="recaptcha-container"></div>
            </div>


            <button
              type="submit"
              disabled={loading}
              className={`w-full text-white py-2 rounded-md transition duration-200 hover:cursor-pointer 
    ${loading ? "bg-blue-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`}
            >
              {loading ? "Loading..." : "Send OTP"}
            </button>
            <p className="mt-1 text-md text-center text-gray-600">
              Already registered?{" "}
              <Link
                to="/phonesignin"
                className="text-blue-600 hover:underline font-medium"
              >
                Login Here
              </Link>
            </p>
            <p className="mt-1 text-md text-center text-gray-600">
              <Link
                to="/"
                className="text-blue-600 hover:underline font-medium"
              >
                Back to Home Page
              </Link>
            </p>
          </form>
        )
      }

      {
        flag && (
          <form
            onSubmit={verifyOtp}
            className="bg-white/40 backdrop-blur-md p-6 rounded-lg shadow-md w-96"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              Sign Up
            </h2>

            {error && (
              <div className="mb-4 p-3 text-sm text-red-700 bg-red-100 rounded">
                {error}
              </div>
            )}



            <input
              type="text"
              placeholder="Enter OTP"
              onChange={(e) => setOtp(e.target.value)}
              className="w-full p-2 mb-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              disabled={loading}
              className={`w-full text-white py-2 rounded-md transition duration-200 hover:cursor-pointer 
    ${loading ? "bg-blue-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`}
            >
              {loading ? "Loading..." : "Verify"}
            </button>
          </form>
        )
      }

    </div >
  );
};

export default PhoneSignup;
