// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7Gra0w1T4iO2WXD-_UMPJXSu8H8uINms",
  authDomain: "netflixclone-24ce6.firebaseapp.com",
  projectId: "netflixclone-24ce6",
  storageBucket: "netflixclone-24ce6.appspot.com",
  messagingSenderId: "1043567185193",
  appId: "1:1043567185193:web:14cdf18c51d55356a4fb38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app; 