import React, { useEffect } from "react";
import "./SavedNews.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import NewsCardList from "../NewsCardList/NewsCardList";
import mainApi from "../../utils/MainApi";

function SavedNews() {
  // const [newsCards, setNewsCards] = React.useState();

  const [savedNewsCards, setSavedNewsCards] = React.useState([]);
  const [countSavedNewsCards, setCountSavedNewsCards] = React.useState(0);
  const [listKeywords, setListKeywords] = React.useState([]);
  const [bookmarkedNewsCards, setBookmarkedNewsCards] = React.useState({});

  const transferArticlesFromMainApi = (articles) => {
    console.log(articles);
    const list = articles.map((item) => {
      return {
        "url": item.link,
        "title": item.title,
        "urlToImage": item.image,
        "description": item.text,
        "publishedAt": item.date,
        "sourceName": item.source,
        "keyword": item.keyword,
        "_id": item._id,
      };
    });

    console.log(list);
    return list;
  };

  const getKeywordsFromArticles = (articles) => {
    const countKeywords = {};
    for (const article of articles) {
      if (article.keyword in countKeywords) {
        countKeywords[article.keyword]++;
      } else {
        countKeywords[article.keyword] = 1;
      }
    }
    console.log(countKeywords);
    let keywords = Object.keys(countKeywords);
    keywords.sort((a, b) => {
      return countKeywords[b] - countKeywords[a];
    });
    console.log(keywords);
    return keywords;
  };

  useEffect(() => {
    mainApi
      .getArticles()
      .then((articles) => {
        setCountSavedNewsCards(articles.length);
        setListKeywords(getKeywordsFromArticles(articles));
        setSavedNewsCards(transferArticlesFromMainApi(articles));
        console.log(articles);
        const hashArticles = articles.reduce((obj, item) => {
          return {
            ...obj,
            [item["link"]]: item._id,
          };
        }, {});
        console.log(hashArticles);
        setBookmarkedNewsCards(hashArticles);
        console.log(bookmarkedNewsCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [bookmarkedNewsCards]);

  return (
    <>
      <Header isLoggedIn={true} />
      <div className="saved-news">
        <h4 className="saved-news__caption">Сохранённые статьи</h4>
        <h1 className="saved-news__title">Грета, у вас {countSavedNewsCards} сохранённых статей</h1>
        <h3 className="saved-news__description">
          По ключевым словам:{" "}
          <span className="saved-news__keywords">
            {listKeywords.length > 3
              ? listKeywords.slice(0, 2).join(", ") + ` и ${listKeywords.length - 2}-м другим`
              : listKeywords.join(", ")}
          </span>
        </h3>
      </div>
      <NewsCardList
        newsCards={savedNewsCards}
        bookmarkedNewsCards={bookmarkedNewsCards}
        setBookmarkedNewsCards={setBookmarkedNewsCards}
      />

      <Footer />
    </>
  );
}

export default SavedNews;
