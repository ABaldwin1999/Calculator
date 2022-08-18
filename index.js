
//// basic calculator functions go here
const calculate = (input) =>{
    let input0=0;
    let input1=0;
    let input2 =0;
    for(i=0; i< input.length; i++){
        if(i=0){
            input0 = input1;
        }
        if(typeof input[i] == "string" && i!=0){
           // switch:
           // case "+"
           //input0 = input0 + input1;
           // case "-"
           //case ')'
        }
        else if(input[i]='('  && i!=0){
            ///condition for brackets???
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
element0.addEventListener("click", clearFunc);

