const buttonPress = document.getElementById("calculator");
const innerDisplay = document.getElementById("display");

let a = "";
let b = "";
let operator;

function add(a,b) {
    return a + b;
}
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a, b) => (Math.round((a/b) * 100) / 100).toFixed(2);

function operate(operator, a, b) {
    return operator(a,b);
}

buttonPress.addEventListener("click", (event) => {
    const isButton = event.target.nodeName === "BUTTON";
    if (!isButton) {
        return;
    }
    
    const buttonValue = event.target.id;
    const buttonClass = event.target.class;
    console.dir(buttonValue);

    if(buttonValue == "clear") {
        innerDisplay.innerHTML = 0;
        a = "";
        b = "";
        operator = "";
    }

    if ((+buttonValue >= 0) && (+buttonValue <= 9)) {
        if(innerDisplay.innerHTML == 0) {
            innerDisplay.innerHTML = "";
        }
        if((operator) && !(a)){
            a = +innerDisplay.innerHTML;
            innerDisplay.innerHTML = ""
        }
        innerDisplay.innerHTML += buttonValue;
    }

    if ((buttonValue == "decimal") && ! (innerDisplay.innerHTML.includes("."))) {
        innerDisplay.innerHTML += event.target.innerHTML;
    }

    if (buttonValue == ("add" || "subtract" || "multiply" || "divide")) {
        operator = buttonValue;
    }

    if (buttonValue == "equals" && (a) && (operator)) {
        b = +innerDisplay.innerHTML;
        if (operator == "add") {
            innerDisplay.innerHTML = operate(add, a, b);
        } else if (operator == "subtract") {
            innerDisplay.innerHTML = operate(subtract, a, b);
        } else if (operator == "multiply") {
            innerDisplay.innerHTML = operate(multiply, a, b);
        } else {
            innerDisplay.innerHTML = operate(divide, a, b);
        }
            
    }
        
})