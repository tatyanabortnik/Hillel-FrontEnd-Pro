const sports = [
    ['🤺','fencing'],
    ['⛸','figure skating'],
    ['⛷','skier'],
    ['🏂','snowboarder'],
    ['🏌','golfing'],
    ['🚣','rowing boat'],
    ['🏊','swimming'],
    ['🤸','gymnastics'],
    ['🤾','handball']
];

const winners = [
    ['fencing','🥇','fr'],
    ['fencing','🥈','it'],
    ['fencing','🥉','us'],

    ['figure skating','🥇','ca'],
    ['figure skating','🥈','fr'],
    ['figure skating','🥉','us'],

    ['skier','🥇','no'],
    ['skier','🥈','us'],
    ['skier','🥉','fr'],

    ['snowboarder','🥇','us'],
    ['snowboarder','🥈','jp'],
    ['snowboarder','🥉','au'],

    ['golfing','🥇','gb'],
    ['golfing','🥈','se'],
    ['golfing','🥉','us'],

    ['rowing boat','🥇','us'],
    ['rowing boat','🥈','ml'],
    ['rowing boat','🥉','ro'],

    ['swimming','🥇','us'],
    ['swimming','🥈','gb'],
    ['swimming','🥉','au'],

    ['gymnastics','🥇','it'],
    ['gymnastics','🥈','fr'],
    ['gymnastics','🥉','ua'],

    ['handball','🥇','dk'],
    ['handball','🥈','ke'],
    ['handball','🥉','de'],
];

const olympic = ['🔵','⚫','🔴','🟡','🟢'];
// Європа — синій, Африка — чорний, Америка — червоний, Азія — жовтий, Австралія — зелений

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
    ['fr','🇫🇷'],
    ['it','🇮🇹'],
    ['us','🇺🇸'],
    ['ca','🇨🇦'],
    ['no','🇳🇴'],
    ['jp','🇯🇵'],
    ['au','🇦🇺'],
    ['gb','🇬🇧'],
    ['se','🇸🇪'],
    ['ro','🇷🇴'],
    ['ua','🇺🇦'],
    ['dk','🇩🇰'],
    ['de','🇩🇪'],
    ['ke','🇰🇪'],
    ['ml','🇲🇱']
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

const getWinnersInfoBySport = sport => winners
    .filter(winner => winner[0] === sport)

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
                        return `<div>${item.join(` — `)}</div>`
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

