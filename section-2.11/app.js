/* WORKING WITH DATE AND TIMES*/
let val;

const today = new Date(); //Instanating todays date
let birthday = new Date('11-13-1991');
birthday = new Date('November 13 1991');

//Get the current month

val = today.getMonth(); //it is zero based
val = today.getDate(); //gets the date
val = today.getDay(); //days of the week as numerical starting at sunday.
val = today.getFullYear(); //gets just the current numerical year
val = today.getHours(); //gets military hour
val = today.getMinutes(); //gets the current minute time
val = today.getSeconds(); //gets the current seconds in time
val = today.getMilliseconds(); //gets the current getMilliseconds
val = today.getTime(); //getting the current time stamp amount of minutes since 1970

console.log(val);
