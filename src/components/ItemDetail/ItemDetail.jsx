import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import Contador from "../Contador/Contador"

const ItemDetail = ({ product }) => {
  const [isCounter, setIsCounter] = useState(true)
  const {cartList, agregarAlCarrito} = useCartContext()

  const onAdd = (cantidad) => {
    console.log(cantidad)
    agregarAlCarrito( { ...product, cantidad } )
    setIsCounter(false)
  }
  console.log(cartList)

  return (
    <>
      <div className="row">
        <div className="col">
          
          <img src={product.foto} className="w-25" />
          <p>Nombre: {product.nombre}</p>
          <p>Categoría: {product.categoria}</p>
          <p>Precio: {product.precio}</p>
          <p>stock: {product.stock}</p>
        </div>
        <div className="col">
            { isCounter ? 
                    <Contador 
                        stock={10} 
                        initial={1} 
                        onAdd={onAdd} 
                    
                    />
                :  
                    <div className="container mt-5">
                        <Link to='/cart' className="btn btn-success">Terminar mi compra</Link>
                        <Link to='/' className="btn btn-success">Seguir comprando </Link>
                    </div>
            }
            
        </div>
        
      </div>
        

    </>
  )
}

export default ItemDetail


