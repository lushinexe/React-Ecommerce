// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8iC4as5DMBdwb3IwuD5a-ZB91I-nI-do",
  authDomain: "react-items-f882b.firebaseapp.com",
  projectId: "react-items-f882b",
  storageBucket: "react-items-f882b.firebasestorage.app",
  messagingSenderId: "326447771777",
  appId: "1:326447771777:web:ec2125d52c0e7775551d80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)