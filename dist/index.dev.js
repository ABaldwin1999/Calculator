"use strict";

var screenNumber = document.getElementById("screen");
var newCalcTrue = true;
var count = 0;
var storeNum0 = "";
var storeNum1 = "";
var currentOp = ""; //nameOfTheString.includes(".")
//// basic calculator functions go here

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
  storeNum0 = screenNumber.innerText;
  storeNum1 = "";
  currentOp = "";
};

var numberClicker = function numberClicker(item) {
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
  });
};

var operatorClicker = function operatorClicker(item) {
  item.addEventListener("click", function (event) {
    if (count > 0 && storeNum1 !== "") {
      calculate();
      var prevOp = screenNumber.innerText.slice(-1);

      if (prevOp === "+" || prevOp === "-" || prevOp === "*" || prevOp === "/") {
        screenNumber.innerText = screenNumber.innerText;
      } else {
        screenNumber.innerText += item.innerText;
        currentOp = item.innerText;
      }
    } else {
      var _prevOp = screenNumber.innerText.slice(-1);

      if (_prevOp === "+" || _prevOp === "-" || _prevOp === "*" || _prevOp === "/") {
        screenNumber.innerText = screenNumber.innerText;
      } else {
        screenNumber.innerText += item.innerText;
        currentOp = item.innerText;
      }
    }

    newCalcTrue = false;
    count++;
  });
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
inputNumber.forEach(numberClicker); ///adds operator to screen upon button click

var inputOperator = document.querySelectorAll(".operator-button");
inputOperator.forEach(operatorClicker);
var equalsButton = document.getElementById("equals"); ///calls the Calculate function

equalsButton.addEventListener("click", calculate);