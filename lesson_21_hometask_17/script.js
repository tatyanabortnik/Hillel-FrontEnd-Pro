const element = document.querySelector(`#element`);
const form = document.querySelector(`#form`);
const color = document.querySelector(`#color`);
const shape = document.querySelector(`#shape`);

form.addEventListener(`submit`, e => {
    e.preventDefault();

    element.style.background = color.value;

    if(element.classList.length == 1) {
        element.classList.add(shape.value);
    } else {
       getLastClass(element) != shape.value && ( // only do it if classes are different, otherwise do nothing 
            removeLastClass(element),
            element.classList.add(shape.value)
        )   
    }
})

const removeLastClass = el => {
    let classNameArr = el.className.split(` `);
    classNameArr.pop();
    el.className = classNameArr.toString();
} 

const getLastClass = el => {
    let classNameArr = el.className.split(` `);
    return classNameArr[classNameArr.length-1]
}