// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  userPassword = "";
  charCount = 0;
  lowerCase = {
    use: false,
    characters: "abcdefghijklmnopqrstuvwxyz"
  }
  upperCase = {
    use: false,
    characters: lowerCase.characters.toUpperCase()
  }
  numeric = {
    use: false,
    characters: "0123456789"
  }
  specialChar = {
    use: false,
    characters: " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);