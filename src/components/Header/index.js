import React from 'react';
import {Link} from 'react-router-dom'
import logo from  '../../assets/aviao.jpeg'
import './style.css'

const Header = () => {
  return (
    <header className="container">
      <Link to='/'>
        <img className="logo" src={logo} alt='imagem'/>
        </Link>
        <Link className="reserva" to="/reservas">
        <div>
          <strong>MInhas reservas</strong>
          <span>3 reservas</span>
        </div>
        </Link>
    </header>
  );
};

export default Header;