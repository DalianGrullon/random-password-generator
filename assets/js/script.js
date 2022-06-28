// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  // variable & object definitions
  userPassword = "";
  charCount = 0;
  lowerCase = {
    use: "",
    characters: "abcdefghijklmnopqrstuvwxyz"
  }
  upperCase = {
    use: "",
    characters: lowerCase.characters.toUpperCase()
  }
  numeric = {
    use: "",
    characters: "0123456789"
  }
  specialChar = {
    use: "",
    characters: " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
  }

  // prompts & validation
  charCount = Number(prompt(
    "Password must be 8 to 128 characters.\n\n" +
    
    "Please enter a number from 8 to 128 to specify the number of characters you would like to use:\n"
  ));
  while ((charCount < 8) || (charCount > 128) || (isNaN(charCount))) {
    charCount = Number(prompt(
      "Invalid entry, please enter a number from 8 to 128:\n\n"
    ));
  }

  lowerCase.use = prompt(
    "Would you like to include lowercase letters?\n\n" +
    
    "Enter yes or no:\n"
  ).toLowerCase();
  while ((lowerCase.use !== "yes") && (lowerCase.use !== "no")) {
    lowerCase.use = prompt(
      "Invalid entry.\n\n" +
      
      "If you would like to use lowercase characters then please enter yes or no:\n"
    ).toLowerCase();
  }

  upperCase.use = prompt(
    "Would you like to include uppercase letters?\n\n" +
    
    "Enter yes or no:\n"
  ).toLowerCase();
  while ((upperCase.use !== "yes") && (upperCase.use !== "no")) {
    upperCase.use = prompt(
      "Invalid entry.\n\n" +
      
      "If you would like to use uppercase characters then please enter yes or no:\n"
    ).toLowerCase();
  }

  numeric.use = prompt(
    "Would you like to include numeric characters?\n\n" +
    
    "Enter yes or no:\n"
  ).toLowerCase();
  while ((numeric.use !== "yes") && (numeric.use !== "no")) {
    numeric.use = prompt(
      "Invalid entry.\n\n" +
      
      "If you would like to use numeric characters then please enter yes or no:\n"
    ).toLowerCase();
  }

  specialChar.use = prompt(
    "Would you like to include special characters?\n\n" +
    
    "Enter yes or no:\n"
  ).toLowerCase();
  while ((specialChar.use !== "yes") && (specialChar.use !== "no")) {
    specialChar.use = prompt(
      "Invalid entry.\n\n" +
      
      "If you would like to use special characters then please enter yes or no:\n"
    ).toLowerCase();
  }



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);