import { getInfo, changeItem, addItem } from "./services.js";

export const loader = document.querySelector(`#loader`);

//CART
export const addToCart = async (user, productId) => {
   let productIsInCart = user.shoppingCart.find(
      (item) => item.id == productId.id
   );

   if (!productIsInCart) {
      user.shoppingCart.push({
         id: productId,
         count: 1,
      });
   }
   let changedUser = await changeItem(`/users/${user.id}`, {
      shoppingCart: user.shoppingCart,
   });
   console.log(changedUser);

   localStorage.setItem(`loggedInUser`, JSON.stringify(user));

   getCartItemsQty(user);
};

export const removeFromCart = async (user, productId) => {
   let itemIndex = user.shoppingCart.findIndex((item) => item.id == productId);
   user.shoppingCart.splice(itemIndex, 1);

   let changedUser = await changeItem(`/users/${user.id}`, {
      shoppingCart: user.shoppingCart,
   });
   console.log(changedUser);

   localStorage.setItem(`loggedInUser`, JSON.stringify(user));

   getCartItemsQty(user);
};

export const getCartItemsQty = async (user) => {
   headerShoppingCartCount.innerHTML = user.shoppingCart
      .map((item) => +item.count)
      .reduce((prevItem, item) => prevItem + item, 0);
};

//USER
export const findDatabaseUser = async (email) => {
   const users = await getInfo(`/users`);
   // console.log(users);

   return users.find((item) => item.email === email);
};

export const registerUser = async (user) => {
   user.status = true;
   console.log(user);

   let addedUser = await addItem(`/users`, user);
   console.log(addedUser);
   addToStorage(addedUser);
   window.location.href = `./index.html`;
};

export const loginUser = async (user) => {
   let changedUser = await changeItem(`/users/${user.id}`, { status: true });
   console.log(changedUser);
   addToStorage(user);
   window.location.href = `./index.html`;
};

export const logOut = async (user) => {
   let changedUser = await changeItem(`/users/${user.id}`, { status: false });

   console.log(changedUser);

   localStorage.removeItem(`loggedInUser`);
   window.location.href = `./index.html`;
};

export const getLoggedinUser = () => {
   let loggedInUser = localStorage.getItem(`loggedInUser`); // null || {...}
   if (loggedInUser) {
      loggedInUser = JSON.parse(loggedInUser);
      return loggedInUser;
   }
};

export const showError = (event, text) => {
   const error = event.target.querySelector(`.error`);
   error.innerHTML = text;
   error.classList.add(`active`);
};

//STORAGE
export const addToStorage = ({ id, name, email, shoppingCart, orders }) => {
   let loggedInUser = localStorage.getItem(`loggedInUser`);
   loggedInUser = loggedInUser
      ? JSON.parse(loggedInUser)
      : { id, name, email, shoppingCart, orders };
   console.log(email);
   localStorage.setItem(`loggedInUser`, JSON.stringify(loggedInUser));
};
