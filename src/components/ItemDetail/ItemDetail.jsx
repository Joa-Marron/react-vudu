import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Contador from "../contador/Contador";
// import Intercambiabilidad from "../Intercambiabilidad/Intercambiabilidad";


const ItemDetail = ({ product }) => {

    const {cartList, agregarAlCarrito} = useContext(CartContext)

    const onAdd = (cantidad) => {
        console.log(cantidad);
        agregarAlCarrito({product, cantidad})
    }
    
    return (
        <div className="row">

            <div className="col">
                <img src={product.foto} className='w-50' />
                <p>Categoría: {product.categoria}</p>
                <p>Precio: {product.precio}</p>
                <p>Stock: {product.stock}</p>
            </div>

            <div className="col">
                <Contador
                stock={10}
                initial={1}
                onAdd={onAdd} />
            </div>

{/* <div>
    <Intercambiabilidad/>
</div> */}

        </div>
    )
}

export default ItemDetail