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
  if (el.itemsLeft > 0) {
    dispatch(fetchData(true));
    dispatch(buyItemAction(el.id));
    dispatch(addToBasketAction(el));
  }
};

export const removeItems = (el, myInfo) => (dispatch) => {
  if (el.itemsLeft < el.itemsLeft + el.count) {
    dispatch(fetchData(true));
    dispatch(removeItemAction(el.id));
    dispatch(removeFromBasketAction(el));
  }
};
