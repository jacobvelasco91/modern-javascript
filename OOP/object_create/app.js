/* OBJECT.CREATE ()*/
/*
  We can use object.create to create prototype objects inside another object
*/

//create an object that is an prototype , fill with methods
const personPrototypes = {
  greeting: function(){
    return `Hello ${this.firstName} ${this.LastName}`;
  }
}

//create an object which calls Object.creat()
const jacob = Object.create(personPrototypes);

//add properties to the jacob object to use the method in its prototype
jacob.firstName = 'jacob';
jacob.LastName = 'velasco';

console.log(jacob.greeting());

/*
  The purpose of Object.create() is that you are able to add prototypes from other objects to the new/current object that you are working.

*/
