import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getStorage } from "firebase/storage";
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

// const auth = getAuth(app);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

const db = getFirestore();

const storage = getStorage(app);

export { auth, db, storage };