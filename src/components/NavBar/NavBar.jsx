import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <div className='linkNav container-fluid'>

            <Link to ='/categoria/marvel' className='link' href="/"> Marvel </Link>
            <Link to ='/categoria/dc' className='link' href="/"> DC </Link>
            <Link to ='/categoria/series' className='link' href="/"> Series </Link>
            <Link to ='/categoria/peliculas' className='link' href="/"> Peliculas </Link>
            <Link to ='/cart'>
            <CartWidget/>
            </Link>
        </div>

    )
}

export default Navbar
