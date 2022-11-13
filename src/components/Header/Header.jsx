import logo from '/assets/logo.png'
import './Header.css'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <div>
            <div className='positionLogo'>
            <Link to='/'><img src={logo} alt="" className='logo'/></Link>
            </div>
        </div >
    )
}

export default Header

