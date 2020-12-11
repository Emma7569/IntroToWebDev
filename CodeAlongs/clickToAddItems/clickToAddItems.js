// These elements will be used in both functions.

var numberFun = document.forms["numberFun"];
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var results = document.getElementById("results");
var submitButton = document.getElementById("submitButton");

function validate(){
  numberFun.className = "needs-validation";
  if(!numberFun.checkValidity()){
    numberFun.className = "was-validated";
    return false;
  }

  var operand1 = parseInt(num1.value,10);
  var operand2 = parseInt(num2.value,10);

  document.getElementById("addResult").innerText = operand1 + operand2;

  document.getElementById("subtractResult").innerText = operand1 - operand2;

  document.getElementById("multiplyResult").innerText = operand1 * operand2;

  document.getElementById("divideResult").innerText = operand1 / operand2;

  results.style.display = "block";
  submitButton.innerText = "Recalculate";

  return false;
}


function resetView(){
  numberFun.className = "needs-validation";
  results.style.display = "none";
  submitButton.innerText = "Calculate";
  num1.focus();
}



/*
Questions
1. What happens when you leave Num 1 or Num 2 empty and click "Calculate"?
It displays the .invalid-feedback div and doesn't calculate.

2. Can you add non-numeric input? (Some browsers allow it. Others don't.) If so, what happens when you calculate?
Cannot add non-numeric input. Otherwise it would display the .invalid-feedback div.

3. What happens if you enter 0 for Num 2? How does JavaScript handle division by zero?
It defines it as infinity.
*/
