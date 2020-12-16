//
// Name: Emma Wilby
// Assignment: Lucky Sevens
// Date Created: 11/12/20
// Most recent revision: 16/12/20
// Date submitted: 16/12/20
//

function validate(){
  var luckySevens = document.forms["luckySevens"];
  var betObject = document.getElementById("bet");
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

  var bet = parseFloat(betObject.value,10);

  resultsArray = play(bet);

  var startingBet = document.getElementById("starting-bet");
  var totalRolls = document.getElementById("total-rolls");
  var maxBet = document.getElementById("max-bet");
  var maxBetRolls = document.getElementById("max-bet-rolls");

  startingBet.innerText = resultsArray[0].toFixed(2);
  totalRolls.innerText = resultsArray[1];
  maxBet.innerText = resultsArray[2].toFixed(2);
  maxBetRolls.innerText = resultsArray[3];

  var buttonSubmit = document.getElementById("buttonSubmit");
  buttonSubmit.innerText = "Play again";

  return false;
}


function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}


function play(bet){

  var roll1;
  var roll2;
  var rollCount = 0;
  var money = bet;

  var maxMoney = bet;
  var maxRollCount = 1;

  while(money>0){
    rollCount++;
    roll1 = rollDice();
    roll2 = rollDice();
    if(roll1 + roll2 === 7){
      money = money + 4;
      if(money > maxMoney){
        maxMoney = money;
        maxRollCount = rollCount;
      }
    }else{
      money--;
    }
  }

  var resultsArray = [bet, rollCount, maxMoney, maxRollCount];

  return resultsArray;

}
