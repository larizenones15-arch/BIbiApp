// resources/js/firebase.js
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCssH2ZwsVPSVbksXiKSaXz38HwNgH6CQ8",
  authDomain: "bebeapp-d56dd.firebaseapp.com",
  projectId: "bebeapp-d56dd",
  storageBucket: "bebeapp-d56dd.firebasestorage.app",
  messagingSenderId: "1087857358163",
  appId: "1:1087857358163:web:e0248b3592efa6a4fd5da6",
  measurementId: "G-0PSZSJZ7B2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export { messaging, getToken, onMessage };