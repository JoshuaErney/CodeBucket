// Variables
const display = document.querySelector(".calculator_display_input");
const clearButton = document.querySelector("#clear");
const percentButton = document.querySelector("#percent");
const divideButton = document.querySelector("#divide");
const multiplyButton = document.querySelector("#multiply");
const subtractButton = document.querySelector("#subtract");
const addButton = document.querySelector("#add");
const equalsButton = document.querySelector("#equal");
const decimalButton = document.querySelector("#period");
const zeroButton = document.querySelector("#zero");
const oneButton = document.querySelector("#one");
const twoButton = document.querySelector("#two");
const threeButton = document.querySelector("#three");
const fourButton = document.querySelector("#four");
const fiveButton = document.querySelector("#five");
const sixButton = document.querySelector("#six");
const sevenButton = document.querySelector("#seven");
const eightButton = document.querySelector("#eight");
const nineButton = document.querySelector("#nine");

let num1 = "";
let num2 = "";
let operator = "";
let result = 0;

function operate(num1, operator, num2) {
  if (num1 !== "" && num2 !== "") {
    if (operator === "+") {
      result = parseInt(num1) + parseInt(num2);
    } else if (operator === "-") {
      result = parseInt(num1) - parseInt(num2);
    } else if (operator === "*") {
      result = parseInt(num1) * parseInt(num2);
    } else if (operator === "/") {
      result = parseInt(num1) / parseInt(num2);
    } else if (operator === "%") {
      result = (parseInt(num1) / 100) * parseInt(num2);
    }
    return result;
  }
  return result;
}

function nextEquation(result) {
  num1 = result;
  if (operator !== "" && num2 !== "") {
    operate(num1, operator, num2);
  } else {
    return result;
  }
}

/* ---------- Event Listeners ---------- */

// Clear Button
clearButton.addEventListener("click", () => {
  display.value = "";
  if (num1 !== "" && num2 !== "") {
    num1 = "";
    num2 = "";
  }
  if (operator !== "") {
    operator = "";
  }
});

// Add Button
addButton.addEventListener("click", () => {
  operator = "+";
  display.value += "+";
});

// Subtract Button
subtractButton.addEventListener("click", () => {
  operator = "-";
  display.value += "-";
});

// Multiply Button
multiplyButton.addEventListener("click", () => {
  operator = "*";
  display.value += "*";
});

// Divide Button
divideButton.addEventListener("click", () => {
  operator = "/";
  display.value += "/";
});

// Percent Button
percentButton.addEventListener("click", () => {
  operator = "%";
  display.value += "%";
});

// Equals Button
equalsButton.addEventListener("click", () => {
  display.value = operate(num1, operator, num2);
});

// Decimal Button
decimalButton.addEventListener("click", () => {
  display.value += ".";
});

/* ---------- Number Buttons (0-9) ----------- */

// Zero Button
zeroButton.addEventListener("click", () => {
  display.value += "0";
  if (num1 !== "" && operator !== "") {
    num2 += "0";
  } else {
    num1 += "0";
  }
});

// One Button
oneButton.addEventListener("click", () => {
  display.value += "1";
  if (num1 !== "" && operator !== "") {
    num2 += "1";
  } else {
    num1 += "1";
  }
});

// Two Button
twoButton.addEventListener("click", () => {
  display.value += "2";
  if (num1 !== "" && operator !== "") {
    num2 += "2";
  } else {
    num1 += "2";
  }
});

// Three Button
threeButton.addEventListener("click", () => {
  display.value += "3";
  if (num1 !== "" && operator !== "") {
    num2 += "3";
  } else {
    num1 += "3";
  }
});

// Four Button
fourButton.addEventListener("click", () => {
  display.value += "4";
  if (num1 !== "" && operator !== "") {
    num2 += "4";
  } else {
    num1 += "4";
  }
});

// Five Button
fiveButton.addEventListener("click", () => {
  display.value += "5";
  if (num1 !== "" && operator !== "") {
    num2 += "5";
  } else {
    num1 += "5";
  }
});

// Six Button
sixButton.addEventListener("click", () => {
  display.value += "6";
  if (num1 !== "" && operator !== "") {
    num2 += "6";
  } else {
    num1 += "6";
  }
});

// Seven Button
sevenButton.addEventListener("click", () => {
  display.value += "7";
  if (num1 !== "" && operator !== "") {
    num2 += "7";
  } else {
    num1 += "7";
  }
});

// Eight Button
eightButton.addEventListener("click", () => {
  display.value += "8";
  if (num1 !== "" && operator !== "") {
    num2 += "8";
  } else {
    num1 += "8";
  }
});

// Nine Button
nineButton.addEventListener("click", () => {
  display.value += "9";
  if (num1 !== "" && operator !== "") {
    num2 += "9";
  } else {
    num1 += "9";
  }
});
