import React, { useRef } from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";

function NewsCardList({ newsCards }) {
  const [showedRows, setShowedRows] = React.useState(1);
  const [cardsInRow, setCardsInRow] = React.useState(3);
  const newsCardsList = useRef();

  const handleClickShowMoreButton = () => {
    setCardsInRow(3); // TODO here need set current grid-template-columns columns count
    setShowedRows(showedRows + 1);
  };

  return (
    <section className="news-card-list">
      <div className="news-card-list__cards" ref={newsCardsList}>
        {newsCards.slice(0, showedRows * cardsInRow).map((newsCard, index) => (
          <NewsCard newsCard={newsCard} key={index} />
        ))}
      </div>
      <div className="news-card-list__show-more-button">
        {newsCards.length > showedRows * cardsInRow && (
          <ShowMoreButton onClickShowMoreButton={handleClickShowMoreButton} />
        )}
      </div>
    </section>
  );
}

export default NewsCardList;
