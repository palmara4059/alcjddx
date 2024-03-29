// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC18tNBDGbpqZXN9soUUPsdjZ2lkv5nzUc",
  authDomain: "hyderium-69.firebaseapp.com",
  projectId: "hyderium-69",
  storageBucket: "hyderium-69.appspot.com",
  messagingSenderId: "668101176548",
  appId: "1:668101176548:web:7b7a9cd921b176d4cf10f1",
  measurementId: "G-NWKR09TWV7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Set database variable
var database = firebase.database()

function save() {
  var email = document.getElementById('email').value
  var password = document.getElementById('password').value
  var username = document.getElementById('username').value
  var say_something = document.getElementById('say_something').value
  var favourite_food = document.getElementById('favourite_food').value

  database.ref('users/' + username).set({
    email : email,
    password : password,
    username : username,
    say_something : say_something,
    favourite_food : favourite_food
  })

  alert('Saved')
}

function get() {
  var username = document.getElementById('username').value

  var user_ref = database.ref('users/' + username)
  user_ref.on('value', function(snapshot) {
    var data = snapshot.val()

    alert(data.email)

  })

}

function update() {
  var username = document.getElementById('username').value
  var email = document.getElementById('email').value
  var password = document.getElementById('password').value

  var updates = {
    email : email,
    password : password
  }

  database.ref('users/' + username).update(updates)

  alert('updated')
}

function remove() {
  var username = document.getElementById('username').value

  database.ref('users/' + username).remove()

  alert('deleted')
}
