// Selects the <h3 id="equation"> to show the history (e.g., "10 +")
const equationDisplay = document.getElementById('equation');

// Selects the <h2 id="answer"> to show the current number being typed
const answerDisplay = document.getElementById('answer');

// Selects ALL <button> tags on the page and puts them in a list
const buttons = document.querySelectorAll('button');


/* =========================================
   PART 2: THE MEMORY
   We need "containers" (variables) to remember what the user types.
   We use 'let' because these values will change constantly.
   ========================================= */

// Stores the number currently being typed (e.g., "55")
let currentOperand = ''; 

// Stores the number typed BEFORE the operator (e.g., "10")
let previousOperand = ''; 

// Stores the symbol (+, -, x, /)
let operation = undefined; 


/* =========================================
   PART 3: THE LISTENER (THE BRAIN)
   This loop goes through every single button and adds a "Click Listener".
   This is the main entry point for all user interaction.
   ========================================= */

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // 1. Get the text inside the clicked button (e.g., "7" or "+")
        const value = button.innerText;
        
        // 2. Decide what to do based on what was clicked
        if (value >= '0' && value <= '9' || value === '.') {
            // If it's a number or dot, add it to the screen
            appendNumber(value);
        } else if (value === 'C') {
            // If it's 'C', wipe the memory
            clear();
        } else if (value === '+/-') {
            // If it's '+/-', flip the sign (positive/negative)
            negate();
        } else if (value === '%') {
            // If it's '%', divide by 100
            percent();
        } else if (value === '=') {
            // If it's '=', do the math!
            compute();
        } else {
            // If it's none of the above, it must be an operator (+, -, x, /)
            chooseOperation(value);
        }
        
        // 3. After changing the data, update the HTML to show the new state
        updateDisplay();
    });
});


/* =========================================
   PART 4: THE ACTIONS (HELPER FUNCTIONS)
   These are small machines that do specific tasks.
   ========================================= */

// FUNCTION: Adds a number to the string
function appendNumber(number) {
    // Logic Check: If user types '.' but we already have a '.', stop!
    if (number === '.' && currentOperand.includes('.')) return;
    
    // Convert numbers to strings and stick them together ("5" + "5" = "55")
    currentOperand = currentOperand.toString() + number.toString();
}

// FUNCTION: Handles what happens when you click +, -, x, or /
function chooseOperation(op) {
    // If the screen is empty, don't let them click an operator
    if (currentOperand === '') return;
    
    // If we already have a previous number, do that math first
    // (e.g., typing 5 + 5 + ... calculates the first 5+5 before handling the second +)
    if (previousOperand !== '') {
        compute();
    }
    
    // Save the operator they clicked
    operation = op;
    
    // Move the current number to "Previous" memory so we can type a new one
    previousOperand = currentOperand;
    
    // Clear the current slot for the next number
    currentOperand = '';
}

// FUNCTION: The Math Engine
function compute() {
    let computation;
    
    // Convert the strings ("55") back into real numbers (55)
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    
    // Safety Check: If numbers aren't real, stop immediately
    if (isNaN(prev) || isNaN(current)) return;
    
    // The Switch Statement: Like a traffic cop directing operations
    switch (operation) {
        case '+':
            computation = prev + current;
            break; // 'break' stops the code from running into the next case
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
            return; // If operator is weird, do nothing
    }
    
    // The result becomes the new "Current" number
    currentOperand = computation;
    
    // Reset everything else
    operation = undefined;
    previousOperand = '';
}

// FUNCTION: Resets everything to empty
function clear() {
    currentOperand = '';
    previousOperand = '';
    operation = undefined;
}

// FUNCTION: Multiplies by -1 to flip positive/negative
function negate() {
    if (currentOperand === '') return;
    currentOperand = currentOperand * -1;
}

// FUNCTION: Divides by 100
function percent() {
    if (currentOperand === '') return;
    currentOperand = currentOperand / 100;
}

// FUNCTION: Updates the HTML text to match our JavaScript variables
function updateDisplay() {
    // Show the number in the main display
    answerDisplay.innerText = currentOperand;
    
    // If we have an operator waiting, show the history (e.g., "50 +")
    if (operation != null) {
        equationDisplay.innerText = `${previousOperand} ${operation}`;
    } else {
        // Otherwise, keep the top history line empty
        equationDisplay.innerText = '';
    }
}