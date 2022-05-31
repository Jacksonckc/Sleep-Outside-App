import { renderListWithTemplate } from "./utils";
// import generateModal from "./modal";
import ProductDetail from "./productDetails";
import ProductData from "./productData.js";

export default class ProductList {
  constructor(category, dataSource, listElement) {
    // We passed in this information to make our class as reusable as possible.
    // Being able to define these things when we use the class will make it very flexible
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }
  async init() {
    // our dataSource will return a Promise...so we can use await to resolve it.
    const list = await this.dataSource.getData(this.category);

    // render the list
    this.renderList(list);
  }

  prepareTemplate(template, product) {
    template.querySelector("a").href += product.Id;
    template.querySelector("img").src = product.Images.PrimaryLarge;
    template.querySelector("img").alt += product.Name;
    template.querySelector(".card__brand").textContent += product.Brand.Name;
    template.querySelector(".card__name").textContent +=
      product.NameWithoutBrand;
    template.querySelector(".product-card__price").textContent +=
      product.FinalPrice;
    template
      .querySelector(".modalOpenBtn")
      .addEventListener("click", (event) => {
        // generateModal(product.Id, ".modal");
        const dataSource = new ProductData();
        const productDetail = new ProductDetail(
          product.Id,
          dataSource,
          "#modal"
        );
        productDetail.init();
        event.preventDefault();
      });
    // template.querySelector(".modalOpenBtn").removeEventListener("mousedown", handleMouseDown, false);
    return template;
  }
  renderList(list) {
    // insert the actual details of the current product into the template
    this.listElement.innerHTML = "";

    const template = document.getElementById("product-card-template");
    renderListWithTemplate(
      template,
      this.listElement,
      list.filter((item) => item.Id != "989CG" && item.Id != "880RT"),
      this.prepareTemplate
    );
  }
}
