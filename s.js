let display = document.getElementById('visual');
let value1, value2, operation
function clearDisplay(){
    display.value = "";
}

function appendValue(value){
    display.value = value;
    if(!value1){
        value1 = value
    } else {
        value2 = value
    }
}

function selectOperation(value) {
    operation = value
}

function deleteLast(){
    display.value = display.value.slice(0, -1);
}

function calculate(){
    try{
        input = value1 + operation + value2;
        console.log("Evaluating.", input);
        display.value = eval(input);
    } catch(e){
        console.log("Calculation Error", display.value);
        display.value = 'Error';
    }
}