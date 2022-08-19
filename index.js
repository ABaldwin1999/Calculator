
const screenNumber = document.getElementById('screen');

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
    screenNumber.innerHTML = '0';
});

const inputNumber = document.querySelectorAll('.number-button');
inputNumber.forEach((item) =>{
    item.addEventListener("click",(event)=>{  
    //screenNumber.innerHTML += item.innerHTML;
    if(screenNumber.innerHTML !== '0'){
        screenNumber.innerHTML += item.innerHTML;
    }
    else{
        screenNumber.innerHTML = item.innerHTML;
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
