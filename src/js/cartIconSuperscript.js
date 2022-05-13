import { getLocalStorage } from "./utils";

export default class cartIconSuperscript {
  constructor() {}

  addSuperscript() {
    const number = getLocalStorage().length;
    document.styleSheets[0].addRule(".cart::before", `content: '${number}';`);
  }
}
