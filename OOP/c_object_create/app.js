/* OBJECT.CREATE ()*/
/*
  We can use object.create to create prototype objects inside another object

  So, say you craeting a new object which has no prototype functions. You can then use object.create() to basically create a new object FROM another object which would act as the Constructor.
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
