const getValueById = (id) => {
  const inputField = document.getElementById(id);
  const inputValue = inputField.value;
  inputField.value = "";
  return inputValue;
};

const addProductBtn = () => {
  const product = getValueById("product-name-field");
  const quantity = getValueById("product-quantity-field");
  localStorage.setItem(product, quantity);
  addProductDisplay(product, quantity);
  saveItemToLocalStorage(product, quantity);
};

const getSopingCardFromLocalStorage = () => {
  const cartStored = localStorage.getItem("cart");
  let cart = {};
  if (cartStored) {
    cart = JSON.parse(cartStored);
  }
  return cart;
};
const saveItemToLocalStorage = (product, quantity) => {
  const cart = getSopingCardFromLocalStorage();
  cart[product] = quantity;
  const cartStingify = JSON.stringify(cart);
  localStorage.setItem("cart", cartStingify);
};

const setById = (product, quantity) => {
  const productContainer = document.getElementById("product-container");
  const li = document.createElement("li");
  li.innerText = `${product} : ${quantity}`;
  productContainer.appendChild(li);
};

const addProductDisplay = (product, quantity) => {
  setById(product, quantity);
};

const displayStoredProduct = () => {
  const cart = getSopingCardFromLocalStorage();
  for (const product in cart) {
    setById(product, cart[product]);
  }
};

displayStoredProduct();
