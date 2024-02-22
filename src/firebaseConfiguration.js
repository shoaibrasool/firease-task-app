import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBVJNTGQO8CUjhU8-HGjelsLlqZg4wmW5Q",
    authDomain: "react-auth-application-c6d7f.firebaseapp.com",
    projectId: "react-auth-application-c6d7f",
    storageBucket: "react-auth-application-c6d7f.appspot.com",
    messagingSenderId: "39507130244",
    appId: "1:39507130244:web:bee663ca19b4d9cbde8fd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app)
export const db = getFirestore(app); 
