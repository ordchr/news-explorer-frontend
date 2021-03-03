import React from 'react';
import "./NewsCardList.css";
import NewsCard from '../NewsCard/NewsCard';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';

function NewsCardList({newsCards}) {

  return (
      <section className="news-card-list">
        <h4 className="news-card-list__title">Результаты поиска</h4>
        <div className="news-card-list__cards">
        {
          newsCards.map(
            (newsCard, index) => <NewsCard 
              newsCard = {newsCard}
              key={index}
            />
          ) 
        }
        </div>
        <div className="news-card-list__show-more-button">
          <ShowMoreButton />
        </div>
      </section>
  );
}

export default NewsCardList;
