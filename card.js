const getFieldValueById = (id) => {
  const inputField = document.getElementById(id);
  const inputValue = inputField.value;
  inputField.value = "";
  return inputValue;
};

const addProductBtn = () => {
  const product = getFieldValueById("product-name-field");
  const quantity = getFieldValueById("product-quantity-field");
  //   localStorage.setItem(product, quantity);
  //display product
  addProductDisplay(product, quantity);
  saveItemToLocalStorage(product, quantity);
};

const getSopingCardFromLocalStorage = () => {
  let savedCard = localStorage.getItem("card");
  let card = {};
  if (savedCard) {
    card = JSON.parse(savedCard);
  }
  return card;
};

const saveItemToLocalStorage = (product, quantity) => {
  const card = getSopingCardFromLocalStorage();
  //add product to object as property and quantity as value;
  card[product] = quantity;
  const cardStingified = JSON.stringify(card);

  //save to local storage
  localStorage.setItem("card", cardStingified);
};

const setById = (product, quantity) => {
  const productContainer = document.getElementById("product-container");
  const li = document.createElement("li");
  li.innerText = `${product} : ${quantity}`;
  productContainer.appendChild(li);
};

const addProductDisplay = (product, quantity) => {
  setById(product, quantity );

  //add from existing card
};

const displayStoredProduct = () => {
  const card = getSopingCardFromLocalStorage();
  for (const product in card) {
    console.log(product);
    setById(product, card[product]);
  }
};
displayStoredProduct();
