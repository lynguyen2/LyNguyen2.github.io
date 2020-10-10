/**
 * FUNCTIONS
 * 
 * 0. Functions are reuseable blocks of code that allow us to perform a task or 
 * calculate a value and more. We use functions to avoid writing the same code 
 * multiple times. The two phases to using functions: First we must define your 
 * function. Next we can execute/invoke/call/apply a function by giving it 
 * instructions on what to do.
 * 
 * 1. SYNTAX:   function declarationName(parameter, parameter2) {
                    body of function
                    return statement
                };
                
                declarationName();
 *
 * 2. BREAKDOWN OF SYNTAX:
 * Four parts are need: function word to start your function, declare your function
 * name, include your parameters inside the parenthesis, next add your function body.
 * whatever you need inside your function, and don't forget your return statement.
 * 
 * 3. Parameters - Functions can optionally take parameters; they can take none or as
 * many as are required. You should think of parameters as placeholders for your 
 * arguments that are later "passed" or given to the function when it's time to call.
 * 
 * 4. Return statements (*optional) - pulls a value from a function call. It can only
 * be used in a function body. The return gives function a value. In the console, if 
 * there is no return statement, it will print undefined. 
 * 
 * 5. Function body - code or blocks of code that will run through once you call your
 * function with arguments.
 * 
 * 6. Calling functions - means to execute the function with your own selected values.
 * It actually performs the specified actions with the indicated parameters. Calling
 * the function will be after the function has been closed with your curly bracket }
 * SYNTAX: function name(arguments to be passed through the parameters);
 *         declarationName(2, 3);
 * 
 * 7. Scopes - Functions can see and modify variables in parents and global scopes. 
 * The inverse is NOT true. Because functions hoist, functions will hoist into memory
 * named function definitions and variables where it can be referenced at any time.
**/
// 8. Closures - Functions form closures around the data they house. A closure is 
// an inner function that has access to the outer (enclosing) function’s variables.
// The inner function has access not only to the outer function’s variables, but 
// also to the outer function’s parameters. If an object returned from the function
// is held in memory somewhere (referenced), that closure stays alive, and data 
// can continue to exist in these closures. 
// EXAMPLE OF CLOSURES:
            function displayName(firstName, lastName){
            var name = "Your name is ";
                function fullName(){
                // This inner function has access to the outer function's 
                // variable, including its parameters
                    return `${name} ${firstName} ${lastName}`;
                }
                return fullName();
            }
            displayName("Britney", "Spears");

// 9. EXAMPLE OF FUNCTION:
// Given a number, return the number increased by 1.
               var test = 11;
               function increase(number) {
                   number ++;
               }    
               increase(test);
               console.log(test); // prints 12