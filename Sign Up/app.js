// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

  const auth =  firebase.auth();

  //signup function
  function signUp(){
    var username = document.getElementById("username-reg");
    var email = document.getElementById("email-reg");
    var password = document.getElementById("pass-reg");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");

    promise.catch((error) => {
       document.getElementById("error-code").innerHTML = error.message
      // ..
    });
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email-login");
    var password  = document.getElementById("pass-login");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));

    promise.catch((error) => {
      document.getElementById("error-code").innerHTML = error.message
     // ..
   });
    
  }

  //ckeck


  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+email);

    }else{
      alert("No Active user Found")
    }
  })