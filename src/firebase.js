// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAaauUuXNxzcHcM6lJdy7Ik_fkMjdQafPY",
    authDomain: "chat-app-ba6b1.firebaseapp.com",
    projectId: "chat-app-ba6b1",
    storageBucket: "chat-app-ba6b1.appspot.com",
    messagingSenderId: "533416060980",
    appId: "1:533416060980:web:ddc1c62681a8f21e928261"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();