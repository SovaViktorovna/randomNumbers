const runButton = document.getElementById('button')
const fromInput = document.getElementById('from_input')
const toInput = document.getElementById('to_input')
const resultField = document.getElementById('result_field')

function getRandomBetween(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function getResult(){
  const result = getRandomBetween(fromInput.value, toInput.value)

  resultField.textContent = result
}

runButton.onclick = getResult