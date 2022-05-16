import { getLocalStorage } from "./utils";

export default class CartIconSuperscript {
  constructor() {}

  addSuperscript() {
    let number = getLocalStorage("cart").length;
    if (getLocalStorage("cart")[0] == null) {
      number -= 1;
    }
    document.styleSheets[0].addRule(".cart::before", `content: '${number}';`);
  }
}
