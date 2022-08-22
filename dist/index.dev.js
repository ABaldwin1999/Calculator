"use strict";

var screenNumber = document.getElementById("screen");
var newCalcTrue = true;
var count = 0;
var storeNum0 = "";
var storeNum1 = "";
var currentOp = ""; //// basic calculator functions go here

var calculate = function calculate() {
  calc = 0;
  Num0 = Number(storeNum0);
  Num1 = Number(storeNum1);

  switch (currentOp) {
    case "+":
      calc = Num0 + Num1;
      break;

    case "-":
      calc = Num0 - Num1;
      break;

    case "*":
      calc = Num0 * Num1;
      break;

    case "/":
      if (Num1 === 0) {
        calc = NaN;
      } else {
        calc = Num0 / Num1;
      }

      break;
  }

  screenNumber.innerText = calc;
  storeNum0 = "" + calc + "";
  storeNum1 = "";
  console.log("called!");
};

var onButton = document.getElementById("on"); ///sets value of screen to 0 when C is clicked resets all variables

onButton.addEventListener("click", function () {
  screenNumber.innerHTML = "0";
  newCalcTrue = true;
  count = 0;
  storeNum0 = "";
  storeNum1 = "";
  currentOp = "";
});
var inputNumber = document.querySelectorAll(".number-button");
inputNumber.forEach(function (item) {
  item.addEventListener("click", function (event) {
    if (newCalcTrue === false) {
      screenNumber.innerHTML += item.innerText;
    } else {
      screenNumber.innerHTML = item.innerText;
      newCalcTrue = false;
    }

    if (count > 0) {
      storeNum1 += item.innerText;
    } else {
      storeNum0 += item.innerText;
    }

    console.log(count);
  });
}); ///adds operator to screen upon button click

var inputOperator = document.querySelectorAll(".operator-button");
inputOperator.forEach(function (item) {
  item.addEventListener("click", function (event) {
    if (count > 0) {
      calculate();
      var prevOp = screenNumber.innerText.slice(-1);

      if (prevOp === "+" || prevOp === "-" || prevOp === "*" || prevOp === "/") {
        screenNumber.innerText = screenNumber.innerText;
      } else {
        screenNumber.innerText += item.innerText;
      }
    } else {
      var _prevOp = screenNumber.innerText.slice(-1);

      if (_prevOp === "+" || _prevOp === "-" || _prevOp === "*" || _prevOp === "/") {
        screenNumber.innerText = screenNumber.innerText;
      } else {
        screenNumber.innerText += item.innerText;
      }
    }

    newCalcTrue = false;
    count++;
    currentOp = item.innerText;
  });
});
var equalsButton = document.getElementById("equals"); ///sets does the sum then displays the answer

equalsButton.addEventListener("click", calculate);