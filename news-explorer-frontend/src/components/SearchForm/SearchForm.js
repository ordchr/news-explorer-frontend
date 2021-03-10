import React from "react";
import "./SearchForm.css";
import Header from "../Header/Header";

function SearchForm({ onHeaderIconMenuClose, isIconMenuOpen, setIconMenuIsOpen }) {
  return (
    <div className="search-form">
      <Header
        isLoggedIn={false}
        isMainPage={true}
        isIconMenuOpen={isIconMenuOpen}
        setIconMenuIsOpen={setIconMenuIsOpen}
        onHeaderIconMenuClose={onHeaderIconMenuClose}
      />

      <div className="search-form-head">
        <h1 className="search-form-head__title">Что творится в мире?</h1>
        <h4 className="search-form-head__caption">
          Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.
        </h4>
        <form action="/" className="search-form-input">
          <div className="search-form-input__search-text-wrapper">
            <input className="search-form-input__search-text" placeholder="Введите тему новости" required />
          </div>
          <button className="search-form-input__to-go">Искать</button>
        </form>
      </div>
    </div>
  );
}

export default SearchForm;
