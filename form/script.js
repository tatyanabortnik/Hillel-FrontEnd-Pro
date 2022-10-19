// form

// const username = document.querySelector(`#username`);

// username.addEventListener(`input`, e => {
//     console.log(e.target.value);
// })

// username.addEventListener(`change`, e => {
//     console.log(e.target.value);
// })

// const color = document.querySelector(`#color`);

// color.addEventListener(`input`, e => {
//     document.body.style.background = e.target.value;
// })

// color.addEventListener(`change`, e => {
//     document.body.style.background = e.target.value;
// })

// setTimeout(() => {
//     let chosenTshirt = document.querySelector(`input[name="tSHirtSize"]:checked`);
//     console.log(chosenTshirt.value);
// }, 1500);

// let checkedTShirts = [...document.querySelectorAll(`input[name="tSHirtSize"]:checked`)];
// console.log(checkedTShirts);

// console.log( checkedTShirts.map(input => input.value) );

// const tshirtsSize = document.querySelectorAll(`input[name="tSHirtSize"]`);

// const checkedTShirts = [...document.querySelectorAll(`input[name="tSHirtSize"]:checked`)]
//     .map(input => input.value);

// console.log(checkedTShirts);

// tshirtsSize.forEach(input => {
//     input.addEventListener(`change`, e => {
//         //console.log(e.target.value, e.target.checked); // true/false

//         if(e.target.checked){
//             checkedTShirts.push(e.target.value);
//         } else{
//             let indexOfInput = checkedTShirts.findIndex(input => input === e.target.value);
//             checkedTShirts.splice(indexOfInput,1);
//         }

//         console.log(checkedTShirts);
//     })
// })

// const message = document.querySelector(`#message`);
// console.log(message.value);

// message.addEventListener(`input`, e=>{
//     console.log(message.value);
// })

// const username = document.querySelector(`#username`);
// console.log(username.value);

// const clickMe = document.querySelector(`#clickMe`);
// clickMe.addEventListener(`click`, () => console.log(`here`));

const orderTShirt = document.querySelector(`#orderTShirt`);
const orderFullname = document.querySelector(`#orderFullname`);
const orderEmail = document.querySelector(`#orderEmail`);
const orderPassword = document.querySelector(`#orderPassword`);
const orderConfirmPassword = document.querySelector(`#orderConfirmPassword`);
const orderMessage = document.querySelector(`#orderMessage`);
const orderCountry = document.querySelector(`#orderCountry`);

orderTShirt.addEventListener(`submit`, e => {
    e.preventDefault();

    // let fullName = orderFullname.value;
    // if(fullName.length === 0){
    //     //alert(`Username shouldn't be empty!`);
    //     orderFullname.classList.add(`error`);
    //     return;
    // }

    if(!orderEmail.value.includes(`Q`)){
        console.log(`Email doesn't contain Q!`);
        return;
    }

    if(orderPassword.value !== orderConfirmPassword.value){
        console.log(`Not valid confirmation password!`);
        return;
    }

    let checkedSizes = [...document.querySelectorAll(`input[name="size"]:checked`)]
        .map(input => input.value);

    if(!checkedSizes.length){
        console.log(`Check size!`);
        return;
    }

    let checkedColor = document.querySelector(`input[name="color"]:checked`);

    let order = {
        fullName: orderFullname.value,
        email: orderEmail.value,
        password: orderPassword.value,
        sizes: checkedSizes,
        color: checkedColor.value,
        country: orderCountry.value,
        message: orderMessage.value,
    }

    console.log(order);
    console.log(JSON.stringify(order));

})

// const select = document.querySelector(`#select`);
// console.log(select.value);

// select.addEventListener(`change`, e => console.log(e.target.value));

// const select = document.querySelector(`#select`);
// console.log(select.selectedOptions);

// let selectedOptions = [...select.selectedOptions].map(option => option.value);
// console.log(selectedOptions);

// select.addEventListener(`change`, e => console.log(e.target.value));