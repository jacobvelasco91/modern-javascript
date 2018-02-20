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

const dogs = [
  {name:'fido',type:'german sheperd'},
  {name:'johnny',type:'chiwawa'}
]
let length = dogs.length;

console.log('These are my dogs:');
for (let i = 0; i < length; i++){
  console.log('The name of dog number '+i+' is '+dogs[i].name+' he is a '+dogs[i].type+'.');
}






//Practicing Object literals

const foreignPerson = {
  name: ' foreignName',
  age: 45,
  address: {
    street:'magnolia',
    city:'foreign city'},
  hobbies: ['skiing','snowboarding','tennis']
};
console.log('The foreign person\'s hobbies are:');
for (let i = 0; i <foreignPerson.hobbies.length;i++) {
  console.log(foreignPerson.hobbies[i]);
}
