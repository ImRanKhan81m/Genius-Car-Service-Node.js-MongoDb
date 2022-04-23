// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  /* apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messaggSenderId,
  appId:process.env.REACT_APP_appId */
  apiKey: "AIzaSyAa4QQHAhH9Ltz5YxoRIpc1ZKlUUgjymxM",
  authDomain: "genius-car-services-c6aa8.firebaseapp.com",
  projectId: "genius-car-services-c6aa8",
  storageBucket: "genius-car-services-c6aa8.appspot.com",
  messagingSenderId: "458196955769",
  appId: "1:458196955769:web:1fa29bdb380e73890d1aa8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;  