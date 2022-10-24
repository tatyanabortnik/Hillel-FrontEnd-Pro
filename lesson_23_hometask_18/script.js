let arr = [];

const getFile = filePath => {
    let request = new XMLHttpRequest();

    request.open(`GET`, filePath);
    console.log(`Start getting ${filePath}`);

    request.send();
    
    request.addEventListener(`load`, () =>{
        if(request.status === 200){
            console.log(`Retrieved successfully ${filePath}`);
            let response = JSON.parse(request.response);

            arr = arr.concat(response.children);
            console.log(arr);
        }
    })
};

getFile(`./data.json`);
getFile(`./data2.json`);