import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage"

const config = {
	apiKey: "AIzaSyBBkiMsoGY9lX-q-iIa0z5huNsvakRFCzM",
	authDomain: "eldron-d39f8.firebaseapp.com",
	projectId: "eldron-d39f8",
	storageBucket: "eldron-d39f8.appspot.com",
	messagingSenderId: "863002734153",
	appId: "1:863002734153:web:c479ab78e2e0d7244b5998",
	measurementId: "G-EMVXSY2N2J",
}
function init() {
	firebase.initializeApp(config);
	firebase.firestore();
	firebase.storage();
}
export { firebase, init };
