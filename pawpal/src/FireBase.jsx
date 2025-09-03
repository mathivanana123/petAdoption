// FireBase.jsx
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHyZcqdXUPZ_I1zR6sIP84jq7FjlPjjUA",
  authDomain: "pawpal-login-d0b90.firebaseapp.com",
  projectId: "pawpal-login-d0b90",
  storageBucket: "pawpal-login-d0b90.appspot.com",  // ✅ fixed
  messagingSenderId: "886394716866",
  appId: "1:886394716866:web:3a2fb3769c479757b2315b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
export default app;

