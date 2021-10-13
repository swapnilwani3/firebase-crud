import { initializeApp } from "firebase/app";
import  {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBy5jY6g_tW6PisYE748U6VUYN23RklmwM",
  authDomain: "crud-3a640.firebaseapp.com",
  projectId: "crud-3a640",
  storageBucket: "crud-3a640.appspot.com",
  messagingSenderId: "257247656025",
  appId: "1:257247656025:web:4c58895dfecc1ee511d948"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
