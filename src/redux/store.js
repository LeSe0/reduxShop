import { applyMiddleware, combineReducers, legacy_createStore as createStore, compose } from "redux";
import thunk from "redux-thunk";
// slices
import { myInfoReducer } from "./slices/myInfo/myInfo";
import { pagesReducer } from "./slices/pagesSlice/pagesSlice";
import { shopItemsReducer } from "./slices/shopItems/shopItemsSlice";

const defaultStore = {
  myInfo: [],
  shopItems: [],
  pages: {}
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    myInfo: myInfoReducer,
    shopItems: shopItemsReducer,
    pages: pagesReducer
  }),
  defaultStore,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default store;
