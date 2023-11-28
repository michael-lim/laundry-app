
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDk3LMCGImId1ZSDeH8bC8Ybthns8ZIZtw",
  authDomain: "eurogamez.firebaseapp.com",
  projectId: "eurogamez",
  storageBucket: "eurogamez.appspot.com",
  messagingSenderId: "466140492584",
  appId: "1:466140492584:web:95571818f8c439addf961d",
  measurementId: "G-F1EJRLVCZX"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export { auth, db };