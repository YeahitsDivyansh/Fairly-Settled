import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signOut,
  RecaptchaVerifier,
  signInWithPhoneNumber
} from "firebase/auth";
import { auth, db } from "../firebase"; // import db
import { doc, getDoc } from "firebase/firestore"; // Firestore utils

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null); // for username and other info
   const [loading, setLoading] = useState(false);
  function logOut() {
    setUser(null);
    setUserData(null);
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
    setLoading(true); 
    const unsubscribe = onAuthStateChanged(auth, async (currentuser) => {
      setUser(currentuser);
       
      if (currentuser) {
        const userRef = doc(db, "Users", currentuser.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          setUserData(userSnap.data()); // includes username
        }
      } else {
        setUserData(null);
      }
      setLoading(false);
    });
    
    return () => {
      unsubscribe();
    };
  }, []);

  
  return (
    <userAuthContext.Provider
      value={{
        loading,
        userData, 
        logOut,
        setUpRecaptha,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
