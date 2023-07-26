// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeD89VGJ38lmnTeusS_hyUNbz__nBUBek",
  authDomain: "lms-team-6.firebaseapp.com",
  projectId: "lms-team-6",
  storageBucket: "lms-team-6.appspot.com",
  messagingSenderId: "896644908161",
  appId: "1:896644908161:web:448fa0f5fd4051cdde7980",
  measurementId: "G-V5H381SL03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);