defaultResult = 0
currentResult = defaultResult

//makes sure that user input is a number
function getUserInput() {
return parseInt(userInput.value)
}
//Generate calculation log
function createAndWriteOutput(numberBeforeCalc, operator, calcNumb) {
    const newNumber = `${numberBeforeCalc} ${operator} ${calcNumb}`
    outputResult(currentResult, newNumber)
}

function add () { 
    const enteredNumber = getUserInput()
    initialResult = currentResult
    currentResult += enteredNumber
    createAndWriteOutput(initialResult, "+", enteredNumber)

}

function subtract () { 
    const enteredNumber = getUserInput()
    initialResult = currentResult
    currentResult = currentResult - enteredNumber
    createAndWriteOutput(initialResult, "-", enteredNumber)
}

function multiply () { 
    const enteredNumber = getUserInput()
    initialResult = currentResult
    currentResult = currentResult * enteredNumber
    createAndWriteOutput(initialResult, "*", enteredNumber)
}

function divide () { 
    const enteredNumber = getUserInput()
    initialResult = currentResult
    currentResult = currentResult / enteredNumber
    createAndWriteOutput(initialResult, "/", enteredNumber)
}

addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', subtract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)