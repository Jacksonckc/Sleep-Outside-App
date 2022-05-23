import addSuperscript from "./cartIconSuperscript";
import { loadHeaderFooter } from "./utils.js";
import { getLocalStorage, setLocalStorage } from "./utils";

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
      console.log(item);
      totalCost += (item.FinalPrice * item.Quantity);
    });
  }

  // add the totalCount to innerHTML
  element.innerHTML = `Total: $${totalCost.toFixed(2)}`;
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
  <p class="cart-card__quantity">qt: ${item.Quantity}</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
  <button class="delete-item" id="${item.Id}">X</button>
</li>`;
  // console.log(newItem);
  return newItem;
}

function deleteButton(callback) {
  document.querySelectorAll(".delete-item").forEach((element) => {
    element.addEventListener("click", (e) => {
      callback(e.target.id);
      location.reload();
    });
  });
}

function removeItemFromCart(itemId) {
  const cartItems = getLocalStorage("cart");
  const filteredItems = cartItems.filter((item) => itemId !== item.Id);
  setLocalStorage("cart", filteredItems);
}

getCartContents();
displayTotalInCart();
deleteButton(removeItemFromCart);

loadHeaderFooter();
const superscript = new addSuperscript();
superscript.addSuperscript();

