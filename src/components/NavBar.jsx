import React, { useEffect } from 'react';
import Logo from '../styles/assets/images/logo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
  let pathname = window.location.pathname;
  useEffect(() => {
    // eslint-disable-next-line
    pathname = window.location.pathname;
  }, [window.location.pathname]);
  return (
    <>
      <header className="NavBar">
        <nav>
          <img src={Logo} alt="logo-Kasa" />
          <ul>
            <li>
              <Link
                to={'/home'}
                className={`${pathname.match('/home') ? 'active-nav' : ''}`}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                to={'/a_propos'}
                className={`${
                  pathname.match('/a_propos') ? 'active-nav' : ''
                }`}
              >
                A Propos
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
