const baseURL = 'http://157.201.228.93:2992/';

async function convertToJson(res) {
  const response = res.json();
  if (response) {
    return response;
  } else {
    throw { name: 'servicesError', message: response};
  }
}

export default class ExternalServices {
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

  async checkout(payload) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };
    return await fetch(baseURL + 'checkout/', options).then(convertToJson);
  }
}
