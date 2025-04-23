// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS13Q0UqdG-BMVXLjJ9WRXeEepr9_rCqw",
  authDomain: "fairly-settled-e2466.firebaseapp.com",
  projectId: "fairly-settled-e2466",
  storageBucket: "fairly-settled-e2466.firebasestorage.app",
  messagingSenderId: "166630960330",
  appId: "1:166630960330:web:e240309f0b6beed1e35833",
  measurementId: "G-5B3ZNMSP8T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);

export const db=getFirestore(app);
export default app;
