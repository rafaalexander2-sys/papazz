import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1XSbuTTwowT3zPud60qMZQ3i1dMYvbjw",
  authDomain: "papazz-b82e0.firebaseapp.com",
  projectId: "papazz-b82e0",
  storageBucket: "papazz-b82e0.firebasestorage.app",
  messagingSenderId: "305627287809",
  appId: "1:305627287809:web:b0bc52eff4a6761d198b00",
  measurementId: "G-BQK0YQ91YG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
