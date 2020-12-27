import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAUJJsLcizC_vWczWTlD5GjAr1-U8YfliU",
    authDomain: "linkedin-clone-1842f.firebaseapp.com",
    projectId: "linkedin-clone-1842f",
    storageBucket: "linkedin-clone-1842f.appspot.com",
    messagingSenderId: "496927850357",
    appId: "1:496927850357:web:c296164ac1af57e2b25d3c",
    measurementId: "G-G5K76LT7C6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };