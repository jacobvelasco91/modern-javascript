//Object Literals
const person = {
  firstName : 'jacob',
  lastName: 'velasco',
  age: 26,
  email: 'jacobvelasco91@gmail.com',
  hobbies: ['drumming','Jesus','wife','food'],
  address: {
    city: 'Ontario',
    state: 'California'
  },
  getBirthYear: function(){
    return 2017 - this.age;
  }
};

let val;
val = person;
//get Specific value
val = person.firstName; //->jacob
val = person['firstName']; //->jacob
val = person.lastName; //->velasco
val = person.age; //->26
val = person.hobbies[1]; //->Jesus
val = person.address.state; //->California
val = person.getBirthYear(); //1991



console.log(val);

const people = [
  {name: 'john',age: 45},
  {name: 'Mike', age:35}
];
console.log(people.length);

for (let i = 0; i< people.length; i++) {
  console.log(people[i].name,people[i].age);
}
