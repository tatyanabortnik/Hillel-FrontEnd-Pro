const animals = [
    ['🐭','mouse','Jerry'],
    ['🐹','hamster','Biscuit'],
    ['🐰','rabbit','Bugs'],
    ['🦊','fox','Mrs. Fox'],
    ['🐻','bear','Paddington']
];

const food = [
    ['🍎','apple',10],
    ['🍐','pear',12],
    ['🍊','tangerine',15],
    ['🍋','lemon',5],
    ['🍌','banana',7]
];

function getTableContent(arr){
    let TRs = [];
    let TDs = [];

    for (let i=0;i<arr.length; i++){
        if(Array.isArray(arr[i])){
            TRs.push(getTableContent(arr[i]))
        } else{
             TDs.push(`<td>${arr[i]}</td>`)
        }
    }
    TRs.push(`<tr>${TDs.join(``)}</tr>`)
        
 return TRs.join('');
}

function getInfo(arr,tableCaption = 'Table'){
     return `<table><caption>${tableCaption} info</caption><tbody>${getTableContent(arr)}</tbody></table>`
}

document.write(getInfo(animals,`Animals`));
