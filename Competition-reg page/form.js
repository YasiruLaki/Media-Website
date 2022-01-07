// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAA-fq2AC0ppliZ0mhAKqCNpbKC292cvvU",
    authDomain: "thissa-final-rounds-form.firebaseapp.com",
    projectId: "thissa-final-rounds-form",
    storageBucket: "thissa-final-rounds-form.appspot.com",
    messagingSenderId: "221860425754",
    appId: "1:221860425754:web:8829db719e4acc643b21a3"
  };
  const app = initializeApp(firebaseConfig);

// reference Messages collection
var messagesRef = firebase.database().ref(messages)

// Listen for form submit
document.getElementById('regform').addEventListener('submit', submitForm);

//Submit Form
function submitForm(e){
        e.preventDefault();

        //Get Values
        var Fullname = getInputVal('fullname');
        var NameWithInitials = getInputVal('namewithinitials');
        var Email = getInputVal('email');
        var DOB = getInputVal('dob');
        var School = getInputVal('school');
        var ContactNo = getInputVal('contactno');
        var WhatsAppNo = getInputVal('whatsappno');
        var Category = getInputVal('category');
        var Comments = getInputVal('comments');

        //Save Message
        saveMessage(Fullname, NameWithInitials, Email, DOB, School, ContactNo, WhatsAppNo, Category, Comments);


}

// Function to get from values
function getInputVal(id){
    return document.getElementById(id).value;

}


//Save the Message to Firebase

function saveMessage (Fullname, NameWithInitials, Email, DOB, School, ContactNo, WhatsAppNo, Category, Comments){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        Fullname: fullname,
        NameWithInitials: namewithinitials,
        Email: email,
        DOB: dob,
        School: school,
        ContactNo: contactno,
        WhatsAppNo: whatsappno,
        Category: category,
        Comments: comments,
    });
}