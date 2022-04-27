import { addToBasket, removeFromBasket } from "./actions";

export const initialMyInfo = [
  //   {
  //     id: 1,
  //     count: 0,
  //   },
  //   {
  //     id: 1,
  //     count: 0,
  //   },
  //   {
  //     id: 1,
  //     count: 0,
  //   },
];

export const selectMyInfo = (state) => {
  return state.myInfo;
};

export const myInfoReducer = (state = initialMyInfo, action) => {
  switch (action.type) {
    case "addToBasket":
      return addToBasket(state, action);
    case "removeFromBasket":
      return removeFromBasket(state, action);
    case "removeAll":
      return [];
    default:
      return state;
  }
};
