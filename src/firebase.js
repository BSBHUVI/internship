
import { initializeApp } from "firebase/app";


import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA2I2oVIXNk8IyALqM8cSxyGob290d5frA",
  authDomain: "userauth-de719.firebaseapp.com",
  projectId: "userauth-de719",
  storageBucket: "userauth-de719.appspot.com",
  messagingSenderId: "182312895424",
  appId: "1:182312895424:web:e5e016fc719337c75bfe25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);