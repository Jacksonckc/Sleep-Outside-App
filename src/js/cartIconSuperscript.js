import { getLocalStorage } from "./utils";

export default class CartIconSuperscript {
  constructor() {}

  addSuperscript() {
    let number = 0;
    if (getLocalStorage("cart")) {
      number = getLocalStorage("cart").length;
    }
    document.styleSheets[0].addRule(".cart::before", `content: '${number}';`);
  }
}
