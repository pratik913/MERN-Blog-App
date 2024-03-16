// Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration


// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: 'mern-blog-b327f.firebaseapp.com',
//   projectId: 'mern-blog-b327f',
//   storageBucket: 'mern-blog-b327f.appspot.com',
//   messagingSenderId: '699397991367',
//   appId: '1:699397991367:web:88ff565ef72a182d6b87e2',
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyAJ3HeqyDzx4vlxu6tXRUnGRSSufVC74_4",
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-adec3.firebaseapp.com",
  projectId: "mern-blog-adec3",
  storageBucket: "mern-blog-adec3.appspot.com",
  messagingSenderId: "602288132060",
  appId: "1:602288132060:web:ec655176c8d955e3240919"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);