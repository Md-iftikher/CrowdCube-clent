// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlgCuaQSvz42eoqWjgWHuHltFzKs3xjdM",
  authDomain: "crowdcube-79aba.firebaseapp.com",
  projectId: "crowdcube-79aba",
  storageBucket: "crowdcube-79aba.firebasestorage.app",
  messagingSenderId: "850137540612",
  appId: "1:850137540612:web:deff5d61139c63d3dfed51",
  measurementId: "G-7QL2T694T7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;