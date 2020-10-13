// Assignment Code
var generateBtn = document.querySelector("#generate");

const uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const numbers = [0,1,2,3,4,5,6,7,8,9]
const special = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ':', ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"]
function generatePassword() {
  var length = prompt("Enter a password length")
  console.log(length)
  if (length < 8 || length > 128) {
    alert("Invalid password length, must between 8 and 128")
  }
  var useLowercase = confirm("Do you want lowercase letters in your password?")
  console.log(useLowercase)
  var useUppercase = confirm("Do you want uppercase letters in your password?")
  console.log(useUppercase)
  var useNumbers = confirm("Do you want numbers in your password?")
  console.log(useNumbers)
  var useSpecial = confirm("Do you want special characters in your password?")
  console.log(useSpecial)

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
