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
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation) {
        this.currentOperand = operation
        if (this.currentOperand === '') return
        if (this.topBlock !== '') {
            this.compute()
        }
        this.operation = operation
        this.topBlock = this.currentOperand
        this.currentOperand = ''
    }

    compute() {
        let computation
        const prev = parseFloat(this.topBlock)
        const cur = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(cur)) return
        switch (this.operation) {
            case '+':
                computation = prev + cur
                break
            case '-':
                computation = prev - cur
                break
            case '/':
                computation = prev / cur
                break
            case '*':
                computation = prev * cur
                break
            default:
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.topBlock = ''
    }

    updateDisplay() {
        this.topBlockTextElement.innerText = this.topBlock
        this.currentOperandTextElement.innerText = this.currentOperand
    }

};
const numberButtons = document.querySelectorAll('[data-number]');
const operandsButton = document.querySelectorAll('[data-operand]');
const equalButton = document.querySelector('[data-equal]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const topBlockTextElement = document.querySelector('[data-top-block]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(topBlockTextElement, currentOperandTextElement)

allClearButton.addEventListener('click', () => {
    calculator.clear()
    calculator.updateDisplay()
})

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operandsButton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalButton.addEventListener('click', () => {
    calculator.compute()
    calculator.updateDisplay()
})