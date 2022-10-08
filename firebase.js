import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBelgBPj3iMAC4U9-Zor-raUn6DyA7lOGY",
  authDomain: "eagle-messenger-cac90.firebaseapp.com",
  projectId: "eagle-messenger-cac90",
  storageBucket: "eagle-messenger-cac90.appspot.com",
  messagingSenderId: "594686847298",
  appId: "1:594686847298:web:988020b79c175594ecc0db",
  measurementId: "G-N57DER1K8Z",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { db, auth, provider };
