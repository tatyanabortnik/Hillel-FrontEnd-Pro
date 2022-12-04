import { renderHeader } from "./header.js";
import { getLoggedinUser, addToCart, removeFromCart } from "./exports.js";
import { getInfo, deleteItem } from "./services.js";

const categoriesContainer = document.querySelector(`#categoriesContainer`);
const renderIndexHtml = async () => {
   renderHeader();

   const products = await getInfo(`/products`);
   const loggedInUser = getLoggedinUser();
   // console.log(products);
   let categories = [...new Set(products.map((product) => product.category))]; // unique categories
   // console.log(categories);

   categories.forEach((category) => {
      let section = document.createElement(`section`);
      section.className = "category";
      section.dataset.name = category;
      section.innerHTML = `<h2>${category}</h2>`;

      let categoryContainer = document.createElement(`div`);
      categoryContainer.className = "category__container";

      products.forEach(
         (product) =>
            product.category == category &&
            renderProduct(product, categoryContainer, loggedInUser)
      );

      section.append(categoryContainer);
      categoriesContainer.append(section);
   });
};

const renderProduct = (product, place, user) => {
   let productDiv = document.createElement(`div`);
   productDiv.className = `product`;
   productDiv.dataset.id = product.id;

   let saleBlock = product.sale
      ? `<div class="product__sale">
                <span class="product__sale--old">${product.price}</span>
                <span class="product__sale--percent">-${product.salePercent}%</span>
            </div>`
      : ``;

   productDiv.innerHTML = `<img
                 src="images/products/${product.img}.png"
                 class="product__img"
                 alt="Bus"
                 height="80"
               />
               <p class="product__title">${product.title}</p>
               ${saleBlock}`;

   let infoDiv = document.createElement(`div`);
   infoDiv.className = `product__info`;
   infoDiv.innerHTML = `<span class="product__price">${
      product.sale
         ? product.price - (product.salePercent / 100) * product.price
         : product.price
   }</span>`;

   let btn = document.createElement(`button`);
   btn.classList.add(`product__cart`);

   btn.innerHTML = `<img
                    src="images/shopping-cart.png"
                    alt="shopping cart"
                    height="20"/>`;

   if (user)
      user.shoppingCart.find((item) => item.id == product.id) &&
         btn.classList.add(`product__cart--in`);

   btn.addEventListener(`click`, (e) => {
      // console.dir(e.currentTarget);
      if (user) {
         if (user.shoppingCart.some((item) => item.id == product.id)) {
            removeFromCart(user, product.id);
            e.currentTarget.classList.remove(`product__cart--in`);
         } else {
            addToCart(user, product.id);
            e.currentTarget.classList.add(`product__cart--in`);
         }
      } else {
         window.location.href = `./login.html`;
      }
   });

   infoDiv.append(btn);
   productDiv.append(infoDiv);
   place.append(productDiv);
};

renderIndexHtml();

//what if i delete user from base while they are loggedin and present in LocalStorage:)
