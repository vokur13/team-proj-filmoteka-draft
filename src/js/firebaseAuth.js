import firebaseui from 'firebaseui';

// var firebase = require('firebase');
var firebaseui = require('firebaseui');

console.log(firebaseui);

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

console.log(ui);
