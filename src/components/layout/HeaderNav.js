import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo.png';
import { Link } from 'react-router-dom'

export const HeaderNav = () => {
  return (
    <header className='header'>
        
        <Link to="/inicio"> <img src={logo} alt="logo" width="290" height="110" /> </Link>

        <nav>
            <ul>
                <li>
                    <NavLink to="/inicio" className={({isActive}) => isActive ? "active" : ""}>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/quienessomos" className={({isActive}) => isActive ? "active" : ""}>Quienes Somos</NavLink>
                </li>
                <li>
                    <NavLink to="/servicios" className={({isActive}) => isActive ? "active" : ""}>Servicios</NavLink>
                </li>
                <li>
                    <NavLink to="/clientes" className={({isActive}) => isActive ? "active" : ""}>Clientes</NavLink>
                </li>
                <li>
                    <NavLink to="/contacto" className={({isActive}) => isActive ? "active" : ""}>Contacto</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

