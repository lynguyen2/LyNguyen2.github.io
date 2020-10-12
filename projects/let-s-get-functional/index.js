// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-lynguyen");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */
// console.log(customers);
var maleCount = function(array) {
    //must use the filter function to filter out the male customers
    //output must be a number
    return _.filter(array, function(customer){
        //return a condition that resolves to true or false based on the arguments
        // test if the customer obj has a gender prop of male
        return customer.gender === "male";
    }).length;
};

var femaleCount = function(array){
    return _.reduce(array, function(totalFemale, currentVal){
        return totalFemale + (currentVal.gender === "female");
    }, 0);
 
};

var oldestCustomer = function(array){
// find the customer with the oldest age, store that value
// access that object, and return the oldest peron's name
// return a string
var max = 0;
return customers.reduce((acc, customer) => {
  if (customer.age > max) {
    acc = customer.name;
    max = customer.age;
  }
  return acc;
}, "");
};


var youngestCustomer = function(array){
return _.reduce(customers, function(acc,current){
       if (acc.age < current.age) {
          return acc;
       } else { return current}
    }).name;

 };

var averageBalance = function(array){
// get rid of $ symbol and commas
// turn string digits into numbers
// add all of the balances from every element,
// divide by total number of balances for the average
};

var firstLetterCount = function(array, letter){
// search array to find the # of customers with the input letter
    
// return number
}

var friendFirstLetterCount = function(array, customer, letter){
    
// return number   
}

var friendsCount = function(array, name){
    
// return an array    
}

var topThreeTags = function(array){


// return an array    
};

var genderCount = function(array){
    return _.reduce(customers, function(finalCount, genderObj){
        // check to see if the object has that gender in it
        if(finalCount[genderObj.gender]){
            //if it exists is the object, add 1 to it
            finalCount[genderObj.gender]++;
        } else {
            //if it doesn't exist, create it
            finalCount[genderObj.gender] = 1;
        }
        return finalCount;
    }, {});
};


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
