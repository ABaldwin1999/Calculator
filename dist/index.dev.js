"use strict";

//// basic calculator functions go here
var calculate = function calculate(input) {
  var input0 = input[0];
  var input1 = 0;
  var input2 = 0;

  for (i = 1; i < input.length; i++) {
    if (typeof input[i] == "string") {// switch:
      // case "+"
      //input0 = input0 + input1;
      // case "-"
      //case ')'
    } else if (input[i] = '(') {///condition for brackets???
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

var element0 = document.getElementById("myBtn");
element.addEventListener("click", myFunction);