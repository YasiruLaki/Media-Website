

function logout(){
    firebase.auth().signOut()
    alert("Logged Out Successfully")
    location.replace("index.html")
}
