const square = document.querySelector(`.block`);
const squareWidth = square.clientWidth;
const squareHeight = square.clientHeight;

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

let colorChanges = setInterval(() => {
    square.style.backgroundColor = getRandomColor()
}, 500);

let blockMoves = setInterval(() => {
    let body = document.body;
    let html = document.documentElement;
    let bodyWidth = body.offsetWidth;
    let bodyHeight = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );

    square.style.left = getRandomIntInclusive(0,bodyWidth-squareWidth) + `px`;
    square.style.top = getRandomIntInclusive(0,bodyHeight-squareHeight) + `px`;
}, 1000);




