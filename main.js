const get = (selector) => {
  return document.getElementById(selector);
};

const one = get("one");
const two = get("two");
const three = get("three");
const four = get("four");
const five = get("five");
const six = get("six");
const seven = get("seven");
const eight = get("eight");
const nine = get("nine");
const ten = get("ten");
const point = get("point");
const ac = get("ac");
const divide = get("divide");
const multiply = get("multiply");
const textButton = get("text-button");
const romanNumeralButton = get("roman-numeral-button");
const equalsButton = get("equals-button");
const screenInput = get("screen-input");
const equationInput = get("equation-input");


const entryNumbers = document.querySelectorAll(".entry");
const operationButton = document.querySelectorAll(".operation-buttons");



console.log(entryNumbers);

equationInput.innerText = "84848484";
screenInput.innerText = "5454554";

const textOnScreen = (type) => {
    equationInput.innerText += type.innerText; 
    screenInput.innerText += type.innerText;
};


let isOperationOn = false;


entryNumbers.forEach((entry) => {
  entry.addEventListener("click", () => {
    if(isOperationOn === true) {

        screenInput.innerText = "";
        textOnScreen(entry);
        isOperationOn = false;

    } else {
        textOnScreen(entry);
    }
  });
});

operationButton.forEach((entry) => {
    entry.addEventListener("click", () => {
        isOperationOn = true;
    });
  });

point.addEventListener("click", () => {
  if (
    equationInput.innerText.includes(".") ||
    screenInput.innerText.includes(".")
  ) {
    return;
  } else {
    textOnScreen(point);
  }
});

ac.addEventListener("click", () => {
  equationInput.innerText = "";
  screenInput.innerText = "0";
});

multiply.addEventListener("click", () => {
  equationInput.innerText += "x";

  //if
});

//÷
