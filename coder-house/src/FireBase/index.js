import firebase from 'firebase'
import 'firebase/firestore'

const app = firebase.initializeApp({ 

    
    apiKey: "AIzaSyBtlcHjBlED7O8uK_xwSstrS4g04CEypFg",
    authDomain: "tills-824bd.firebaseapp.com",
    projectId: "tills-824bd",
    storageBucket: "tills-824bd.appspot.com",
    messagingSenderId: "854460374631",
    appId: "1:854460374631:web:2c4760e72a56a2cb473ec2",
    measurementId: "G-NB9K9K20LG"
 
 });

 export const getFireBase = () => app

 
 export const getFireStore = () => firebase.firestore(app)