import React from 'react'
import carrito from '../../assets/media/carrito.png'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'


function Navbar() {
    return (
        <div className='linkNav'>

            <a href="/"> Nosotros </a>
            <a href="/"> Productos </a>
            <a href="/"> Contactos </a>
            <CartWidget/>

        </div>

    )
}

export default Navbar
