import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBAaBRPiBEtiDCxI1TvhwCkDyzGuBP1K3A",
    authDomain: "novanext-8bf58.firebaseapp.com",
    projectId: "novanext-8bf58",
    storageBucket: "novanext-8bf58.appspot.com",
    messagingSenderId: "603506493045",
    appId: "1:603506493045:web:bc7ca5af50bdf9b97b1a3c",
    measurementId: "G-ZQKXBFST3P"
  };
  

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);