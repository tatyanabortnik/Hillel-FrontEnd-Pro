const obj = {
    x: 10,
    y: 20,
    inner: {
        x: 20,
        z: 30
    },
    foo2: {
        k: 23,
        p: 13
    }
}

const convert = obj => {
    let newObj = {};
    
    for (let key in obj) { 
        if (typeof obj[key] === 'object'){
            let nestedObj = obj[key],
                nestedObjPropValue = convert(nestedObj);
            for (let nestedKey in nestedObjPropValue) {
                newObj[nestedKey] = nestedObjPropValue[nestedKey]
            }
        } else newObj[key] = obj[key];
    }
    return newObj
}

newObj = convert(obj);
console.log( newObj );