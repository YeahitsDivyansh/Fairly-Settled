import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useUserAuth } from "../context/UserAuthContext";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const PhoneSignin = () => {
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const navigate = useNavigate();
  const { setUpRecaptha } = useUserAuth();
  const [loading, setLoading] = useState(false);

  const getOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    if (!number) return setError("Please enter a valid phone number!");
    try {
      const q = query(collection(db, "Users"), where("phone", "==", number));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        alert("Phone number not registered!");
        return;
      }

      const response = await setUpRecaptha(number);
      setResult(response);
      setFlag(true);
    } catch (err) {
      setError(err.message);
      console.error(err);
    }
    setLoading(false);
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!otp) return setError("Please enter the OTP!");
    try {
      const res = await result.confirm(otp);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#9db6d9bd] px-4">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full max-w-6xl">
        {/* LEFT SIDE: Sign In Form */}
        <form
          onSubmit={flag ? verifyOtp : getOtp}
          className="bg-[#f5f9fbe6] backdrop-blur-md border border-white/50 p-8 rounded-xl shadow-xl w-full max-w-md animate-fade-in lg:w-1/2"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            {flag ? "Verify OTP" : "Sign In"}
          </h2>

          {error && (
            <div className="mb-4 p-3 text-sm text-red-700 bg-red-100 rounded">
              {error}
            </div>
          )}

          {!flag ? (
            <>
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
                className={`w-full text-white py-2 rounded-md transition duration-200 hover:cursor-pointer ${
                  loading
                    ? "bg-blue-300 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600"
                }`}
              >
                {loading ? "Loading..." : "Send OTP"}
              </button>
              <p className="mt-2 text-md text-center text-gray-700">
                New User?{" "}
                <Link
                  to="/phonesignup"
                  className="text-blue-600 hover:underline font-medium"
                >
                  Register Here
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
            </>
          ) : (
            <>
              <input
                type="text"
                placeholder="Enter OTP"
                onChange={(e) => setOtp(e.target.value)}
                className="w-full p-2 mb-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                disabled={loading}
                className={`w-full text-white py-2 rounded-md transition duration-200 hover:cursor-pointer ${
                  loading
                    ? "bg-blue-300 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600"
                }`}
              >
                {loading ? "Loading..." : "Verify"}
              </button>
            </>
          )}
        </form>

        {/* RIGHT SIDE: Motivational Quote */}
        <div className="max-w-xl text-center lg:text-right lg:w-1/2">
          <h1 className="text-6xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-purple-700 to-indigo-900">
            “Purpose fuels progress. Let yours inspire change.”
          </h1>
          <p className="mt-5 text-2xl text-gray-700">
            Welcome back to <strong>FairlySettled</strong>, powered by{" "}
            <strong>Agility AI</strong>. Let’s make a difference together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhoneSignin;
