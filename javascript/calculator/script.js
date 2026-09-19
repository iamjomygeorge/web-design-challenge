function digitButton(input){
    document.getElementById("calculator-display").value += input;
}

function operatorButton(input){
    const lastValue = document.getElementById("calculator-display").value.at(-1);
    
    if(lastValue === undefined){
        return;
    }
    else if(lastValue === input){
        return;
    }
    else if(lastValue === '+' || lastValue === '-' || lastValue === '*' || lastValue === '/' ){
        return;
    }
    else{
        document.getElementById("calculator-display").value += input;
    }
}

function buttonClearLast(){
    let currentDisplayValue = document.getElementById("calculator-display").value;
    currentDisplayValue = currentDisplayValue.slice(0, -1);
    document.getElementById("calculator-display").value = currentDisplayValue;
}

function equalsButton(){
    let expression = document.getElementById("calculator-display").value;
    let result = eval(expression);
    document.getElementById("calculator-display").value = result;
}
