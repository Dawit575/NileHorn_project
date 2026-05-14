const display = document.getElementById("display");

//Append a number to the input value;

const AppendNumber = (numbers)=>{
    display.value += numbers;
    
}

//Append Operators and restricts multiple input operators at sequantially;

const AppendOprators = (operator)=>{
    const lastCharacter = display.value.slice(-1);

    if(display.value === "") return;

    if("+-/*".includes(lastCharacter)){
        display.value = display.value.slice(0,-1) +operator;
    }
    else {
        display.value +=operator;
    }
}

// All clear function
const AllClear =()=>{
    display.value = "";
}

//Back space functions;

const BackSpace = ()=>{
    display.value = display.value.slice(0,-1);
 
}

//Append Dot and limit multiple dots;

const AppendDot = ()=>{

    const splitInputs = display.value.split(/[\+\-\*\/]/);

    const getInputValue = splitInputs[splitInputs.length -1];

    if(!getInputValue.includes(".")){
        display.value +="." 
    }
}

// calculate result;

const CalculateResult = ()=>{
    try{
        const result = Function("return "+display.value)();
        display.value = result;
    }
    catch {
        display.value = "Error";
    }
    
}