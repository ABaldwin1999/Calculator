const screenNumber = document.getElementById("screen");
let newCalcTrue = true;
let count = 0;
let storeNum0 = "";
let storeNum1 = "";
let currentOp = "";

//nameOfTheString.includes(".")

//// basic calculator functions go here
const calculate = () => {
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
};

const onButton = document.getElementById("on");
///sets value of screen to 0 when C is clicked resets all variables
onButton.addEventListener("click", () => {
  screenNumber.innerHTML = "0";
  newCalcTrue = true;
  count = 0;
  storeNum0 = "";
  storeNum1 = "";
  currentOp = "";
});

const inputNumber = document.querySelectorAll(".number-button");
inputNumber.forEach((item) => {
  item.addEventListener("click", (event) => {
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
});

///adds operator to screen upon button click
const inputOperator = document.querySelectorAll(".operator-button");
inputOperator.forEach((item) => {
  item.addEventListener("click", (event) => {
    if (count > 0 && storeNum1 !== "") {
      calculate();
      let prevOp = screenNumber.innerText.slice(-1);
      if (
        prevOp === "+" ||
        prevOp === "-" ||
        prevOp === "*" ||
        prevOp === "/"
      ) {
        screenNumber.innerText = screenNumber.innerText;
      } else {
        screenNumber.innerText += item.innerText;
        currentOp = item.innerText;
      }
    } else {
      let prevOp = screenNumber.innerText.slice(-1);
      if (
        prevOp === "+" ||
        prevOp === "-" ||
        prevOp === "*" ||
        prevOp === "/"
      ) {
        screenNumber.innerText = screenNumber.innerText;
      } else {
        screenNumber.innerText += item.innerText;
        currentOp = item.innerText;
      }
    }
    newCalcTrue = false;
    count++;
  });
});

const equalsButton = document.getElementById("equals");
///calls the Calculate function
equalsButton.addEventListener("click", calculate);
