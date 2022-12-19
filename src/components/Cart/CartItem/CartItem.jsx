import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useCartContext } from '../../../context/CartContext';

const CartItem = ({product}) => {
    const { removeFromCart } = useCartContext();
  return (
    <li
    className="d-flex flex-row justify-content-center align-items-center"
  >
    <Card className="card" style={{ width: "15rem" }}>
      <Card.Img className='cardImg' variant="top" src={`${product.foto}`} />
    </Card>
    <h5 className="lead fs-4">
      Nombre: {product.nombre} - Precio: $
      {product.precio * product.cantidad} - Cantidad: {product.cantidad}
      <Button
        className="btn btn-dark btn-outline-light border-dark m-1"
        onClick={() => removeFromCart(product.id)}
      >
        X
      </Button>
    </h5>
  </li>
  )
}

export default CartItem