import React from "react";
import "./NewsCard.css";
import Bookmark from "../Bookmark/Bookmark";

function NewsCard({ newsCard }) {
  const {
    url,
    title,
    urlToImage,
    description,
    publishedAt,
    sourceName,
    actionName,
    actionHandle,
    keyword,
  } = newsCard;

  function label_keyword({ keyword }) {
    return (
      <h6 className="news-card__keyword">
        {keyword} 
      </h6>
    );
  }

  function button_action({ actionName }) {
    return (
      <div className="news-card__action">
        <h6 className="news-card__action-name">
          {actionName}
        </h6>
      </div>
    );
  }

  return (
    <div className="news-card">
      <img
        src={urlToImage}
        className="news-card__image"
        alt="news card image"
      />
      { keyword && label_keyword({keyword}) }
      <div className="news-card__top-panel">
        { actionName && button_action({actionName}) }
        <div className="news-card__bookmark">
          <Bookmark type={"normal"} />
        </div>
      </div>
      <p className="news-card__publishedAt">{publishedAt}</p>
      <h4 className="news-card__title">{title}</h4>
      <p className="news-card__description">{description}</p>
      <p className="news-card__source-name">{sourceName}</p>
    </div>
  );
}

export default NewsCard;
