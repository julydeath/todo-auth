import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAf0-tWTsEu7tpin-wzTjHmnqcbxgkI5F4",
  authDomain: "todo-75bb4.firebaseapp.com",
  projectId: "todo-75bb4",
  storageBucket: "todo-75bb4.appspot.com",
  messagingSenderId: "926690332105",
  appId: "1:926690332105:web:e6cec8b94a2f1a65e9ac18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
