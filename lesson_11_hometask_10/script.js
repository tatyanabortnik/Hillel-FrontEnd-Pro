//1----------------------------------------------
const products = [
		['apple',10],
		['banana',8],
		['mango',20],
		['grape',18]
	];

const cloneArray = (arr) => arr.map(item => Array.isArray(item) ? cloneArray(item) : item);

const getPrice = (products, seasonFunc) => {
	let copiedProducts = cloneArray(products);
	let sum = 0;

	copiedProducts = typeof seasonFunc === `function`
		? modifyArrValues(copiedProducts,seasonFunc)
		: copiedProducts

	for (let i = 0; i < copiedProducts.length; i++) {
		const item = copiedProducts[i];
		sum +=item[1]
	}

	return sum
	}

const modifyArrValues = (arr,modFunc) => {
	let newArr = [];

	for (let i = 0; i < arr.length; i++) {
		const item = arr[i];
		newArr.push([item[0],modFunc (item[1])]);
	}
	
	return newArr
}

const summerValue = value => value * 0.8
		
const winterValue = value => value*2

getPrice(products);

//2----------------------------

// const products = () => [
// 	['apple',10],
// 	['banana',8],
// 	['mango',20],
// 	['grape',18]
// ]

// const getPrice = (products, seasonFunc) => {
// let sum = 0;

// products = typeof seasonFunc === `function`
// ? modifyArrValues(products,seasonFunc)
// : products

// products.forEach(item => sum += item[1])
// return sum
// }

// const modifyArrValues = (arr,modFunc) => arr.map(item => [item[0],modFunc(item[1])])

// const summerValue = value => value * 0.8

// const winterValue = value => value*2;

// getPrice(products(), summerValue);
