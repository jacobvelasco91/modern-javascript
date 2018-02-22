/* IF STATEMENTS AND COMPARISIONS OPERATORS*/

const id = '101';


// //EQUAL TO
// if (id == 100) {
//   console.log("CORRECT");
// } else {
//   console.log('INCORRECT');
// }
//
//
// //NOT EQUAL
// if(id != 100){
//   console.log("CORRECT IT DOES NOT EQUAL");
// } else {
//   console.log("IT DOES EQUAL");
// }
//
// //BETTER WAY TO COMPARE IS TO STRICT COMPARE
// if (id === 100){
//   console.log("TYPE AND VALUE EQUAL");
// } else {
//   console.log('TYPE AND VALUE DO NOT EQUAL');
// }

//TESTING IF SOMETHING IS DEFINED
if (typeof id !== 'undefined'){ //if id is not undefined, meaning it is defined, show the id
  console.log(`The ID is ${id}`);
} else {
  console.log('No ID');
}

//GREATER THAN OR LESS THAN
if (id < 100) {
  console.log('yes less than 100');
} else {
  console.log('not less than 100');
}

if (id > 100) {
  console.log('yes greater than 100');
} else {
  console.log('no, not greater than 100');
}

// USING ELSE IF
const color = 'yellow';

 if (color === 'blue') {
   console.log('Color is blue');
 } else if (color === 'red') {
   console.log('Color is red');
 } else if (color === 'yellow') {
   console.log('Color is yellow');
 } else {
   console.log('Color is not here');
 }


//USING LOGICAL OPERATORS

//AND OPERATOR
 const name = 'Steve';
 const age = 15;

 if (age > 0 && age < 12) {
   console.log(`${name} is child`);
 } else if (age >12 && age < 20) {
   console.log(`${name} is a teenager`);
 } else {
   console.log(`${name} is old enough to be an adult`);
 }

 //OR OPERATOR

 if (name === 'Steve' || name === 'Jacob'){
   console.log('Welcome back!');
 } else {
   console.log('I dont know you, get out.');
 }

 //TERNARY OPERATOR
 console.log(id === 100 ? 'CORRECT' : 'INCORRET');

 //COMBINING SWITCH STATEMENTS

 const favColor = 'blue';

 switch(favColor) {
   case 'blue': console.log('Its your Favorite color! Blue!');break;
   case 'red' : console.log('Your favorite color is like a tomato');break;
   default: console.log('You have no color!');break;
 }

 let day;

 switch(new Date().getDay()){
   case 0: day = 'Sunday';break;
   case 1: day = 'Monday';break;
   case 2: day = 'Tuesday';break;
   case 3: day = 'Wednesday';break;
   case 4: day = 'Thursday';break;
   case 5: day = 'Friday';break;
   case 6: day = 'Saturday';break;
   default: day = 'not a day of the week';break;
 }

 console.log(`Todays the day of ${day}`);



//*************Practicing IF statements and comparasion Operators

let val = 10;

if (val === 10 ){
  console.log('Correct');
} else {
  console.log ('Not Correct');
}

if (val === 5 ){
  console.log('Value is Five');
} else if(val ===10) {
  console.log('Value is Ten');
} else {
  console.log('No value given');
}

//check if something is undefined

if (typeof value !== 'undefined') {
  console.log(value);
} else {
  console.log('Value is undefined');
}

//Logical OPERATORS

if (val >0 && val <25) {
  console.log(val + ' is greater than 0 and less than 25');
}

if (val>0 || val <10) {
  console.log(val + ' go at least one right');
}


//ternary op

console.log(val <15? 'Correct':'not Correct');

//switch

let dayofWeek;

switch(new Date().getDay()) {
  case 0 : dayofWeek = 'Sunday'   ;break;
  case 1 : dayofWeek = 'Monday'   ;break;
  case 2 : dayofWeek = 'Tuesday'  ;break;
  case 3 : dayofWeek = 'Wednesday';break;
  case 4 : dayofWeek = 'Thursday' ;break;
  case 5 : dayofWeek = 'Friday'   ;break;
  case 6 : dayofWeek = 'Saturday' ;break;
  default: dayofWeek = 'No day given';break;
};

console.log(dayofWeek);
