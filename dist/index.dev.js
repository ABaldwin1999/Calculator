"use strict";

var screenNumber = document.getElementById('screen'); //// basic calculator functions go here

var calculate = function calculate(input) {
  var input0 = 0;
  var input1 = 0;
  var input2 = 0;

  for (i = 0; i < input.length; i++) {
    if (i = 0) {
      input0 = input1;
    }

    if (typeof input[i] == "string" && i != 0) {// switch:
      // case "+"
      //input0 = input0 + input1;
      // case "-"
      //case ')'
    } else if (input[i] = '(' && i != 0) {///condition for brackets???
    } else {
      input1 = input[i];
    }
  }

  return input0;
};

var makeInput = function makeInput(input, newInput) {} ///if number thats not after operater add it after last number if 
//operator add it in new section.
///more advanced functions ln e???
////integration? differentiation?
//// buttons
;

var onButton = document.getElementById('on'); ///sets value of screen to 0 when C is clicked

onButton.addEventListener("click", function () {
  console.log(screenNumber.value);
  screenNumber.value = '9';
});