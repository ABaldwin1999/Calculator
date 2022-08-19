"use strict";

var screenNumber = document.getElementById('screen');
var newCalcTrue = true;
var prevOp = false; //// basic calculator functions go here

var calculate = function calculate(input) {////get string split up into equation?simplist way?
  //screenNumber.forEach(item)
  // if number put in box else add one put in next box
};

var inputFunc = function inputFunc(event) {
  var input = item.innerHTML;
  screenNumber.innerHTML += input;
  console.log(input);
  screenNumber.innerHTML += '7';
};

var onButton = document.getElementById('on'); ///sets value of screen to 0 when C is clicked

onButton.addEventListener("click", function () {
  screenNumber.innerHTML = "0";
  newCalcTrue = true;
  return newCalcTrue;
});
var inputNumber = document.querySelectorAll('.number-button');
inputNumber.forEach(function (item) {
  prevOp = false;
  item.addEventListener("click", function (event) {
    if (newCalcTrue === false) {
      screenNumber.innerHTML += item.innerHTML;
    } else {
      screenNumber.innerHTML = item.innerHTML;
      newCalcTrue = false;
      return newCalcTrue, prevOp;
    }
  });
});
var inputOperator = document.querySelectorAll('.operator-button');
inputOperator.forEach(function (item) {
  item.addEventListener("click", function (event) {
    screenNumber.innerHTML += item.innerHTML;
    newCalcTrue = false; // console.log(screenNumber.innerHTML);
    //  if(prevOp === false){
    //      screenNumber.innerHTML += item.innerHTML;
    //      prevOp=true;
    //      return prevOp;
    //   }
  });
});