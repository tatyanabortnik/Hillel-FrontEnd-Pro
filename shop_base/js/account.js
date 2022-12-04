import { getInfo } from "./services.js";
import { getLoggedinUser, findDatabaseUser, logOut } from "./exports.js";
import { renderHeader } from "./header.js";

const orderTable = document.querySelector(`#orderTable`);
const userInfoName = document.querySelector(`#userInfoName`);
const userInfoEmail = document.querySelector(`#userInfoEmail`);
const deleteAcc = document.querySelector(`#deleteAcc`);

const renderAccountHtml = async () => {
   renderHeader();

   const products = await getInfo(`/products`);

   let loggedInUser = getLoggedinUser();
   let loggedinUserInDatabase = await findDatabaseUser(loggedInUser.email);
   console.log(loggedinUserInDatabase);
   let ordersList = loggedinUserInDatabase.orders;

   userInfoName.innerHTML = loggedInUser.name;
   userInfoEmail.innerHTML = loggedInUser.email;

   const tbody = document.createElement(`tbody`);

   let orderedProductsInfo = products.filter((product) =>
      ordersList.find((userChoise) => userChoise.id === product.id)
   );

   console.log(`orderedProductsInfo`, orderedProductsInfo);
   console.log(`ordersList`, ordersList);

   orderedProductsInfo.forEach((productInfo) =>
      renderCartItem(productInfo, tbody, ordersList)
   );

   orderTable.append(tbody);

   deleteAcc.addEventListener(`click`, () => {
      confirm(`Are you sure you want to delete your account?`) &&
         logOut(loggedInUser);
   });
};

const renderCartItem = (item, tbody, list) => {
   let itemQtyInfo = list.find((product) => product.id == item.id).count;

   const tr = document.createElement(`tr`);
   tr.innerHTML = `<td>
                      <div class="item__info">
                        <img
                         src="images/products/${item.img}.png"
                         alt="${item.title}"
                         height="100"
                       />
                       <div>
                         <p class="item__info--title">${item.title}</p>
                       </div>
                     </div>
                   </td>
                   <td>${item.price}</td>
                  <td>${
                     item.sale
                        ? `<span class="item__sale">-${item.salePercent}%</span>`
                        : `-`
                  }</td>
         <td>${itemQtyInfo}</td>
         <td>$${getPriceWithSale(item) * itemQtyInfo}</td>`;

   tbody.append(tr);
};

const getPriceWithSale = (prod) => {
   return prod.sale
      ? prod.price - (prod.salePercent / 100) * prod.price
      : prod.price;
};

renderAccountHtml();
