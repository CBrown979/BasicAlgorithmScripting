function findLongestWord(str) {
  var splitArray = str.split(' ');
  var longestWord = 0;
  
  for (var i=0; i<splitArray.length; i++){
    if(splitArray[i].length > longestWord){
      longestWord=splitArray[i].length;
    }
  }
  return longestWord;
}

findLongestWord("The quick brown fox jumped over the lazy dog");



function testLongString(str){
  var splitArray = str.split('');
  
  var holdLongestWord = 0;
  for (var i=0; i<splitArray.length; i++){
    if(splitArray[i].length > holdLongestWord){
      holdLongestWord = splitArray[i].length;
    }
  }
  return holdLongestWord;
}
testLongString("I am going to be a great application developer");


