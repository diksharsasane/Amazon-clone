//import firebase from "firebase";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMGYyYEHPIMVdX6eQ7fmQN3PEZsJeCHcE",
  authDomain: "amezon-challenge-84474.firebaseapp.com",
  projectId: "amezon-challenge-84474",
  storageBucket: "amezon-challenge-84474.appspot.com",
  messagingSenderId: "681920307185",
  appId: "1:681920307185:web:58a4ca66998fe69842ee50",
  measurementId: "G-D4GNYVBFQ1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth=firebase.auth();//variable use for singing up

export {db ,auth};











//Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope CurrentUser   ===> this command help me to "firebase login"and "firebase init"
