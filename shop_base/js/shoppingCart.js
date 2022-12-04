import { getInfo,changeItem } from './services.js';
import { getLoggedinUser, removeFromCart, getCartItemsQty } from './exports.js';
import { renderHeader } from './header.js';


const shoppingCartTable = document.querySelector(`#shoppingCartTable`);
const orderSummary = document.querySelector(`#orderSummary`);
const orderSummaryTotal = document.querySelector(`#orderSummaryTotal`);

const renderShoppingCartHtml = async () => {
   renderHeader();

   const products = await getInfo(`/products`);
   const loggedInUser = getLoggedinUser();
   const tbody = document.createElement(`tbody`);

   let orderedProductsInfo = products.filter((product) =>
      loggedInUser.shoppingCart.find(
         (userChoise) => userChoise.id === product.id
      )
   );

   console.log(`orderedProductsInfo`, orderedProductsInfo);
   
   orderedProductsInfo.forEach((productInfo, index, list) => 
      renderCartItem(productInfo, tbody, loggedInUser, list));
            
   shoppingCartTable.append(tbody);

   orderSummary.addEventListener(`submit`, async(e)=> {
      e.preventDefault();

      if (loggedInUser.shoppingCart.length) {
         loggedInUser.orders = JSON.parse(JSON.stringify(loggedInUser.shoppingCart));
      loggedInUser.shoppingCart.length = 0;
      
      let changedUserCart = await changeItem(`/users/${loggedInUser.id}`, {
         shoppingCart: loggedInUser.shoppingCart,
         orders: loggedInUser.orders
      });
      console.log(changedUserCart);

      localStorage.setItem(`loggedInUser`, JSON.stringify(loggedInUser));
   
      getCartItemsQty(loggedInUser);

      window.location.href = `./account.html`;
   } 
});
}

const renderCartItem = (item, tbody, loggedInUser, orderedItemsList) => {
   let cartItem = loggedInUser.shoppingCart.find(product => product.id == item.id);

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
                <td>${item.price}</td>`;

   tr.innerHTML += `<td>
         ${
            item.sale
               ? `<span class="item__sale">-${item.salePercent}%</span>`
               : `-`
         }
      </td>`

   const qtyTd = document.createElement(`td`);
   const qtyInput = document.createElement(`input`);
   
   qtyInput.setAttribute('type', 'number');
   qtyInput.setAttribute('value', cartItem.count);
   qtyInput.setAttribute('min','1');

   qtyInput.addEventListener(`input`, async(e) => {
      cartItem.count = + e.target.value;
      console.log(cartItem.count);
      changeOrderTotal(loggedInUser,totalPriceTd,cartItem,orderedItemsList,item,e);
      console.log(`Changed qty, changed loggedin user`,loggedInUser);
      getCartItemsQty(loggedInUser);
});

   qtyTd.append(qtyInput);
   tr.append(qtyTd);

   let itemPrice = getPriceWithSale(item);

   const totalPriceTd = document.createElement(`td`);
   totalPriceTd.innerHTML = `$${itemPrice}`;
   tr.append(totalPriceTd);

   const btnTd = document.createElement(`td`);
   const deleteBtn = document.createElement(`button`);
   deleteBtn.classList.add = `item__remove`;
   deleteBtn.innerHTML = `<img src="images/delete.png" alt="delete" height="20" />`;
   
   btnTd.append(deleteBtn);
   tr.append(btnTd);
   tbody.append(tr);
   
   deleteBtn.addEventListener(`click`, (e) => {
      removeFromCart(loggedInUser,item.id);
      changeOrderTotal(loggedInUser,totalPriceTd,cartItem,orderedItemsList,item,e);
      tr.remove();
   })

changeOrderTotal(loggedInUser,totalPriceTd,cartItem,orderedItemsList,item);
}

const changeOrderTotal = async(user,td, cartItem, orderedItemsList, item,event) => {
   td.innerHTML = `$${getPriceWithSale(item) * cartItem.count}`;
   let orderTotal = getTotalPrice(user,orderedItemsList);
   orderSummaryTotal.innerHTML = `$${orderTotal}`;

   if (event) {
      user.shoppingCart.forEach(product => item.id === product.id 
         && ( product.count = cartItem.count) );
      // console.log(`change d shoppingcart qty in changeOrderTotal()`,user);
      let changedUser = await changeItem(`/users/${user.id}`, { shoppingCart: user.shoppingCart });
      console.log(`changed database user`, changedUser);
         
      localStorage.setItem(`loggedInUser`, JSON.stringify(user));
      }
}

const getTotalPrice = (user,orderedItemsList) => {
   let orderTotal = user.shoppingCart.reduce((acc,item) => {
      let prodPrice = getPriceWithSale( orderedItemsList
            .find(prod => prod.id == item.id) );
      return acc + ( item.count * prodPrice );
   },0);
   return orderTotal
}

const getPriceWithSale = prod => {
   return prod.sale 
      ? prod.price - prod.salePercent / 100 * prod.price 
      : prod.price;
}

renderShoppingCartHtml();