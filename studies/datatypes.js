/**
 * DATA TYPES:
 * 
 * 0: There are 2 main types of data types in Javascript called: Simple/Primitive and Complex.
 **/ 
// 1: Simple/Primitive data types include:  

//      a) number = number data
            var age = 23;
//      b) string = character data
            var firstString = "Hello, I am a string."
//      c) boolean = true/false
            true
//      d) NaN = Not a Number
            var hello = isNaN("hello"); // prints false
//      e) undefined = no-value
            undefined
//      f) null = no-value

//      h) -infinity = greatest negative #

//      i) infinity = greatest #

/** 
 * 1a. Primitive data types store information on the Stack, where they are immutable aka unable to
 * be changed. They can return a new value, but they do not alter the original value. When they process,
 * their data is copied or passed by value, meaning they are copied from one variable to the next.
 * Simple data types don't hold much space, therefore it is fast. 
**/ 
// 2: Complex data types include: 
//      a) objects 
            var firstObj = { };
//      b) arrays
            var firstArr = [ ];
//      c) functions
            function firstFunc() {
                
            };
/** 
 * 2a. Complex data types store information on the Heap. They are mutable aka can be modified, changed
 * and added to. Their complexities are limitless. They can affect and aggravate the original value and 
 * other values. When they process, their data is passed by a copy of a reference. They have infinite 
 * space, but can run alittle bit slower.
 */

// Primitive data types copy by value example //
let name = "Ly";
// name = Ly
let displayName = name;
// displayName = "Ly"
name = "Vanessa";
// name = "Vanessa"
console.log(name); // prints Vanessa
console.log(displayName); // prints Ly

// Complex data types copy by reference example //
let leo = {
    type: "dog",
    name: "Leo"
}

let snoop = leo;
// snoop = leo {}
snoop.name = "Snoop";
// key value name Leo is now Snoop
console.log(leo.name); // prints Snoop
console.log(snoop.name); // prints Snoop
