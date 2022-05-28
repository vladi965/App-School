import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBvxpgCwT3BOI2Ef2TAr65xv4QM43oqT4E",
  authDomain: "app-school-10c5e.firebaseapp.com",
  projectId: "app-school-10c5e",
  storageBucket: "app-school-10c5e.appspot.com",
  messagingSenderId: "438593290769",
  appId: "1:438593290769:web:5a135baf51911b75ec27b0",
};

//Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth };
