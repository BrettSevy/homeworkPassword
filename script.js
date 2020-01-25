// Assignment Code
var generateBtn = document.querySelector("#generate");
var size = generateBtn


//messages//
generateBtn.addEventListener("click", function() {
  if(alert ("do you need a password?")) 
   ;
  var size = prompt ("How long would you like your password? 8 - 128")
  var upper = confirm("do you want uppercase letters?");
  var lower = confirm('do you want lowercase letters?');
  var symbols = confirm("do you want any special characters?");
  var numbers = confirm('do you want numbers');
   
  })
    

  //varibles//
var upper = ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz12344567890!@#$%^&*()");
var lower = ("abcdefghijklmnopqrstuvwxyz");
var numbers = ("1234567890");
var symbols = ("!@#$%^&*()_+");


function password() {
    var password ="";

    for (var i = 0; i < size; i++) {
        password += upper.charAt(Math.floor(Math.random() * upper.length));
        
    }
    
    return password;
}

console.log(password())












// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)



