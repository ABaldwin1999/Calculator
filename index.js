
//// basic calculator functions go here
const calculate = (input) =>{
    let input0=input[0];
    let input1=0;
    for(i=1; i< input.length; i++){
        if(typeof input[i] == "string"){
           // switch:
           // case "+"
           //input0 = input0 + input1;
           // case "-"
        }
        else{
            input1= input[i];
        }
    }
    return input0;
}

const makeInput = (input, newInput) =>{
    ///if number thats not after operater add it after last number if 
    //operator add it in new section.
}


///more advanced functions ln e???



////integration? differentiation?

//// buttons

const element0 = document.getElementById("myBtn");
element.addEventListener("click", myFunction);

