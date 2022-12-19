import { createContext, useState, useContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [order, setOrder] = useState(false);
  const [orderId, setOrderId] = useState({});
  const isInCart = (id) => cartList.findIndex((product) => product.id === id);

  const addToCart = (newProductCart) => {
    setOrder(false);
    let index = isInCart(newProductCart.id);
    if (index === -1) {
      setCartList([...cartList, newProductCart]);
    } else {
      cartList[index].cantidad += newProductCart.cantidad;
      setCartList([...cartList]);
    }
  };

  const removeFromCart = (id) => {
    setCartList(cartList.filter((el) => el.id !== id))
  };

  const calcTotal = () => {
    return cartList.reduce(
      (sumPrecio, product) => (sumPrecio += product.cantidad * product.precio),
      0
    )
  };

  const calcItemQuantity = () => {
    return cartList.reduce((count, product) => count += product.cantidad, 0)
  };

  const deleteCart = () => {
    setCartList([]);
  };

  const showOrder = (id) => {
    setOrder(true);
    setOrderId(id);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        order,
        orderId,
        isInCart,
        calcTotal,
        calcItemQuantity,
        addToCart,
        removeFromCart,
        deleteCart,
        showOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;