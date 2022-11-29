import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'



function Navbar() {
    return (
        <div className='linkNav container-fluid'>

            <Link to ='/categoria/Marvel' className='link' href="/"> Marvel </Link>
            <Link to ='/categoria/DC' className='link' href="/"> DC </Link>
            <Link to ='/categoria/series' className='link' href="/"> Series </Link>
            <Link to ='/categoria/peliculas' className='link' href="/"> Peliculas </Link>
            <CartWidget/>
        </div>

    )
}

export default Navbar
