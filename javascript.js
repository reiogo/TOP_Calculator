// Math functions.
const add = function(arg1, arg2) {
    return arg1 + arg2;
	
};

const subtract = function(arg1, arg2) {
    return arg1 - arg2;
	
};

const multiply = function(arg1, arg2) {
    return arg1*arg2;
};

const divide = function(arg1, arg2){
    return arg1/arg2;
};


// Variables for the first number, second number, and operator.

let argOne = 0;
let argTwo = 0;
let operator = '';

// Interface for variables and math functions.
function operate (argOne, argTwo, operator) {
    switch (operator) {
        case 'add': 
            add(argOne, argTwo);
            break;
        case 'substract': 
            substract(argOne, argTwo);
            break;
        case 'multiply': 
            multiply(argOne, argTwo);
            break;
        case 'divide': 
            divide(argOne, argTwo);
            break;
        default:
            alert ('Something went wrong');
    }}

// Display number

let display_value = 0;

// Number buttons and display.
function sendToDisplay(event) {
    if (event.target.getAttribute('class') === 'num') {
    displayText = 
        document.querySelector('.displayText');
    displayText.textContent =
        event.target.textContent;
    //Store the display variable.
    display_value = event.target.textContent;
    } 

}

numberButtonsContainer = 
        document.querySelector('.numberButtons');
numberButtonsContainer.addEventListener('click', sendToDisplay);

//Making the calculator work
