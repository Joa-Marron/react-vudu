import { createContext, useState, useContext } from "react";


const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])

    const isInCart = (id) => cartList.findIndex(product => product.id === id)

    const addToCart = (newProductCart) => {
        let index = isInCart(newProductCart.id)
        if (index=== -1) {
            setCartList([...cartList, newProductCart])

        } else {
            cartList[index].cantidad += newProductCart.cantidad
            setCartList( [...cartList] )
        }
        

    }

    const cleanCart = () => {
        setCartList([])
    }

    const totalQuantity = () => {
        return cartList.reduce((count, product) => count += product.cantidad, 0)
    }

    const totalPrice = () => {
        return cartList.reduce((sumPrice, product) => sumPrice += (product.cantidad * product.precio), 0)
    }

    const deleteItem = (id) => {
        setCartList(cartList.filter(product => product.id != id))
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            cleanCart,
            totalQuantity,
            totalPrice,
            deleteItem
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider