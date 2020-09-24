// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. 
 *        The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    // return an object that has an argument ids as values to keys matching their names
    
return {
  id: id,
  nameFirst: nameFirst,
  nameLast: nameLast
}
}

function makeContactList() {
  var contacts = [];
  
  return {
    length: function() {
      return contacts.length;
    },
    addContact: function(contact){
      contacts.push(contact)
    },
    findContact: function(fullName){
      for(var i = 0; i < contacts.length; i++) {
        var name = contacts[i].nameFirst + " " + contacts[i].nameLast;
      if(name === fullName) {
        return contacts[i]; 
      } else {
        return undefined;
      }
    }
    },
    removeContact: function(contact){
      return contacts.pop(contact)
    },
    printAllContactNames: function() {
      var contactsArray = [];
//loop through the contacts to gather all the fullname of each contact objects
      // console.log(contacts);
      for(let i = 0; i < contacts.length; i++) {
        //access namefirst value
        var firstName = contacts[i].nameFirst
        var lastName = contacts[i].nameLast
          contactsArray.push(`${firstName} ${lastName}`);
      }
      return contactsArray.join("\n");
    }
      
    }
    
  }
  



// printAllContactNames: function(){         
//   // input: no inputs       
//   // output: will be strings on a new line         
//   // create an array to hold the full name strings of the contact objects      
//   var contactsArray = [] 
  
//   // console.log(contacts)
//   // loop through the contacts to gather all the full name of each contact objects
  
//   for(let i = 0; i < contacts.length; i++){
//     // access namefirst value
//     let firstName = contacts[i].nameFirst
//     let lastName = contacts[i].nameLast
//     contactsArray.push(`${firstName} ${lastName}`)
    
//     }
    
//     return contactsArray.join("\n")
//     // utilize join method "/n" on some kind of array to join in string on new line
//     }


var myContactList = makeContactList();

myContactList.length();
myContactList.addContact("Ly");
// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
