import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyB5GO4tp2lWgIpmm3R9ERWLILbICTmAdUI",
  authDomain: "kbcdemo-d9954.firebaseapp.com",
  projectId: "kbcdemo-d9954",
  storageBucket: "kbcdemo-d9954.appspot.com",
  messagingSenderId: "43631783339",
  appId: "1:43631783339:web:b0807381eec5ec4f1eb6ee"
});

export const db = getFirestore();
export const app = firebaseApp;