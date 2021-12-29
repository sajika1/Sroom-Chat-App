import firebase from 'firebase/compat/app';
import "firebase/compat/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyDAb5uBS6smRVST2oKiZSUGDbf9_9UF-sA",
  authDomain: "sroom-80ecc.firebaseapp.com",
  projectId: "sroom-80ecc",
  storageBucket: "sroom-80ecc.appspot.com",
  messagingSenderId: "290837413035",
  appId: "1:290837413035:web:8c483e61623e694934cbee"
  }).auth();