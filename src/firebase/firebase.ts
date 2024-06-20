import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth } from "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "simon-game-621d9.firebaseapp.com",
  projectId: "simon-game-621d9",
  storageBucket: "simon-game-621d9.appspot.com",
  messagingSenderId: "873081496983",
  appId: "1:873081496983:web:338c1b593108a93de990d2",
  measurementId: "G-K7EGYTPTCR",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
