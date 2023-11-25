// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYrk2UBfr8Lp-IuI-gwVe_J56LJMtwiik",
  authDomain: "veterinaria-d99d7.firebaseapp.com",
  projectId: "veterinaria-d99d7",
  storageBucket: "veterinaria-d99d7.appspot.com",
  messagingSenderId: "1080819991165",
  appId: "1:1080819991165:web:6843c1d851df887d81e714",
  measurementId: "G-GT3H4G7XT4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
