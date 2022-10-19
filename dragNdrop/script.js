const block = document.querySelector(`#block`);
block.style.left = 0;
block.style.top = 0;

let x_start, y_start;

block.addEventListener(`mousedown`, e => {
    x_start = e.clientX;
    y_start = e.clientY;

    console.log(e.type, x_start, y_start);

    document.addEventListener(`mouseup`, mouseUpFunc);
    block.addEventListener(`mousemove`, mouseMoveFunc);
})

const mouseMoveFunc = e => {
    let x_end = e.clientX;
    let y_end = e.clientY;

    let x_dif = x_end-x_start; // left
    let y_dif = y_end-y_start; // top

    x_start = x_end;
    y_start = y_end;

    block.style.left = parseInt(block.style.left) + x_dif + `px`;
    block.style.top = parseInt(block.style.top) + y_dif + `px`;

    console.log(e.type, x_end, y_end);
}

const mouseUpFunc = e => {
    let x_end = e.clientX;
    let y_end = e.clientY;

    let x_dif = x_end-x_start; // left
    let y_dif = y_end-y_start; // top

    block.style.left = parseInt(block.style.left) + x_dif + `px`;
    block.style.top = parseInt(block.style.top) + y_dif + `px`;

    console.log(e.type, x_end, y_end);

    document.removeEventListener(`mouseup`, mouseUpFunc);
    block.removeEventListener(`mousemove`, mouseMoveFunc);
}