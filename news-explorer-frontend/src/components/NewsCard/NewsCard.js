import React from "react";
import "./NewsCard.css";
import Bookmark from "../Bookmark/Bookmark";
import DeleteButton from "../DeleteButton/DeleteButton";

function NewsCard({ newsCard, isLoggedIn, isMainPage }) {
  const { url, title, urlToImage, description, publishedAt, sourceName, keyword } = newsCard;

  function label_keyword({ keyword }) {
    return <h6 className="news-card__keyword">{keyword}</h6>;
  }

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="news-card" onClick={() => openInNewTab(url)}>
      <div style={{ backgroundImage: `url(${urlToImage})` }} className="news-card__image"></div>
      {keyword && label_keyword({ keyword })}
      <div className="news-card__top-panel">
        `
        {isMainPage ? (
          <div className="news-card__action">
            <Bookmark type={"normal"} isLoggedIn={isLoggedIn} />
          </div>
        ) : (
          <div className="news-card__action">
            <DeleteButton />
          </div>
        )}
        `
      </div>
      <p className="news-card__publishedAt">{publishedAt}</p>
      <div className="news-card__content">
        <div className="news-card__title">{title}</div>
        <p className="news-card__description">{description}</p>
      </div>
      <p className="news-card__source-name">{sourceName}</p>
    </div>
  );
}

export default NewsCard;
