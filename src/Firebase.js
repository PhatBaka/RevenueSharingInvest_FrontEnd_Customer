// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLBV7jmbyQMWiXpY4Id5Lt-LRnWgTNETw",
  authDomain: "krowdinvestment.firebaseapp.com",
  projectId: "krowdinvestment",
  storageBucket: "krowdinvestment.appspot.com",
  messagingSenderId: "542746657150",
  appId: "1:542746657150:web:aa01289296ead53820f32f",
  measurementId: "G-ZZVEBWVHXS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);