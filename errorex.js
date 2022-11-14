const renderTesla =  () => {
    let teslas = $.ajax({
        method: "GET",
        url: API,
        dataType: "JSON",
	    error: error => console.log(error.statusText)
    })
    .done(teslas => console.log(teslas))

    console.log(teslas);
}




// heroForm.addEventListener(`submit`, async (e) => {
//     e.preventDefault();

//     const table = document.querySelector(`table`);

//     let name = heroName.value.trim()
//     let heroExists = false;
//     let newHero = {
//         "name": name,
//         "comics": heroComics.value,
//         "favourite": heroFav.checked
//     }

//     let storedData = await getData(`/heroes`);
//     console.log(storedData);
//     storedData.some(item => item.name === name && (heroExists = true));

//     //тут можна писати через зен?
//     //getData(`/heroes`).then(data => data.forEach(...). 
//     //після такого коду мій heroExists не змінюється на true...

//     //try/catch потрібно всюди писати, де у нас await? яким чином його тут написати?