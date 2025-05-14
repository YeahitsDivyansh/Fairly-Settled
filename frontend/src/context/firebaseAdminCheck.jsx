import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth"; // 👈 ye add karna hai


export const checkIfAdmin = () => {
  return new Promise((resolve) => {
    onAuthStateChanged(auth, async (user) => {
    //   console.log("User in checkIfAdmin:", user?.uid); 

      if (!user) return resolve(false);

      const adminRef = doc(db, "admins", user.uid);
      const adminSnap = await getDoc(adminRef);

    //   console.log("adminSnap.exists():", adminSnap.exists()); 
    //   console.log("adminSnap.data():", adminSnap.data()); 

      if (adminSnap.exists()) {
        const data = adminSnap.data();
        resolve(data.role === "admin");
      } else {
        resolve(false);
      }
    });
  });
};

