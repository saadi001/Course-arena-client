// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKoMdC73qnVuZuwFCgVC45sPYgoV8nc4A",
  authDomain: "course-arena-assignment.firebaseapp.com",
  projectId: "course-arena-assignment",
  storageBucket: "course-arena-assignment.appspot.com",
  messagingSenderId: "112388583509",
  appId: "1:112388583509:web:5a6bb9f335895f8a8464dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;