import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyAKLtcMaq0wp-bso92Iv6Cyj3O-mS-2FNU",
  authDomain: "discord-clone-cd533.firebaseapp.com",
  databaseURL: "https://discord-clone-cd533.firebaseio.com",
  projectId: "discord-clone-cd533",
  storageBucket: "discord-clone-cd533.appspot.com",
  messagingSenderId: "48939878815",
  appId: "1:48939878815:web:74cd47c0f08a7034fed5aa",
  measurementId: "G-X8WQN4ZX4H"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;