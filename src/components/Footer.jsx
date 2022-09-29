import React from 'react';
import Logo from '../styles/assets/images/logoWhite.png';

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="boxFooter">
        <img src={Logo} alt="" />
        <p>
          <i className="fa-regular fa-copyright"></i>
          2020 Kasa. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
