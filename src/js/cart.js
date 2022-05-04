function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

function getCartContents() {
  let markup = "";

  const cartItems = [getLocalStorage("so-cart")];
  if (cartItems[0] != null) {
    document.querySelector(".product-list").innerHTML = cartItems
      .map((item) => renderCartItem(item))
      .join("");
  }
}

function displayTotalInCart() {
  // get cartItems and place them in an array
  const cartItems = [getLocalStorage("so-cart")];

  // grab the element that will display the total cart
  let element = document.querySelector(".hide");

  // have a variable holding the total cost
  let totalCost = 0;

  if (cartItems[0] != null) {
    cartItems.forEach((item) => {
      totalCost += item.FinalPrice;
    });

    // display the element
    element.style.display = "block";

    // add the totalCount to innerHTML
    element.innerHTML = `Total: $${totalCost}`;
  } else {
    // hide the element
    element.style.display = "none";
  }
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
  console.log(newItem);
  return newItem;
}

getCartContents();
displayTotalInCart();
