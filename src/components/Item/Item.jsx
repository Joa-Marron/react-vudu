import { Link } from "react-router-dom"
import './Item.css'


const Item = ({ product }) => {
    return (
        <div className="flex card">
            <Link to={`/detail/${product.Id}`}>
                <div className='flex'>
                    <img src={product.foto} alt={product.nombre} className='imgProductos card-img-top' />
                </div>
                <div className='listaProductos fontList card-body'>
                    <p>Nombre: {product.nombre}</p>

                </div>
                <div className='listaProductos fontList card-body'>
                    <p>Categoría: {product.categoria}</p>

                </div>
                <div className='listaProductos fontList card-body'>
                    <p>stock: {product.stock}</p>
                </div>
                <div className='listaProductos fontList card-body'>
                    <p>Precio: {product.precio}</p>
                </div>
            </Link>


        </div>
    )
}

export default Item