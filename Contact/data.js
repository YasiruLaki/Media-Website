// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBl5iQz_9vckuba32fel8uY8eSvlFa87o8",
  authDomain: "contactpage-8d96c.firebaseapp.com",
  projectId: "contactpage-8d96c",
  storageBucket: "contactpage-8d96c.appspot.com",
  messagingSenderId: "975602493771",
  appId: "1:975602493771:web:d7d289e83a8a0376e920ce",
  measurementId: "G-3HEM8NG8ZT"
};
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('ContactPage');
  
  // Listen for form submit
  document.getElementById('contact-form').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    //Get value
    var fullname = getInputVal('fullname');
    var email = getInputVal('email');
    var subject = getInputVal('subject');
    var comments = getInputVal('comments');
  
    // Save message
    saveMessage(fullname, email, subject, comments);
  
    // Show alert
    alert("Your Message has Sent!");
    console.log("sent");
    document.getElementById('form').reset();
  
  
    // Clear form
    document.getElementById('contact-form').reset();
  }
  
  // Function to get form value
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(fullname, email, subject, comments){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      fullname: fullname,
      email: email,
      subject: subject,
      comments: comments
    });
  }
  
  