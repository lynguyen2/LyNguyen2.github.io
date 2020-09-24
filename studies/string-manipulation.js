/**
 * STRING MANIPULATION
 * 
 * 0. String Manipulation in Javascript consists of using one of two ways: with operators
 * or with string methods. Javascript had many powerful built-in functions that make working 
 * with strings easy for developers.
 **/ 
// 1. String Manipulation with operators: 

//      a) concat() - joins two strings together
            var cat = "cat";
            var dog = "dog";
            console.log(cat.concat(" ", "dog")); // prints "cat dog" 
        
// 2. String Manipulation with string methods:

//      a) .toUpperCase() - capitalizes entire string
            var greeting = "hello";
            greeting.toUpperCase(); // prints "HELLO"
            
//      b) .toLowerCase() - lower cases entire string
            var greetingTwo = "cHaO";
            greetingTwo.toLowerCase(); // prints "chao"
            
//      c) .slice(start, [end]) - returns a section of a string 
            var wordIntoTwo = "wonderful"; 
            wordIntoTwo.slice(0, [6]); // returns "wonder"
            
//      d) .split(seperator, [limit]) - converts string into an array of strings
            var message = "Have a good day!";
            var word = message.split(" ");
            console.log(word[2]); // prints "good"

//      e) .length - finds the length of a string
            // var quote = "Coding is great!";
            // console.log(quote.length()); // prints 16 
            
//      f) .startsWith(searchString, [position]) - checks if a string starts with the substring you pass in
            var beginning = "Today is the day.";
            console.log(beginning.startsWith('Today')); // prints true
            
//      g) .trim() - removes white spaces
            var spaces = "       What's up?                   ";
            console.log(spaces.trim()); // prints "What's up?"
