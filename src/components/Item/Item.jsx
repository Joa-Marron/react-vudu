import { Link } from "react-router-dom"
import './Item.css'


const Item = ({product}) => {
    return (
        <div className="flex card">
            <Link to={`/detail/${product.ID}`}>
                <div className='flex'>
                    <img src={product.foto} alt={product.nombre} className='imgProductos card-img-top' />
                </div>
                <div className='listaProductos fontList card-body'>
                    {product.nombre}
                </div>
                <div className='listaProductos fontList card-body'>
                    {product.categoria}
                </div>
                <div className='lista>Productos fontList card-body'>
                    {product.stock}
                </div>
                <div className='listaProductos fontList card-body'>
                    {product.precio}
                </div>
            </Link>


        </div>
    )
}

export default Item