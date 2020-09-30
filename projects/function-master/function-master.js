//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
   return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    Object.keys(object);
    return Object.keys(object).join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var total = [];
    for (let key in object){
        if (typeof object[key] === "string"){
        total.push(object[key]);  
    }
}
    return total.join(" ");
}
//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if(typeof collection === 'object' && !Array.isArray(collection)) {
        return "object";
    }
        return "array";
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var capAll = string.toLowerCase().split(" ");
    for (var i = 0; i < capAll.length; i++){
        capAll[i] = capAll[i].charAt(0).toUpperCase() + capAll[i].substr(1);
        }
        return capAll.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    var newStr = Object.values(object["name"].charAt(0).toUpperCase() + object["name"].slice(1));
    return `Welcome ${newStr.join("")}!`
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    var nameVar = Object.values(object["name"].charAt(0).toUpperCase() + object["name"].slice(1));
    var speciesVar = Object.values(object["species"].charAt(0).toUpperCase() + object["species"].slice(1));
    return `${nameVar.join("")} is a ${speciesVar.join("")}`
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
     if (object && object.noises) { 
        if (Array.isArray(object.noises)) { 
            if (object.noises.length > 0) { 
                return object.noises.join(' ');
            }
        }
    }
    return 'there are no noises';
}
//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    for (var i = 0; i < string.length; i++) {
      if(string.match(word)) {
        return true;
    }
        return false;
}
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object['friends'].push(name);
    return object;

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
  if(Array.isArray(object.friends) && object.hasOwnProperty("friends")) {
    for(var i = 0; i < object.friends.length; i++) {
      if(name === object.friends[i]) {
        return true;  
      }
    }    
  }  
 return false;   
} 

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {

// create a nonFriends array to be returned at the end after my logic
// I: name <strings> && array <full of Objects>
// O: array full of all the non friends of the name argument
// C: must look through array of objects and find that name argument and then using the person friends array use that and loop again  through the array of objects and see who isn't in the friends of array of that person
let notFriends = [];
//loop through the array of objects
for (let i = 0; i < array.length; i++) {
// must look through array of objects and find that name argument
// check the object name does not match the name and loop with includes method through 
   if ((array[i]['name'] !== name) && !array[i]['friends'].includes(name)){
// then push the not friend into not friends
notFriends.push(array[i]['name']);
  }
}
// after done with logic we will return notFriends array
return notFriends;
}


//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
//if the input key is the same key, update its value.
    if (object.hasOwnProperty(key) === Object.keys(object)){
      return object[key];
    } else {
      object[key] = value;
    }
    return object;
  }
//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
for (var key in object) {
    for (let i = 0; i < array.length; i++) {
        if (key === array[i]) {
            delete object[key];
        }
    }
}

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
   return array.filter((a, b) => array.indexOf(a) === b)
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}