export const removeFromBasketAction = (id) => ({
  type: "removeFromBasket",
  payload: {
    id,
  },
});

export const addToBasketAction = (item) => ({
  type: "addToBasket",
  payload: {
    item,
  },
});
