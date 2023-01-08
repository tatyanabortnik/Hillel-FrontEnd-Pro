const API = `https://61498bf2035b3600175ba32f.mockapi.io/contacts`;

export const getData = () => fetch(API).then((data) => data.json());

export const changeItem = (id, obj) =>
   fetch(API + `/${id}`, {
      method: "PUT",
      headers: {
         "Content-type": "application/json",
      },
      body: JSON.stringify(obj),
   }).then((data) => data.json());

export const deleteItem = (id) =>
   fetch(API + `/${id}`, {
      method: "DELETE",
   }).then((data) => data.json());

export const addItem = (obj) =>
   fetch(API, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(obj),
   }).then((data) => data.json());
