// Assignment Code
var generateBtn = document.querySelector("#generate");




//messages//
var writePassword =alert("you need a new password");
var size = prompt('how long would you like your password? 8 - 128');
//var upper = confirm("do you want uppercase letters?");
//var lower = confirm('do you want lowercase letters?');
//var symbols = confirm("do you want any special characters?");
//var numbers = confirm('do you want numbers');



//varibles//
var upper = ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz12344567890!@#$%^&*()");
var lower = ("abcdefghijklmnopqrstuvwxyz");
var numbers = ("1234567890");
var symbols = ("!@#$%^&*()_+");


function password(size, upper) {
    var pwd ="";

    for (var i = 0; i < size; i++) {
        pwd += upper.charAt(Math.floor(Math.random() * upper.length));
        
    }
    
    return pwd;
}

console.log(password(size, upper))



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

