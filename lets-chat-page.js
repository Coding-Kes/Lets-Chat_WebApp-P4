
var firebaseConfig =
{
      apiKey: "AIzaSyBB8dflWxYbPwekgmz2ZYt4KQZC0oOCCDg",
      authDomain: "lets-chat-web-app-da603.firebaseapp.com",
      databaseURL: "https://lets-chat-web-app-da603-default-rtdb.firebaseio.com",
      projectId: "lets-chat-web-app-da603",
      storageBucket: "lets-chat-web-app-da603.appspot.com",
      messagingSenderId: "747803842548",
      appId: "1:747803842548:web:2ab1d0aeff72229c2d0ba1"
   };
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
      var msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
      });

      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code


//End code
      } });  }); }
getData();




