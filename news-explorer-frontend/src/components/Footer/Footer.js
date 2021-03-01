import React from 'react';
import "./Footer.css";
import IconGithub from "../../images/icon_github.svg";
import IconFacebook from "../../images/icon_facebook.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <h3 className="footer__copyright">
        © 2020 Supersite, Powered by News API
      </h3>
      <div className="footer__navi">
        <Link to="/" className="footer__navi-link">
          Главная
        </Link>
        <a href="https://praktikum.yandex.ru" className="footer__navi-link">
          Яндекс.Практикум
        </a>
        <div className="footer__navi-social">
          <a href="https://github.com" className="footer__navi-link">
            <img src={IconGithub} alt="github" />
          </a>
          <a href="https://facebook.com" className="footer__navi-link">
            <img src={IconFacebook} alt="facebook" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
