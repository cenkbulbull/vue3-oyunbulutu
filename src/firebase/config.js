import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	
};

firebase.initializeApp(firebaseConfig)

const firestoreRef = firebase.firestore()
const authRef = firebase.auth()

export {firestoreRef,authRef}