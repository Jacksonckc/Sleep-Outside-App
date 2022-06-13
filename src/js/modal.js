import ProductDetail from "./productDetails.js";

export default function generateModal(event, id, dataSource) {
  const productDetail = new ProductDetail(id, dataSource, "#modal");
  productDetail.init();
  const modal = document.getElementById("modal");
  modal.style.display = "block";
  enableModalCloseBtn(modal);
  event.preventDefault();
}

function enableModalCloseBtn(modal) {
  const closeBtn = document.getElementById("modalCloseBtn");
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    closeBtn.style.display = "none";
  });
  closeBtn.style.display = "block";
}
