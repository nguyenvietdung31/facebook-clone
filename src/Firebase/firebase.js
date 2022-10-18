import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA_ZRALJ4GDJU60R3clN_KzVuiJzhvSa04",
  authDomain: "clone-facebook-b877f.firebaseapp.com",
  projectId: "clone-facebook-b877f",
  storageBucket: "clone-facebook-b877f.appspot.com",
  messagingSenderId: "193144535309",
  appId: "1:193144535309:web:cf644b93d3cd7b776f5844",
  measurementId: "G-PME9Y73HEP"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
