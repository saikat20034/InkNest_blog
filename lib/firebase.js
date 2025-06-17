// lib/firebase.js
import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBoQ2ezxAKTFc29TRsxg8Zk-rqocZr8mCE',
  authDomain: 'inknest-15968.firebaseapp.com',
  projectId: 'inknest-15968',
  storageBucket: 'inknest-15968.firebasestorage.app',
  messagingSenderId: '640248754562',
  appId: '1:640248754562:web:e5e179f6c66869643ddf9b',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export const googleProvider = new GoogleAuthProvider();
