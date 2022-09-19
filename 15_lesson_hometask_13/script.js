class Burger {
    constructor(name, size) {
        this.name = name;
        this.size = size;
        this.ingredients = [`patty`, `lettuce`, `tomato`];
    }
    
    setAdditionalIngredients(...args){
        args.map( elem => this.ingredients.push(elem) )
        return this
    }
}

class Cheeseburger extends Burger{
    constructor(name, size){
        super(name,size);
        this.ingredients.push(`cheese`);
    }
}

let Hamburger = new Burger("Hamburger", "small");
Hamburger.setAdditionalIngredients(`egg`, `onion`);

let myCheeseburger = new Cheeseburger( "Cheeseburger", "small");
myCheeseburger.setAdditionalIngredients(`egg`, `onion`);
