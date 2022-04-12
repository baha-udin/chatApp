import {initializeApp} from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyA8JbOKzvinOg3JGKYq_9FJpxZJuQWZUs4',
  authDomain: 'chatapp-6784.firebaseapp.com',
  projectId: 'chatapp-6784',
  storageBucket: 'chatapp-6784.appspot.com',
  messagingSenderId: '711918941204',
  appId: '1:711918941204:web:be0d9fba59cca67bca2301',
  measurementId: 'G-4NSBMRTLTQ',
};

// Initialize Firebase
const Fire = initializeApp(firebaseConfig);

export default Fire;
