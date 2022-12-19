import { Card } from "react-bootstrap";
import { Link } from "react-router-dom"
import './Item.css'


const Item = ({ product }) => {
    return (
        <div className="cardList">
            <Link to={`/detail/${product.id}`}>
                <Card style={{ width: "22rem" }}>
                    <Card.Img className="imgList" variant="top" src={`${product.foto}`} />
                    <Card.Body>
                        <Card.Title className="fontList">{product.nombre}</Card.Title>
                        <Card.Text className="fontList">Categoria: {product.categoria}</Card.Text>
                        <Card.Text className="fontList">Precio: {product.precio}</Card.Text>
                        <Card.Text className="fontList">Stock: {product.stock}</Card.Text>
                    </Card.Body>
                </Card>
            </Link>

        </div>
    )
}

export default Item