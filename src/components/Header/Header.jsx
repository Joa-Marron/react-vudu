import logo from '/assets/logo.png'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <div className='positionLogo'>
            <Link to='/'><img className='logo' src={logo} alt="" /></Link>
            </div>
        </div >
    )
}

export default Header
