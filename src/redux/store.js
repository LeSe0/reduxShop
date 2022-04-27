import { combineReducers, legacy_createStore as createStore } from "redux";
// slices
import { initialMyInfo, myInfoReducer } from "./slices/myInfo/myInfo";
import {
  initialShopItems,
  shopItemsReducer,
} from "./slices/shopItems/shopItemsSlice";

const defaultStore = {
  myInfo: initialMyInfo,
  shopItems: initialShopItems,
};

const store = createStore(
  combineReducers({
    myInfo: myInfoReducer,
    shopItems: shopItemsReducer,
  }),
  defaultStore
);

export default store;
