import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDivDXvtJJb5vjUTJ_VRmxhhWDFSZK_YuU",
  authDomain: "simon-game-621d9.firebaseapp.com",
  projectId: "simon-game-621d9",
  storageBucket: "simon-game-621d9.appspot.com",
  messagingSenderId: "873081496983",
  appId: "1:873081496983:web:338c1b593108a93de990d2",
  measurementId: "G-K7EGYTPTCR",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase();
const auth = getAuth(app);

export default auth;
