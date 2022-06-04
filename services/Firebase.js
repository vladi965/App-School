import { initializeApp, getApp, getApps } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvxpgCwT3BOI2Ef2TAr65xv4QM43oqT4E",
  authDomain: "app-school-10c5e.firebaseapp.com",
  projectId: "app-school-10c5e",
  storageBucket: "app-school-10c5e.appspot.com",
  messagingSenderId: "438593290769",
  appId: "1:438593290769:web:5a135baf51911b75ec27b0",
};

//Initialize Firebase
export const app =
  getApps.length === 0 ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);

export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}


