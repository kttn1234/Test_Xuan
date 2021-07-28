import React, { Component } from 'react';
import './Header.scss';
import logo from './../assets/img/common/logo_header.png';
class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__content">
          <h1 className="header__logo"><a className="trans header__logo-image" href="./"><img className="md" src={logo} alt="GAMELOFT" /></a></h1>
          <div className="header__toggle trans"><span></span><span></span><span></span></div>
        </div>
        <ul className="header__social">
          <li><a className="header__icon-share" href="./" target="_blank"></a></li>
          <li><a className="header__icon-mail" href="./" target="_blank"></a></li>
          <li><a className="header__icon-customer" href="./" target="_blank"></a></li>
        </ul>
      </header>
    );
  }
}

export default Header;
