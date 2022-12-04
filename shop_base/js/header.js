import { getLoggedinUser, getCartItemsQty, logOut } from "./exports.js";

const headerShoppingCart = document.querySelector(`#headerShoppingCart`);
const headerLogout = document.querySelector(`#headerLogout`);
const headerUser = document.querySelector(`#headerUser`);

export const renderHeader = async () => {
   const loggedInUser = getLoggedinUser();

   if (loggedInUser) {
      getCartItemsQty(loggedInUser);
      headerUser.innerHTML = loggedInUser.name;
      headerUser.href = `account.html`;
      headerLogout.classList.add(`active`);
      headerShoppingCart.href = `shoppingCart.html`;
   }

   headerLogout.addEventListener(`click`, () => logOut(getLoggedinUser()));
};
