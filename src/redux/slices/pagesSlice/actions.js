export const setActivePage = (state, { payload }) => {
  return {
    activeCategory: payload.category,
    activePage: payload.page,
  };
};

export const setActiveCategory = (state, { payload }) => {
  return {
    activeCategory : payload.category,
    activePage : 0
  }
};
