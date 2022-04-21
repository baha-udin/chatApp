import {initializeApp} from 'firebase/app';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBcSPiLQILzoMo1Y58HF8NSSPpW4XcCfu0',
  authDomain: 'chat-38e42.firebaseapp.com',
  projectId: 'chat-38e42',
  storageBucket: 'chat-38e42.appspot.com',
  messagingSenderId: '266900657727',
  appId: '1:266900657727:web:2dd68edb44c1dfbb8d0a8a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app); //getAuth manggil dari app firebaseConfig
export const database = getDatabase(app);
