const block = document.querySelector(`#block`);
const bamsP = document.querySelector(`#bams`);

block.style.left = 0;
block.style.top = 0;

const getRandomIntInclusive = (min = 0, max = 255) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const getRandomColor = () => {
    let colorDigits = [];

    for (let i = 0; i <= 2; i++) {
        colorDigits.push(getRandomIntInclusive())      
    }

    return `rgb(${colorDigits.join(`,`)})`
}

const STEP = 10;

const movingRight = () => {
    block.style.left = parseInt(block.style.left) + STEP + `px`;
}

const movingLeft = () => {
    block.style.left = parseInt(block.style.left) - STEP + `px`;
}

const movingDown = () => {
    block.style.top = parseInt(block.style.top) + STEP + `px`;
}

const movingUp = () => {
    block.style.top = parseInt(block.style.top) - STEP + `px`;
}

const removeJumpClass = () => {
    block.classList.remove(`jump`);
}

const jump = () => {
    block.classList.add(`jump`);
}

const crouch = () => {
    block.style.height = block.offsetHeight * 0.6 + `px`;
    block.style.width = block.offsetWidth * 0.75 + block.offsetWidth + `px`;
}

const bams = () => {
    bamsP.classList.add(`visible`);
    
    setInterval(() => {
        bamsP.style.color = getRandomColor()
    }, 400);

    setTimeout(() => {
        bamsP.classList.remove(`visible`);
    }, 2000);
}

const ACTIONS = {
    37: movingLeft,
    32: jump,
    38: movingUp,
    39: movingRight,
    40: movingDown,
    17: crouch
}

const CANCEL_ACTIONS = {
    32: removeJumpClass,
}

document.addEventListener(`keydown`, e => {
    ACTIONS[e.keyCode] && ACTIONS[e.keyCode]();
    // console.dir(block);

    let bodyWidth = document.body.offsetWidth;
    let bodyHeight = document.body.offsetHeight;
    let blockRightCoordinate = block.offsetLeft+block.offsetWidth;
    let blockBottomCoordinate = block.offsetTop+block.offsetHeight;

    if (blockRightCoordinate > bodyWidth) {
        movingLeft();
        movingLeft();
        bams();
    } else if (block.offsetLeft < 0) {
        movingRight();
        movingRight();
        bams();
    } else if (blockBottomCoordinate > bodyHeight) {
        movingUp();
        movingUp();
        bams();
    } else if (block.offsetTop < 0) {
        movingDown();
        movingDown();
        bams();
    }

    return 
})

document.addEventListener(`keyup`, e => CANCEL_ACTIONS[e.keyCode] && CANCEL_ACTIONS[e.keyCode]());
