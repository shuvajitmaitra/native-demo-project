// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApjMND2plRsJmmRR0AIUGzXJ-S4Nr5Iqw",
  authDomain: "scc-technovision.firebaseapp.com",
  projectId: "scc-technovision",
  storageBucket: "scc-technovision.appspot.com",
  messagingSenderId: "438028811717",
  appId: "1:438028811717:web:f75404cda636d727205fac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
