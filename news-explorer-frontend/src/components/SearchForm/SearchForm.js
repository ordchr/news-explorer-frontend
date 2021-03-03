import React from "react";
import "./SearchForm.css";
import Header from "../Header/Header";

function SearchForm() {
  return (
    <div className="search-form">
      <Header isAuthorized={false} />

      <div className="search-form-head">
        <h1 className="search-form-head__title">Что творится в мире?</h1>
        <h4 className="search-form-head__caption">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</h4>
        <div className="search-form-input">
          <input className="search-form-input__search-text" placeholder="Введите тему новости" />
          <button className="search-form-input__to-go">Искать</button>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
