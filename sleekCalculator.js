/**
 * Filename: sleekCalculator.js
 * 
 * Description: A sophisticated, elaborated, and complex JavaScript code for a sleek calculator with advanced functionalities.
 */

// Define the Calculator class
class Calculator {
  constructor() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.currentOperator = null;
    this.isWaitingForSecondOperand = false;
  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperator(operator) {
    if (this.currentOperand === '') return;
    if (this.previousOperand !== '') {
      this.compute();
    }
    this.currentOperator = operator;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.currentOperator) {
      case '+':
        computation = prev + current;
        break;
      case '-':
        computation = prev - current;
        break;
      case '*':
        computation = prev * current;
        break;
      case '÷':
        computation = prev / current;
        break;
      default:
        return;
    }
    this.currentOperand = computation;
    this.currentOperator = null;
    this.previousOperand = '';
    this.isWaitingForSecondOperand = false;
  }

  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.currentOperator = null;
    this.isWaitingForSecondOperand = false;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  updateDisplay() {
    const currentOperandElement = document.querySelector('.current-operand');
    const previousOperandElement = document.querySelector('.previous-operand');
    currentOperandElement.innerText = this.currentOperand;
    if (this.currentOperator != null) {
      previousOperandElement.innerText = `${this.previousOperand} ${this.currentOperator}`;
    } else {
      previousOperandElement.innerText = '';
    }
  }
}

// Select calculator elements
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const clearButton = document.querySelector('[data-clear]');
const previousOperandElement = document.querySelector('.previous-operand');
const currentOperandElement = document.querySelector('.current-operand');

// Create a new instance of Calculator class
const calculator = new Calculator();

// Attach event listeners to number buttons
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

// Attach event listeners to operator buttons
operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperator(button.innerText);
    calculator.updateDisplay();
  });
});

// Attach event listener to equals button
equalsButton.addEventListener('click', () => {
  calculator.compute();
  calculator.updateDisplay();
});

// Attach event listener to delete button
deleteButton.addEventListener('click', () => {
  calculator.delete();
  calculator.updateDisplay();
});

// Attach event listener to clear button
clearButton.addEventListener('click', () => {
  calculator.clear();
  calculator.updateDisplay();
});