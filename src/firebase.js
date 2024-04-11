// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0Jh8yaNL3PmedWWxYQY77zdwrXGFbepQ",
  authDomain: "auth-27ad7.firebaseapp.com",
  projectId: "auth-27ad7",
  storageBucket: "auth-27ad7.appspot.com",
  messagingSenderId: "360733335897",
  appId: "1:360733335897:web:be47063fa2c0a358f32c48",
  measurementId: "G-1TLD87DHDB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);