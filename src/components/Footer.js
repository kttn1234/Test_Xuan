import React, { Component } from 'react';
import './Footer.scss';
import logo from './../assets/img/common/logo_footer.png';
import Dropdown from './Dropdown';

import icon_facebook_03 from "./../assets/img/common/icon_facebook_03.svg";
import icon_instagram_02 from "./../assets/img/common/icon_instagram_02.svg";
import icon_twitter_02 from "./../assets/img/common/icon_twitter_02.svg";
import icon_youtube_01 from "./../assets/img/common/icon_youtube_01.svg";

import icon_facebook_04 from "./../assets/img/common/icon_facebook_04.svg";
import icon_instagram_03 from "./../assets/img/common/icon_instagram_03.svg";
import icon_twitter_03 from "./../assets/img/common/icon_twitter_03.svg";
import icon_youtube_02 from "./../assets/img/common/icon_youtube_02.svg";

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="inner">
                    <div className="footer__content">
                        <div className="footer__information">
                            <a className="trans footer__logo-image" href="./"><img className="md" src={logo} alt="GAMELOFT"/></a>
                            <div className="footer__follow">
                                <div className="footer__title">Follow Us</div>
                                <ul className="footer__social">
                                    <li>
                                        <a className="trans footer__icon-facebook" href="./">
                                            <img src={icon_facebook_03} alt="facebook" className="hidden-sp"/>
                                            <img src={icon_facebook_04} alt="facebook" className="hidden-pc"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="trans footer__icon-instagram" href="./">
                                            <img src={icon_instagram_02} alt="instagram" className="hidden-sp"/>
                                            <img src={icon_instagram_03} alt="instagram" className="hidden-pc"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="trans footer__icon-twitter" href="./">
                                            <img src={icon_twitter_02} alt="twitter" className="hidden-sp"/>
                                            <img src={icon_twitter_03} alt="twitter" className="hidden-pc"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="trans footer__icon-twitter" href="./">
                                            <img src={icon_youtube_01} alt="youtube" className="hidden-sp"/>
                                            <img src={icon_youtube_02} alt="youtube" className="hidden-pc"/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer__language hidden-sp">
                                <Dropdown
                                    items={[
                                    { value: "English", id: 1 },
                                    { value: "Canada", id: 2 },
                                    { value: "Mexico", id: 3 },
                                    { value: "Japan", id: 4 }
                                    ]}
                                />
                            </div>
                        </div>
                        <div className="footer__links">
                            <ul className="footer__links-list">
                                <li><h4 className="footer__title hidden-sp">VISIT</h4></li>
                                <li><a href="./" className="trans">Gameloft Games</a></li>
                                <li><a href="./" className="trans">Gameloft Careers</a></li>
                                <li><a href="./" className="trans">Gameloft News</a></li>
                                <li><a href="./" className="trans">Gameloft Forum</a></li>
                                <li><a href="./" className="trans">Gameloft Corporate</a></li>
                                <li><a href="./" className="trans">Gameloft Advertising</a></li>
                                <li><a href="./" className="trans">Gameloft Support</a></li>
                            </ul>
                            <ul className="footer__links-list">
                                <li><h4 className="footer__title hidden-sp">LEGAL</h4></li>
                                <li><a href="./" className="trans">Terms of Use</a></li>
                                <li><a href="./" className="trans">Privacy Policy</a></li>
                                <li><a href="./" className="trans">Cookies Policy</a></li>
                                <li><a href="./" className="trans">EULA</a></li>
                                <li><a href="./" className="trans">Legal Notices</a></li>
                                <li><a href="./" className="trans">Event Rules</a></li>
                                <li className="hidden-pc"><a href="./" className="trans">Contest Rules</a></li>
                                <li><a href="./" className="trans">Business Contacts</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <small className="footer__copyrights">©2020 Gameloft. All rights reserved. Gameloft and the Gameloft<br className="hidden-pc"/>logo are trademarks of Gameloft in the U.S. and/or other countries.<br/>All other trademarks are the property of their respective owners.</small>
            </footer>
        );
    }
}

export default Footer;
