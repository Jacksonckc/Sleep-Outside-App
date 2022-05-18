import ProductData from "./productData.js";
import ProductDetails from "./productDetails.js";
import { getParams } from "./utils.js";
import addSuperscript from "./cartIconSuperscript.js";

const productId = getParams("product");
const dataSource = new ProductData("tents");

const product = new ProductDetails(productId, dataSource);
product.init();

const superscript = new addSuperscript();
superscript.addSuperscript();
