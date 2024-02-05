// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYTSgr1b42Ufgi2RtyPMM8h9H4l0ZzU1M",
  authDomain: "movieshub-gpt.firebaseapp.com",
  projectId: "movieshub-gpt",
  storageBucket: "movieshub-gpt.appspot.com",
  messagingSenderId: "624214429715",
  appId: "1:624214429715:web:106cd1245c3a4eafd82fe6",
  measurementId: "G-BM8ZHKBBBR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
