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
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Hi " + user_name;
function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
      });

      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class=' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>;"
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_user");
      window.location = "index.html";
}