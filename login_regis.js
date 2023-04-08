function registerUser() {
  var username = document.getElementById("username").value;
  var useremail = document.getElementById("useremail").value;
  var userpass = document.getElementById("userpassword").value;
  var conform_password = document.getElementById("conform-password").value;

  // Check if all required fields are filled out
  if (!username || !useremail || !userpass || !conform_password) {
    alert("Please fill out all required fields.");
    return;
  }

  // Check if the password and conform password match
  if (userpass !== conform_password) {
    alert("Passwords do not match. Please enter the same password in both fields.");
    return;
  }

  // Check if the email is valid using regular expressions
  var emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(useremail)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Create an object with the user's credentials
  var user = {
    username: username,
    useremail: useremail,
    userpass: userpass,
    conpass: conform_password
  };

  // Get the existing array of registered users from local storage, or create a new one if it doesn't exist yet
  var registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];

  // Push the new user object to the array
  registeredUsers.push(user);
  alert("User registered successfully!");

  // Save the updated array to local storage
  localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
}




