import { getLocalStorage } from "./utils";

export default class CartIconSuperscript {
  constructor() {}

  addSuperscript() {
    // console.log(getLocalStorage("cart"));
    let number = getLocalStorage("cart").length;
    // console.log(getLocalStorage("cart"));
    if (getLocalStorage("cart")[0] == null) {
      number -= 1;
    }
    document.styleSheets[0].addRule(".cart::before", `content: '${number}';`);
  }
}
