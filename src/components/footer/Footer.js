import React from 'react';
import vk from "../../image/icons/vk.svg";
import gitHub from "../../image/icons/gitHub.svg";

import "./footer.css"
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item">
                            <NavLink to={"https://vk.com/kyshynasura"} target={"_blank"}><img src={vk} alt="Link"/></NavLink>
                        </li>
                        <li className="social__item">
                            <NavLink to={"https://github.com/Enchu"} target={"_blank"}><img src={gitHub} alt="Link"/></NavLink>
                        </li>
                    </ul>
                    <div className="copyright">
                        <p>© 2023</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;