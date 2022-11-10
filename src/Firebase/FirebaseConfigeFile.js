// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: process.env.local_apiKey,
	authDomain: process.env.local_authDomain,
	projectId: process.env.local_projectId,
	storageBucket: process.env.local_storageBucket,
	messagingSenderId: process.env.local_messagingSenderId,
	appId: process.env.local_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;