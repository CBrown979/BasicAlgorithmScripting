function palindrome(str) {
  // Good luck!
  var removeChars = /[^a-zA-Z0-9]/g; // to remove all non-alphanumeric characters
  var makeLowercase = str.toLowerCase().replace(removeChars, ""); //holds value of the lowercase string with any removed characters replaced by blanks
  var newString = makeLowercase.split("").reverse().join(""); //splits the original lowercase string, reverses and joins back together
  if (makeLowercase === newString){ //checks if both strings are the exact same
    return true;
  } else {
    return false;
  }
}
palindrome("eye");






var string="Candice";
var newString=string.replace("Candice","Bianca");

console.log(string);
console.log(newString);

var name="Candice Bianca Brown";
console.log(name);
console.log(name.toLowerCase());
console.log(name.split(""));
console.log(name.split('').reverse());
console.log(name.split('').reverse().join(''));
console.log(name.split());


