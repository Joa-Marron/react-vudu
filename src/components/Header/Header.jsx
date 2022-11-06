import logo from '../../assets/media/logo.png'
import Title from '../Title/Title'
import './Header.css'

const Header = () => {
    return (
        <div>
            <Title title={'Vudu'} />
            <div className='logo container'>
                <img src={logo} alt="" />
            </div>
        </div >
    )
}

export default Header