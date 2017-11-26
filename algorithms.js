function titleCase(str) {
   var splitTheStr = str.toLowerCase().split(' '); //split string into array and make lowercase
   for (var i = 0; i < splitTheStr.length; i++) {
       
       splitTheStr[i] = splitTheStr[i].charAt(0).toUpperCase() + splitTheStr[i].substring(1); 
       //take the Ith word and make the 1st character uppercase (the remaining string is already lowercase from above)
   }
   
   return splitTheStr.join(' '); //join all words together
}

titleCase("I'm a little tea pot");




function testCapitals(str){
  
  var splitTheString = str.toLowerCase().split(' ');
  
  for (var i=0; i<splitTheString.length; i++){
    splitTheString[i]=splitTheString[i].charAt(0).toUpperCase() + splitTheString[i].substring(1);
    console.log(splitTheString[i]);
  }
  return splitTheString.join(' ');
}
console.log(testCapitals("hiya HOMIE peeps"));

