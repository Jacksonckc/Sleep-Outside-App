import { loadCallToActionModal } from "./utils";

export default class CallToActionModal {
  constructor(parent) {
    this.parent = parent;
  }
  init() {
    this.loadModalTemplate();
  }
  loadModalTemplate() {
    loadCallToActionModal(this.parent);
    this.modifiyModal();
  }
  modifiyModal() {
    // console.log(document.body.firstElementChild);
    document.getElementById("modalContainer").innerHTML = "hi";
  }
}
