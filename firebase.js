import firebase from 'firebase/compat/app';
import "firebase/compat/firestore"
import "firebase/storage"

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyB6JNuVKQ2rKmUo-OEGIdPD87FwsbR9KwI",
        authDomain: "facebook-clone-49b4c.firebaseapp.com",
        projectId: "facebook-clone-49b4c",
        storageBucket: "facebook-clone-49b4c.appspot.com",
        messagingSenderId: "8598628755",
        appId: "1:8598628755:web:7f99ba86566aca0b942066"
    });
} else {
    firebase.app()
}


const db = firebase.firestore();
// const storage = firebase.storage()

export { db };