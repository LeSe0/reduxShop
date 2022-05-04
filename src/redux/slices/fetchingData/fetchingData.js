import { fetchingData } from "./actions";

export const fetchingReducer = (state = false , action) => {
  switch (action.type) {
    case "fetching":
      return fetchingData(state , action);
    default:
      return state;
  }
};

export const selectFetch = (store) => {
    return store.fetchingData
}
