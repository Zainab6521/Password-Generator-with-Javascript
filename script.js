const randomFunc = {
  lower: getRandomLower,
  upper: getRandomLUpper,
  Number: getRandomNumber,
  symbol: getRandomSymbol,
};

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
