// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOS2vMqiNVyLTt9CDlpmlQeiwrqkbvQLo",
  authDomain: "dokxid-pf.firebaseapp.com",
  projectId: "dokxid-pf",
  storageBucket: "dokxid-pf.appspot.com",
  messagingSenderId: "851952322117",
  appId: "1:851952322117:web:0d25b4c819354cc84b452c"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);