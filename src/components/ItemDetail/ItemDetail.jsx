import Contador from "../Contador/Contador";
import Intercambiabilidad from "../Intercambiabilidad/Intercambiabilidad";


const ItemDetail = ({ product }) => {

    const onAdd = (cantidad) => {
        console.log(cantidad);
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
            { isCounter ? 
                    <Contador 
                        stock={10} 
                        initial={1} 
                        onAdd={onAdd} 
                    
                    />
                :  
                    <div className="container mt-5">
                        <Link to='/cart' className="btn btn-success">Terminar mi compra</Link>
                        <Link to='/' className="btn btn-success">Seguir Comprando </Link>
                    </div>
                    
            }
            
        </div>
        <div>
            <Intercambiabilidad/>
        </div>

        </div>
    )
}

export default ItemDetail