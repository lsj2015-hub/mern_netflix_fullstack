// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCV4PZc8f0JAhfgwMpml-S5cLxMh48mGHE',
  authDomain: 'netflix-77f24.firebaseapp.com',
  projectId: 'netflix-77f24',
  storageBucket: 'netflix-77f24.appspot.com',
  messagingSenderId: '149516945437',
  appId: '1:149516945437:web:fe16ab2dcc342856c59ef4',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
