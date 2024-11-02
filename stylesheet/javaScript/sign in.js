document.getElementById("signinForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let storedEmail = localStorage.getItem("email");
  let storedPassword = localStorage.getItem("password");

  let emailAddress = document.getElementById("emailAddress").value;
  let password = document.getElementById("passWord").value;

  if (emailAddress === storedEmail && password === storedPassword) {
 
    alert("Login successful!");
    window.location.href = "index.html"; 
  } else {
    alert("Incorrect email or password. Please try again.");
  }
});