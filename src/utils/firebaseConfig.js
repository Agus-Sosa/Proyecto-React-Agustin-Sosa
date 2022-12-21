// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB5tVDwbUqOUMqheA2t0sXgZx3-nW_zlpY",
    authDomain: "ecommerce-react-coder-67cbd.firebaseapp.com",
    projectId: "ecommerce-react-coder-67cbd",
    storageBucket: "ecommerce-react-coder-67cbd.appspot.com",
    messagingSenderId: "26733475051",
    appId: "1:26733475051:web:e2ce97d732569b6f38faae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
