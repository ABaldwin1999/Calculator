"use strict";

var screenNumber = document.getElementById('screen');
var newCalcTrue = true;
var count = 0;
var storeNum0 = 0;
var storeNum1 = 0; //// basic calculator functions go here

var calculate = function calculate(input) {
  calc = 0; ////get string split up into equation? simplist way? limit to one operator with count in op func if bigger than 0 then trigger calculate?

  switch (operate) {
    case '+':
      calc = storeNum0 + storeNum1;
      break;

    case '-':
      calc = storeNum0 - storeNum1;
      break;

    case '*':
      calc = storeNum0 * storeNum1;
      break;

    case '-':
      calc = storeNum0 / storeNum1;
      break;
  }
};

var onButton = document.getElementById('on'); ///sets value of screen to 0 when C is clicked resets all variables

onButton.addEventListener("click", function () {
  screenNumber.innerHTML = "0";
  newCalcTrue = true;
  count = 0;
  calcArray.length = 0;
  storeNum0 = 0;
  storeNum1 = 0;
});
var inputNumber = document.querySelectorAll('.number-button');
inputNumber.forEach(function (item) {
  item.addEventListener("click", function (event) {
    if (newCalcTrue === false) {
      screenNumber.innerHTML += item.innerText;
    } else {
      screenNumber.innerHTML = item.innerText;
      newCalcTrue = false;
    }

    calcArray[count] += item.innerText;
    console.log(calcArray);
  });
}); ///adds operator to screen upon button click

var inputOperator = document.querySelectorAll('.operator-button');
inputOperator.forEach(function (item) {
  item.addEventListener("click", function (event) {
    screenNumber.innerHTML += item.innerText;
    newCalcTrue = false; //  let prevOp = screenNumber.innerText.slice(-1);
    //  if (prevOp === '+' || prevOp === '-' || prevOp === '*' || prevOp === '/') {
    //  screenNumber.innerText = screenNumber.innerText;
    //  } else {
    //    screenNumber.innerText += item.innerText;
    //  }
  });
});
var equalsButton = document.getElementById('equals'); ///sets does the sum then displays the answer

equalsButton.addEventListener("click", calculate);