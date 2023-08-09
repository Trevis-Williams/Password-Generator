// Assignment code here

const generatePassword = () => {
  var upperSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var lowerSet = "abcdefghijklmnopqrstuvwxyz"
  var numbset = '0123456789'
  var specialSet = '!@#$%^&*()_+~`|}{[]:;?><,./-='
  var charset = "";
  const length = prompt('What is the length of the password?')
  if (length < 8){
    return "length cannot be less then 8"
  }
  if (length >128){
    return "length cannot be more then 128"
  }
  const includeUpper = confirm('would you like to add uppercase')
  const includeLower = confirm('would you like to add lowercase')
  const includNumSet = confirm('would you like to add numbers?')
  const includeSpecial = confirm('would you like to add speical charceters')
  if (!includeUpper && !includeLower && !includNumSet && !includeSpecial ) {
    return "You have to pick something"
  }
  if (includeUpper == true) {
    charset = charset + upperSet
  }
  if (includeLower == true) {
    charset = charset + lowerSet
  }
  if (includNumSet == true){
    charset = charset + numbset
  }
  if (includeSpecial == true) {
    charset = charset + specialSet
  }
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
};




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





