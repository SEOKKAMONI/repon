import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_3NaNllvBuAapaiuYTHHYH7903u6QeKU",
  authDomain: "reple-9196a.firebaseapp.com",
  projectId: "reple-9196a",
  storageBucket: "reple-9196a.appspot.com",
  messagingSenderId: "1001535885340",
  appId: "1:1001535885340:web:1aa7ff4189b5618a9b8fd9",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
