// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'];


function getPasswordOptions() {
  var length = parseInt(
    prompt("how long would you like your password?")
  );

  if (isNaN(length) === true) {
    alert("password length must be a number")
    return;
  }

  if (length < 8) {
    alert("password is not long enough")
    return;
  }

  if (length > 128) {
    alert("password is to long")
    return;
  }

  var hasSpecialCharacter = confirm(`click "OK" if you would like special characters`);
  var hasNumericCharacter = confirm(`click "OK" if you would like numeric characters`);
  var hasLowerCasedCharacter = confirm(`click "OK" if you would like lower case characters`);
  var hasUpperCasedCharacter = confirm(`click "OK" if you would like upper case characters`);


  if (hasSpecialCharacter === false &&
    hasNumericCharacter === false &&
    hasLowerCasedCharacter === false &&
    hasUpperCasedCharacter === false) {
    alert("you must select at least one character")
    return;
  }

  var passwordOptions = {
    length: length,
    hasLowerCasedCharacter: hasLowerCasedCharacter,
    hasUpperCasedCharacter: hasUpperCasedCharacter,
    hasSpecialCharacter: hasSpecialCharacter,
    hasNumericCharacter: hasNumericCharacter,
  }
  return passwordOptions;

}

  function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];
    return randElement;
  }

  function generatePassword() {
    var options = getPasswordOptions();

    var result = [];

    var possibleCharacters = [];

    var guaranteedCharacters = [];

    if (options.hasSpecialCharacter) {
      possibleCharacters = possibleCharacters.concat(specialCharacters);
      guaranteedCharacters.push(getRandom(specialCharacters));

    }

    if (options.hasNumericCharacter) {
      possibleCharacters = possibleCharacters.concat(numericCharacters);
      guaranteedCharacters.push(getRandom(numericCharacters));

    }

    if (options.hasUpperCasedCharacter) {
      possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
      guaranteedCharacters.push(getRandom(upperCasedCharacters));
    }

    if (options.hasLowerCasedCharacter) {
      possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
      guaranteedCharacters.push(getRandom(lowerCasedCharacters));
    }


    for (var i = 0; i < options.length; i++) {
      var possibleCharacter = getRandom(possibleCharacters);

      result.push(possibleCharacter);
    }

    for (var i = 0; i < guaranteedCharacters.length; i++) {
      result[i] = guaranteedCharacters[i];

    };

    return result.join('');
  }

  var generateBtn = document.querySelector("#generate");

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
   
  }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





