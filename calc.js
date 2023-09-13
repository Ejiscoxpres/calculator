const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

/*--the appearance of the code*/
class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
      this.previousOperandTextElement = previousOperandTextElement
      this.currentOperandTextElement = currentOperandTextElement
      this.clear()
    }
    /* functions illustrations*/
    clear() {
    }
    
    delete() {
    }
    
    appendNumber(number) {
    }
    
    chooseOperation(operation) {
    }
    
    compute() {
    }
    
    updateDisplay() {
    }   
    /*this is a clear() function*/
    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
        numberButtons.forEach(button => {
            button.addEventListener('click', () => {
              calculator.appendNumber(button.innerText)
              calculator.updateDisplay()
            })
          })
      }
      
}

