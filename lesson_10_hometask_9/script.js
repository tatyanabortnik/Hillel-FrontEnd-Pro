const sports = [
    ['๐คบ','fencing'],
    ['โธ','figure skating'],
    ['โท','skier'],
    ['๐','snowboarder'],
    ['๐','golfing'],
    ['๐ฃ','rowing boat'],
    ['๐','swimming'],
    ['๐คธ','gymnastics'],
    ['๐คพ','handball']
];

const winners = [
    ['fencing','๐ฅ','fr'],
    ['fencing','๐ฅ','it'],
    ['fencing','๐ฅ','us'],

    ['figure skating','๐ฅ','ca'],
    ['figure skating','๐ฅ','fr'],
    ['figure skating','๐ฅ','us'],

    ['skier','๐ฅ','no'],
    ['skier','๐ฅ','us'],
    ['skier','๐ฅ','fr'],

    ['snowboarder','๐ฅ','us'],
    ['snowboarder','๐ฅ','jp'],
    ['snowboarder','๐ฅ','au'],

    ['golfing','๐ฅ','gb'],
    ['golfing','๐ฅ','se'],
    ['golfing','๐ฅ','us'],

    ['rowing boat','๐ฅ','us'],
    ['rowing boat','๐ฅ','ml'],
    ['rowing boat','๐ฅ','ro'],

    ['swimming','๐ฅ','us'],
    ['swimming','๐ฅ','gb'],
    ['swimming','๐ฅ','au'],

    ['gymnastics','๐ฅ','it'],
    ['gymnastics','๐ฅ','fr'],
    ['gymnastics','๐ฅ','ua'],

    ['handball','๐ฅ','dk'],
    ['handball','๐ฅ','ke'],
    ['handball','๐ฅ','de'],
];

const olympic = ['๐ต','โซ','๐ด','๐ก','๐ข'];
// ะะฒัะพะฟะฐ โ ัะธะฝัะน, ะััะธะบะฐ โ ัะพัะฝะธะน, ะะผะตัะธะบะฐ โ ัะตัะฒะพะฝะธะน, ะะทัั โ ะถะพะฒัะธะน, ะะฒัััะฐะปัั โ ะทะตะปะตะฝะธะน

const continents = [
    ['fr','Europe'],
    ['it','Europe'],
    ['us','America'],
    ['ca','America'],
    ['no','Europe'],
    ['jp','Asia'],
    ['au','Oceania'],
    ['gb','Europe'],
    ['se','Europe'],
    ['ro','Europe'],
    ['ua','Europe'],
    ['dk','Europe'],
    ['de','Europe'],
    ['ke','Africa'],
    ['ml','Africa']
];

const flags = [
    ['fr','๐ซ๐ท'],
    ['it','๐ฎ๐น'],
    ['us','๐บ๐ธ'],
    ['ca','๐จ๐ฆ'],
    ['no','๐ณ๐ด'],
    ['jp','๐ฏ๐ต'],
    ['au','๐ฆ๐บ'],
    ['gb','๐ฌ๐ง'],
    ['se','๐ธ๐ช'],
    ['ro','๐ท๐ด'],
    ['ua','๐บ๐ฆ'],
    ['dk','๐ฉ๐ฐ'],
    ['de','๐ฉ๐ช'],
    ['ke','๐ฐ๐ช'],
    ['ml','๐ฒ๐ฑ']
];

const getCountriesByContinent = continent => {
  return continents
    .filter(item => item[1] === continent)
    .map(item => item[0])
}

const europeanCountries = getCountriesByContinent(`Europe`);
const asianCountries = getCountriesByContinent(`Asia`);
const americanCountries = getCountriesByContinent(`America`);
const africanCountries = getCountriesByContinent(`Africa`);
const oceaniaCountries = getCountriesByContinent(`Oceania`);

const getWinnersInfoBySport = sport => {
    let winnersData = JSON.parse(JSON.stringify(winners));
    winnersData.filter(winner => winner[0] === sport);

    return winnersData
}

const getFlag = countryAbbr  => (flags.find(item => item[0] === countryAbbr)[1])

const renderTbody = () => {
    let olympicCirclesTDs = olympic
            .map(item => {
            let continentIcon = item;
            return `<td>${continentIcon}</td>`
    })

    let winnersInfoTRs = sports
        .map(sport => { 
            let sportIcon = sport[0]; 
            let sportName = sport[1]; 
            let currentWinners = getWinnersInfoBySport(sportName); 

            const getWinnersbyCountries = countriesList => {
                let winners = currentWinners
                    .filter(item => countriesList.includes(item[2]) || '') 
                    .map(item => {
                        item.reverse().pop();
                        item[0] = getFlag(item[0]);
                        return `<div>${item.join(` โ `)}</div>`
                    })
    
                    return winners.join(``)
                }
                        
        return `<tr>
            <td>${sportIcon}</td>
            <td>${getWinnersbyCountries(europeanCountries)}</td>
            <td>${getWinnersbyCountries(africanCountries)}</td>
            <td>${getWinnersbyCountries(americanCountries)}</td>
            <td>${getWinnersbyCountries(asianCountries)}</td>
            <td>${getWinnersbyCountries(oceaniaCountries)}</td>
        </tr>`})
        .join(``);

    return `<tr><td></td>${olympicCirclesTDs.join(``)}</tr>
            ${winnersInfoTRs}`
}

document.write (`<table>
    ${renderTbody()}
</table>`)  

console.log(winners)
