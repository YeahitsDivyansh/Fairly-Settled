import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useLawyerAuth } from "../context/LawyerAuthContext";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { SpotlightPreview2 } from "@/components/SpotLightDemo2";
const LawyerSignIn = () => {
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setUpRecaptha } = useLawyerAuth();

  const getOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (!number) return setError("Please enter a valid phone number!");
    setLoading(true);
    try {
      const q = query(collection(db, "Lawyers"), where("phone", "==", number));
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        setLoading(false);
        alert("Phone number not registered!");
        return;
      }
      const response = await setUpRecaptha(number);
      setResult(response);
      setFlag(true);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (!otp) return setError("Please enter the OTP!");
    setLoading(true);
    try {
      const res = await result.confirm(otp);
      navigate("/lawyer-dashboard");
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black px-4">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full max-w-6xl">
        <SpotlightPreview2 />
        <form
          onSubmit={flag ? verifyOtp : getOtp}
          className="bg-[#f5f9fbe6] backdrop-blur-md border border-white/50 p-8 rounded-xl shadow-xl w-full max-w-md animate-fade-in lg:w-1/2"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            {flag ? "Verify OTP" : "Lawyer Sign In"}
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
                <div
                  id="recaptcha-container"
                  className="scale-90 transform origin-center"
                ></div>
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full text-white py-2 rounded-md transition duration-200 ${
                  loading
                    ? "bg-blue-300 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600"
                }`}
              >
                {loading ? "Loading..." : "Send OTP"}
              </button>

              <p className="mt-2 text-md text-center text-gray-700">
                New lawyer?{" "}
                <Link
                  to="/lawyer-signup"
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
              <p className="mt-3 text-md text-center text-gray-700">
                Not a lawyer?{" "}
                <Link
                  to="/phonesignin"
                  className="text-blue-600 hover:underline font-medium"
                >
                  User Login
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
                className={`w-full text-white py-2 rounded-md transition duration-200 ${
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
      </div>
    </div>
  );
};

export default LawyerSignIn;
