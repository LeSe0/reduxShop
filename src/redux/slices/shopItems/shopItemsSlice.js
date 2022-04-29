import { buyItem, removeAll, removeItem, addElems } from "./actions";

export const selectShopItems = (state) => {
  return state.shopItems;
};

export const shopItemsReducer = (state = [], action) => {
  switch (action.type) {
    case "buyItem":
      return buyItem(state, action);
    case "removeItem":
      return removeItem(state, action);
    case "removeAll":
      return removeAll(state);
    case "addElems":
      return addElems(state, action);
    default:
      return state;
  }
};
