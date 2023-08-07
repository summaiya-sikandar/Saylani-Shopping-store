// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpO6V3agSvMe3IUT_Pvtd_8HV4q-R0c8A",
  authDomain: "saylanishoppingstore.firebaseapp.com",
  projectId: "saylanishoppingstore",
  storageBucket: "saylanishoppingstore.appspot.com",
  messagingSenderId: "688654344247",
  appId: "1:688654344247:web:45a4e210075a5aee9a5fb2",
  measurementId: "G-65Q97G3FLY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);