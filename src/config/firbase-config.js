// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDh1RY0XfcEMneKo7eBDqwQ8NGDPfGswrU",
  authDomain: "yassinezerouali-2012d.firebaseapp.com",
  projectId: "yassinezerouali-2012d",
  storageBucket: "yassinezerouali-2012d.firebasestorage.app",
  messagingSenderId: "244941556629",
  appId: "1:244941556629:web:473033606419898469449c",
  measurementId: "G-0J3FFSNR76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);