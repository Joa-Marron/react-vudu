import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'


function Navbar() {
    return (
        <div className='linkNav container'>

            <a className='link' href="/"> Nosotros </a>
            <a className='link' href="/"> Productos </a>
            <a className='link' href="/"> Contactos </a>
            <CartWidget/>

        </div>

    )
}

export default Navbar
