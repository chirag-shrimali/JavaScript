// email.js - signup + login with correct OTP generation + email sending

// signup: save values to localStorage and redirect to login
function submitHandler(event) {
  event.preventDefault();

  const nameEl = document.getElementById("name");
  const emailEl = document.getElementById("email");
  const passwordEl = document.getElementById("password");
  const timeEl = document.getElementById("time");
  const messageEl = document.getElementById("message");

  if (!nameEl || !emailEl || !passwordEl) {
    alert("Form elements missing. Make sure you're on the signup page.");
    return;
  }

  // save signup data for later login check
  localStorage.setItem("name", nameEl.value.trim());
  localStorage.setItem("email", emailEl.value.trim());
  localStorage.setItem("password", passwordEl.value);

  if (timeEl) localStorage.setItem("time", timeEl.value);
  if (messageEl) localStorage.setItem("message", messageEl.value);

  // redirect to login
  window.location.href = "login.html";
}

// login: verify credentials -> generate OTP -> show OTP in page -> send via EmailJS
function login() {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const otpDisplay = document.getElementById("otpDisplay");

  if (!emailInput || !passwordInput) {
    alert("Form elements missing. Make sure you're on the login page.");
    return;
  }

  const email = emailInput.value.trim();
  const password = passwordInput.value;

  const storedEmail = localStorage.getItem("email");
  const storedPassword = localStorage.getItem("password");

  if (!(email === storedEmail && password === storedPassword)) {
    alert("Email and Password do not match");
    return;
  }

  // credentials OK
  alert("Login successful. Generating OTP and sending email...");

  // generate a 6-digit OTP as a string
  const otpValue = String(Math.floor(Math.random() * 900000) + 100000);

  // show OTP on the page (optional; remove if you don't want to display)
  if (otpDisplay) {
    otpDisplay.textContent = "Your OTP: " + otpValue;
  }

  // build data object for EmailJS template - field names must match your template variables
  const name = localStorage.getItem("name") || "";
  const time = localStorage.getItem("time") || "";
  const message = localStorage.getItem("message") || "";

  const templateParams = {
    name: name,
    email: email,
    password: password,
    time: time,
    message: message,
    otp: otpValue
  };

  const serviceID = "service_lalvvxr";     // your service id
  const templateID = "template_5445sh6";   // your template id

  emailjs.send(serviceID, templateID, templateParams)
    .then(function(res) {
      console.log("Email sent:", res);
      alert("OTP email sent successfully!");
    })
    .catch(function(err) {
      console.error("Email send error:", err);
      alert("Error sending email. See console for details.");
    });
}
