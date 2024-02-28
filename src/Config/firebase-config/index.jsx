// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCQkYdDGvTcwjCdDCIQ8cGQArFONdahgvA",
    authDomain: "products-project-196.firebaseapp.com",
    databaseURL: "https://products-project-196-default-rtdb.firebaseio.com",
    projectId: "products-project-196",
    storageBucket: "products-project-196.appspot.com",
    messagingSenderId: "415228405489",
    appId: "1:415228405489:web:282b218eeb36a62c462b50"
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
const auth = getAuth(firebase_app);


export { firebase_app, auth }