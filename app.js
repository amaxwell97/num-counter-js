const numberDisplay = document.querySelector('.number');
const decreaseButton = document.querySelector('.decrease');
const resetButton = document.querySelector('.reset');
const increaseButton = document.querySelector('.increase');

let currentNum = numberDisplay.innerText;

const setNumColor = () => {
    if (Number(currentNum) < 0 ) {
        numberDisplay.style.color = '#D70000';
    } else if (Number(currentNum) > 0){
        numberDisplay.style.color = '#32CD32';
    } else {
        numberDisplay.style.color = '#000';
    }
}

const increaseNumber = () => {
    ++currentNum;
    numberDisplay.innerText = currentNum.toString();
    setNumColor();
}
increaseButton.addEventListener('click', increaseNumber);

const decreaseNumber = () => {
    --currentNum;
    numberDisplay.innerText = currentNum.toString();
    setNumColor();
}
decreaseButton.addEventListener('click', decreaseNumber);

const resetNumber = () => {
    currentNum = 0;
    numberDisplay.innerText = currentNum.toString();
    setNumColor();
}
resetButton.addEventListener('click', resetNumber);