export default class cartIconSuperscript {
  // constructor() {}
  getLocalStorage(key) {
    const cartItems = [JSON.parse(localStorage.getItem(key))];
    if (cartItems[0] == null) {
      cartItems.length -= 1;
    }
    return cartItems.length;
  }

  addSuperscript() {
    const number = this.getLocalStorage("so-cart");
    document.styleSheets[0].addRule(".cart::before", `content: '${number}';`);
  }
}
