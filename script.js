const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numberEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomLUpper,
  Number: getRandomNumber,
  symbol: getRandomSymbol,
};

generateEl.addEventListener('click', ()=>{
    const length = +lengthEl.nodeValue
    const hasLower = lowercaseEl.nodeValue
    const hasUpper = 
})

function getRandomLower() {
  return String.fromCharCode(Math.floor(math.random() * 26) + 97);
}
function getRandomLUpper() {
  return String.fromCharCode(Math.floor(math.random() * 26) + 65);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]<>/,";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
