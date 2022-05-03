import axios from "axios";
import { addElements } from "./actionCreators";
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

export const getShopItems = (dispatch) => {
  axios
    .get("http://localhost:8000/shopItems")
    .then((res) => {
      return res.data;
    })
    .then((res) => {
      dispatch(addElements(res));
    });
};
