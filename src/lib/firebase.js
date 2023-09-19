// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCxbYZO_n5qOCkMPEd-QDMLbzLbPd0hkUU",
  authDomain: "betterdnd-b1470.firebaseapp.com",
  projectId: "betterdnd-b1470",
  storageBucket: "betterdnd-b1470.appspot.com",
  messagingSenderId: "110118538364",
  appId: "1:110118538364:web:abddc2c840315812e80df9",
  measurementId: "G-4CR29CJ3Y3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, googleAuthProvider, db, storage };
