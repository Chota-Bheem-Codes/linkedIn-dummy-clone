import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBc5pXccdiGnBk3KBIE85h_E-k2oPhqtbw",
    authDomain: "spotify-clone-e9554.firebaseapp.com",
    databaseURL: "https://spotify-clone-e9554.firebaseio.com",
    projectId: "spotify-clone-e9554",
    storageBucket: "spotify-clone-e9554.appspot.com",
    messagingSenderId: "1057907833015",
    appId: "1:1057907833015:web:3b93325237db31c31b7532",
    measurementId: "G-D9N1X62S0B"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };