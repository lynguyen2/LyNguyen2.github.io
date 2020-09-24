/**
 * CONTROL FLOW
 * 
 * 0. In Javascript, conditional statements allow us to control the flow of our code.
 * With the argument(s) we propose, we are able to decide whether a code snippet runs or not.
 * To use conditional statements, we will use if - else if - else statement. The result of 
 * this statement is something called a Boolean: true or false. If the argument returns false,
 * then the if, else if - else statement will run until it finds an argument where it can
 * return a true. Only then will the statement stop at that point and no longer need to test 
 * the rest of the statement.  
 * 
 * 1. SYNTAX: if (arguments) {
 *              return true/false
 *           } else if (arguments) {
 *              return true/false
 *           } else {
 *               return true/false
 *            }
 * 
 * 2. BREAKDOWN OF SYNTAX
 *      a) Start with an if statement - Inside the parenthesis will be your conditional 
 *         statement, the code you want to test.
 *      b) Add the body inside curly brackets { body } - you can either state for your
 *         1st conditional statement to return true OR false.
 *      c) Add your else if - There are a few notes before I go into detail about this!
 *         In your code block, you can have as many else ifs as you need, but if you only
 *         need 2 arguments in your if statement...skip to line d). Make sure all these
 *         arguments do not contradict each other or you'll have a useless bloack of code.
 *      d) Add your ending else - This should be the last argument to be tested for true
 *         or false.
 **/ 
// 3. EXAMPLE
        var condition = "blue";
        
        if (condition === "turquiose") {
            // block of code to be executed if condition1 is true
        } else if (condition === "pink") {
            // block of code executed if the condition1 is false and condition2 is false
        } else if (condition === "yellow") {
            // block of code executed b/c all conditions are false up to now
        } else if (condition === "white") {
            // block of code executed b/c nothing is true yet
        } else if (condition === "light blue") {
            // block of code executed, false still, can be as many else ifs needed
        } else if (condition === "blue") {
            // block of code executed and STOPS! returns true
        } else {
            
        };
        