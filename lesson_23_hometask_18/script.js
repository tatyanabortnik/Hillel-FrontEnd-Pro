const getFile = (filePath, callBack) => {
    let request = new XMLHttpRequest();

    request.open(`GET`, filePath);
    console.log(`Start getting ${filePath}`);

    request.send();
    
    request.addEventListener(`load`, () =>{
        if(request.status === 200){
            console.log(`Retrieved successfully ${filePath}`);
            let response = JSON.parse(request.response);
            callBack(response);
        }
    })
};
let childrenArr = [];

const getChildren = info => {
    childrenArr = childrenArr.concat(info.children);
    getFile(`./data2.json`, getChildren2)
}

const getChildren2 = info => {
    childrenArr = childrenArr.concat(info.children);
    console.log(childrenArr); //show arr result once, here
}

getFile(`./data.json`, getChildren);


//---------------------------------------------------//
//or show childrenArr every time when childrenArr is concatenated:
//---------------------------------------------------//

// const getChildren = info => {
//     childrenArr = childrenArr.concat(info.children);
//     console.log(childrenArr); 
// }

// getFile(`./data.json`, getChildren);
// getFile(`./data2.json`, getChildren); 