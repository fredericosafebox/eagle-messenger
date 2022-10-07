import firebase from "./firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBelgBPj3iMAC4U9-Zor-raUn6DyA7lOGY",
  authDomain: "eagle-messenger-cac90.firebaseapp.com",
  projectId: "eagle-messenger-cac90",
  storageBucket: "eagle-messenger-cac90.appspot.com",
  messagingSenderId: "594686847298",
  appId: "1:594686847298:web:988020b79c175594ecc0db",
  measurementId: "G-N57DER1K8Z",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
