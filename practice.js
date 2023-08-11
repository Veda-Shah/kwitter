const firebaseConfig = {
    apiKey: "AIzaSyBWKOYDXs0VAb74LHyAWpQNEI1o2cnbL7o",
    authDomain: "kwitter-23187.firebaseapp.com",
    databaseURL: "https://kwitter-23187-default-rtdb.firebaseio.com",
    projectId: "kwitter-23187",
    storageBucket: "kwitter-23187.appspot.com",
    messagingSenderId: "191114900039",
    appId: "1:191114900039:web:3e4df165c463b71c443762"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        perpose : "adding user"
    });
}