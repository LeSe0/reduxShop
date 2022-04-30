export const buyItem = (state, { payload }) => {
  return state.map((el) => {
    if (el.id === payload.id) {
      return {
        ...el,
        count: el.count + 1,
        itemsLeft: el.itemsLeft - 1,
      };
    }
    return el;
  });
};

export const removeItem = (state, { payload }) =>
  state.map((el) => {
    if (el.id === payload.id) {
      return {
        ...el,
        count: el.count - 1,
        itemsLeft: el.itemsLeft + 1,
      };
    }
    return el;
  });

export const removeAll = (state) =>
  state.map((el) => ({
    ...el,
    itemsLeft: el.itemsLeft + el.count,
    count: 0,
  }));

export const addElems = (state, { payload }) => {
  return payload.items;
};
