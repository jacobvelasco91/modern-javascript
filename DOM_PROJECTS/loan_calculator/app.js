//GET ALL DOM selectors
const form = document.querySelector('.form');
const inputL = document.querySelector('.input input[name="loan"]');
const inputP = document.querySelector('.input input[name="percentage"]');
const inputY = document.querySelector('.input input[name="years"]');
const monthlyPay = document.querySelector('#results-box input[name="monthlyPay"]');
const totalPay = document.querySelector('#results-box input[name="totalPay"]');
const totalInt = document.querySelector('#results-box input[name="totalInt"]');
const loader = document.querySelector('.loader');

//Event Listeners
form.addEventListener('submit',function(e){
  //hide results
  document.querySelector('.results').style.display = 'none';
  //show loader
  loader.style.display = 'block';
  //run a setTimeout for 2 seconds to run calculate function
  setTimeout(calculate,2000); //after it runs shut off loader and display results
  //prevent form submittal
  e.preventDefault();
});



//main calculate function
function calculate(e){
  //grab loan value
  const principle = parseFloat(inputL.value); //and receieving as a float
  //grab percentage value
  const interest = parseFloat(inputP.value) / 100 / 12;
  //grab number of years to pay back
  const calPayments = parseFloat(inputY.value) * 12;

  //compute monthly payments
  const x = Math.pow(1 + interest, calPayments);
  const monthly = (x * principle * interest) / (x-1);

  //check if monthly payment is finite
  if (isFinite(monthly)) {
    monthlyPay.value = monthly.toFixed(2);
    totalPay.value = (monthly * calPayments).toFixed(2);
    totalInt.value = ((monthly*calPayments) - principle).toFixed(2);
    //turn loader off
    loader.style.display = 'none';
    //turn on class of results to block
    document.querySelector('.results').style.display = 'block';

  } else {
    //run the show error function with a 'string' message as argument
    showError('Check your numbers');
  }

  //after if, else ..then empty the input boxes
  inputL.value = '';
  inputP.value = '';
  inputY.value = '';
}

function showError(errorMsg) {
  //turn loader off and results off
  loader.style.display = 'none';
  document.querySelector('.results').style.display = 'none';
  //create error div
  const errorMessage = document.createElement('div');
  errorMessage.className = 'error';
  errorMessage.appendChild(document.createTextNode(errorMsg));
  //grab DOM elements to append to , you need parent and child
  const card = document.querySelector('#main-card');
  const header = document.querySelector('.header');
  card.insertBefore(errorMessage,header);
  //remove after 3 seconds
  setTimeout(removeError,3000); //3,000 miliseconds = 3 seconds
}

function removeError(){
  const errorCode = document.querySelector('.error').remove();
}
