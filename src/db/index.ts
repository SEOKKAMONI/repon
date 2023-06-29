import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzG92WpYUT1UYZOE5DCOCC36p3_V0_IN4",
  authDomain: "repletwo.firebaseapp.com",
  projectId: "repletwo",
  storageBucket: "repletwo.appspot.com",
  messagingSenderId: "416904115530",
  appId: "1:416904115530:web:439bb5e6e28e32f4a17db3",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
