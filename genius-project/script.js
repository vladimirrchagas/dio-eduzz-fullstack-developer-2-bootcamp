let order = [];
let clickedOrder = [];

// 0 - Green
// 1 - Red
// 2 - Yellow
// 3 - Blue

const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');
const scoreText = document.querySelector('.score');

// let createElement = (i) => {

// }

// Create aleatory color order
const lightColor = (element, number) => {
    number = number * 500;

    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    
    setTimeout(() => {
        element.classList.remove('selected');
    }, number);
}

// Turn On next color
const shuffleOrder = () => {
    const colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        const elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

// Check Click Order x Game Generated Order
const checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }

    if (clickedOrder.length == order.length) {
        score++;
        alert(`Pontuação: ${score} \n Você Acertou! Iniciando Próximo Nível`)
        nextLevel();
    }
}

// User Click
const click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);
}

// Create color
const createColorElement = (color) => {
    switch(color) {
        case(0):
            return green;
        case(1):
            return red;
        case(2):
            return yellow;
        default:
            return blue;
    }
}

// Next Level
const nextLevel = () => {
    scoreText.innerHTML = `Score: ${score}`;
    shuffleOrder();
}

// Game Over
const gameOver = () => {
    alert(`Pontuação: ${score}! \n Você perdeu o jogo! Clique em OK para iniciar um novo jogo!`);
    order = [];
    clickedOrder = [];

    playGame();
}

const playGame = () => {
    alert(`Bem vindo ao Genius! Iniciando novo jogo!`)
    score = 0;
    nextLevel();
}

// Click Events

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();