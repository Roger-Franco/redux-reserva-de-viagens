import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import logo from  '../../assets/aviao.jpeg'
import './style.css'

const Header = () => {
  const reserveSize = useSelector(state => state.reserve.length);
  return (
    <header className="container">
      <Link to='/'>
        <img className="logo" src={logo} alt='imagem'/>
        </Link>
        <Link className="reserva" to="/reservas">
        <div>
          <strong>MInhas reservas</strong>
          <span>{reserveSize} reservas</span>
        </div>
        </Link>
    </header>
  );
};

export default Header;