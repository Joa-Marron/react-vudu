import { Card } from "react-bootstrap";
import { useCartContext } from "../../context/CartContext";
import Contador from "../Contador/Contador"

const ItemDetail = ({ product }) => {

  const { cartList, addToCart } = useCartContext()

  const onAdd = (cantidad) => {
    console.log(cantidad);
    addToCart({ ...product, cantidad })
  }

  console.log(cartList);

  return (
    <div className="row">
      <div className="col">
      <Card className="card" style={{ width: "22rem" }}>
      <Card.Img variant="top" src={`${product.foto}`} />
      <Card.Body>
      <Card.Title>{product.nombre}</Card.Title>
      <Card.Text>Categoria: {product.categoria}</Card.Text>
      <Card.Text>Precio: {product.precio}</Card.Text>
      <Card.Text>Stock: {product.stock}</Card.Text> 
      </Card.Body>
        </Card>
      </div>
      <div className="col">
        <Contador stock={10} initial={1} onAdd={onAdd} />
      </div>
    </div>
  )
}

export default ItemDetail