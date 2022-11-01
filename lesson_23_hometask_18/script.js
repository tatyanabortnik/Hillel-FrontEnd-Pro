const getFile = filePath => {
    return new Promise((resolve,reject) => {
        const request = new XMLHttpRequest();

        request.open(`GET`, filePath);
        console.log(`Start getting ${filePath}`);

        request.send();
        
        request.addEventListener(`load`, () =>{
            request.status === 200 
                ? resolve(JSON.parse(request.response)) 
                : reject(request.responseText)
            })
    })
};

let childrenArr = [];

getFile(`./data.json`)
    .then(
        data => {
            childrenArr = childrenArr.concat(data.children);
            return getFile(`./data2.json`)
        }
    )
    .then(
        data => {
            childrenArr = childrenArr.concat(data.children)
        }
    )
    .then(() => console.log(`Concated children:`, childrenArr))
    .catch(
        error => console.log(error)
    )

//------------------------------------------------//

// const getFile = filePath => {
//     return new Promise((resolve,reject) => {
//         const request = new XMLHttpRequest();

//         request.open(`GET`, filePath);
//         console.log(`Start getting ${filePath}`);

//         request.send();
        
//         request.addEventListener(`load`, () =>{
//             request.status === 200 
//                 ? resolve(JSON.parse(request.response)) 
//                 : reject(request.responseText)
//             })
//     })
    
// };

// const getChildren = info => {
//     childrenArr = childrenArr.concat(info.children);
//     return getFile(`./data2.json`)
// }
        
// const getChildren2 = info => {
//     childrenArr = childrenArr.concat(info.children);
//     console.log(`Concated children:`, childrenArr); //show arr result once, here
// }

// let childrenArr = [];

// getFile(`./data.json`)
//     .then(getChildren)
//     .then(getChildren2)
//     .catch(
//         error => console.log(error)
//     )



//--------------------------------------//

// const getFile = (filePath, callBack) => {
//     let request = new XMLHttpRequest();

//     request.open(`GET`, filePath);
//     console.log(`Start getting ${filePath}`);

//     request.send();
    
//     request.addEventListener(`load`, () =>{
//         if(request.status === 200){
//             console.log(`Retrieved successfully ${filePath}`);
//             let response = JSON.parse(request.response);
//             callBack(response);
//         }
//     })
// };
// let childrenArr = [];

// const getChildren = info => {
//     childrenArr = childrenArr.concat(info.children);
//     getFile(`./data2.json`, getChildren2)
// }

// const getChildren2 = info => {
//     childrenArr = childrenArr.concat(info.children);
//     console.log(childrenArr); //show arr result once, here
// }

// getFile(`./data.json`, getChildren);


//---------------------------------------------------//
//or show childrenArr every time when childrenArr is concatenated:
//---------------------------------------------------//

// const getChildren = info => {
//     childrenArr = childrenArr.concat(info.children);
//     console.log(childrenArr); 
// }

// getFile(`./data.json`, getChildren);
// getFile(`./data2.json`, getChildren); 