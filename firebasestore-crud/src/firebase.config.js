//Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4AcQv1VeabdkV5uGBzBHHMJBf5JDm6aA",
  authDomain: "crud-dc7a4.firebaseapp.com",
  projectId: "crud-dc7a4",
  storageBucket: "crud-dc7a4.appspot.com",
  messagingSenderId: "904984610454",
  appId: "1:904984610454:web:c695aa8808e0f2eb51a4b7",
  measurementId: "G-7EG0T4PS43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);