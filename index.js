
const screenNumber = document.getElementById('screen');
let newCalcTrue = true; 
let count =0;
let storeNum0 = 0;
let storeNum1 =0;

//// basic calculator functions go here
const calculate = (input) =>{
    calc = 0
    ////get string split up into equation? simplist way? limit to one operator with count in op func if bigger than 0 then trigger calculate?
    switch(operate) {
        case '+':
          calc = storeNum0 + storeNum1;
          break;
        case '-':
            calc = storeNum0 - storeNum1;
          break;
          case '*':
            calc = storeNum0*storeNum1;
            break;
          case '-':
            calc = storeNum0/storeNum1;
            break;
      }
}

const onButton = document.getElementById('on');
///sets value of screen to 0 when C is clicked resets all variables
onButton.addEventListener("click", ()=>{
    screenNumber.innerHTML = "0";
    newCalcTrue = true;
    count = 0;
    calcArray.length = 0;
    storeNum0 = 0;
    storeNum1 =0;
});

const inputNumber = document.querySelectorAll('.number-button');
inputNumber.forEach((item) =>{
    item.addEventListener("click",(event)=>{  
        if(newCalcTrue === false){
            screenNumber.innerHTML += item.innerText;
        }
        else{
            screenNumber.innerHTML = item.innerText;
            newCalcTrue = false;
        }
        calcArray[count] += item.innerText;
        console.log(calcArray);
    })   
})


///adds operator to screen upon button click
 const inputOperator = document.querySelectorAll('.operator-button');
 inputOperator.forEach((item) =>{
     item.addEventListener("click",(event)=>{  
    screenNumber.innerHTML += item.innerText;
     newCalcTrue = false;


    //  let prevOp = screenNumber.innerText.slice(-1);
    //  if (prevOp === '+' || prevOp === '-' || prevOp === '*' || prevOp === '/') {
    //  screenNumber.innerText = screenNumber.innerText;
    //  } else {
    //    screenNumber.innerText += item.innerText;
    //  }

 })
 })

 const equalsButton = document.getElementById('equals');
///sets does the sum then displays the answer
equalsButton.addEventListener("click", calculate);
