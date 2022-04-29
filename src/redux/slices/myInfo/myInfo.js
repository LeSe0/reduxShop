import {
  addToBasket,
  removeFromBasket,
  addElemsToBasket,
  changeElementsInBusket,
} from "./actions";

export const selectMyInfo = (state) => {
  return state.myInfo;
};

export const myInfoReducer = (state = [], action) => {
  switch (action.type) {
    case "addToBasket":
      return addToBasket(state, action);
    case "removeFromBasket":
      return removeFromBasket(state, action);
    case "changeElems":
      return changeElementsInBusket(state, action);
    case "removeAll":
      return [];
    default:
      return state;
  }
};
