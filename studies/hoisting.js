/**
 * HOISTING
 * 
 * 0. Hoisting is a process that runs when we use variables for declaration or 
 * use a function declaration; it gets "lifted like a crane" to the top of your 
 * code. When we think of hoisting, it is something that happens figuratively 
 * in the code, and NOT literally, so no code is physically moving around. We 
 * must be conscious of hoisting because it allows us to access our declarations
 * only at certain points in our code. A key to note is that the only thing that 
 * gets moved to the top is the variable/function declarations, not the actual
 * value given to the variable/function. Hoisting gives these declarations a 
 * space in memory.
 * 
 * 1. Hoisting happens before the code is executed by a JS interpreter. The 
 * JavaScript engine interprets the code written within this Global Execution 
 * Context in two separate phases; compilation and execution. It'll scan code 
 * and hoist variable/function declarations then it will executes hoisted code.
 * 
 * 2. Variables Let and Const are not hoisted.
 * 
 * 3. Function declarations vs Function expressions
 * When we declare a function, we're "saving it for later use" by invoking the 
 * function. Declarations differ from expressions by the fact that expressions 
 * do NOT get hoisted. Function declarations are hoisted to the top so that we
 * can define them anywhere in our code and they're available for us throughout
 * that same scope. Expressions are stored in a variable, therefore it can be
 * invoked by using the variable name. Functions as expressions do not need
 * function names.
**/
// 4. EXAMPLE:
                var x;
                function hoist(){
                    x = 12; 
                    let y = 100;
                }
                hoist();
                
                console.log(x); // 12 -- Accessible as a global variable
                                // outside of hoist() function. It is 
                                // hoisted to the top of the code.
                                
                                
             // console.log(y); // Error -- Let is not hoisted. 
                                // Declared inside of a function.
                                // Therefore, it's local scoped.