class Calculator {
    constructor(topBlockTextElement, currentOperandTextElement) {
        this.topBlockTextElement = topBlockTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }


    clear() {
        this.topBlock = ''
        this.currentOperand = ''
        this.operation = undefined
    };

    delete () {

    }

    appendNumber(number) { 
        this.currentOperand = number
    }

    chooseOperation(operation) {

    }

    compute() {

    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand
    }

};
const numberButtons = document.querySelectorAll('[data-number]');
const operandsButton = document.querySelectorAll('[data-operand]');
const equalButton = document.querySelector('[data-equal]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const topBlockTextElement = document.querySelector('[data-top-block]');
const currentOperandTextElement = document.querySelectorAll('[data-current-operand]');

const calculator = new Calculator(topBlockTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

// numberButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         console.log(button.innerText)
//     })
// })