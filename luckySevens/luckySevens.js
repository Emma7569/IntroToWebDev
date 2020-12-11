//
// Name: Emma
// Date Created: 11/12/20
// Most recent revision: 11/12/20
//

function validate(){
  var luckySevens = document.forms["luckySevens"];
  var bet = document.getElementById("bet");
  var results = document.getElementById("results-div");
  var warning = document.getElementById("warning");

  luckySevens.className = "needs-validation";
  warning.style.display = "none";
  results.style.display = "none";

  if(!luckySevens.checkValidity()){
    luckySevens.className = "was-validated";
    warning.style.display = "block";
    return false;
  }

  results.style.display = "block";

  return false;
}
