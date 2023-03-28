import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

const app = initializeApp({
  apiKey: "AIzaSyBNpG8wbgodZitGrKcmR7gCSDRlxME-Lqs",
  authDomain: "bks-assignment.firebaseapp.com",
  projectId: "bks-assignment",
  storageBucket: "bks-assignment.appspot.com",
  messagingSenderId: "571927764496",
  appId: "1:571927764496:web:3c80cecb668490c461f495",
  measurementId: "G-XWWW590PJT"
});

const auth = getAuth(app);
const db = getFirestore(app);
const userStore = collection(db, 'projects')

export {auth, app, userStore};