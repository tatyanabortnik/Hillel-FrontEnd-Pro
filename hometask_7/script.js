let arr = []
    ,arrLength
    ,allowedMinValue
    ,allowedMaxValue
    ;

do {
    arrLength = prompt(`What should be the length of our array from 2 to 10?`);
    if(arrLength) arrLength = Math.round(parseInt(arrLength));
    if(arrLength < 0) arrLength = Math.abs(arrLength);     
} while (!arrLength || isNaN(arrLength) ||  arrLength === 0 || arrLength === 1 || arrLength  > 10)

arr.length = arrLength;

do {
    allowedMinValue = prompt(`What should be the min value of our array (from -10 to 10?)`);
    if(allowedMinValue) allowedMinValue = Math.round(parseInt(allowedMinValue));
} while (allowedMinValue === null || allowedMinValue === `` || isNaN(allowedMinValue) || allowedMinValue < -10 || allowedMinValue  > 10)

do {
    allowedMaxValue = prompt(`What should be the max value of our array (from ${allowedMinValue} to 50?)`);
    if(allowedMaxValue) allowedMaxValue = Math.round(parseInt(allowedMaxValue));
} while ((!allowedMaxValue && allowedMaxValue  !== 0) || isNaN(allowedMaxValue) || allowedMaxValue < allowedMinValue || allowedMaxValue  > 50)

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i=0; i<arr.length; i++){
    arr[i] = getRandomIntInclusive(allowedMinValue,allowedMaxValue);
}

console.log(`Array initial: ${arr}`);

// let minArrEl = arr[0]
//     ,maxArrEl = arr[0];

// for (let i=1; i<arr.length; i++){
//     minArrEl = arr[i] <= minArrEl ? arr[i] : minArrEl;
//     maxArrEl = arr[i] >= maxArrEl ? arr[i] : maxArrEl;
// }

minArrEl = Math.min(...arr);
maxArrEl = Math.max(...arr);

console.log(`Min array element: ${minArrEl} at index ${arr.lastIndexOf(minArrEl)}`);
console.log(`Max array element: ${maxArrEl} at index ${arr.lastIndexOf(maxArrEl)}`);

let lastIndexOfMin = arr.lastIndexOf(minArrEl)
    ,lastIndexOfMax = arr.lastIndexOf(maxArrEl)
    ,temp = arr[lastIndexOfMin];

arr[lastIndexOfMin] = arr[lastIndexOfMax];
arr[lastIndexOfMax] = temp;

console.log(`Array altered: ${arr}`);

