// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcwlOZXue17fZxWrAUUHqv3ghMyqp2llk",
  authDomain: "safarr-a9956.firebaseapp.com",
  projectId: "safarr-a9956",
  storageBucket: "safarr-a9956.appspot.com",
  messagingSenderId: "439637732942",
  appId: "1:439637732942:web:c1b05a649bbf0df0ccdd1f",
  measurementId: "G-EJWJXK03P2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database(); // Access the database service

// Reference to the Firebase node
var safarrDB = db.ref('safarr');

// Adding event listener for form submission
document.getElementById("contactform").addEventListener('submit', submitForm);

// Handling form submission
function submitForm(e) {
  e.preventDefault();

  // Getting form values
  var name = getElementVal("Username");
  var email = getElementVal("Email");
  var password = getElementVal("Password");
  var cpassword = getElementVal("CPassword");

  if (validateForm(name, email, password, cpassword)) {
    // Save the data into Firebase database
    safarrDB.push({
      username: name,
      email: email,
      password: password,
      cpassword: cpassword
    });

    // Display success message
    document.getElementById("result").innerHTML = `
      <p><strong>Username:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Password:</strong> ${password}</p>
      <p><strong>Confirm Password:</strong> ${cpassword}</p>
    `;

    // Clear the form
    document.getElementById("contactform").reset();

    // Optionally, show a popup or success message
    document.getElementById("popup").classList.add("open-slide");
  }
}

// Validate form data
function validateForm(name, email, password, cpassword) {
  const result = document.getElementById("result");

  if (name === "") {
    result.innerHTML = "Enter Username*";
    return false;
  } else if (name.length < 6) {
    result.innerHTML = "At least six letters*";
    return false;
  } else if (email === "") {
    result.innerHTML = "Enter your Email*";
    return false;
  } else if (password === "") {
    result.innerHTML = "Enter your Password*";
    return false;
  } else if (cpassword === "") {
    result.innerHTML = "Enter Confirm Password*";
    return false;
  } else if (password !== cpassword) {
    result.innerHTML = "Passwords don't match*";
    return false;
  } else {
    return true;
  }
}

// Helper function to get input field values
const getElementVal = (id) => {
  return document.getElementById(id).value;
};

// Function to close the popup
function CloseSlide() {
  const popup = document.getElementById("popup");
  popup.classList.remove("open-slide");
}
