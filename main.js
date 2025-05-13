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
const subtract = get("subtract");
const add = get("add");
const textButton = get("text-button");
const romanNumeralButton = get("roman-numeral-button");
const equalsButton = get("equals-button");
const screenInput = get("screen-input");
const equationInput = get("equation-input");

const entryNumbers = document.querySelectorAll(".entry");
const operationButton = document.querySelectorAll(".operation-buttons");

equationInput.innerText = "";
screenInput.innerText = "";

const textOnScreen = (type) => {
  equationInput.innerText += type.innerText;
  screenInput.innerText += type.innerText;
};

let isOperationOn = false;
let isResultCalculated = false;
let isRoman = false;
let isText = false;

entryNumbers.forEach((entry) => {
  entry.addEventListener("click", () => {
    if (isOperationOn === true) {
      screenInput.innerText = "";
      textOnScreen(entry);
      isOperationOn = false;
    } else {
      textOnScreen(entry);
    }

    isRoman = false;
  });
});

operationButton.forEach((entry) => {
  entry.addEventListener("click", () => {
    isOperationOn = true;
    isRoman = false;
    isText = false;

    if (isResultCalculated === true) {
      equationInput.innerText = screenInput.innerText;
      isResultCalculated = false;
    }
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

const createOperation = (type, symbol) => {
  return type.addEventListener("click", () => {
    equationInput.innerText += symbol;
  });
};

createOperation(divide, "÷");
createOperation(multiply, "x");
createOperation(subtract, "-");
createOperation(add, "+");

equalsButton.addEventListener("click", () => {
  const finalEquation = equationInput.innerText;
  const splitEquation = finalEquation.split("");

  const replacedSymbols = splitEquation.map((character) => {
    if (character === "÷") {
      return "/";
    } else if (character === "x") {
      return "*";
    } else {
      return character;
    }
  });

  const newSymbolString = replacedSymbols.join("");
  screenInput.innerText = eval(newSymbolString);
  isResultCalculated = true;

  isRoman = false;
  isText = false;
});

const createRomanNueral = (number) => {
  //source: Senad from https://stackoverflow.com/questions/9083037/convert-a-number-into-a-roman-numeral-in-javascript
  if (isText === true) {
    screenInput.innerText = "NaN";
  } else {
    var digits = String(+number).split(""),
      key = [
        "",
        "C",
        "CC",
        "CCC",
        "CD",
        "D",
        "DC",
        "DCC",
        "DCCC",
        "CM",
        "",
        "X",
        "XX",
        "XXX",
        "XL",
        "L",
        "LX",
        "LXX",
        "LXXX",
        "XC",
        "",
        "I",
        "II",
        "III",
        "IV",
        "V",
        "VI",
        "VII",
        "VIII",
        "IX",
      ],
      roman = "",
      i = 3;

    while (i--) roman = (key[+digits.pop() + i * 10] || "") + roman;

    const output = Array(+digits.join("") + 1).join("M") + roman;
    screenInput.innerText = output;
  }
};

romanNumeralButton.addEventListener("click", () => {
  if (isRoman === true) {
    return;
  } else {
    createRomanNueral(parseInt(screenInput.innerText));
    isRoman = true;
  }
});

const createText = (number) => {
  //source: Ben and Peter at https://stackoverflow.com/questions/14766951/transform-numbers-to-words-in-lakh-crore-system
  const first = [
    "",
    "one ",
    "two ",
    "three ",
    "four ",
    "five ",
    "six ",
    "seven ",
    "eight ",
    "nine ",
    "ten ",
    "eleven ",
    "twelve ",
    "thirteen ",
    "fourteen ",
    "fifteen ",
    "sixteen ",
    "seventeen ",
    "eighteen ",
    "nineteen ",
  ];
  const tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  const mad = ["", "thousand", "million", "billion", "trillion"];
  let word = "";

  if (isRoman === true) {
    screenInput.innerText = "NaN";
  } else {
    for (let i = 0; i < mad.length; i++) {
      let tempNumber = number % (100 * Math.pow(1000, i));
      if (Math.floor(tempNumber / Math.pow(1000, i)) !== 0) {
        if (Math.floor(tempNumber / Math.pow(1000, i)) < 20) {
          word =
            first[Math.floor(tempNumber / Math.pow(1000, i))] +
            mad[i] +
            " " +
            word;
        } else {
          word =
            tens[Math.floor(tempNumber / (10 * Math.pow(1000, i)))] +
            " " +
            first[Math.floor(tempNumber / Math.pow(1000, i)) % 10] +
            mad[i] +
            " " +
            word;
        }
      }

      tempNumber = number % Math.pow(1000, i + 1);
      if (Math.floor(tempNumber / (100 * Math.pow(1000, i))) !== 0)
        word =
          first[Math.floor(tempNumber / (100 * Math.pow(1000, i)))] +
          "hundred " +
          word;
    }
    screenInput.innerText = word.trim();
  }
};

textButton.addEventListener("click", () => {
  if (isText === true) {
    return;
  } else {
    createText(screenInput.innerText);
    isText = true;
  }
});
