const API = `https://636fe0d34a801721e0fcaeac.mockapi.io`;

//service
const getData = (path) => fetch(API+path).then(data => data.json());

const changeItem = (itemPath, obj) => fetch(API+itemPath, {
    method: `PUT`,
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(obj)
}).then(data => data.json());


const deleteItem = itemPath => {
    fetch(API+itemPath, {
        method: `DELETE`
    }).then(data => data.json())
}

// const addItem = (path,obj) => fetch(API+path, {
//         method: `POST`,
//         headers: {
//             "Content-type": "application/json"
//         },
//     body: JSON.stringify(obj)
//     }).then(data => data.json())
// 

const addItem = (path, obj) => fetch(API+path, {
    method: `POST`,
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(obj)
}).then(data => data.json());


//service
(async()=>{
    let users = await getData(`/users`);
    console.log(users);

    let newUser = {};
    let addedUser = await addItem(`/users`, newUser);
    console.log(addedUser);
})()
