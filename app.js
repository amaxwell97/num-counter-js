const numberDisplay = document.querySelector('.number');
const decreaseButton = document.querySelector('.decrease');
const resetButton = document.querySelector('.reset');
const increaseButton = document.querySelector('.increase');

let currentNum = numberDisplay.innerText;

const increaseNumber = () => {
    ++currentNum;
    numberDisplay.innerText = currentNum.toString();
}
increaseButton.addEventListener('click', increaseNumber);

const decreaseNumber = () => {
    --currentNum;
    numberDisplay.innerText = currentNum.toString();
}
decreaseButton.addEventListener('click', decreaseNumber);

const resetNumber = () => {
    currentNum = 0;
    numberDisplay.innerText = currentNum.toString();
}
resetButton.addEventListener('click', resetNumber);