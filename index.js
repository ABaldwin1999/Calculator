
const screenNumber = document.getElementById('screen');
let newCalcTrue = true;
let prevOp = false;

//// basic calculator functions go here
const calculate = (input) =>{
    ////get string split up into equation?simplist way?

    //screenNumber.forEach(item)
    // if number put in box else add one put in next box
    
}

const inputFunc = (event) =>{
    const input = item.innerHTML;
    screenNumber.innerHTML += input;
    console.log(input);  
    screenNumber.innerHTML += '7';
}

const onButton = document.getElementById('on');
///sets value of screen to 0 when C is clicked
onButton.addEventListener("click", ()=>{
    screenNumber.innerHTML = "0";
    newCalcTrue = true;
    return newCalcTrue;
});

const inputNumber = document.querySelectorAll('.number-button');
inputNumber.forEach((item) =>{
    prevOp = false;
    item.addEventListener("click",(event)=>{  
    if(newCalcTrue === false){
       screenNumber.innerHTML += item.innerHTML;
    }
    else{
        screenNumber.innerHTML = item.innerHTML;
        newCalcTrue = false;
        return newCalcTrue, prevOp;
    }})
})

 const inputOperator = document.querySelectorAll('.operator-button');
 inputOperator.forEach((item) =>{
     item.addEventListener("click",(event)=>{  
    screenNumber.innerHTML += item.innerHTML;
    newCalcTrue = false;
  // console.log(screenNumber.innerHTML);
  //  if(prevOp === false){
  //      screenNumber.innerHTML += item.innerHTML;
  //      prevOp=true;
  //      return prevOp;
  //   }

 })
 })
