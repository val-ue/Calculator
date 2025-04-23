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

//when u press one of the numbers, it takes the
//  button innertext and puts it onto the screen 
// (both places)

const entryNumbers = document.querySelectorAll(".entry");
//so now we have a nodelist of all the numbers
//a nodelist is a type of array so we can loop through them

console.log(entryNumbers);

equationInput.innerText = "84848484";
screenInput.innerText = "5454554";

entryNumbers.forEach(entry => {
    entry.addEventListener("click", () => {
        equationInput.innerText += entry.innerText;
        screenInput.innerText += entry.innerText;
    })
});
