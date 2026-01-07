const display_Eqn = document.getElementById('equation');
const answer_Eqn = document.getElementById('answer');

const buttons = document.querySelector('button');

let curr_operand = '';
let prev_operand = '';
let operation = undefined;

// helper functions

function appendNumber(number){
    if(number !== '.' || !curr_operand.includes('.')){
        curr_operand = curr_operand.toString() + number.toString();
    }
}



/*

// 1. Select DOM elements
    const equationDisplay = document.getElementById('equation');
    const answerDisplay = document.getElementById('answer');
    const buttons = document.querySelectorAll('button');

    // 2. Variables to store calculator state
    let currentOperand = '';
    let previousOperand = '';
    let operation = undefined;

    // 3. Add event listeners to all buttons
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.innerText;

            if (value >= '0' && value <= '9' || value === '.') {
                appendNumber(value);
            } else if (value === 'C') {
                clear();
            } else if (value === '+/-') {
                negate();
            } else if (value === '%') {
                percent();
            } else if (value === '=') {
                compute();
            } else {
                chooseOperation(value);
            }
            updateDisplay();
        });
    });

    // --- Helper Functions ---

    function appendNumber(number) {
        // Prevent multiple decimals
        if (number === '.' && currentOperand.includes('.')) return;
        currentOperand = currentOperand.toString() + number.toString();
    }

    function chooseOperation(op) {
        if (currentOperand === '') return;
        if (previousOperand !== '') {
            compute();
        }
        operation = op;
        previousOperand = currentOperand;
        currentOperand = '';
    }

    function compute() {
        let computation;
        const prev = parseFloat(previousOperand);
        const current = parseFloat(currentOperand);

        if (isNaN(prev) || isNaN(current)) return;

        switch (operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case 'x':
                computation = prev * current;
                break;
            case '/':
                computation = prev / current;
                break;
            default:
                return;
        }

        currentOperand = computation;
        operation = undefined;
        previousOperand = '';
    }

    function clear() {
        currentOperand = '';
        previousOperand = '';
        operation = undefined;
    }

    function negate() {
        if (currentOperand === '') return;
        currentOperand = currentOperand * -1;
    }

    function percent() {
        if (currentOperand === '') return;
        currentOperand = currentOperand / 100;
    }

    function updateDisplay() {
        answerDisplay.innerText = currentOperand;
        if (operation != null) {
            equationDisplay.innerText = `${previousOperand} ${operation}`;
        } else {
            equationDisplay.innerText = '';
        }
    }


*/