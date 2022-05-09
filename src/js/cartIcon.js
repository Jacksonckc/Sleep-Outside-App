function getLocalStorage(key) {
  const cartItems = [JSON.parse(localStorage.getItem(key))];
  console.log(cartItems.length);
  return cartItems.length;
}

export default function addSuperscript() {
  const number = getLocalStorage("so-cart");
  document.styleSheets[0].addRule(".cart::before", `content: '${number}';`);
}
