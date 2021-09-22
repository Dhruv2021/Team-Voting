import firebase from 'firebase';

// add SDK Firebase
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5rYAnWQoOdq0PCv8Fb5kRnT2Hwr_j7hQ",
  authDomain: "school-attendence-d27c3.firebaseapp.com",
  databaseURL: "https://school-attendence-d27c3-default-rtdb.firebaseio.com",
  projectId: "school-attendence-d27c3",
  storageBucket: "school-attendence-d27c3.appspot.com",
  messagingSenderId: "627426329275",
  appId: "1:627426329275:web:bcfd1e04dcfbe863419f9e",
  measurementId: "G-HK539Z7L5K"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
