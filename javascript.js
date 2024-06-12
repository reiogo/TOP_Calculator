// Variables for the first number, second number, and operator.

let argOne = '';
let argTwo = '';
let operator = '';
let flag = 'argOne';


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
    argOne = Number(argOne);
    argTwo = Number(argTwo);

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


        //Store display variable in the correct argument.
        if(flag === 'argOne') {
            argOne += (event.target.textContent);
            displayText.textContent =
                argOne;
        } else if (flag === 'argTwo') {
            argTwo += (event.target.textContent);
            displayText.textContent =
                argTwo;
        } else {
            argOne += (event.target.textContent);
            displayText.textContent =
                argOne;
            argTwo ='';
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
        if (argOne === '') {
            flag = 'argOne';
            clearDisplayTo(operatorVariable);

        } else if (argTwo === '') {
            flag = 'argTwo';
            clearDisplayTo(operatorVariable);
        } else {
            flag = 'argOne';
            clearDisplayTo(operatorVariable);
        }
    }
}

sideRow = 
        document.querySelector('.sideRow');

sideRow.addEventListener('click', storeOperator);





// Calculate when equal is clicked.
function equalIsPressed () {
    
    let res;

    displayText = 
        document.querySelector('.displayText');

    if (argTwo == 0 && operatorVariable =='/') {
        displayText.textContent = 'Doesn\'t Work';
    } else if (argOne !== '' && argTwo !== '' && operatorVariable !== 'cleared') {
        res =
            operate(argOne, argTwo, operatorVariable);
        displayText.textContent = res;
        operatorVariable = 'cleared';
        argOne = res;
        argTwo = '';
        
    }

}

equalSign = document.querySelector('.equalBtn');

equalSign.addEventListener('click', equalIsPressed);



//Clear button function.
function clearButtonClicked () {
    argOne = '';
    argTwo = '';
    operator = '';
    flag = 'argOne';
    operatorVariable ='cleared';
    displayText = document.querySelector('.displayText');
    displayText.textContent = '0';
}

//Clear display.
function clearDisplayTo (str) {
    displayText = document.querySelector('.displayText');
    displayText.textContent = str;
}




clearButton = document.querySelector('.clearBtn');
clearButton.addEventListener('click', clearButtonClicked);



//Backspace button
function backspace () {
    let returnedText = '';
    displayText = document.querySelector('.displayText');
    if (flag == 'argOne') {
        returnedText = argOne.slice(0, -1);
        displayText.textContent = returnedText;
        argOne = returnedText;
    } else if (flag == 'argTwo') {
        returnedText = argTwo.slice(0, -1);
        displayText.textContent = returnedText;
        argTwo = returnedText;
    }
}



backspaceButton = document.querySelector('.backBtn');
backspaceButton.addEventListener('click', backspace);

