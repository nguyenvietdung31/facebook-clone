import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBX8NRZ0ZlOvt4MdjE8iTHArgL9xh36UDI",
    authDomain: "facebook-clone-5e475.firebaseapp.com",
    projectId: "facebook-clone-5e475",
    storageBucket: "facebook-clone-5e475.appspot.com",
    messagingSenderId: "904899813734",
    appId: "1:904899813734:web:6b0e24671292bf241828a7",
    measurementId: "G-ZNRCBYSGBV"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export  {db,auth, storage};
