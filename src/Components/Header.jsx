import React from 'react';
import './Header.css';
import Logo from '../Components/images/fiverr-logo.png';

function Header() {
  return (
    <div id="header">
      <img id="logo" src={Logo} alt="logo"></img>
    </div>
  );
}

export default Header;
