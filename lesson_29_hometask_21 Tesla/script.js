const API ='https://raw.githubusercontent.com/brightestsirius/Front-end-Pro-19/master/lesson_27/tesla.json';

const mainSection = $(`<main>`).prependTo(`body`);
const teslaInfo = $(`<div>`).addClass(`teslaInfo`).appendTo(mainSection);
const teslaImg = $(`<img>`).appendTo(teslaInfo);
const teslaTitle = $(`<p>`).appendTo(teslaInfo);
const colorPicker = $(`<div>`).addClass(`colorPicker`).appendTo(mainSection)

const renderTesla = () => {
    $.ajax({
        url: API,
        dataType: "JSON",
    })
    .done(teslas => {
        teslaImg.attr({
            alt: `Tesla ${teslas[0].title}`,
            src: `https://mc-astro.github.io/tesla-roadster-colors/img/${teslas[0].img}.jpg`
        });

        teslaTitle.html(teslas[0].title).css("text-shadow", `1px 1px 0px ${teslas[0].color}`)
        
        renderBtns(teslas);
    })
    .fail(error => console.log(error.statusText))
}

const renderBtns = info =>{
    info.map(item => {
        $(`<button class="dot ${item.img}"></button>`) 
            .css("background-color", `${item.color}`)
            .on(`click`, () => {
                teslaImg.attr({
                    alt: `Tesla ${item.title}`,
                    src: `https://mc-astro.github.io/tesla-roadster-colors/img/${item.img}.jpg`
                });
                teslaTitle.html(`${item.title}`).css("text-shadow", `1px 1px 0px ${item.color}`)
            })
            .appendTo(colorPicker)
    })
}

renderTesla();
    