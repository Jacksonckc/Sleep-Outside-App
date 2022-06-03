import ExternalServices from "./ExternalServices.js";
import ProductList from "./productList.js";
import { loadHeaderFooter, getParams } from "./utils.js";
import CartIconSuperscript from "./cartIconSuperscript";

const superScript = new CartIconSuperscript();
superScript.addSuperscript();
loadHeaderFooter();

const category = getParams('category');

// first create an instance of our ExternalServices class.
const dataSource = new ExternalServices();
// then get the element we want the product list to render in
const listElement = document.querySelector(".product-list");
// console.log(listElement);
// then create an instance of our ProductList class and send it the correct information.
const myList = new ProductList(category, dataSource, listElement);
// finally call the init method to show our products
myList.init();
