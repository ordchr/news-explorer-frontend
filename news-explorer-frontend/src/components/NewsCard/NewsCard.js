import React from "react";
import "./NewsCard.css";
import Bookmark from "../Bookmark/Bookmark";

function NewsCard({ newsCard }) {
  // actionHandle,
  const { url, title, urlToImage, description, publishedAt, sourceName, actionName, keyword } = newsCard;

  function label_keyword({ keyword }) {
    return <h6 className="news-card__keyword">{keyword}</h6>;
  }

  function button_action({ actionName }) {
    return (
      <div className="news-card__action">
        <h6 className="news-card__action-name">{actionName}</h6>
      </div>
    );
  }

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="news-card" onClick={() => openInNewTab(url)}>
      <div
        style={{ backgroundImage: `url(${urlToImage})` }}
        className="news-card__image"
      ></div>
      {keyword && label_keyword({ keyword })}
      <div className="news-card__top-panel">
        {actionName && button_action({ actionName })}
        <div className="news-card__bookmark">
          <Bookmark type={"normal"} />
        </div>
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
