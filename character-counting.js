function characterCounting (string) {
var array = string.replace(/ /g,'').toLowerCase().split("");
//console.log(array[0]);
var myObject = {};
for (var i = 0; i < array.length; i++) {
  //console.log(array[i]);
  //console.log(cur);
  var cur = array[i];
  myObject[cur] = 0;
}

 for (var i = 0; i < array.length; i++) {
     myObject[array[i]] = myObject[array[i]+1
  }

 return myObject;


}

console.log (characterCounting("Hi everyone! What is up? "));







//write a counter statement to run through the array and assign

// Write a function countLetters that can return to us all the unique characters that exist in a string that  is passed into the function.




// Furthermore, the function should also report back how many instances of each letter were found in the string.

// Functions can only return one thing. That thing can (as we've seen) be a primitive data type, like a number, a boolean, null or a string.

// However, our function countLetters needs to return an object that can represent the stats for the sentence it is given: all the characters found in the input string, and their respective counts.

// What should the object returned back by countLetters look like?



// Perhaps it could return an object where each unique character encountered is a property of the object and the value for that property/key should be the number of occurrences for that character.

// So countLetters("lighthouse in the house") would return this: