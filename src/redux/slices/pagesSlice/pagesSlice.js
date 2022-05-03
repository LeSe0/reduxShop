import axios from "axios";
import { addElements } from "../shopItems/actionCreators";
import { changeActivePage } from "./actionCreators";
import { setActiveCategory, setActivePage } from "./actions";

export const selectActivePage = (store) => {
  return store.pages.activePage;
};

export const selectActiveCategory = (store) => {
  return store.pages.activeCategory;
};

export const pagesReducer = (state = {}, action) => {
  switch (action.type) {
    case "changeActivePage":
      return setActivePage(state, action);
    case "changeActiveCategory":
      return setActiveCategory(state, action);
    default:
      return state;
  }
};

export const getActivePage = (dispatch) => {
  axios
    .get("http://localhost:8000/pages")
    .then((res) => {
      return res.data;
    })
    .then((res) =>
      dispatch(changeActivePage(res.activePage, res.activeCategory))
    );
};

export const getActiveCategory = (activeCategory) => (dispatch) => {
  activeCategory != "All"
    ? axios
        .get(
          "http://localhost:8000/shopItems?category=" +
            activeCategory.toLowerCase()
        )
        .then((res) => res.data)
        .then((res) => {
          dispatch(addElements(res));
        })
    : axios
        .get("http://localhost:8000/shopItems")
        .then((res) => res.data)
        .then((res) => {
          dispatch(addElements(res));
        });
};
