import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyByyoFWELuGb-Krs9eaVnn9uvslCzci3uQ",
  authDomain: "kbeauty-aggregate-b7319.firebaseapp.com",
  projectId: "kbeauty-aggregate-b7319",
  storageBucket: "kbeauty-aggregate-b7319.appspot.com",
  messagingSenderId: "525778096551",
  appId: "1:525778096551:web:00659a15144a97d1b82682",
};

//const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();

export default database;
