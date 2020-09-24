// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
//input: is a base which is a number or string
//return an entire function that tests whether the given value is greater than the base
return function(value){
//if the value argument is greater than the base argument, return true
    if(value > base){
        return true;
    } else {
//if the value is less than te original, return false
        return false;
    }
};
    //to test code: var greaterThan3 = createGreaterThanFilter(3)
    //              greaterThan3(10)
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    return function (value){
    if (value < base){
        return true;
    } else {
        return false;
    }
};
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    return function (string){
     if(string[0].toLowerCase() === startsWith.toLowerCase()){
        return true;
    } else {
        return false;
    }
}
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    return function(string) {
        if(string.toLowerCase()[string.length - 1] === endsWith.toLowerCase()){
        return true;
    } else {
        return false;
    }
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    //input is an array of strings
    //and a function going into modify
    //output is return the array of strings after utilizing the modify functions on them
    //starting point: beginning of the strings array
    //ending point: the end of the strings array
    var collections = [];
    // console.log(strings[i]);
    for(var i = 0; i < strings.length; i++) {
         collections.push(modify(strings[i]));
      console.log(collections);
      //console.log(modify); //to see what going on
    } 
    //call the modified function and collect the results
    return collections;

    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    //input is an array of strings
    //and a function to test the string
    //output is return a boolean on whether it passed, return true if ALL strings pass
    //starting point: beginning of the strings array
    //ending point: boolean
    for (var i = 0; i < strings.length; i++) {  
        if(test(strings[i]) === false) {
            return false;
        }
        
        }
        return true;
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}