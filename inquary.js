const addItems = (product, quantity) => {
  let card = {};
  card[product] = quantity;
  return card;
};
const result = addItems("fish", 1200);
console.log(result);
const addMore = (object, product, quantity) => {
  object[product] = quantity;
  return object;
};
const result2 = addMore(result, "beef", 3500);
console.log(result2);
