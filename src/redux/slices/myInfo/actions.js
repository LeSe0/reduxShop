export const addToBasket = (state, { payload }) => {
  if (Boolean(!state.length))
    return [
      ...state,
      {
        ...payload.item,
        count: payload.item.count ? payload.item.count + 1 : 1,
      },
    ];
  else
    return [
      ...state.map((el) => {
        if (el.id === payload.item.id) return { ...el, count: el.count + 1 };
        return el;
      }),
      ...(!state.find(({ id }) => id === payload.item.id)
        ? [
            {
              ...payload.item,
              count: payload.item.count ? payload.item.count + 1 : 1,
            },
          ]
        : []),
    ];
};

export const removeFromBasket = (state, { payload }) => {
  return [
    ...(!state.find((el) => el.count <= 1)
      ? state.map(
          (el) => el.id === payload.id && { ...el, count: el.count - 1 }
        )
      : []),
    ...state.filter(({ id }) => {
      return id !== payload.id;
    }),
  ];
};
