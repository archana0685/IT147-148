import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBaZY568hO4K3l9ucLVyXgBoHNQRH6JfkI",
  authDomain: "trendloom-6998b.firebaseapp.com",
  projectId: "trendloom-6998b",
  storageBucket: "trendloom-6998b.appspot.com",
  messagingSenderId: "1092683176518",
  appId: "1:1092683176518:web:720f47a2d7c4c9713bc847",
  measurementId: "G-GZNFJLXVWD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider};