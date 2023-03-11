// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import React, {useState} from "react";
import {FIRE_API,FIRE_AUTH,FIRE_PROJECT,
        FIRE_STORAGE,FIRE_MESSAGING,
        FIRE_APP_ID,FIRE_MEASUREMENT} from "@env"

 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: `${FIRE_API}`,
  authDomain:`${FIRE_AUTH}`,
  projectId: `${FIRE_PROJECT}`,
  storageBucket: `${FIRE_STORAGE}`,
  messagingSenderId: `${FIRE_MESSAGING}`,
  appId: `${FIRE_APP_ID}`,
  measurementId: `${FIRE_MEASUREMENT}`
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


 export default app