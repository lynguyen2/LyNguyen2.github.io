// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value) {
    //parameter is a value
    //returns the same value unchanged
    return value;
}


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"   
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value) {
    //input is a value
     if (value instanceof Array) {
    //if the input value is an array, return "array"
        return "array";
    } else if (value === null) {
    //if the input value is null, return null
        return "null";
    //if the input value is anything else, return the type of value as a string
    } else {
        return typeof value;
    }
}

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(array, number) {
//input is an array and a number
    if (!Array.isArray(array) || number < 0) {
        //If <array> is not an array or the number is smaller than zero, return []
        return [];
//If <number> is not given or not a number, return just the first element in <array>.
    } else if (!Number.isFinite(number)) {
        return array[0]
    } else if (array < number) {
//if the number input is a bigger than the length of the array, return the array
        return array;
    } else {
//Otherwise, return the same index values as the input number parameter by using slice
        return array.slice(0, number)
    }
}


/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
//given a function with an array and a number as its parameters
_.last = function(array, number) {
    //return an empty array, if the array input isn't an array or the number input is < 0.
    if (!Array.isArray(array) || number < 0) {
        return [];
    //if the input number is not a number, then return the last element of the array
    } else if (!Number.isFinite(number)) {
        return array[array.length - 1];
    //if the number is bigger than the array's length, return the array
    } else if (array.length < number) {
        return array;
    //return the last portion of the array that matches the number input
    } else {
        return array.slice(Math.max(array.length - (number)));
    }
    };


/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
 //given a function with an array and a value
_.indexOf = function (array, value) {
 //start a for loop to iterate through all the elements of the array
    for(let i = 0; i < array.length; i++) {
    //if any of the array elements equal the value input, then return the index of that element
        if(array[i] === value) {
          let returnValue = i++;
            return returnValue;
        } 
    }
    //if no array elements equal the value input, then return -1
    return -1;
}

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
//I:function with the parameters of an array and a value
//O: Boolean value
_.contains = function (array, value){
//includes will determine if the array has the same value in it
    return array.includes(value) ? true : false;
}

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

//each function takes in a collection of an array/object and a function
_.each = function(collect, func) {
    //if the collect parameter is an array, create a for loop
  if(Array.isArray(collect)) {
    for(var i = 0; i < collect.length; i++){
    //loop through all the elements in the arry
      func(collect[i], i, collect);
    //call the function once for each element in the array
    }
  } else {
      //if the input collect is an object, create a for in loop 
    for (var key in collect) {
        //call the function once for each of the keys and values in the object
      func(collect[key], key, collect);
    }
  }
}


/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
 _.unique = function(array) {
     //takes in one parameter that's an array
     return array.filter((a, b) => array.indexOf(a) === b)
     //returns a new array of all alements that were duplicates removed
 }

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
//inputs: array and a function
_.filter = function(array, func) {
//create an empty array to store all the elements for which we are filtering out of the original array
    let newArray = [];
    _.each(array, function(element, index, array) {
    //use each to iterate through all the values of the array
        if (func(element, index, array)) {
    //looks through each value in the list, returning an array of all the values that pass a truth test
            newArray.push(element)
        }
    //push the filtered out elements into the newArray
    });
    return newArray;
};

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse of _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function (array, func) {
    //create a new array to collect all elements that reject  
    let newArray = [];
    //using each function to pass in all the elements and indexes of an array as the arguments
    _.each(array, function(element, index, array) {
    //if the elements are returning false, transfer it to the new array.
        if (!func(element, index, array)) {
    //one array of elements to have the trues & one array to have falses
            newArray.push(element);
        }
    //push the rejects into the newArray
    });
    return newArray;
};


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
//takes in two parameters: array and a function
_.partition = function(array, func){
    var truthy = [];
    var falsy = [];
//create two empty arrays for the split arrays to go into
    _.each(array, function(element, index, array) {
//use the each function to iterate the function through every element of the array
        let collect = func(element, index, array);
        if (collect) {
//if the function has only truthy values, push into the truthy empty array
            truthy.push(element);
        } else if (!collect) {
         falsy.push(element);
//if the function has only falsey values, push into the falsy empty array
        }
    });
//remember to return the now split 2 sub-arrays
    return [truthy, falsy];
};


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

//parameters: collection and a function
//I: either an array or an object and a function
//O: new array of values

_.map = function(collection, func){
    let newArray = []; 
    _.each(collection, function(thing, i, array){ 
        newArray.push(func(thing, i, array));
        });
        return newArray;
    
};

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
//I: an array of objects and a property
//O: all the values of a specified key in a new array
  _.pluck = function(array, key){
//using map will produce a new array of values
 return array.map(function(obj) {
    return obj[key];
  });
}
 
/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

//parameters: collection & function
//I: array or object and a function
//O: return true if ALL of the values from both array or object pass,
//   return false if a minimum of ONE value from both array or object is false
//   if function parameter is not provided as a parameter, return true if the element is truthy.
//   if it's anything else, then return false.

_.every = function(collection, func) {
    var check = func || _.identity;
    for (var i = 0;i < collection.length;i++) {
        if (! check(collection[i])) {
            return false;
        }
    }
    return true;
};

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

//parameters: collection & function
//I: array or object and a function
//O: return true if most of the values from both array or object pass,
//   return true if a minimum of ONE value from both array or object is false
//   if all values are falst, then return false
//   if function parameter is not provided as a parameter, return true if the element is truthy.
//   if it's anything else, then return false.

_.some = function(collection, func) {
    let result = false;
    _.each(collection, function(element, index, collection){
        if (typeof func !== 'function'){
            if (element){
            result = true;    
            }
        }
        else if (func(element, index, collection)){
            result = true;
        }
    });
    return result;
 };

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(array, callbackFunction, initialValue){
    //check if initialValue is defined
    if (initialValue !== undefined) {
    //if initialValue value passed, create a new variable called result and initialize
        var result = initialValue;
    //loop through the array starting at index 0 with the each function
        _.each(array, function(element, index, array) {
    //assign the result of passing each element to the function to the result variable
            result = callbackFunction(result, element, index, array)
        })
        return result;
        
    //if "seed" is undefined
    } else {
    //create new result variable and initialize it to the first element in the input array
    var result = array[0];
    //loop through the array starting at index 1 using the each function
    _.each(array, function(element, index, array) {
    //only reassign result if the index is not 0
        if (index !== 0) {
    //assign the result of passing each element to the function to the result variable
            result = callbackFunction(result, element, index, array);
        }
    })
    return result;
}
}



/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <ob ject 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
_.extend = function(...obj){
    //declare a finalTarget object
    var finalTarget = {};
    //Object.assign will copy all properties from object2 and paste them in object 1
    finalTarget = Object.assign(...obj);
    //remember to return the update object
        return finalTarget;
}
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
