const numberDisplay = document.querySelector('.number');
const decreaseButton = document.querySelector('.decrease');
const resetButton = document.querySelector('.reset');
const increaseButton = document.querySelector('.increase');

let currentNum = numberDisplay.innerText;

const increaseNumber = () => {
    let increasedNum = ++currentNum;
    increasedNum = increasedNum.toString();
    numberDisplay.innerText = increasedNum;
}

increaseButton.addEventListener('click', increaseNumber);