// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAt-NmCahHfPMTKWkt_MLczXxii2tyfDfM",
  authDomain: "simon-game-3ebac.firebaseapp.com",
  projectId: "simon-game-3ebac",
  storageBucket: "simon-game-3ebac.appspot.com",
  messagingSenderId: "98314766286",
  appId: "1:98314766286:web:5223d4412603a6fdf64d9f",
  measurementId: "G-VLCGT3BJZ2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
