/**
 * LOOPS
 * 
 * 0. Loops do exactly what their name implies. They iterate through code as many times 
 * as you need it to repeat. Loops are features of Javascript that allow us to execute 
 * a block of code until you tell it to stop.
 * 
 * 1. There are 3 types of loops and they are to be used with specific data types. 
 **/
// 2. For iterating and looping over arrays, use the "for Loop"   
// SYNTAX: 
        for (var i = 0; i >= 5; i++) {
            console.log(i);
        };

// If you change your variable in the parenthesis, remember to change all the variables.
// Inside the parenthesis, you must indicate when you would like to start your loop, 
// end your loop and by how many increments/decrements in each loop. 
// The Breakdown of the Syntax:
//  (var i = 0;  <--- means loop will start at 0
//      i >= 5;  <--- means loop will end at 5
//         i++)  <--- means loop will increment by 1
// To loop backwards, you would start your loop with the array value you'd like to start
// with and work backwards 
       var array = [];
       for (var i = array.length; i >= 0; i--) {
           console.log(array[i]);
       };

// 3. For objects, use the "for-in Loop"
//  SYNTAX:  
        var object = { name: "Ly", age: 29, gender: "female" };
        
        for (var key in object) {
            console.log(object[key]);
        };
 
// Inside your parenthesis, you must indicate your variable 'key' and the object you're
// looping through.
// The Breakdown of the Syntax:
//   (var key     <--- variable 'key'
//  in object)    <--- reference to the object you're looping through
 
// 4. "While Loops" will continue to execute while the condition is true.
// SYNTAX:  
        var i = 0;
        while(i < 5) {
           console.log(i);
           i++;
        };
  
// Your arguments will go inbetween the parenthesis.
