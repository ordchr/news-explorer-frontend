import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header({ isLoggedIn }) {

  const headerClassName = `header ${isLoggedIn ? 'header_authorized' : 'header_unauthorized'}`;

  return (
    <header className={headerClassName}>
      <h2 className="header__title">NewsExplorer</h2>
      <div className="header__nav">
        <NavLink exact to="/ui"
          className="header__nav-link header__nav-link_not-logged-in"
          activeClassName="header__nav-link-active header__nav-link-active_not-logged-in"
        >
          Главная
        </NavLink>
        {
          isLoggedIn
            ?
              <NavLink exact to="/authorize"
                className="header__nav-link header__nav-link_not-logged-in"
                activeClassName="header__nav-link-active header__nav-link-active_not-logged-in"
              >
                <button className="header__nav-link-button-log-in">Авторизоваться</button>
              </NavLink>
            :
            <>
              <NavLink exact to="/saved_articles"
                className="header__nav-link header__nav-link_logged-in"
                activeClassName="header__nav-link-active header__nav-link-active_logged-in"
              >
                Сохраненные статьи
              </NavLink>
              <NavLink exact to="/authorize"
                className="header__nav-link"
                activeClassName="header__nav-link-active header__nav-link-active_logged-in"
              >
                <button className="header__nav-link-logout">Грета</button>
              </NavLink>
            </>
        }
      </div>
    </header>

    // <header className="header header_authorized">
    //   <h2 className="header__title">NewsExplorer</h2>
    //   <div className="header__nav">
    //     <NavLink exact to="/ui"
    //       className="header__nav-link header__nav-link_logged-in"
    //       activeClassName="header__nav-link-active header__nav-link-active_logged-in"
    //     >
    //       Главная
    //     </NavLink>
    //     <NavLink exact to="/saved_articles"
    //       className="header__nav-link header__nav-link_logged-in"
    //       activeClassName="header__nav-link-active header__nav-link-active_logged-in"
    //     >
    //       Сохраненные статьи
    //     </NavLink>
    //     <NavLink exact to="/authorize"
    //       className="header__nav-link"
    //       activeClassName="header__nav-link-active header__nav-link-active_logged-in"
    //     >
    //       <button className="header__nav-link-logout">Грета</button>
    //     </NavLink>
    //   </div>
    // </header>
  );
}

export default Header;
