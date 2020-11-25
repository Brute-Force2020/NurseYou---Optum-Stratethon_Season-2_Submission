import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyBTo86U3SLyMtvrfdv9JvoDLEwbbIRiqsI",
    authDomain: "react-slack-34e14.firebaseapp.com",
    databaseURL: "https://react-slack-34e14.firebaseio.com",
    projectId: "react-slack-34e14",
    storageBucket: "react-slack-34e14.appspot.com",
    messagingSenderId: "508960824593",
    appId: "1:508960824593:web:d5ebb646ff0a011d8bc0b0",
    measurementId: "G-5WCHBM7WN4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase 
