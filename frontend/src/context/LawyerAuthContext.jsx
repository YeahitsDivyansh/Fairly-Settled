import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signOut,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const lawyerAuthContext = createContext();

export function LawyerAuthContextProvider({ children }) {
  const [lawyer, setLawyer] = useState(null);
  const [lawyerData, setLawyerData] = useState(null);
  const [loading, setLoading] = useState(false);

  function logOut() {
    setLawyer(null);
    setLawyerData(null);
    return signOut(auth);
  }

  function setUpRecaptha(number) {
    const recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          console.log("reCAPTCHA solved");
        },
      }
    );

    recaptchaVerifier.render();
    return signInWithPhoneNumber(auth, number, recaptchaVerifier);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Lawyer auth state changed. User:", currentuser);
      setLawyer(currentuser);

      const fetchLawyerData = async () => {
        setLoading(true);
        try { 
          if (currentuser) {
            const lawyerRef = doc(db, "lawyers", currentuser.uid);
            const lawyerSnap = await getDoc(lawyerRef);
            console.log("Lawyer snap exists:", lawyerSnap.exists());

            if (lawyerSnap.exists()) {
              setLawyerData(lawyerSnap.data());
            } else {
              setLawyerData(null);
            }
          } else {
            setLawyerData(null);
          }
        } catch (error) {
          console.log("Error fetching lawyer data:", error);
          setLawyerData(null);
        } finally {
          console.log("Done loading lawyer");
          setLoading(false);
        }
      };

      fetchLawyerData();
    });

    return () => unsubscribe();
  }, []);

  return (
    <lawyerAuthContext.Provider
      value={{
        lawyer,
        lawyerData,
        loading,
        logOut,
        setUpRecaptha,
      }}
    >
      {children}
    </lawyerAuthContext.Provider>
  );
}

export function useLawyerAuth() {
  return useContext(lawyerAuthContext);
}
