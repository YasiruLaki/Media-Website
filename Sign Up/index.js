var firebaseConfig = {
    apiKey: "AIzaSyB_-s9xtEs-kfcGK2AjZsbu_V4FCEJ6EaY",
    authDomain: "signuppage-1cd22.firebaseapp.com",
    databaseURL: "https://signuppage-1cd22-default-rtdb.firebaseio.com",
    projectId: "signuppage-1cd22",
    storageBucket: "signuppage-1cd22.appspot.com",
    messagingSenderId: "145475644240",
    appId: "1:145475644240:web:e02980cbf370b33e4b1a55",
    measurementId: "G-XKZ6T031YG"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth = getAuth(app);
  



//Login & Register Switching

document.getElementById("loginForm").addEventListener("submit",(event)=>{
    event.preventDefault()
})

document.getElementById("login").addEventListener('click', function(){
  document.getElementById("reg").style.display="inline";
  document.getElementById("login").style.display="none";
});

document.getElementById("reg").addEventListener('click', function(){
  document.getElementById("login").style.display="inline";
  document.getElementById("reg").style.display="none";
});


//Login

function login(){
    const email = document.getElementById("login-email").value
    const password = document.getElementById("login-password").value
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        location.replace("welcome.html")
        document.getElementById("user").innerHTML = "Hello, "+user.email
    })

    .catch((error)=>{
        document.getElementById("error").innerHTML = error.message
    })
} 