import carrito from '../../../public/assets/carrito.png'
import './CartWidget.css'
import { Link } from 'react-router-dom'

const CartWidget = () => {

    return (
    <Link to='/cart'><img className='cart' src={carrito} alt="" /></Link>
    )
}

export default CartWidget

