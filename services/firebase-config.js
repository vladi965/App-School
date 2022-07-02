// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvxpgCwT3BOI2Ef2TAr65xv4QM43oqT4E",
  authDomain: "app-school-10c5e.firebaseapp.com",
  projectId: "app-school-10c5e",
  storageBucket: "app-school-10c5e.appspot.com",
  messagingSenderId: "438593290769",
  appId: "1:438593290769:web:5a135baf51911b75ec27b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;