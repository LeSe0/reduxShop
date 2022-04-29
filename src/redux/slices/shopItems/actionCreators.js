export const removeItemAction = (id) => ({
  type: "removeItem",
  payload: {
    id,
  },
});

export const buyItemAction = (id) => ({
  type: "buyItem",
  payload: {
    id,
  },
});

export const addElements = (items) => ({
  type: "addElems",
  payload: {
    items,
  },
});
