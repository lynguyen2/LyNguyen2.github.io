// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  
//print all values in the loop
  for(var i = 0; i < array.length; i++){ 
    //use array[i] because you're looping through the values of array
    console.log(array[i]); 
  }

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */ 
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
//print all the values in the loop, but in reverse/backwards  
  for (var i = array.length - 1; 0 <= i; i--) {
    console.log(array[i]);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
//return an array containing the object keys using  Object.keys -_-  
  for (var keys in object) {
    return Object.keys(object);
  }

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  //go through the object and print its keys to the console
  for (var key in object) {
    console.log(key);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
//return an array with the object's values using Object.values
  for (var key in object){
    return Object.values(object);
}
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
//loop over the object and print its values to the console
  for (var key in object) {
    console.log(object[key]);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
//return the # of key/value pairs stored within that object
  for (var keys in object) {
    return Object.keys(object).length;
}
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  var newArray = [];
  //loop though the object parameter 
for (var key in object) {
  //then push your values into the empty newArray 
    newArray.push(object[key]); 
} //close for loop before opening a new one
    for (var i = newArray.length - 1; i >= 0; i--) {
      console.log(newArray[i]);
    } //reverse your loop, then print
    // use newArray[i] because you want to loop through the values in newArray


//loop over the object values and print
//print values in reverse      

      
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
