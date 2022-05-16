import addSuperscript from "./cartIconSuperscript";
import { getLocalStorage } from "./utils";

const superscript = new addSuperscript();
superscript.addSuperscript();

function getCartContents() {
  let markup = "";

  const cartItems = getLocalStorage("cart");
  if (cartItems) {
    document.querySelector(".product-list").innerHTML = cartItems
      .map((item) => renderCartItem(item))
      .join("");
  }
}

function displayTotalInCart() {
  // get cartItems and place them in an array
  const cartItems = getLocalStorage("cart");

  // grab the element that will display the total cart
  let element = document.querySelector(".hide");

  // have a variable holding the total cost
  let totalCost = 0;

  if (cartItems) {
    cartItems.forEach((item) => {
      totalCost += item.FinalPrice;
    });
  }

  // add the totalCount to innerHTML
  element.innerHTML = `Total: $${totalCost}`;
}

function renderCartItem(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;
  // console.log(newItem);
  return newItem;
}

getCartContents();
displayTotalInCart();
