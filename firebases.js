import '@firebase/auth';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {FIRE_API_KEY,FIRE_AUTH,FIRE_PROJECT,
  FIRE_STORAGE,FIRE_MESSAGING,
  FIRE_APP_ID,FIRE_MEASUREMENT} from '@env'


const firebaseConfig = {
  apiKey: `${FIRE_API_KEY}`,
  authDomain:`${FIRE_AUTH}`,
  projectId: `${FIRE_PROJECT}`,
  storageBucket: `${FIRE_STORAGE}`,
  messagingSenderId: `${FIRE_MESSAGING}`,
  appId: `${FIRE_APP_ID}`,
  measurementId: `${FIRE_MEASUREMENT}`
  };

  const apps = initializeApp(firebaseConfig);
  export const auth = getAuth(apps);
export default apps;