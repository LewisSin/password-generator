
const passwordTrigger = document.querySelector("#generate");


const uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', ',', '.', '?', '<', '>', '?'];
const digitChars = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];


passwordTrigger.addEventListener("click", outputGeneratedPassword);


function outputGeneratedPassword() {
  const password = getUserPasswordPreferences();
  document.querySelector("#password").value = password;
}


function getUserPasswordPreferences() {
  let availableChars = 'abcdefghijklmnopqrstuvwxyz';
  let chosenPasswordLength = getPasswordLength();

  if (chosenPasswordLength === 0) return "";

  if (window.confirm("Include uppercase letters in your password?")) {
    availableChars += uppercaseLetters.join('');
  }
  if (window.confirm("Include special characters in your password?")) {
    availableChars += specialChars.join('');
  }
  if (window.confirm("Include numbers in your password?")) {
    availableChars += digitChars.join('');
  }

  return createPassword(chosenPasswordLength, availableChars);
}


function getPasswordLength() {
  let length = parseInt(prompt("Choose a password length between 8 and 128 characters:"));
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Invalid entry. Please enter a number between 8 and 128.");
    return 0;
  }
  return length;
}


function createPassword(length, characters) {
  let password = '';
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}
