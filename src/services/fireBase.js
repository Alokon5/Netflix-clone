// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLOCHtDp4z6I5W2dFAZNARUJ-JXd2bkgM",
  authDomain: "netflix-clone-c67e2.firebaseapp.com",
  projectId: "netflix-clone-c67e2",
  storageBucket: "netflix-clone-c67e2.appspot.com",
  messagingSenderId: "958148506904",
  appId: "1:958148506904:web:575fff59dff65393e2da6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);