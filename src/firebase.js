import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyApbQ-hvbF5Kv68FOqua14OWU5jYAzng8s",
  authDomain: "kbeauty-aggregate.firebaseapp.com",
  databaseURL: "https://kbeauty-aggregate.firebaseio.com",
  projectId: "kbeauty-aggregate",
  storageBucket: "kbeauty-aggregate.appspot.com",
  messagingSenderId: "845740091474",
  appId: "1:845740091474:web:de62bde604d3093fed978b",
  measurementId: "G-CN2Q8B6BV5",
};

var fire = firebase.initializeApp(firebaseConfig);

export default firebase;
