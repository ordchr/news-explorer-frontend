import React from 'react';
import "./NewsCard.css";

function NewsCard({newsCard}) {

  const {url, title, urlToImage, description, publishedAt, source_name} = newsCard;

  return (
      <div className="news-card">
        <img src={urlToImage} className="news-card__image" alt="news card image"/>
        <p className="news-card__publishedAt">{publishedAt}</p>
        <h4 className="news-card__title">{title}</h4>
        <p className="news-card__description">{description}</p>
        <p className="news-card__source-name">{source_name}</p>
      </div>
  );
}

export default NewsCard;
