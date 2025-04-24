import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signOut,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
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
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth state changed. User:", currentuser);
      setUser(currentuser);
  
      const fetchUserData = async () => {
        setLoading(true);
        try {
          if (currentuser) {
            const userRef = doc(db, "Users", currentuser.uid);
            const userSnap = await getDoc(userRef);
            console.log("User snap exists:", userSnap.exists());
  
            if (userSnap.exists()) {
              setUserData(userSnap.data());
            } else {
              setUserData(null);
            }
          } else {
            setUserData(null);
          }
        } catch (error) {
          console.log("Error fetching user data:", error);
          setUserData(null);
        } finally {
          console.log("Done loading");
          setLoading(false); // <-- this should always run
        }
      };
  
      fetchUserData();
    });
  
    return () => {
      unsubscribe();
    };
  }, []);
  

  return (
    <userAuthContext.Provider
      value={{
        user,         
        userData,
        loading,
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
