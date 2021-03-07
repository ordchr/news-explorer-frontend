import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header({ isLoggedIn, isMainPage }) {

  const headerNavLinkCSS = `header__nav-link ${
    isMainPage
      ? "header__nav-link_main-page"
      : "header__nav-link_saved-news-page"
  }`;

  return (
    <header
      className={`header 
      ${isMainPage ? "header_main-page" : "header_saved-news-page"}
      `}
    >
      <h2 className="header__title">NewsExplorer</h2>
      <div className="header__nav">
        <NavLink
          exact
          to="/"
          className={headerNavLinkCSS}
          activeClassName="header__nav-link-active"
        >
          Главная
        </NavLink>
        {isLoggedIn ? (
          <>
            <NavLink
              exact
              to="/saved-news"
              className={headerNavLinkCSS}
              activeClassName="header__nav-link-active"
            >
              Сохраненные статьи
            </NavLink>
            <NavLink
              exact
              to="/authorize"
              className="header__nav-link"
              activeClassName="header__nav-link-active"
            >
              <button className="header__nav-link-logout">Грета</button>
            </NavLink>
          </>
        ) : (
          <NavLink
            exact
            to="/authorize"
            className={headerNavLinkCSS}
            activeClassName="header__nav-link-active"
          >
            <button className="header__nav-link-button-log-in">
              Авторизоваться
            </button>
          </NavLink>
        )}
      </div>
    </header>
  );
}

export default Header;
