// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXoF4xdLFa9BBLtzAZEbsa_2otiprT9Q8",
  authDomain: "coffee-40e1e.firebaseapp.com",
  projectId: "coffee-40e1e",
  storageBucket: "coffee-40e1e.appspot.com",
  messagingSenderId: "919073110797",
  appId: "1:919073110797:web:a24d21faa5f486110a8e44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);