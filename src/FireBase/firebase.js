

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5LrtNzyjNyl0uPlswHTUZN4O2-MpOsHQ",
  authDomain: "fir-auth-2a3a7.firebaseapp.com",
  projectId: "fir-auth-2a3a7",
  storageBucket: "fir-auth-2a3a7.firebasestorage.app",
  messagingSenderId: "919381838345",
  appId: "1:919381838345:web:1afd39669545f54678c6d8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);