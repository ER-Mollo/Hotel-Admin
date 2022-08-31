// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKEJFhi_gNqvWaePC9mt_GzA7MgcvERCs",
  authDomain: "hotel-app-a0716.firebaseapp.com",
  projectId: "hotel-app-a0716",
  storageBucket: "hotel-app-a0716.appspot.com",
  messagingSenderId: "926426222053",
  appId: "1:926426222053:web:37c65262fa7f7d2601f30c",
  measurementId: "G-W4M1YT84FB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);