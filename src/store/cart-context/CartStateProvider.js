// import { mealsData } from "../data/Data"
import { createContext, useReducer } from "react";
import { CartStateReducer } from "./CartStateReducer";


const initialState = {
  items: [],
  displayForm: false,
  cartItemCount: 0,
  totalAmount: 0,
};


export const CartStateProvider = createContext(initialState);


export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartStateReducer, initialState);

  function displayFormFunc() {
    dispatch({
      type: "DISPLAY_MODAL",
    });
  }

  function addToCart(cartItem, ) {
    dispatch({
      type: "ADD_TO_CART",
      payload: { cartItem },
    });
  }

  function removeFromCart(id) {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { id },
    });
  }

  return (
    <CartStateProvider.Provider
      value={{
        items: state.items,
        displayForm: state.displayForm,
        totalAmount : state.totalAmount,
        cartItemCount: state.cartItemCount,
        
        removeButton: state.removeButton,

        displayFormFunc,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartStateProvider.Provider>
  );
};
