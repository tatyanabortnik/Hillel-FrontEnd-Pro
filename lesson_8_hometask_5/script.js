let sports = [
        ['skier','⛷'],
        ['snowboarder','🏂'],
        ['apple','🍎'],
        ['hockey','🏒'],
        ['ice skate','⛸'],
        ['swimmer','🏊'],
        ['surfer','🏄‍'],
        ['watermelon','🍉'],
        ['lemon','🍋'],
        ['rowboat','🚣'],
        ['bicyclist','🚴‍']
    ]
    ,winter_sports = sports.slice(0,5)
    ,summer_sports = sports.slice(5)
    ,fruits = winter_sports.splice(2,1).concat(summer_sports.splice(2,2))
    ;

console.log(`*** Winter sports ***`)
for (sport of winter_sports) {
    console.log(sport.join(`: `));
}

console.log(`*** Summer sports ***`)
for (sport of summer_sports) {
    console.log(sport.join(`: `));
}

console.log(`*** Fruits ***`)
for (fruit of fruits) {
    console.log(fruit.join(`: `));
}


