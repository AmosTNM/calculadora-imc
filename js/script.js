import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { notANumber, calculateIMC } from './utils.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = function (event) {
    event.preventDefault()
    
    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightIsNaN = notANumber(weight) || notANumber(height)
    if (weightOrHeightIsNaN) {
        AlertError.open()
        return;
    }
    
    AlertError.close()
    
    const result = calculateIMC(weight, height)
    displayResultMessage(result)
}

function displayResultMessage(result) {
    const message = `Seu IMC é ${result}`
    
    Modal.message.innerText = message
    Modal.open()
}

inputWeight.oninput = () => {AlertError.close()}
inputHeight.oninput = () => {AlertError.close()}

/*
Alternativa para as funções arrow acima:
window.addEventListener('input', insertValue)
function insertValue(event) {
    if (event.key != '') {
        AlertError.close()
    }
}
*/

export { inputWeight, inputHeight }