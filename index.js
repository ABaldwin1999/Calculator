
const screenNumber = document.getElementById('screen');
let newCalcTrue = true;

//// basic calculator functions go here
const calculate = (input) =>{
    ////get string split up into equation?simplist way?
    
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
    item.addEventListener("click",(event)=>{  
    //screenNumber.innerHTML += item.innerHTML;
    if(newCalcTrue === false){
       screenNumber.innerHTML += item.innerHTML;
       console.log(newCalcTrue);
    }
    else{
        screenNumber.innerHTML = item.innerHTML;
        console.log(newCalcTrue);
        newCalcTrue = false;
        console.log(newCalcTrue);
        return newCalcTrue;
    }})
})

// const inputOperator = document.querySelectorAll('');
// inputOperator.forEach((item) =>{
//     item.addEventListener("click",(event)=>{  
//     screenNumber.innerHTML += item.innerHTML;
//     if(screenNumber.innerHTML. !== '+' || '-'  ){
//         screenNumber.innerHTML += item.value;
//     }
// })
// })
