// form2

const username = document.querySelector(`#username`);

username.addEventListener(`input`, e => {
    console.log(e.target.value);
})

username.addEventListener(`change`, e => {
    console.log(e.target.value);
})

const color = document.querySelector(`#color`);

color.addEventListener(`input`, e => {
    document.body.style.background = e.target.value;
})

color.addEventListener(`change`, e => {
    document.body.style.background = e.target.value;
})

setTimeout(() => {
    let chosenTshirt = document.querySelector(`input[name="tSHirtSize"]:checked`);
    console.log(chosenTshirt.value);
}, 1500);

let checkedTShirts = [...document.querySelectorAll(`input[name="tSHirtSize"]:checked`)];
console.log(checkedTShirts);

console.log( checkedTShirts.map(input => input.value) );

const tshirtsSize = document.querySelectorAll(`input[name="tSHirtSize"]`);

const checkedTShirts = [...document.querySelectorAll(`input[name="tSHirtSize"]:checked`)]
    .map(input => input.value);

console.log(checkedTShirts);

tshirtsSize.forEach(input => {
    input.addEventListener(`change`, e => {
        //console.log(e.target.value, e.target.checked); // true/false

        if(e.target.checked){
            checkedTShirts.push(e.target.value);
        } else{
            let indexOfInput = checkedTShirts.findIndex(input => input === e.target.value);
            checkedTShirts.splice(indexOfInput,1);
        }

        console.log(checkedTShirts);
    })
})

const message = document.querySelector(`#message`);
console.log(message.value);

message.addEventListener(`input`, e=>{
    console.log(message.value);
})

const username = document.querySelector(`#username`);
console.log(username.value);

const clickMe = document.querySelector(`#clickMe`);
clickMe.addEventListener(`click`, () => console.log(`here`));



const select = document.querySelector(`#select`);
console.log(select.value);

select.addEventListener(`change`, e => console.log(e.target.value));

const select = document.querySelector(`#select`);
console.log(select.selectedOptions);

let selectedOptions = [...select.selectedOptions].map(option => option.value);
console.log(selectedOptions);

select.addEventListener(`change`, e => console.log(e.target.value));