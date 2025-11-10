// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDupvOdJJGmmUQF0FIIs9PtRuyCPu6udF0",
  authDomain: "finease-app.firebaseapp.com",
  projectId: "finease-app",
  storageBucket: "finease-app.firebasestorage.app",
  messagingSenderId: "41748257422",
  appId: "1:41748257422:web:0ca9d5f145e185b2c607df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

