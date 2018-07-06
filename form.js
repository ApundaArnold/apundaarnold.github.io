  // Initialize Firebase
  var config = {
    apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    authDomain: "xxxxxxxxxxxxxxxxx",
    databaseURL: "xxxxxxxxxxxxxxxxx",
    projectId: "xxxxxxxxxxxx",
    storageBucket: "",
    messagingSenderId: "xxxxx"
  };
  firebase.initializeApp(config);


// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
    e.preventDefault();

    // Get values
    // Remember to add all the values in your contact form here
    var name = getInputVal('name');
    //var company = getInputVal('company');
    var email = getInputVal('email');
    //var phone = getInputVal('phone');
    var message = getInputVal('message');

    // Save message
    // Remember to add all variable declared above here
    saveMessage(name, email, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    //Remember to add some CSS to that
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);

    // Clear form - delete form data after submit
    document.getElementById('contactForm').reset();
}

// Function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

// Save message to firebase function
function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        
        email:email,
       
        message:message,
    });
}
