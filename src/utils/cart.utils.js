export function getTotalPriceItems (cartItems) {    
    return cartItems.map((item) => item.quantity * item.price)
}