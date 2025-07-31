//--------------------------------------
// Part 1: EVENT HANDLING
//--------------------------------------

// 1) Light/Dark mode toggle
const toggleThemeBtn = document.getElementById("toggleThemeBtn");
toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  document.body.classList.toggle("dark-mode");
});

// 2) Click counter
let count = 0;
const counterBtn = document.getElementById("counterBtn");
const counterDisplay = document.getElementById("counterDisplay");

counterBtn.addEventListener("click", () => {
  count++;
  counterDisplay.textContent = `You clicked ${count} times.`;
});

//--------------------------------------
// Part 2: INTERACTIVE ELEMENT — FAQ
//--------------------------------------

// Make FAQ answer collapsible
const faqQuestion = document.querySelector(".faq-question");
const faqItem = document.querySelector(".faq-item");

faqQuestion.addEventListener("click", () => {
  faqItem.classList.toggle("open");
});

//--------------------------------------
// Part 3: FORM VALIDATION
//--------------------------------------

const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const formMessage = document.getElementById("formMessage");

// Helper: Simple email regex
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent page reload
  let isValid = true;

  // Validate name
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  // Validate email
  if (!isValidEmail(emailInput.value)) {
    emailError.textContent = "Please enter a valid email.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Validate password (min 6 chars)
  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  if (isValid) {
    formMessage.textContent = "Form submitted successfully!";
    formMessage.style.color = "green";
    form.reset();
  } else {
    formMessage.textContent = "Please fix the errors above.";
    formMessage.style.color = "red";
  }
});
