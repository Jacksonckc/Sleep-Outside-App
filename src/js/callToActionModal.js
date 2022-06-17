import { loadCallToActionModal } from "./utils";

export default class CallToActionModal {
  constructor(parent) {
    this.parent = parent;
  }
  init() {
    this.loadModalTemplate();
  }
  async loadModalTemplate() {
    await loadCallToActionModal(this.parent);
    this.modifiyModal();
  }
  modifiyModal() {
    const content = document.getElementById("CTAContent");
    content.innerHTML = "Buy something plz!";
    const button = document.getElementById("CTAClose");
    button.addEventListener("click", () => {
      this.parent.style.display = "none";
    });
  }
}
