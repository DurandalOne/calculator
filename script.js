const buttonPress = document.getElementById("calculator");
const innerDisplay = document.getElementById("display");

let a = "";
let b = "";
let operator = "";

function operate() {
  switch (operator) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return Math.round((a * b + Number.EPSILON) * 100) / 100;
    case "divide":
      return Math.round((a / b + Number.EPSILON) * 100) / 100;
  }
}

document.onkeypress = function () {
  if (event.key >= 0 && event.key <= 9) {
    if (innerDisplay.innerHTML == 0) {
      innerDisplay.innerHTML = "";
    }
    if (operator && !a) {
      a = +innerDisplay.innerHTML;
      innerDisplay.innerHTML = "";
    }
    innerDisplay.innerHTML += event.key;
  }

  if (event.key == "Enter" && a && operator) {
    b = +innerDisplay.innerHTML;
    innerDisplay.innerHTML = operate();
    a = "";
    b = "";
  }
};

buttonPress.addEventListener("click", (event) => {
  const isButton = event.target.nodeName === "BUTTON";
  if (!isButton) {
    return;
  }

  const buttonValue = event.target.id;

  if (buttonValue == "clear") {
    innerDisplay.innerHTML = 0;
    a = "";
    b = "";
    operator = "";
  }

  if (buttonValue == "clearEntry") {
    innerDisplay.innerHTML = 0;
  }

  if (buttonValue == "plusMinus") {
    if (innerDisplay.innerHTML[0] == "-") {
      innerDisplay.innerHTML = innerDisplay.innerHTML.substring(1);
    } else {
      innerDisplay.innerHTML = "-" + innerDisplay.innerHTML;
      }
  }

  if (buttonValue >= 0 && buttonValue <= 9) {
    if (innerDisplay.innerHTML == 0) {
      innerDisplay.innerHTML = "";
    }
    if (operator && !a) {
      a = +innerDisplay.innerHTML;
      innerDisplay.innerHTML = "";
    }

    innerDisplay.innerHTML += buttonValue;
  }

  if (buttonValue == "decimal" && !innerDisplay.innerHTML.includes(".")) {
    innerDisplay.innerHTML += event.target.innerHTML;
  }

  if (buttonValue == "percent" && a) {
    innerDisplay.innerHTML = (a / 100) * innerDisplay.innerHTML;
  }

  if (["add", "subtract", "multiply", "divide"].includes(buttonValue)) {
    if (operator && a) {
      b = +innerDisplay.innerHTML;
      innerDisplay.innerHTML = operate();
      a = "";
      b = "";
    }
    operator = buttonValue;
  }

  if (buttonValue == "equals" && a && operator) {
    b = +innerDisplay.innerHTML;
    innerDisplay.innerHTML = operate();
    a = "";
    b = "";
  }
});
