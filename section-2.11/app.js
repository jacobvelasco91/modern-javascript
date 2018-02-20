/* WORKING WITH DATE AND TIMES*/
let val;

const today = new Date(); //Instanating todays date

val = today.getMonth(); //Month is zero based : so januarary is 0 and so on
console.log(val);

val = today.getDate();
console.log(val); //->20

val = today.getDay(); //Also zero based starting at sunday as 0
console.log(val); //-> 2 which is tuesday

val = today.getFullYear();
console.log(val); //->2018

val = today.getHours(); //this is military time hours
console.log(val);

val = today.getMinutes();
console.log(val); //->shows the current time in minutes

val = today.getMilliseconds();
console.log(val); //-> shows the milli seconds

val = today.getTime();
console.log(val);
