import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDkRsrhYFYu_IV71ZwYPZbNuW-wBjKCnBY",
  authDomain: "fir-auth-23f8b.firebaseapp.com",
  projectId: "fir-auth-23f8b",
  storageBucket: "fir-auth-23f8b.appspot.com",
  messagingSenderId: "919059693507",
  appId: "1:919059693507:web:9f31f8d79ee9ef78ad8776"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;