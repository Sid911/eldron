import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
	apiKey: process.env.REACT_FIREBASE_apiKey,
	authDomain: process.env.REACT_FIREBASE_authDomain,
	projectId: process.env.REACT_FIREBASE_projectId,
	storageBucket: process.env.REACT_FIREBASE_storageBucket,
	messagingSenderId: process.env.REACT_FIREBASE_messagingSenderId,
	appId: process.env.REACT_FIREBASE_appId,
	measurementId: process.env.REACT_FIREBASE_measurementId,
});

export const auth = app.auth();
export default app;
