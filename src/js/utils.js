// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  // console.log(localStorage.getItem(key));
  return [JSON.parse(localStorage.getItem(key))];
}

// save data to local storage
export function setLocalStorage(key, data) {
  console.log(data);
  localStorage.setItem(
    key,
    // toCart(key, data)
    JSON.stringify(data)
    // getLocalStorage(data).push(JSON.parse(JSON.stringify(data)))
  );
  //
}

// function toCart(key, data) {
//   if (getLocalStorage(key)[0] != null) {
//     return JSON.stringify(getLocalStorage(key).push(data));
//   } else {
//     return JSON.stringify(data);
//   }
// }

// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

export function getParams(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get(param);
  return product;
}

export function renderListWithTemplate(template, parent, list, callback) {
  list.forEach((item) => {
    const clone = template.content.cloneNode(true);
    const templateWithData = callback(clone, item);
    parent.appendChild(templateWithData);
  });
}
