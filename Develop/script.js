// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength;
var lowercaseChoice;
var uppercaseChoice;
var numericChoice;
var specialChoice;
// Arrays of Characters
var lowerCaseChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numericChar = ['0','1','2','3','4','5','6','7','8','9'];
var specialChar = ["!","#","$","%","&","'","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[",",","^","_","`","{","|","}","~"];

// Function for password length
function length() {
  passwordLength = prompt("Enter how many characters you want in your password.(Minimum 8, Max 128.)")
}

// Function for lowercase
function lowercase() {
  lowercaseChoice = prompt("Do you want lowercase letters in your password? \n(Yes or No)")
}
// Function for Uppercase
function uppercase() {
  uppercaseChoice = prompt("Do you want uppercase letters in your password? \n(Yes or No)")
}
// Function for NumericChar
function numeric() {
  numericChoice = prompt("Do you want numbers in your password? \n(Yes or No)")
}
// Function for specialChar
function special() {
  specialChoice = prompt("Do you want special characters in your password? \n(Yes or No)")
}

// Function to generate password
function generatePassword() {
  length();
  console.log(passwordLength);
  lowercase();
  console.log(lowercaseChoice);
  uppercase();
  console.log(uppercaseChoice);
  numeric();
  console.log(numericChoice);
  special();
  console.log(specialChoice);
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
