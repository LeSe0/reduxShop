export const addToBasket = (state, { payload }) => {
  if (Boolean(!state.length))
    return [
      ...state,
      {
        ...payload.item,
        count: payload.item.count + 1,
        itemsLeft: payload.item.itemsLeft - 1,
      },
    ];
  else
    return [
      ...state.map((el) => {
        if (el.id === payload.item.id)
          return {
            ...el,
            count: el.count != 0 ? el.count + 1 : 1,
            itemsLeft: payload.item.itemsLeft - 1,
          };
        return el;
      }),
      ...(!state.find(({ id }) => id === payload.item.id)
        ? [
            {
              ...payload.item,
              count: payload.item.count > 0 ? payload.item.count + 1 : 1,
              itemsLeft : payload.item.itemsLeft - 1
            },
          ]
        : []),
    ];
};

export const removeFromBasket = (state, { payload }) => {
  return [
    ...(!state.find((el) => el.count === 1)
      ? [
          {
            ...payload.item,
            count: payload.item.count - 1,
            itemsLeft: payload.item.itemsLeft + 1,
          },
        ]
      : []),
    ...state.filter(({ id }) => {
      return id !== payload.item.id;
    }),
  ];
};

export const changeElementsInBusket = (state, { payload }) => {
  return payload.items;
};
