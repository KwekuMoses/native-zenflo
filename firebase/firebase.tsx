//Firebase
import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

//Environment variables
import { FIREBASE_API_KEY } from '@env';
import { FIREBASE_AUTH_DOMAIN } from '@env';
import { FIREBASE_PROJECT_ID } from '@env';
import { FIREBASE_STORAGE_BUCKET } from '@env';
import { FIREBASE_MESSAGING_SENDER_ID } from '@env';
import { FIREBASE_APP_ID } from '@env';
import { FIREBASE_MEASUREMENT_ID } from '@env';


import { getFirestore, collection, getDocs, onSnapshot, doc } from 'firebase/firestore';

// Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
    appId: FIREBASE_APP_ID,
    measurementId: FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const auth = getAuth(app);
export {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    collection,
    getDocs,
    db,
    onSnapshot,
    signOut,
    doc,
    updateProfile
};