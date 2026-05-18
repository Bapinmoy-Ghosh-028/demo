document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent form from refreshing page

  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value.trim();
  let message = document.getElementById("message");

  if(username === "" || password === "") {
    message.style.color = "red";
    message.textContent = "Please fill in all fields.";
  } else if(username === "admin" && password === "1234") {
    message.style.color = "green";
    message.textContent = "Login successful!";
  }else {
    message.style.color = "red";
    message.textContent = "Invalid username or password.";
  }
});
