import logo from '/assets/logo.png'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <div className='positionlogo'>
            <Link to='/'><img src={logo} alt="" /></Link>
            </div>
        </div >
    )
}

export default Header
