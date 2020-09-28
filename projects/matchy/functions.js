/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function search(array, name) {
    for (var i = 0; i < array.length; i++) {
        if (array[i].name === name) {
            return array[i];
        }
        
    }
    return null;
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(array, name, object) {
//array to loop through, string to look for, object to replace
for (var i = 0; i <= array.length; i++) {
    if (name === array[i].name) {
    }  
    return array[i] = object;
}
}
//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(array, name) {
//array to loop through animals & name is the string to look for in the array
    for (var i = 0; i <= array.length; i++) {
        if (name === array[i].name) {
             return array.splice(i,1);
        }
    break;
    }

}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(array, object){
//animals = array; animal = object
    for (var i = 0; i < array.length; i++) {
        if (array[i].name.toLowerCase() === object.name.toLowerCase()) {
            return;
        }
    }
    if (object.name.length > 0 && object.species.length > 0) {
        array.push(object);
    }
    
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
