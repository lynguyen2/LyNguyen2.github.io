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
    // must use the filter function to filter out the male customers
    // output must be a number
    return _.filter(array, function(customer){
        // return a condition that resolves to true or false based on the arguments
        // test if the customer obj has a gender prop of male
        return customer.gender === "male";
    }).length;
};

var femaleCount = function(array){
    // must use reduce to the gender count to a single number output
    return _.reduce(array, function(totalFemale, currentVal){
        // return a condition that resolves to true or false based on the args
        // test if the customer has a gender of female
        return totalFemale + (currentVal.gender === "female");
        // start the seed at 0, to get an accurate count
    }, 0);
 
};

var oldestCustomer = function(array){
// find the customer with the oldest age, store that value
// access that object, and return the oldest peron's name
// return a string
var max = 0;
return customers.reduce((acc, customer) => {
// if the customer's age is 
  if (customer.age > max) {
    acc = customer.name;
    max = customer.age;
  }
  return acc;
}, "");
};


var youngestCustomer = function(array){
return _.reduce(customers, function(acc, current){
       if (acc.age < current.age) {
          return acc;
       } else {return current}
    }).name;

 };


var averageBalance = function(array){
// .map remove $ then .map remove ,
    var withoutMoney = _.map(array, function(customerObj){
        return customerObj.balance.slice(1);
    })
// replace to comma --> ""
    var withoutCommas = _.map(withoutMoney, function(theBalance){
        return theBalance.replace(/\,/g, '')
    })
// turn string digits into numbers
    var numbers = _.map(withoutCommas, function(theBalance){
        return parseFloat(theBalance);
    })
// add all of the balances from every element, --> reduce
    var accNum = _.reduce(numbers, function(totalNum, customerObj){
        return totalNum + customerObj
    }, 0)
// divide by total number of balances for the average --> / length
    return accNum / array.length;
};



var firstLetterCount = function(array, letter){
// search array to find the # of customers with the input letter
// method chaining
    var firstLetterArray = [];
    var count = 0;
     _.map(array, function(element, index, array){
        firstLetterArray.push(customers[index].name[0]);
			if (firstLetterArray[index].toLowerCase() === letter.toLowerCase()){
				count++;
			}
        });
    // console.log(firstLetterArray)
	return count;
// return number
}


var friendFirstLetterCount = function(array, customer, letter){
// find the matching letter in the customers object
// case sensitive
    var friends = [];
    var letterArr =[];
    var count = 0;
// look at each customer in the customers Array -- .each
     _.each(array, function(element, index, collection){
// return customer names in array form
    var currCustomer = element.name;
// if customer array === customer in the parameter
    if(currCustomer === customer){
        friends = element.friends;
        _.map(friends, function(element, index, array){
            // if the friend is inside customer array
            var currentFriend = friends[index];
    // customer friend's name[0].toLowerCase = letter.toLowerCase 
    // push the matching person name into friends [];
        letterArr.push(currentFriend.name[0].toLowerCase());
            if(letterArr[index] === letter.toLowerCase()){
                 count++;
				}
			});
		}
	});
	// return number, which is the length of the array  
	return count;
};


var friendsCount = function(array, customer) {
    // create a variable called result that will hold an array with the customer objects of each valid customer
    let result = _.filter(array, function(obj) {
        // loop through the friends array for each object passed to the filter function
        for (let i = 0; i < obj.friends.length; i++) {
            // check if the name of any of the friend objects in the friends array matches the customer name passed to the outer function
            if(obj.friends[i].name === customer) {
                // if yes, return true and the filter function will add the object to the resulting new array
                return true;
            
            }
        };
    });
    // return an array containing only the name from each of the friend objects using the pluck function and passing in the result array and the property to pluck 'name'
    return _.pluck(result, 'name');
}

console.log(friendsCount(customers));


var topThreeTags = function(array){
    //find the three most common <tags> in customer objects
    //access the customer tags and add them to an array
var topTags = _.reduce(array, function(acc, customer){
    _.each(customer.tags, function(tag){
        if(acc[tag]){
            acc[tag]++;
        } else {
            acc[tag] = 1;
        }
    });
    return acc;
}, {});
    topTags = _.map(topTags, function(count, tag){
        return [tag, count];
    });
    topTags.sort((a,b) => b[1] - a[1]);
    topTags = _.first(topTags, 3);
        return _.map(topTags, tag => tag[0]);
};
// console.log(topThreeTags(customers))


var genderCount = function(array){
    return _.reduce(customers, function(finalCount, genderObj){
        // check to see if the object has that gender in it
        if(finalCount[genderObj.gender]){
            // if it exists is the object, add 1 to it
            finalCount[genderObj.gender]++;
        } else {
            // if it doesn't exist, create it
            finalCount[genderObj.gender] = 1;
        }// return the tally
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
