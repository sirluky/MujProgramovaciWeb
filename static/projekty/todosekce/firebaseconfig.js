var firebaseConfig = {
    apiKey: "AIzaSyAtuhBo6obl_1Zc2RHef8HJhMrC7jcSzdA",
    authDomain: "ukolnicek-404ba.firebaseapp.com",
    databaseURL: "https://ukolnicek-404ba.firebaseio.com",
    projectId: "ukolnicek-404ba",
    storageBucket: "",
    messagingSenderId: "340680104696",
    appId: "1:340680104696:web:2e7f0d6c96f56288c1390d",
    measurementId: "G-GD6C7LMMYT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();
