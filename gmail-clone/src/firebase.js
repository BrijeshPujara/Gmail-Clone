import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDeMimIPoFNB8Gv5mTus53IO_jIWVkMeQI",
    authDomain: "clone-10820.firebaseapp.com",
    projectId: "clone-10820",
    storageBucket: "clone-10820.appspot.com",
    messagingSenderId: "450198810929",
    appId: "1:450198810929:web:cf688f431789a478b90010",
    measurementId: "G-LJP482M45W"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };