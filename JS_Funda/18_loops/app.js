//LOOPS AND ITERATIONS

//GENERAL LOOPS

//FOR LOOP
//   'continue;' is a important keyword for loops
//   'break;' is a important keyword for loops

for (let i = 0; i<10; i++) {
  if (i === 2 ){
    console.log('2 is my favorite number');
    continue;
  }
  console.log('Number' + i);
}

for (let i = 0; i <10; i++){
  if (i === 5) {
    console.log('We are stopping at 5');
    break;
  }
  console.log(i);
}

//WHILE LOOP

let i = 0;
while (i <10){
  console.log(i);
  i++;
}

//Do WHILE ...ALWAYS RUNS AT LEAST ONCE
let n = 0
do {
  console.log('Number' + n);
  n++;
} while(n < 10);


//WORKING WITH ARRAYS

const cars = ['Honda','Ford','Toyota','Chevy'];

//For Loop
for (let i = 0; i <cars.length; i++) {
  console.log(cars[i]);
}


//FOR EACH
//grab the array name and add  the for each
//this forEach method takes a callback function
//this callback function can take three different things, but you only need one, which is
//whatever you want to use as the current iteration in the array, the iterator
cars.forEach(function(car){
  console.log(car);
});

//also get the index using foreach
//second param
cars.forEach(function(car,x){
  console.log(`Car in position ${x} is a ${car}`);
});

//also pass in the whole array

cars.forEach(function(car,x,array){
  console.log(array);
});

const trips = ['america','mexico','spain','swizterland'];
trips.forEach( (i,p) => {
  console.log(`Places I would go according to perference ${p+1} : ${i}.`);
});

//books of bible, favorite bands, food i do not like, schools i have gone,
//cities i have visited, places i want to visit

let arrayLength;

const bibleBooks = ['genesis','exodus','leviticus','deuturonamy','psalms','proverbs'];
arrayLength = bibleBooks.length;
bibleBooks.forEach(i => {console.log(i)});

const favBands = ['ascend the hill','bethel','shane and shane','phil wickham','scott cunningham band','penny and sparrow','hillsong'];
arrayLength = favBands.length;
favBands.forEach( i => {console.log(i);});

const foodNot = ['white asparagus','oyster','burnt food'];
arrayLength = foodNot.length;
foodNot.forEach( i => {console.log(i)});

console.log(arrayLength);





console.log('\n\n\n\n\n');




//MAP METHOD
//USE to return a different array

//an array with objects
const users = [
  {id:1,name:'John'},
  {id:2,name:'Jane'},
  {id:3,name:'Kelly'}
];

//create an array of the the names for these users
//One of the things map does is pull out an array. give it an iterator to loop through
const ids = users.map(function(user){
  return user.name;
});

console.log(ids);


//FOR IN LOOP
//Used to get things from an object

const user = {
  firstName : 'John',
  lastName : 'Doe',
  age : 40
};

//the given variable will give the keys and using the object given and giving the key will give the value
for( let x in user ){
  console.log(`${x} : ${user[x]}`);
}
