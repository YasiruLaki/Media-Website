// Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB_-s9xtEs-kfcGK2AjZsbu_V4FCEJ6EaY",
    authDomain: "signuppage-1cd22.firebaseapp.com",
    projectId: "signuppage-1cd22",
    storageBucket: "signuppage-1cd22.appspot.com",
    messagingSenderId: "145475644240",
    appId: "1:145475644240:web:e02980cbf370b33e4b1a55",
    measurementId: "G-XKZ6T031YG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const auth =  firebase.auth();
  const datab  = firebase.database().ref('data');

  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");


document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    var userInfo = datab.push();
    userInfo.set({
        name: getId('username'),
        email : getId('email'),
        password : getId('password')
    })
});

const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully!");

    document.getElementById('form').reset();
}


  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    
  }


  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

  //active user to Alert
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+email);

    }else{
      alert("No Active user Found")
    }
  })