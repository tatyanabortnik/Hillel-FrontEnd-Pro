const API = `https://63693f7228cd16bba71904e4.mockapi.io`;

// /heroes
// /universes

//service
const getData = (path) => fetch(API+path).then(data => data.json());

const changeItem = (itemPath, obj) => fetch(API+itemPath, {
    method: `PUT`,
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(obj)
}).then(data => data.json());


const deleteItem = itemPath => {
    fetch(API+itemPath, {
        method: `DELETE`
    }).then(data => data.json())
}

const addItem = (path,obj) => {
    fetch(API+path, {
        method: `POST`,
        headers: {
            "Content-type": "application/json"
        },
    body: JSON.stringify(obj)
    }).then(data => data.json())
}
//service

const mainSection = document.querySelector(`#main`);

//renderHeroes
const renderHeroes = path => {
     getData(`/heroes`)
        .then(data => {
            // console.log(data);
            let table = document.createElement(`table`);
            table.innerHTML = `<thead>
                <tr>
                    <th>Name</th>
                    <th>Comics (DC, Marvel)</th>
                    <th>Favourite</th>
                    <th>Actions</th>
                </tr>
            </thead>`

            data.forEach(hero => renderHero(hero,table));

            mainSection.append(table);
})
}
//renderHeroes

//renderHero
const renderHero = (hero,renderPlace) => {
    let tr = document.createElement(`tr`);
    tr.innerHTML = `<td>${hero.name}</td>
    <td>${hero.comics}</td>`;

    let tdCheckbox = document.createElement(`td`);

    let tdButton = document.createElement(`td`);

    let checkbox = document.createElement(`input`);
    checkbox.type = "checkbox";
    checkbox.checked = hero.favourite;

    // console.dir(checkbox)

    checkbox.addEventListener(`click`, async () => {
       let changedHero = await changeItem(API + `/heroes/${hero.id}`,{favourite: checkbox.checked});
       console.log(changedHero); 
    });

    let deleteBtn = document.createElement(`button`);
    deleteBtn.innerHTML = `Delete`;

    deleteBtn.addEventListener(`click`, async () => {
        let deletedHero =  await deleteItem(`/heroes/${hero.id}`);
        console.log(deletedHero);
        tr.remove();
    });

    tdCheckbox.append(checkbox);
    tdButton.append(deleteBtn);

    tr.append(tdCheckbox);
    tr.append(tdButton);

    renderPlace.append(tr);
}
//renderHero

renderHeroes(`/heroes`);

const heroForm = document.querySelector(`#heroForm`);
const heroName = document.querySelector(`#heroName`);
const heroComics = document.querySelector(`#heroComics`);
const heroFav = document.querySelector(`#heroFav`);
const heroBtn = document.querySelector(`#heroBtn`);
const table = document.querySelector(`table`);

//render form selects
(async () => {
    let universesOptions = await getData(`/universes`);
    heroComics.innerHTML = universesOptions.map(item=>`<option>${item.name}</option>`).join(``);
})();
//render form selects

heroForm.addEventListener(`submit`, async (e) => {
    e.preventDefault();

    let heroNameTrimmed = heroName.value.trim()
    let heroExists = false;
    let newHero = {
        "name": heroNameTrimmed,
        "comics": heroComics.value,
        "favourite": heroFav.checked
    }

    let data = await getData(`/heroes`);
    console.log(data);

    data.forEach(item => item.name === heroNameTrimmed && (heroExists = true));

    console.log(heroExists);

    const table = document.querySelector(`table`);

    if(heroExists){
        console.log(`👯‍♀️ ${heroNameTrimmed} already exists in the database!`) 
    }else{
        let addedHero = await addItem(`/heroes`, newHero);
        console.log(addedHero);
        // renderHero(addedHero,table);
    }

    // await getData(APIheroes)
    //     .then(data => { 
    //         data.forEach(item => item.name === heroName.value && (heroExists = true));

    //     })
    //         data.forEach(item => 
    //         item.name === heroName.value && (heroExists = true)) )

    // if(heroExists){
    //     console.log(`👯‍♀️ ${heroName.value} already exists in the database!`) 
    // }else{
    //      await addItem(APIheroes, newHero)
    // }
        // renderHero(newHero,table)}
    // console.log(addedHero);

       
})

// const deleteItem1 = path => {
//     fetch(APIheroes+path, {
//         method: `DELETE`
//     }).then(data => data.json())
// }

// (async () => {
//     await deleteItem1(`/6`);
// })()

