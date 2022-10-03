const COFFEE_TYPES = {
    Espresso: [
        {
            title: `Ristretto`,
            ingredients: {
                espresso: 20
            }
        },
        {
            title: `Espresso`,
            ingredients: {
                espresso: 60
            }
        },
        {
            title: `Lungo`,
            ingredients: {
                espresso: 100
            }
        },
        {
            title: `Americano`,
            ingredients: {
                espresso: 40,
                water: 60
            }
        }
    ],
    EspressoMilk: [
        {
            title: `Macchiato`,
            ingredients: {
                espresso: 20,
                "milk foam": 10
            }
        },
        {
            title: `Flat White`,
            ingredients: {
                espresso: 55,
                "milk foam": 45
            }
        },
        {
            title: `Cappuccino`,
            ingredients: {
                espresso: 20,
                milk: 20,
                "milk foam": 15
            }
        },
        {
            title: `Latte`,
            ingredients: {
                espresso: 20,
                milk: 20,
                "milk foam": 20
            }
        },
        {
            title: `Mocha`,
            ingredients: {
                "chocolate syrop": 15,
                espresso: 15,
                milk: 18,
                "milk foam": 15
            }
        }
    ],
    Alcoholic: [
        {
            title: `Irish Coffee`,
            ingredients: {
                espresso: 50,
                whiskey: 10,
                "whipped cream": 40
            }
        },
        {
            title: `Corretto`,
            ingredients: {
                espresso: 90,
                brandy: 10
            }
        },
        {
            title: `Baileys Hot Coffee`,
            ingredients: {
                espresso: 30,
                "warm milk": 20,
                "baileys irish cream": 30
            }
        }
    ],
    Dessert: [
        {
            title: `Affogato`,
            ingredients: {
                espresso: 25,
                "ice cream": 20,
                "whipped cream": 10,
                chocolate: 10
            }
        },
        {
            title: `Frappe`,
            ingredients: {
                espresso: 30,
                ice: 10,
                milk: 50
            }
        },
        {
            title: `Glace`,
            ingredients: {
                espresso: 50,
                "grated chocolate": 10,
                "ice cream": 30
            }
        }
    ]
}

class Coffee {
    constructor(obj){
        Object.assign(this,obj)
    }

    makeCoffee(){
        let pS = [];
        
        for (let ingredient in this.ingredients) {
            pS.push( `<p style="height: ${this.ingredients[ingredient]}%" class="ingredient ${ingredient.replaceAll(` `,`__`)}">${ingredient}</p>` )
        }

        return `<div class="cup">
                    <div class="coffee">
                        <div class="coffee__ingredients">
                            ${pS.join(``)}
                        </div>
                    </div>
                    <p class="coffee__title">${this.title}</p>
                </div>`
    }
}

class Espresso extends Coffee {
    constructor(obj){
        super(obj)
    }

    makeCoffee(){
        let motherFuncResult = super.makeCoffee();

        return motherFuncResult.replaceAll(`class="coffee"`, `class="coffee coffee--espresso"`)

    }
}

class EspressoMilk extends Coffee {
    constructor(obj){
        super(obj)
    }

    makeCoffee(){
        let motherFuncResult = super.makeCoffee();
       
        return  motherFuncResult.replaceAll(`class="coffee"`, `class="coffee coffee--espressoMilk"`)
    }
}

class Alcoholic extends Coffee {
    constructor(obj){
        super(obj)
    }

    makeCoffee(){
        let motherFuncResult = super.makeCoffee();
   
        return  motherFuncResult.replaceAll(`class="coffee"`, `class="coffee coffee--alcoholic"`)
    }
}

class Dessert extends Coffee {
    constructor(obj){
        super(obj)
    }

    makeCoffee(){
        let motherFuncResult = super.makeCoffee();

        return         motherFuncResult.replaceAll(`class="coffee"`, `class="coffee coffee--dessert"`)

    }
}

const coffeeClasses = {
    Espresso: drink => new Espresso(drink),
    EspressoMilk: drink => new EspressoMilk(drink),
    Alcoholic: drink => new Alcoholic(drink),
    Dessert: drink => new Dessert(drink),
}

let coffeeClassified = [];

for (let currentCoffeeType in COFFEE_TYPES) { //Espresso: [{..},{..},{}]
    COFFEE_TYPES[currentCoffeeType]
        .forEach(drink => coffeeClassified.push( (coffeeClasses[currentCoffeeType](drink)) ) )
}

console.log(coffeeClassified);

document.write( `<section class="cups">
                    ${coffeeClassified.map( coffee => coffee.makeCoffee() ).join(``)}
                </section>` )

