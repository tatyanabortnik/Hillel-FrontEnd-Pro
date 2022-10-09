const block = document.querySelector(`#block`);
block.style.left = 0;
block.style.top = 0;

const STEP = 10;

const movingRight = () => {
    block.style.left = parseInt(block.style.left) + STEP + `px`;
}

///////
const movingLeft = () => {
    block.style.left = parseInt(block.style.left) - STEP + `px`;
}
/////////

const crouch = () => {
    block.style.top = parseInt(block.style.top) + STEP + `px`;
}

const jump = () => {}

const ACTIONS = {
    37: movingLeft,
    38: jump,
    39: movingRight,
    40: crouch
}

document.addEventListener(`keydown`, e => ACTIONS[e.keyCode] && ACTIONS[e.keyCode]());

document.addEventListener(`keydown`, e => console.log(e));
