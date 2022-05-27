const baseURL = 'http://157.201.228.93:2992/';

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export default class ProductData {
  constructor() {
    this.products = [];
  }

  getData(category) {
    return fetch(baseURL + `products/search/${category}`).then(convertToJson).then((data) => data.Result);
  }

  // get tents data

  async findProductById(id) {
    return await fetch(baseURL + `product/${id}`).then(convertToJson)
      .then((data) => data.Result);
  }
}
