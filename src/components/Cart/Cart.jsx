import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext"
import './Cart.css';

const Cart = () => {

  const { cartList, cleanCart, totalPrice, deleteItem } = useCartContext()

  return (
    <div>
      <h1>Carrito</h1>
     {cartList.length != 0 ? <>
     <ul>
        {cartList.map((product) =>  <li key={product.id}>
                                     <img src={product.foto} className="w-25" />
                                      nombre: {product.name} - precio {product.price} - cantidad: {product.cantidad}
                                      <button onClick={()=>deleteItem(product.id)}>X</button>
                                    </li>
                                    
        )}
      </ul>
      <label>Precio total de la compra: ${totalPrice() != 0 && totalPrice()}</label>
      <button className="btnCleanCart" onClick={cleanCart}>Vaciar carrito</button>
           </>
           :
           <h2>No hay productos seleccionados <Link to='/'>Ir a comprar productos</Link></h2>
} 
    </div>
  )
}

export default Cart