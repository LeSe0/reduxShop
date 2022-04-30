import { combineReducers, legacy_createStore as createStore } from "redux";
// slices
import { myInfoReducer } from "./slices/myInfo/myInfo";
import { shopItemsReducer } from "./slices/shopItems/shopItemsSlice";

const defaultStore = {
  myInfo: [],
  shopItems: [],
};

const store = createStore(
  combineReducers({
    myInfo: myInfoReducer,
    shopItems: shopItemsReducer,
  }),
  defaultStore
);

export default store;
