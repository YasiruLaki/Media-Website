firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("index.html")
    }else{
        document.getElementById("user").innerHTML = "Hello, "+user.email
    }
})


function logout(){
    firebase.auth().signOut()
    alert("Logged Out Successfully")
    location.replace("index.html")
}
