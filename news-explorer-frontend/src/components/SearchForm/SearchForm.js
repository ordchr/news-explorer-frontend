import React from "react";
import "./SearchForm.css";
import Header from "../Header/Header";
import newsApi from "../../utils/NewsApi";

function SearchForm({
  onHeaderIconMenuClose,
  isIconMenuOpen,
  setIconMenuIsOpen,
  onSearchCompleted,
  onSearchStarted,
}) {
  const [newsSubject, setNewsSubject] = React.useState("Природа");

  function handleNewsSubject(e) {
    setNewsSubject(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchStarted();
    newsApi.getNewsByQuery(newsSubject).then((res) => {
      const foundNews = getArticlesFromApiResponse(res.articles);
      onSearchCompleted(foundNews);
    });
  };

  const getArticlesFromApiResponse = (articles) => {
    const keysToExclude = ["source", "content"];
    return articles.map((item) => {
      return {
        keyword: newsSubject,
        sourceName: item.source.name,
        ...Object.keys(item)
          .filter((key) => !keysToExclude.includes(key))
          .reduce((obj, key) => {
            obj[key] = item[key];
            return obj;
          }, {}),
      };
    });
  };

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
        <form action="/" className="search-form-input" onSubmit={handleSubmit}>
          <div className="search-form-input__search-text-wrapper">
            <input
              className="search-form-input__search-text"
              placeholder="Введите тему новости"
              value={newsSubject}
              onChange={handleNewsSubject}
              required
            />
          </div>
          <button className="search-form-input__to-go" type="submit">
            Искать
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchForm;
