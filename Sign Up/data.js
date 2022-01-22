const firebaseConfig = {
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


  //code part//

  var datab  = firebase.database().ref('data');
function UserRegister(){
var email = document.getElementById('eemail').value;
var password = document.getElementById('lpassword').value;
firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
    
}).catch(function (error){
    var errorcode = error.code;
    var errormsg = error.message;
});
}
const auth = firebase.auth();
function SignIn(){
    var email = document.getElementById('eemail').value;
    var password = document.getElementById('lpassword').value;
    const promise = auth.signInWithEmailAndPassword(email,password);
    promise.catch( e => alert(e.msg));

}

document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    var userInfo = datab.push();
    userInfo.set({
        name: getId('fname'),
        email : getId('eemail'),
        password : getId('lpassword')
    });
    alert("Successfully Signed Up");
    console.log("sent");
    document.getElementById('form').reset();
});
function  getId(id){
    return document.getElementById(id).value;
}