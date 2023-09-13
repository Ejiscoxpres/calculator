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
        /*numberButtons.forEach(button => {
            button.addEventListener('click', () => {
              calculator.appendNumber(button.innerText)
              calculator.updateDisplay()
            })
          })
          
      }

      appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()

        operationButtons.forEach(button => {
            button.addEventListener('click', () => {
              calculator.chooseOperation(button.innerText)
              calculator.updateDisplay()
            })
          })*/
        }
        /* the operation button*/
          chooseOperation(operation) {
            if (this.currentOperand === '') return
            if (this.previousOperand !== '') {
              this.compute()
            }
            this.operation = operation
            this.previousOperand = this.currentOperand
            this.currentOperand = ''
            equalsButton.addEventListener('click', button => {
                calculator.compute()
                calculator.updateDisplay()
              })
          }
          
      /* computational button*/
      compute() {
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
          case '+':
            computation = prev + current
            break
          case '-':
            computation = prev - current
            break
          case '*':
            computation = prev * current
            break
          case '÷':
            computation = prev / current
            break
          default:
            return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
      }
    
      
      
}

