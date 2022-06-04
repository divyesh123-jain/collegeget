// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAAAgXSPCrT42gauMJ4w0M4EPma4Nd1pBU",
    authDomain: "collegeget-d5266.firebaseapp.com",
    projectId: "collegeget-d5266",
    storageBucket: "collegeget-d5266.appspot.com",
    messagingSenderId: "648066893706",
    appId: "1:648066893706:web:513dac46be02e0fd2b2a73"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);