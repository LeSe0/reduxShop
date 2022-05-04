// React
import axios from "axios";
import { fetchData } from "../redux/slices/fetchingData/actionCreators";
import {
  addToBasketAction,
  removeFromBasketAction,
} from "../redux/slices/myInfo/actionCreators";
import {
  buyItemAction,
  removeItemAction,
} from "../redux/slices/shopItems/actionCreators";

export const addItems = (el, myInfo) => (dispatch) => {
  dispatch(fetchData(true));
  if (el.itemsLeft > 0) {
    if (myInfo.find((elem) => elem.id == el.id)) {
      dispatch(buyItemAction(el.id));
      dispatch(addToBasketAction(el));
    } else {
      dispatch(buyItemAction(el.id));
      dispatch(addToBasketAction(el));
    }
  }
};

export const removeItems = (el, myInfo) => (dispatch) => {
  dispatch(fetchData(true));
  if (el.itemsLeft < el.itemsLeft + el.count) {
    if (myInfo.find((elem) => elem.id == el.id)) {
      if (el.count <= 1) {
        dispatch(removeItemAction(el.id));
        dispatch(removeFromBasketAction(el));
      } else {
        dispatch(removeItemAction(el.id));
        dispatch(removeFromBasketAction(el));
      }
    } else {
      dispatch(removeItemAction(el.id));
      dispatch(removeFromBasketAction(el));
    }
  }
};
