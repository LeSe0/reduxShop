export const changeActivePage = (page, category) => ({
  type: "changeActivePage",
  payload: {
    page,
    category,
  },
});

export const changeActiveCategory = (category) => {
  return {
    type: "changeActiveCategory",
    payload: {
      category,
    },
  };
};
