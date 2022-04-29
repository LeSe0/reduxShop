export const removeFromBasketAction = (item) => ({
  type: "removeFromBasket",
  payload: {
    item,
  },
});

export const addToBasketAction = (item) => ({
  type: "addToBasket",
  payload: {
    item,
  },
});

export const changeElementsInBusketAction = (items) => ({
  type: "changeElems",
  payload: {
    items,
  },
});
