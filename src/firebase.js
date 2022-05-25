// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//import firebase from 'firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyB8JEdSGCf6huGgjDOQpsMMk32yg8fltTU",
    authDomain: "challenge-b657d.firebaseapp.com",
    projectId: "challenge-b657d",
    storageBucket: "challenge-b657d.appspot.com",
    messagingSenderId: "719138785333",
    appId: "1:719138785333:web:089a2ebc1b32812f5bc97c",
    measurementId: "G-S4TL74VHE4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};