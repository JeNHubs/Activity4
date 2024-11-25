// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDucNDhitzlm1XMI5gzTXdDm4-_2UbKmsg",
    authDomain: "e-learningtool-f4faa.firebaseapp.com",
    databaseURL: "https://e-learningtool-f4faa-default-rtdb.firebaseio.com",
    projectId: "e-learningtool-f4faa",
    storageBucket: "e-learningtool-f4faa.firebasestorage.app",
    messagingSenderId: "19375578681",
    appId: "1:19375578681:web:8de857ea159937d632f7e8",
    measurementId: "G-3HT63ZHL4M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const rtdb = getDatabase(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { app, auth, db, rtdb };