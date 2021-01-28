import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDWWG7BDXdq_R6WbC458Kp8K6FY-BIM7js",
    authDomain: "discord-clone-38786.firebaseapp.com",
    databaseURL: "https://discord-clone-38786.firebaseio.com",
    projectId: "discord-clone-38786",
    storageBucket: "discord-clone-38786.appspot.com",
    messagingSenderId: "2055455027",
    appId: "1:2055455027:web:c958de37f0afb62464fe46"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;