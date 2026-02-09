import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDtMwFNUCC689UcnyALo3viC0iVbLQVBSs",
  authDomain: "react-auth-app-6c72d.firebaseapp.com",
  projectId: "react-auth-app-6c72d",
  storageBucket: "react-auth-app-6c72d.firebasestorage.app",
  messagingSenderId: "213503133796",
  appId: "1:213503133796:web:ec905b3b95c93d2d513771",
  measurementId: "G-S57C60VDH1"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
