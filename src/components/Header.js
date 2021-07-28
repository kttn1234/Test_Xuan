import React, { Component } from 'react';
import './Header.scss';
import logo from './../assets/img/common/logo_header.png';
class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="header__content">
                    <h1 className="header__logo"><a className="trans header__logo-image" href="./"><img className="md" src={logo} alt="GAMELOFT"/></a></h1>
                    <div className="sm header__toggle js-button-menu"><span></span><span></span><span></span></div>
                </div>
                <nav className="header__navigation js-navigation">
                    <ul className="header__menu">
                        <li><a className="trans" href="./">Home</a></li>
                        <li><a className="trans" href="./about/">About</a></li>
                        <li><a className="trans" href="./news/"></a></li>
                        <li><a className="trans" href="./game/">Game</a></li>
                        <li><a className="trans" href="./contact/">Contact</a></li>
                    </ul>
                </nav>
                <ul className="header__social">
                    <li><a className="header__icon-share" href="./"></a></li>
                    <li><a className="header__icon-mail" href="./"></a></li>
                    <li><a className="header__icon-customer" href="./"></a></li>
                </ul>
            </header>
        );
    }
}

export default Header;
