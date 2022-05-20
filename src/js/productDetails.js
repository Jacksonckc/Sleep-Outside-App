import { setLocalStorage, getLocalStorage } from "./utils.js";

export default class ProductDetail {
  constructor(productId, dataSource) {
    this.productId = productId;
    this.product = {};
    this.dataSource = dataSource;
  }

  async init() {
    this.product = await this.dataSource.findProductById(this.productId);
    document.querySelector("main").innerHTML = this.renderProductDetails();
    // document
    //   .getElementById("addToCart")
    //   .addEventListener("click", () => location.reload(), true);
    // use our datasource to get the details for the current product. findProductById will return a promise! use await or .then() to process it
    // once we have the product details we can render out the HTML
    // once the HTML is rendered we can add a listener to Add to Cart button
    // Notice the .bind(this). Our callback will not work if we don't include that line. Review the readings from this week on 'this' to understand why.
    document
      .getElementById("addToCart")
      .addEventListener("click", this.addToCart.bind(this));
  }

  addToCart() {
    if (getLocalStorage("cart")) {
      // If cart already has item/items
      const product = getLocalStorage("cart").find(
        (item) => item.Id == this.product.Id
      );
      if (product) {
        // Modify the item that already exist in the cart
        let newLocalStorage = [...getLocalStorage("cart")];
        newLocalStorage = newLocalStorage.filter(
          (item) => item.Id != product.Id
        );
        product.Quantity += 1;
        newLocalStorage = [...newLocalStorage, product];
        setLocalStorage("cart", [...newLocalStorage]);
      } else {
        // Adding a new item to the cart
        this.product = { ...this.product, ...{ Quantity: 1 } };
        setLocalStorage("cart", [...getLocalStorage("cart"), this.product]);
      }
    } else {
      // Adding the first item to the cart
      setLocalStorage("cart", [{ ...this.product, ...{ Quantity: 1 } }]);
    }
    this.animateCart()
  }

  // Cart animation
  animateCart(){
    var cartIcon = document.getElementById("cartIcon");
    cartIcon.animate([
    {
      transform: 'rotate(0deg) scale(1)' 
    },
    {
      transform: 'rotate(-10deg) scale(1.3)'
    },
    {
      transform: 'rotate(10deg) scale(1.3)'
    },
    {
      transform: 'rotate(-10deg) scale(1.3)'
    },
    {
      transform: 'rotate(10deg) scale(1.3)'
    },
    {
      transform: 'rotate(0deg) scale(1)'
    }
    ],
    {
      duration: 750,
      iterations: 1,
    });
  }


  renderProductDetails() {
    return `<section class="product-detail"> <h3>${this.product.Brand.Name}</h3>
    <h2 class="divider">${this.product.NameWithoutBrand}</h2>
    <img
      class="divider"
      src="${this.product.Image}"
      alt="${this.product.NameWithoutBrand}"
    />
    <p class="product-card__price">$${this.product.FinalPrice}</p>
    <p class="product__color">${this.product.Colors[0].ColorName}</p>
    <p class="product__description">
    ${this.product.DescriptionHtmlSimple}
    </p>
    <div class="product-detail__add">
      <button id="addToCart" data-id="${this.product.Id}">Add to Cart</button>
    </div></section>`;
  }
}
