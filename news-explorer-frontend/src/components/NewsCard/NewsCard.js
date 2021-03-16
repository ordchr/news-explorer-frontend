import React, { useEffect, useLayoutEffect, useState } from "react";
import "./NewsCard.css";
import Bookmark from "../Bookmark/Bookmark";
import DeleteButton from "../DeleteButton/DeleteButton";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import mainApi from "../../utils/MainApi";

function NewsCard({ newsCard, isLoggedIn, isMainPage, bookmarkedNewsCards, setBookmarkedNewsCards }) {
  const { url, title, urlToImage, description, publishedAt, sourceName, keyword } = newsCard;

  console.log();
  const currentUser = React.useContext(CurrentUserContext);
  const [bookmarkArticleId, setBookmarkArticleId] = useState(false);

  function label_keyword({ keyword }) {
    return <h6 className="news-card__keyword">{keyword}</h6>;
  }

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const getFormatDate = (dateStr) => {
    const date = new Date(dateStr);
    const locale = "ru-RU";
    const dayMonth = date.toLocaleString(locale, { month: "long", day: "numeric" });
    const year = date.toLocaleString(locale, { year: "numeric" });
    return dayMonth + ", " + year;
  };

  useLayoutEffect(() => {
    if (url in bookmarkedNewsCards) {
      console.log('bookmark');
      setBookmarkArticleId(bookmarkedNewsCards[url]);
    }
  }, [bookmarkedNewsCards, url]);

  const handleBookmarkClick = () => {
    if (!currentUser.loggedIn) {
      return;
    }
    if (bookmarkArticleId) {
      mainApi
        .deleteArticle(bookmarkArticleId)
        .then(_ => {
          setBookmarkArticleId();
          const newList = Object.assign({}, bookmarkedNewsCards);
          delete newList[url];
          setBookmarkedNewsCards(newList);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      const reqBody = {
        keyword: keyword,
        title: title,
        text: description,
        date: publishedAt,
        source: sourceName,
        link: url,
        image: urlToImage,
      };
      console.log(reqBody);
      mainApi
        .createArticle(reqBody)
        .then((newsCard) => {
          console.log(newsCard);
          setBookmarkArticleId(newsCard._id);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="news-card" onClick={() => openInNewTab(url)}>
      <div style={{ backgroundImage: `url(${urlToImage})` }} className="news-card__image"></div>
      {keyword && label_keyword({ keyword })}
      <div className="news-card__top-panel">
        `
        {isMainPage ? (
          <div className="news-card__action">
            <Bookmark isMarked={bookmarkArticleId} isLoggedIn={currentUser.loggedIn} onBookmarkClick={handleBookmarkClick} />
          </div>
        ) : (
          <div className="news-card__action">
            <DeleteButton />
          </div>
        )}
        `
      </div>
      <p className="news-card__publishedAt">{getFormatDate(publishedAt)}</p>
      <div className="news-card__content">
        <div className="news-card__title">{title}</div>
        <p className="news-card__description">{description}</p>
      </div>
      <p className="news-card__source-name">{sourceName}</p>
    </div>
  );
}

export default NewsCard;
