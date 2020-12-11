
var displayEvens = document.forms["displayEvens"];
var num1 = document.getElementById("no1");
var num2 = document.getElementById("no2");
var num3 = document.getElementById("step");
var results = document.getElementById("results");
var submitButton = document.getElementById("submitButton");

function validate(){
  displayEvens.className="needs-validation";

  if(!displayEvens.checkValidity()){
    displayEvens.className = "was-validated";
    return false;
  }

  var operand1 = parseInt(num1.value,10);
  var operand2 = parseInt(num2.value,10);
  var operand3 = parseInt(num3.value,10);

  if(operand1 > operand2){
    displayEvens.className="needs-validation";
    num2.setCustomValidity("Invalid");
    displayEvens.className = "was-validated";
    return false;
  }else{
    num2.setCustomValidity("");
  }

  var evens = displayTheEvens(operand1,operand2,operand3);

  results.innerText = "Here are the even numbers between " + operand1 + " and " + operand2 + " by " + operand3 + "'s:\n" + evens;

  results.style.display = "block";

  return false;
}

function displayTheEvens(start,end,step){
  var evens = "";
  for (var i=start; i <= end; i = i+step){
    if(i%2 == 0){
      evens += i + "\n";
    }
  }
  return evens;
}
