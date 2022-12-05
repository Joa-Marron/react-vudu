import { createContext, useState } from "react";

export const CartContext = createContext([])

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])

    const agregarAlCarrito = (newProductCart) => {
        setCartList(newProductCart)
    }

    return(
    <CartContextProvider value={{
        cartList, 
        agregarAlCarrito
    }}>
        {children}
    </CartContextProvider>
)
}

export default CartContextProvider;

