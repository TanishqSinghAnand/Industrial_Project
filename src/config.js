import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAYNmzJwA6vpd5q4SRlUesRrGdsEbteytM",
  authDomain: "papa-f9ef1.firebaseapp.com",
  projectId: "papa-f9ef1",
  storageBucket: "papa-f9ef1.appspot.com",
  messagingSenderId: "549109084399",
  appId: "1:549109084399:web:aedeb5e8e666ff9026eb1a",
  measurementId: "G-9R66XCWZBD",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export const rdb = firebase.database();
export default db;
