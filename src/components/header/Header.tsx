import './Header.sass';
import Navbar from '../Navbar/Navbar';
import logoImg from '../../assets/logo.svg';

const Header = () => {
  return (
    <header className='header'>
      <div className="header__container">
          <img src={logoImg} alt="logo" className="header__logo" />
          <Navbar />
          <button className="header__button">Button</button>
      </div>
    </header>
  )
}

export default Header;