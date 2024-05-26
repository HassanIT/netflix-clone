import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqYMNg4BdPM6CSnfBvivve1UDlx031s38",
  authDomain: "netflix-clone-8ee2b.firebaseapp.com",
  projectId: "netflix-clone-8ee2b",
  storageBucket: "netflix-clone-8ee2b.appspot.com",
  messagingSenderId: "680803273649",
  appId: "1:680803273649:web:d69150121a3d68c9618b90",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

// We can have many explicit exports, but only one default
export { auth };
export default db;
