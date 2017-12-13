  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBQserZLQqOnOi4NxMRg8gWRPgKJ7fmNXc",
    authDomain: "rps-multiplayer-5dbf3.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-5dbf3.firebaseio.com",
    projectId: "rps-multiplayer-5dbf3",
    storageBucket: "rps-multiplayer-5dbf3.appspot.com",
    messagingSenderId: "685934621948"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log("test")
    } else {
      // No user is signed in.
    }
});