export const API = `https://634e9f834af5fdff3a625f84.mockapi.io`;

export const getInfo = (path) => {
   const loader = document.querySelector(`#loader`);
   if (loader) loader.classList.add(`active`);

   return fetch(API + path)
      .then((data) => {
         if (loader) loader.classList.remove(`active`);
         return data;
      })
      .then((data) => data.json())
      .catch((err) => console.log(`error:`, err));
};

export const changeItem = (itemPath, obj) =>
   fetch(API + itemPath, {
      method: `PUT`,
      headers: {
         "Content-type": "application/json",
      },
      body: JSON.stringify(obj),
   })
      .then((data) => data.json())
      .catch((err) => console.log(`error:`, err));

export const deleteItem = (itemPath) =>
   fetch(API + itemPath, {
      method: `DELETE`,
   })
      .then((data) => data.json())
      .catch((err) => console.log(`error:`, err));

export const addItem = (path, obj) =>
   fetch(API + path, {
      method: `POST`,
      headers: {
         "Content-type": "application/json",
      },
      body: JSON.stringify(obj),
   })
      .then((data) => data.json())
      .catch((err) => console.log(`error:`, err));
