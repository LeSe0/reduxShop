import axios from "axios";
import { changeElementsInBusketAction } from "./actionCreators";
import {
  addToBasket,
  removeFromBasket,
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

export const getMyInfo = (dispatch) => {
  axios
    .get("http://localhost:8000/myInfo")
    .then((res) => {
      return res.data;
    })
    .then((res) => {
      dispatch(changeElementsInBusketAction(res));
    });
};
