// Firebase config
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBtCtmQkmGQBpnc_zW-yzZ4fC015bj5H5g",
  authDomain: "nexus-e578a.firebaseapp.com",
  projectId: "nexus-e578a",
  storageBucket: "nexus-e578a.firebasestorage.app",
  messagingSenderId: "214169198041",
  appId: "1:214169198041:web:e8bcae6523968d21868dc8",
  measurementId: "G-L6TTMMDC6P"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
