const form = document.getElementById("signupForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  let fname = document.getElementById("fname").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let pass = document.getElementById("pass").value.trim();
  let cpass = document.getElementById("cpass").value.trim();

  let valid = true;

  // Name validation
  if (fname.length < 5) {
    document.getElementById("fnameErr").innerText = "Name must be at least 5 chars.";
    valid = false;
  } else {
    document.getElementById("fnameErr").innerText = "";
  }

  // Email validation
  if (!email.includes("@")) {
    document.getElementById("emailErr").innerText = "Invalid email format.";
    valid = false;
  } else {
    document.getElementById("emailErr").innerText = "";
  }

  // Phone validation
  if (phone.length !== 10 || phone === "1234567890") {
    document.getElementById("phoneErr").innerText = "Enter valid 10-digit phone.";
    valid = false;
  } else {
    document.getElementById("phoneErr").innerText = "";
  }

  // Password validation
  if (pass.length < 8 || pass.toLowerCase() === "password" || pass.toLowerCase() === fname.toLowerCase()) {
    document.getElementById("passErr").innerText = "Weak password.";
    valid = false;
  } else {
    document.getElementById("passErr").innerText = "";
  }

  // Confirm password validation
  if (cpass !== pass) {
    document.getElementById("cpassErr").innerText = "Passwords do not match.";
    valid = false;
  } else {
    document.getElementById("cpassErr").innerText = "";
  }

  if (valid) {
    alert("Form submitted successfully!");
    form.reset();
  }
});