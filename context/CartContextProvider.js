import React, { useReducer, createContext } from "react";

const initialState = {
  selectItem: [],
  itemCounter: 0,
  total: 0,
  checkout: false,
};

const sumItems = (select) => {
  const itemCounter = select.reduce(
    (total, product) => total + product.quantity,
    0
  );
  const total = select
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
  return { itemCounter, total };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectItem.find((item) => item.id === action.payload.id)) {
        state.selectItem.push({
          ...action.payload,
          quantity: 1,
        });
        return {
          ...state,
          selectItem: [...state.selectItem],
          ...sumItems(state.selectItem),
          checkout: false,
        };
      }
    case "REMOVE_ITEM":
      const newItemSelect = state.selectItem.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectItem: [...newItemSelect],
        ...sumItems(newItemSelect),
      };
    case "INCREASE":
      const indexI = state.selectItem.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectItem[indexI].quantity++;
      return {
        ...state,
        ...sumItems(state.selectItem),
      };
    case "DECREASE":
      const indexD = state.selectItem.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectItem[indexD].quantity--;
      return {
        ...state,
        ...sumItems(state.selectItem),
      };
    case "CHECKOUT":
      return {
        selectItem: [],
        itemCounter: 0,
        total: 0,
        checkout: true,
      };
    case "CLEAR":
      return {
        selectItem: [],
        itemCounter: 0,
        total: 0,
        checkout: false,
      };
    default:
      return state;
  }
};

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <CartContext.Provider value={{ state, dispatch }}>
        {children}
      </CartContext.Provider>
    </div>
  );
};

export default CartContextProvider;
