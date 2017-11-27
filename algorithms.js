function largestOfFour(targetArrays) {
  return targetArrays.map(function(withinArray) { //maps over the complete target-arrays 
    return Math.max.apply(null, withinArray); // return the largest numbers for each withinArray using the Math.max() method
  });
}
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
//Output: [ 5, 27, 39, 1001 ]



var testNums=[12, 90, 65, 92];
console.log(Math.max.apply(null, testNums));//gets the largest number in an array - named testNums (2nd argument);

var timesTwo=testNums.map(function(num){//shows how map works when a function requiring one argument is used with it. 
//The argument will automatically be assigned from each element of the array as map loops through the original array.
  return num * 2;
})
console.log(timesTwo);
console.log(testNums);

var moreTestNums = [1, 4, 9];
var triples = moreTestNums.map(function(num) {
  return num * 3;
});
console.log(triples);


