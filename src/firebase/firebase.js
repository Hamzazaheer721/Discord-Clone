import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDRqTHzc0Dhb4IzYXP7Vnlu5nHsqEbTRNs",
    authDomain: "discord-clone-d3dd7.firebaseapp.com",
    databaseURL: "https://discord-clone-d3dd7.firebaseio.com",
    projectId: "discord-clone-d3dd7",
    storageBucket: "discord-clone-d3dd7.appspot.com",
    messagingSenderId: "599065843175",
    appId: "1:599065843175:web:c7c1d68c70fc065f931942",
    measurementId: "G-BM9XER384Z"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider} ;
export default db;