const board = document.querySelector('#board');
const SQUARES_NUMBER = 500;
const colors = ['#C4BEB5', '#70ABBF', '#327496', '#495C69', '#907868'];


for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => //без фигурных скобок
        setColor(square))

    square.addEventListener('mouseleave', () => 
        removeColor(square))

    board.append(square);
}


function setColor (element) {
    const color = getRandomColor();
    element.style.backgroundColor = color; // `${color}`
    element.style.boxShadow = `0 0 50px ${color}`;
}

function removeColor (element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor () {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

