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
var player1Id = "";
var player2Id = "";
var player1Name = "";
var player2Name = "";
var numberOfPlayers = 0;
var choices = ["rock", "paper", "scissors"]


firebase.auth().signInAnonymously().catch(function(error) {
});




// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     if (player1Id === ""){
//       console.log("Player 1 is logged in")
//       player1Id = user.uid
//       console.log(player1Id);

//       var firebaseP1 = {
//         "id": player1Id
//       }

//       database.ref().set(firebaseP1);

//       $("#submitname").on("click", function(event) {
//         event.preventDefault();

//         var newPlayer = $("#name").val().trim();

//         if (newPlayer === "") {
//           alert("You did not enter anything")
//         } else if (player1Name === ""){
//             player1Name = newPlayer;
//             $("#player1").text(player1Name);
//             buttonMaker("#player1choice")
//             $("#player1result").empty();
//             $("#gamestatus").html("Waiting for Player 2");
//         } else if (player1Name !== "" && player2Name === ""){
//             player2Name = newPlayer;
//             $("#player2").text(player2Name);
//             buttonMaker("#player2choice")
//             $("#player2result").empty();
//             $("#gamestatus").html("Waiting for players to choose");
//         } else if (player1Name !== "" && player2Name !== ""){
//           alert("There are already two players. Please wait for one to leave.")
//         }

//         $("#name").val('');
//       });

//     } else if (player1Id !== "" && player2Id === ""){
//       console.log("Player 2 is logged in")
//       player2Id = user.uid
//       console.log(player2Id);
//     }

//   } 

//   -
// });

$("#submitname").on("click", function(event) {
  event.preventDefault();

  var newPlayer = $("#name").val().trim();

  if (newPlayer === "") {
    alert("You did not enter anything")
  } else if (player1Name === ""){
      player1Name = newPlayer;

      var firebaseP1 = {
        "name": player1Name
      }

      database.ref().push(firebaseP1);

      $("#player1").text(player1Name);
      buttonMaker("#player1choice")
      $("#player1result").empty();
      $("#gamestatus").html("Waiting for Player 2");
  } else if (player1Name !== "" && player2Name === ""){
      player2Name = newPlayer;
      var firebaseP2 = {
        "name": player2Name
      }

      database.ref().push(firebaseP2);

      $("#player2").text(player2Name);
      buttonMaker("#player2choice")
      $("#player2result").empty();
      $("#gamestatus").html("Waiting for players to choose");
  } else if (player1Name !== "" && player2Name !== ""){
    alert("There are already two players. Please wait for one to leave.")
  }

  $("#name").val('');
});

database.ref().on("child_added", function(childSnapshot, prevChildKey) {
  console.log(childSnapshot.val());
})




  ///Use if or else if to deal with adding player names. Whoever adds player name first will be p1


// $("#submitname").on("click", function(event) {
//   event.preventDefault();

//   var newPlayer = $("#name").val().trim();

//   if (newPlayer === "") {
//     alert("You did not enter anything")
//   } else if (player1Name === ""){
//       player1Name = newPlayer;
//       $("#player1").text(player1Name);
//   } else if (player1Name !== "" && player2Name === ""){
//       player2Name = newPlayer;
//       $("#player2").text(player2Name);
//   } else if (player1Name !== "" && player2Name !== ""){
//     alert("There are already two players. Please wait for one to leave.")
//   }

//   $("#name").val('');
// });

function buttonMaker(arg){
  for (var i = 0; i < choices.length; i++) {
      var buttons = $("<button>");
      buttons.addClass("choices");
      buttons.addClass("btn");
      buttons.addClass("btn-secondary");
      buttons.attr("data-name", choices[i]);
      buttons.text(choices[i]);
      $(arg).append(buttons);
      $(arg).append("<br>");
      $(arg).append("<br>");
    }
}


//Things to Do
//Figure out how firebase users works and get it so that each user writes to player 1/player 2 respectively
    //Setting player IDs to two different variables and saving them to firebase upon connection. When a user disconnects, the variables are emptied. Need firebase to push/pull variable info dynamically
    //Make name/button making a function
//Compare player 1 and player 2 choices to see who wins 
//Code output of gamet 