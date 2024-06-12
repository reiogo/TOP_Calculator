// Variables for the first number, second number, and operator.

let argOne = 'cleared';
let argTwo = 'cleared';
let operator = '';


// Operator variable.
let operatorVariable ='cleared';



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


// Interface for variables and math functions.
function operate (argOne, argTwo, operator) {

    let results = 0;

    switch (operator) {
        case '+': 
            results = add(argOne, argTwo);
    console.log(results) 
            break;
        case '-': 
            results = subtract(argOne, argTwo);
    console.log(results) 
            break;
        case 'x': 
            results = multiply(argOne, argTwo);
    console.log(results) 
            break;
        case '/': 
            results = divide(argOne, argTwo);
    console.log(results) 
            break;
        default:
            alert ('Something went wrong');

    }
    return results;
}


// Displaying clicked number and storing the variable.
function sendToDisplay(event) {

    if (event.target.getAttribute('class') === 'num') {

        displayText = 
            document.querySelector('.displayText');
        displayText.textContent =
            event.target.textContent;


        //Store display variable in the correct argument.
        if(argOne === 'cleared') {
            argOne = Number (event.target.textContent);
        } else if (argTwo === 'cleared') {
            argTwo = Number (event.target.textContent);
        } else {
            argOne = Number (event.target.textContent);
            argTwo ='cleared';
        }
    }

}


numberButtonsContainer = 
        document.querySelector('.numberButtons');

numberButtonsContainer.addEventListener('click', sendToDisplay);




// Action for when operator is clicked.
function storeOperator (event) {

    if(event.target.getAttribute('class')==='signBtn'){
        operatorVariable = event.target.textContent;
    }
}

sideRow = 
        document.querySelector('.sideRow');

sideRow.addEventListener('click', storeOperator);





// Calculate when equal is clicked.

function equalIsPressed () {

    if (argOne !== 'cleared' && argTwo !== 'cleared' && operatorVariable !== 'cleared') {
    displayText = 
        document.querySelector('.displayText');
    displayText.textContent = operate(argOne, argTwo, operatorVariable)
        operatorVariable = 'cleared'
        argOne = 'cleared'
        argTwo = 'cleared'
        
    }
}

equalSign = document.querySelector('.equalBtn');

equalSign.addEventListener('click', equalIsPressed);



