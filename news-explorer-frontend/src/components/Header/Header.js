import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import iconMenuWhite from "../../images/icon_menu.svg";
import iconMenuBlack from "../../images/icon_menu_black.svg";
import iconMenuCloseWhite from "../../images/icon_menu_close.svg";
import iconMenuCloseBlack from "../../images/icon_menu_close_black.svg";

function Header({ isLoggedIn, isMainPage, isIconMenuOpen, setIconMenuIsOpen, onHeaderIconMenuClose }) {
  const headerNavLinkCSS = `header__nav-link ${
    isMainPage ? "header__nav-link_main-page" : "header__nav-link_saved-news-page"
  }`;

  const headerIconMenuNavLinkCSS = `header-icon-menu__link ${
    isMainPage ? "header-icon-menu__link_main-page" : "header-icon-menu__link_saved-news"
  }`;

  const iconMenu = isMainPage ? iconMenuWhite : iconMenuBlack;
  const iconMenuClose = isMainPage ? iconMenuCloseWhite : iconMenuCloseBlack;

  return (
    <header
      className={`header 
      ${isMainPage ? "header_main-page" : "header_saved-news-page"}
      header_icon_menu`}
    >
      <h2 className="header__title">NewsExplorer</h2>
      <div className="header__nav">
        <NavLink exact to="/" className={headerNavLinkCSS} activeClassName="header__nav-link-active">
          Главная
        </NavLink>
        {isLoggedIn ? (
          <>
            <NavLink exact to="/saved-news" className={headerNavLinkCSS} activeClassName="header__nav-link-active">
              Сохраненные статьи
            </NavLink>
            <NavLink exact to="/" className="header__nav-link" activeClassName="header__nav-link-active">
              <button
                className={`header__nav-link-logout header__nav-link-logout_basic-menu ${
                  isMainPage ? "header__nav-link-logout_main-page" : "header__nav-link-logout_saved-news"
                }`}
              >
                Грета
              </button>
            </NavLink>
          </>
        ) : (
          <NavLink exact to="/" className={headerNavLinkCSS} activeClassName="header__nav-link-active">
            <button className="header__button-log-in header__button-log-in_basic-menu">Авторизоваться</button>
          </NavLink>
        )}
      </div>
      <img
        className="header-icon-menu__button"
        src={isIconMenuOpen ? iconMenuClose : iconMenu}
        alt="icon menu"
        onClick={setIconMenuIsOpen}
      />

      <div
        className={`header-icon-menu ${isIconMenuOpen ? "header-icon-menu_opened" : "header-icon-menu_closed"}
        `}
        onClick={onHeaderIconMenuClose}
      >
        <div
          className={`header-icon-menu__container ${
            isMainPage ? "header-icon-menu__container_main-page" : "header-icon-menu__container_saved-news"
          }`}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div
            className={`header-icon-menu__main-line ${
              isMainPage ? "header-icon-menu__main-line_main-page" : "header-icon-menu__main-line_saved-news"
            }`}
          >
            <h2 className="header__title">NewsExplorer</h2>
            <img
              className="header-icon-menu__button"
              src={isIconMenuOpen ? iconMenuClose : iconMenu}
              alt="icon menu"
              onClick={onHeaderIconMenuClose}
            />
          </div>
          <NavLink exact to="/" className={headerIconMenuNavLinkCSS}>
            Главная
          </NavLink>

          {isLoggedIn ? (
            <>
              <NavLink exact to="/saved-news" className={headerIconMenuNavLinkCSS}>
                Сохраненные статьи
              </NavLink>
              <NavLink exact to="/logout" className="header__nav-link header__nav-link-logout_icon-menu">
                <button
                  className={`header__nav-link-logout ${
                    isMainPage ? "header__nav-link-logout_main-page" : "header__nav-link-logout_saved-news"
                  } `}
                >
                  Грета
                </button>
              </NavLink>
            </>
          ) : (
            <NavLink exact to="/" className={headerIconMenuNavLinkCSS}>
              <button className="header__button-log-in header__button-log-in_icon-menu">Авторизоваться</button>
            </NavLink>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
