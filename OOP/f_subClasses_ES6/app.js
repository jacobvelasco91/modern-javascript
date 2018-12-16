/*
SUB-CLASSES ES6

sub classes are classes that extend an existing class (which the existing class becomes a the 'super')

sub classes are part of prototypal inheritance; we are inherting properties and methods

sub classes are ES6 syntax ; sub classes  = prototypal inheritance

*/

//Create a super class
class Person {
  constructor(firstName,lastName){ //constructor
    this.firstname = firstName;
    this.lastName = lastName;
  }
  greeting(){
    return `Hello, my name is ${this.firstName} ${this.lastName}`; //method
  }
}
//create an instance of Person
const person1 = new Person('claudia','velasco');
console.log(person1);

/*****   NOW EXTEND THE CLASS TO CREATE A SUBCLASS / INHERITANCE  *****/

//keyword to inherit is 'extends' then the class you are inheriting from (this case its, 'Person')
class Customer extends Person {
  //the constructor has to have the properties that it is inheriting as parameters
  constructor(firstName,lastName,phone,subscription){
    super(firstName,lastName);//calling the parent class constructor, along with the parameters
    this.phone = phone;
    this.subscription = subscription;
  }
}

const customer1 = new Customer('jacob','velasco',9093371333,true);
console.log(customer1);
