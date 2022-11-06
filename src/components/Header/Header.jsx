import logo from '../../assets/media/logo.png'
import Title from '../Title/Title'
import './Header.css'

const Header = () => {
    return (
        <div>
            <Title/>
            <div className='logo'>
                <img src={logo} alt="" />
            </div>
        </div >
    )
}

export default Header