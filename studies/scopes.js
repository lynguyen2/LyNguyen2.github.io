/**
 * SCOPING
 * 
 * 0.  In Javascript, scope manages the accessibility of variables, functions, 
 * and objects in specific areas of your code. 
 * 
 * 1. There are generally two main types of scopes:  global and local (or function) 
 * scope. When you start typing Javascript on your platform, you’re typing in the 
 * global scope. When you start declaring functions, you’re creating a function scope.
 * Basically, the global scope is anything outside of functions. Variables in the 
 * global scope can be accessed and altered in any other scope. On the other hand, 
 * Functions and variables inside of function are enclosed in their local scope, 
 * and variables are only limited to their local scope. This means, if a variable 
 * is declared inside of a function, it’s only available within the function itself 
 * and any functions declared within it. Block scope is anything inside of {} brackets. 
 *
 * 2. Block Scope: Certain variables are bound within their scopes. It can be the 
 * area within the {} of if, else, switch conditions or for, do while, and while loops.
 * Var is not blocked scoped. You can declare var anywhere in your code, and thus, it
 * is accessible anywhere in your code. A code block does not create a scope for var 
 * variables, but a function body does. Let and Const are limited to their local 
 * scopes. You can only access let and const within their scopes; they don’t exist
 * outside of their code block.
 * 
 * 3. Q: There is a variable in the global scope and a parameter with the same name, 
 * if you are within the function body which would you access? If you were in the 
 * global scope, which would you access? Why?
 *    A: If I were inside the function body, I would only have access to the 
 * parameter. The reason why is because I am inside of a function which has a 
 * function scope. I am only limited to what variables are declared inside my 
 * local scope with a function. If I were in the global scope, I would be able 
 * to access both the global scope variable and the parameter with the same name, 
 * because I’m in the global scope. Var isn’t blocked scoped. 
**/
// 4. EXAMPLE:
             var value = 12;  // Declared in global scope
             function localScope(value) {
                var value;    // accessed inside of function scope
                console.log(value); // 12 (and not undefined)
             }
             localScope(value); 

