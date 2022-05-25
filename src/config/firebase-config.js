// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuVYnVPmoLNOIBGMIhOVb4Vvm8x7DDf78",
  authDomain: "todo-desktop-f6d86.firebaseapp.com",
  projectId: "todo-desktop-f6d86",
  storageBucket: "todo-desktop-f6d86.appspot.com",
  messagingSenderId: "333583402704",
  appId: "1:333583402704:web:624fabfc95a17d085400d5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };
