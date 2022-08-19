"use strict";

var screenNumber = document.getElementById('screen');
var newCalcTrue = true; //// basic calculator functions go here

var calculate = function calculate(input) {////get string split up into equation?simplist way?
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
  item.addEventListener("click", function (event) {
    //screenNumber.innerHTML += item.innerHTML;
    if (newCalcTrue === false) {
      screenNumber.innerHTML += item.innerHTML;
      console.log(newCalcTrue);
    } else {
      screenNumber.innerHTML = item.innerHTML;
      console.log(newCalcTrue);
      newCalcTrue = false;
      console.log(newCalcTrue);
      return newCalcTrue;
    }
  });
}); // const inputOperator = document.querySelectorAll('');
// inputOperator.forEach((item) =>{
//     item.addEventListener("click",(event)=>{  
//     screenNumber.innerHTML += item.innerHTML;
//     if(screenNumber.innerHTML. !== '+' || '-'  ){
//         screenNumber.innerHTML += item.value;
//     }
// })
// })