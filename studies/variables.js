/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// 4. We can assign and re-assign anything to a variable using "var" and it is hoisted. //
// var creates variables on the global scope and is Function scoped
// var myVariable = 1; // declaring new variable OK
// var myVariable = true; // delaring variable to something new OK
// myVariable = "someString"; //re-assign OK

// 5. "let" can assign and be re-assigned, but it can NOT be redeclared or hoisted. //
// let does not create global variables & is block scoped (as in loop and if/else scoped)
// let myDeclare = 2;
// myDeclare = "hello";  // re-assign OK
//let myDeclare = 3;    // re-declare *WILL NOT WORK* - parsing error

// 6. "const" means constant and can NOT re-assign, NOR be re-declared NOR does it hoist. //
// const doesn't not create global variables
// const newVar = 2;  // declaring new variable
// newVar = 2; // re-assign *WILL NOT WORK*

