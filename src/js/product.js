import ProductData from "./productData.js";
import ProductDetails from "./productDetails.js";
import { getParams } from "./utils.js";
import addSuperscript from "./cartIconSuperscript";

const productId = getParams("product");
const dataSource = new ProductData("tents");

const product = new ProductDetails(productId, dataSource);
product.init();

const superscript = new addSuperscript();
superscript.addSuperscript();

// let products = [];
// function convertToJson(res) {
//   if (res.ok) {
//     return res.json();
//   } else {
//     throw new Error("Bad Response");
//   }
// }

// function setLocalStorage(key, data) {
//   localStorage.setItem(key, JSON.stringify(data));
// }

// // get tents data
// function getProductsData() {
//   fetch("../json/tents.json")
//     .then((res) => convertToJson(res))
//     .then((data) => {
//       products = data;
//     });
// }
// // or should we do it this way?
// // async function getProductsDataAwait() {
// //   products = await fetch("../json/tents.json").then(convertToJson);
// // }

// // add to cart button event handler
// function addToCart(e) {
//   const addedProduct = products.find((item) => item.Id === e.target.dataset.id);
//   setLocalStorage("so-cart", addedProduct);
// }

// getProductsData();
// // add listener to Add to Cart button
// // document.getElementById("addToCart").addEventListener("click", addToCart);
