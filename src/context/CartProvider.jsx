import { createContext, useEffect, useReducer, useState } from 'react';
import PropTypes from 'prop-types';
import { actionTypes } from '../actions/cart.actions';
import { CartInitialState, cartReducer } from '../reducers/cart.reducer';
import { getTotalPriceItems } from '../utils/cart.utils';

const CartContext = createContext();

function CartProvider({ children }) {
    const [state, dispatch] = useReducer(cartReducer, CartInitialState);
    const [ orderTotal, setOrderTotal] = useState(0)

    useEffect(() => {
       /*  if(state.cartItems.length > 0){ */
            let total = getTotalPriceItems(state.cartItems).reduce((a, b) => a + b, 0)
            console.log(total)
            setOrderTotal(total)
        /* } */
        
    },[state])

    function addToCart(drink) {
        dispatch({ type: actionTypes.ADD_TO_CART, payload: drink })
    }

    function removeOneFromCart(idDrink) {
        dispatch({type: actionTypes.REMOVE_ONE_FROM_CART, payload: {idDrink}})
    }
    function removeAllFromCart(idDrink) {
        dispatch({type: actionTypes.REMOVE_ALL_FROM_CART, payload: {idDrink}})
    }
    function clearCart() {
        dispatch({type: actionTypes.CLEAR_CART })
    }
    function sendOrder ( ){
        alert (JSON.stringify(state))
    }
    const cartValues = {
        cart: state,
        addToCart,
        removeOneFromCart,
        removeAllFromCart,
        clearCart,
        sendOrder,
        orderTotal,
    }

    return (
        <CartContext.Provider value={cartValues}>
            {children}
        </ CartContext.Provider>
    )

}

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export { CartContext, CartProvider };