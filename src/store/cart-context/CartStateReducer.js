import { onlyUnique } from "../../shared/shared-functions";


export const CartStateReducer = (state, action) => {
    switch(action.type){

        case 'DISPLAY_MODAL':
            return {
                ...state,
                displayForm: !state.displayForm,
            }

            
        case "ADD_TO_CART":
            const updatedAmount = state.totalAmount + action.payload.cartItem.price
            state.removeButton = false;
            let orderList = [ ...state.items, action.payload.cartItem ]
            orderList = onlyUnique(orderList);
            return {
                ...state,
                items : orderList,
                cartItemCount : state.cartItemCount + 1,
                totalAmount : updatedAmount,
            }
            

        case "REMOVE_FROM_CART":
            let updatedOrderList;

            const existingCartItemIndex = state.items.findIndex(
                (item) => item.id === action.payload.id
            );
            
            let existingItem = state.items[existingCartItemIndex]
            const updatedTotalAmount = state.totalAmount - existingItem.price 

            if(existingItem.itemCount === 1){
                updatedOrderList = state.items.filter(item => item.id !== action.payload.id )
            } else {
                const updatedItem = {...existingItem, itemCount: existingItem.itemCount - 1}
                updatedOrderList = [...state.items]
                updatedOrderList[existingCartItemIndex] = updatedItem
            }

            return {
                ...state,
                cartItemCount : Math.max(state.cartItemCount - 1, 0),
                items : updatedOrderList,
                totalAmount : Math.max(updatedTotalAmount -1, 0)
            }    
          
            
        default:
            return state // Else just return the initial state

    }

}