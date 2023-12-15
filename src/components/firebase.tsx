// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVGGQxDZpfYGC73k2nll0Z7VqVkicSJ9M",
  authDomain: "smarthomev1-a1624.firebaseapp.com",
  databaseURL: "https://smarthomev1-a1624-default-rtdb.firebaseio.com",
  projectId: "smarthomev1-a1624",
  storageBucket: "smarthomev1-a1624.appspot.com",
  messagingSenderId: "933710444268",
  appId: "1:933710444268:web:cceb4c0caf5c088bb897c9",
  measurementId: "G-7TRDWNYPQH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export { database }