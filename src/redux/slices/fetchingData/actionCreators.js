export const fetchData = (bool) => ({
  type: "fetching",
  payload: {
    bool,
  },
});
