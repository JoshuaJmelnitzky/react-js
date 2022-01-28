import { initializeApp } from "firebase/app";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZ1-FzZlEP-JGtn3xiCJFOEtSEWxByya8",
  authDomain: "hardbuy-b7414.firebaseapp.com",
  projectId: "hardbuy-b7414",
  storageBucket: "hardbuy-b7414.appspot.com",
  messagingSenderId: "265734889376",
  appId: "1:265734889376:web:90b6ffee4b937eff2d8ec5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp =  () =>{
    return app
}