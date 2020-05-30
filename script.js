const buttonPress = document.getElementsByClassName("calculator");

let a = 0;
let b = 0;
let operator = "";

const add = (a,b) => a + b;
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
    console.dir(event.target.id);
})