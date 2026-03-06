// ============================================================
//  🔥 FIREBASE CONFIGURATION — Sam Makwana Portfolio
// ============================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyC9jbImPGkmLbw_rBpNXmfJ9bMxPj51QkA",
    authDomain: "myportfolio-72351.firebaseapp.com",
    projectId: "myportfolio-72351",
    storageBucket: "myportfolio-72351.firebasestorage.app",
    messagingSenderId: "103802521405",
    appId: "1:103802521405:web:8731ccf3cb298756912754",
    measurementId: "G-1KL1552ZLZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
