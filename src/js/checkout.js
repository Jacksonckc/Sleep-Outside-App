import { loadHeaderFooter } from "./utils";
import addSuperscript from "./cartIconSuperscript";
import CheckoutProcess from "./CheckoutProcess";

loadHeaderFooter();
const superscript = new addSuperscript();
superscript.addSuperscript();

const myCheckout = new CheckoutProcess("cart", ".checkout-summary");
myCheckout.init();

document
  .querySelector("#zip")
  .addEventListener("blur", myCheckout.calculateOrdertotal.bind(myCheckout));
// listening for click on the button
document.querySelector("#checkoutSubmit").addEventListener("click", (e) => {
  e.preventDefault();

  myCheckout.checkout();
});
