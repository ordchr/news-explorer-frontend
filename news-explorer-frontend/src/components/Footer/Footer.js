import React from "react";
import "./Footer.css";
import IconGithub from "../../images/icon_github.svg";
import IconFacebook from "../../images/icon_facebook.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer__copyright">© 2020 Supersite, Powered by News API</h3>
      <div className="footer__navi">
        <Link to="/" className="footer__navi-link">
          Главная
        </Link>
        <a href="https://praktikum.yandex.ru" target="_blank" rel="noreferrer" className="footer__navi-link">
          Яндекс.Практикум
        </a>
      </div>
      <div className="footer__navi-social">
        <a href="https://github.com" target="_blank" rel="noreferrer" className="footer__navi-social-link">
          <img src={IconGithub} alt="github" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="footer__navi-social-link">
          <img src={IconFacebook} alt="facebook" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
