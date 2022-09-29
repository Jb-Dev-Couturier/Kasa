import React from 'react';
import Logo from '../styles/assets/images/logo.png';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <header className="NavBar">
      <nav>
        <img src={Logo} alt="logo-Kasa" />
        <ul>
          <li>
            <NavLink
              to={'/home'}
              style={({ isActive }) => ({
                textDecoration: isActive ? 'underline' : 'blue',
                color: isActive ? '#FF6060' : '#FF6060',
              })}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/a_propos'}
              style={({ isActive }) => ({
                textDecoration: isActive ? 'underline' : 'blue',
              })}
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
