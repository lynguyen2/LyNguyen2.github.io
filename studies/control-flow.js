/**
 * CONTROL FLOW
 * 
 * 0. In Javascript, conditional statements allow us to control the flow of our code.
 * With the condition(s) we propose, we are able to decide whether a code snippet runs or not.
 * To use conditional statements, we will use if - else if - else statement. The result of 
 * this statement is something called a Boolean: true or false. If the condition returns false,
 * then the if, else if - else statement will run until it finds a condition where it can
 * return a true. Only then will the statement stop at that point and no longer need to test 
 * the rest of the conditional.  
 * 
 * 1. SYNTAX: if (condition) {
 *              return true/false
 *           } else if (condition) {
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
// 3. EXAMPLE OF AN IF STATEMENT
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
        
        }
        
/**
 * 4.  Switch Statements: Another way to to control the flow of our code would be to use swith
 * statements. They're similar to if statements, and to the eyes, it's a cleaner code. It 
 * will evaluate an expression, matching the expression's value to a case caluse and executes
 * statements associated with that case, as well as statements in cases that follow the 
 * matching case.
 *
 * 5. SYNTAX:  switch (expression) {
 *               case value1:
 *                  break; 
 *               case value2:
 *                  break;
 *               case value3:
 *                  break;
 *                  default:
 *             }
 *
 * 6.  BREAKDOWN OF A SWITCH STATEMENT
 *      a) Start with giving an expression to evaluate and several different statements to 
 *         execute based on the value of the expression
 *      b) The interpreter checks each case against the value of the expression until a 
 *         match is found.
 *      c) The break statements indicate the end of a particular case. If they were omitted,
 *         the interpreter would continue executing each statement in each of the following 
 *         cases.
 *      d) If nothing matches, a default condition will be used.
**/
// 7. EXAMPLE OF A SWITCH STATEMENT
        let expression;
        switch (expression) {
          case 'oranges':
            console.log('You are ordering oranges.');
          break;
          case 'apples':
            console.log('You are ordering apples.');
          break;
          case 'bananas':
            console.log('You are ordering bananas.');
          break;
          case 'mangoes':
          case 'papayas':
            console.log('You are ordering mangoes and papayas.');
          break;
          default:
            console.log('Sorry, we are out of ' + expression + '.');
        }
        
        console.log("Is there anything else you'd like?");
 