// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKi_tmCm3faUmIsNR18IAYbs_AF-qGBYM",
  authDomain: "react-vudu.firebaseapp.com",
  projectId: "react-vudu",
  storageBucket: "react-vudu.appspot.com",
  messagingSenderId: "407722464417",
  appId: "1:407722464417:web:2737bb920f935af9138ce0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirestore = () => app