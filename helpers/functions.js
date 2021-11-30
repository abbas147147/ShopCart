const shorten = (title) => {
  const oldT = title.split(" ");
  const newT = `${oldT[0]} ${oldT[1]}`;
  return newT;
};
const isInCart = (state, id) => {
  const result = !!state.selectItem.find((item) => item.id === id);
  return result;
};
const quantityCounter = (state, id) => {
  const index = state.selectItem.findIndex((item) => item.id === id);
  if (index === -1) {
    return false;
  } else {
    return state.selectItem[index].quantity;
  }
};

export { shorten, quantityCounter, isInCart };
