import React from 'react';
import { NavLink } from 'react-router-dom';
import './UI.css';

function UI() {
  return (
    <header className="header header_unauthorized">
      <h2 className="header__title">NewsExplorer</h2>
      <div className="header__nav">
        <NavLink exact to="/ui" 
          className="header__nav-link" 
          activeClassName="header__nav-link_active"
        >
          <h2 className="header__nav-main">Главная</h2>
        </NavLink>
        <NavLink exact to="/authorize" 
          className="header__nav-link" 
          activeClassName="header__nav-link_active"
        >
          <button className="header__nav-link-authorize">Авторизоваться</button>
        </NavLink>
      </div>
    </header>
  );
}

export default UI;
