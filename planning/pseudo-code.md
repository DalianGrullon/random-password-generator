# Random Password Generator

## Requirements
- UI must adapt to multiple screen sizes
- password can include special characters
- on generator click:
    - prompts for password criteria:
        - 8 to 128 characters
        - character types: lowercase, uppercase, numeric, and/or special character
    - each response should be validated and include at least one character type
    - generated password must meet selected criteria
    - final password must be displayed on the page

## Method
1. define function for generatePassword()
    1. define variables for criteria
        ```
        userPassword = ""
        characterCount = number
        lowerCase = {
            use: true/false,
            characters: "abcdefghijklmnopqrstuvwxyz",
            characterLength: characters.length
        }
        upperCase = {
            use: true/false,
            characters: lowerCase.characters.toUpperCase()
            characterLength: characters.length
        }
        numeric = {
            use: true/false
            characters: "0123456789"
            characterLength: characters.length
        }
        specialCharacter = {
            use: true/false
            characters: " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
            characterLength: characters.length
        }
        ```
    2. prompt for each criteria and validate input
        - validation:
            ```
            if (input is invalid) {
                prompt for re-entry
            }
            ```
    3. generate random password based on criteria
        ```
        while (characterCount > 0) {
            if (character type is true) {
                userPassword += object.characters.charAt(Math.floor(Math.Random() * object.characterLength));
                
                characterCount--;
            }
        }
        ```
    4. return userPassword
    