import { loadHeaderFooter } from "./utils";
import addSuperscript from "./cartIconSuperscript";
import CheckoutProcess from "./CheckoutProcess";

loadHeaderFooter();
const superscript = new addSuperscript();
superscript.addSuperscript();

const myCheckout = new CheckoutProcess('cart', '.checkout-summary');
myCheckout.init();

document
  .querySelector('#zip')
  .addEventListener('blur', myCheckout.calculateOrdertotal.bind(myCheckout));
// listening for click on the button
document.querySelector('#checkoutSubmit').addEventListener('click', (e) => {
  e.preventDefault();
  let myForm = document.forms[0];
  let chk_status = myForm.checkValidity();
  myForm.reportValidity();
  if(chk_status) {
    myCheckout.checkout();
  }
});