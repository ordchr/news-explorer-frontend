import React from "react";
import { NavLink } from "react-router-dom";
import "./SearchForm.css";

function SearchForm() {
  return (
    <div className="search-field">
      <input className="search-field__input" placeholder="Еще не ввел текст" />
      <button className="search-field__to-go">Искать</button>
    </div>
  );
}

export default SearchForm;
