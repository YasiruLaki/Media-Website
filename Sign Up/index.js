document.getElementById("loginForm").addEventListener("submit",(event)=>{
    event.preventDefault()
})

  //active user to Alert
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      window.onload = function() {
        // similar behavior as an HTTP redirect
      window.location.replace("http://www.rcmu.lk/Sign%20Up/welcome");
    }
      alert("Active user " +email);
      

    }else{
      alert("No Active user Found")
    }
  })


function login(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch((error)=>{
        document.getElementById("error").innerHTML = error.message
    })
}

function signUp(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message
    });
}

function forgotPass(){
    const email = document.getElementById("email").value
    firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
        alert("Reset link sent to your email id")
    })
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message
    });
}