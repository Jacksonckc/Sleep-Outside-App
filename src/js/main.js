import CartIconSuperscript from "./cartIconSuperscript";
import { loadHeaderFooter } from "./utils.js";
import CallToActionModal from "./callToActionModal";

loadHeaderFooter();
// loadCallToActionModal();
const superScript = new CartIconSuperscript();
superScript.addSuperscript();
const callToActionModal = new CallToActionModal(
  document.getElementById("callToActionModal")
);
callToActionModal.init();
