import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import iconMenuWhite from "../../images/icon_menu.svg";
import iconMenuBlack from "../../images/icon_menu_black.svg";
import iconMenuCloseWhite from "../../images/icon_menu_close.svg";
import iconMenuCloseBlack from "../../images/icon_menu_close_black.svg";

function Header({ isLoggedIn, isMainPage }) {
  const headerNavLinkCSS = `header__nav-link ${
    isMainPage ? "header__nav-link_main-page" : "header__nav-link_saved-news-page"
  }`;

  const headerIconMenuNavLinkCSS = `header-icon-menu__link ${
    isMainPage ? "header-icon-menu__link_main-page" : "header-icon-menu__link_saved-news"
  }`;

  const [iconMenuIsOpen, setIconMenuIsOpen] = React.useState(false);

  function handleIconMenuButtonClick() {
    setIconMenuIsOpen(!iconMenuIsOpen);
  }

  const logoutButtonCSS = ``;

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
            <NavLink exact to="/authorize" className="header__nav-link" activeClassName="header__nav-link-active">
              <button className="header__nav-link-logout header__nav-link-logout_basic-menu">Грета</button>
            </NavLink>
          </>
        ) : (
          <NavLink exact to="/authorize" className={headerNavLinkCSS} activeClassName="header__nav-link-active">
            <button className="header__button-log-in header__button-log-in_basic-menu">Авторизоваться</button>
          </NavLink>
        )}
      </div>
      <img
        className="header-icon-menu__button"
        src={iconMenuIsOpen ? iconMenuClose : iconMenu}
        alt="icon menu"
        onClick={handleIconMenuButtonClick}
      />

      <div
        className={`header-icon-menu ${iconMenuIsOpen ? "header-icon-menu_opened" : "header-icon-menu_closed"}
        `}
      >
        <div
          className={`header-icon-menu__container ${
            isMainPage ? "header-icon-menu__container_main-page" : "header-icon-menu__container_saved-news"
          }`}
        >
          <div
            className={`header-icon-menu__main-line ${
              isMainPage ? "header-icon-menu__main-line_main-page" : "header-icon-menu__main-line_saved-news"
            }`}
          >
            <h2 className="header__title">NewsExplorer</h2>
            <img
              className="header-icon-menu__button"
              src={iconMenuIsOpen ? iconMenuClose : iconMenu}
              alt="icon menu"
              onClick={handleIconMenuButtonClick}
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
            <NavLink exact to="/authorize" className={headerIconMenuNavLinkCSS}>
              <button className="header__button-log-in header__button-log-in_icon-menu">Авторизоваться</button>
            </NavLink>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
