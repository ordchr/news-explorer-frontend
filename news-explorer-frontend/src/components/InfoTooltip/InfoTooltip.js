import React from "react";
import "./InfoTooltip.css";
import { Link } from "react-router-dom";

function InfoTooltip({ isOpen, onCloseHangle, onLoginLinkClick }) {
  return (
    <div className={`info-tooltip ${isOpen ? "info-tooltip_opened" : "info-tooltip_closed"}`}>
      <div className="info-tooltip__container">
        <h4 className="info-tooltip__message">
          Пользователь успешно зарегистрирован!
        </h4>
        <Link className="info-tooltip__link" to="/" onClick={onLoginLinkClick}>
          Войти
        </Link>
        <button type="button" className="info-tooltip__button-close" onClick={onCloseHangle} />
      </div>
    </div>
  );
}

export default InfoTooltip;
