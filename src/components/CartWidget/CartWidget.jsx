import './CartWidget.css'
import { Link } from 'react-router-dom'
import carrito from '../../../public/assets/icon/carrito.png'

const CartWidget = () => {

    return (
    <Link to='/cart'><img className='cart' src={carrito} alt="" /></Link>
    )
}

export default CartWidget

