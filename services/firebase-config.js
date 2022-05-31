// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAb4K8CFtV7Kwz7ojwP607pwVDD-xRwK4",
  authDomain: "app-school-demo-3f948.firebaseapp.com",
  projectId: "app-school-demo-3f948",
  storageBucket: "app-school-demo-3f948.appspot.com",
  messagingSenderId: "677983274672",
  appId: "1:677983274672:web:5b693d6b18fa0083b61d75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export default app;