import React from 'react';
import "./SavedNews.css";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import NewsCardList from "../NewsCardList/NewsCardList";

function SavedNews() {
  // const [newsCards, setNewsCards] = React.useState();

  const newsCards = [
    {
      title:
        "Определен новый облик российской ракеты для полетов на Луну - РИА НОВОСТИ",
      urlToImage:
        "https://cdn23.img.ria.ru/images/sharing/article/1599529588.jpg?15215487751614643679",
      publishedAt: "2021-03-02T00:08:27Z",
      url: "https://ria.ru/20210302/raketa-1599529588.html",
      description:
        "Определен новый облик российской ракеты-носителя сверхтяжелого класса, которая может использоваться для полетов на Луну, рассказал РИА Новости источник в... РИА Новости, 02.03.2021",
      sourceName: "Ria.ru",
    },
    {
      title:
        "Определен новый облик российской ракеты для полетов на Луну - РИА НОВОСТИ",
      urlToImage:
        "https://cdn23.img.ria.ru/images/sharing/article/1599529588.jpg?15215487751614643679",
      publishedAt: "2021-03-02T00:08:27Z",
      url: "https://ria.ru/20210302/raketa-1599529588.html",
      description:
        "Определен новый облик российской ракеты-носителя сверхтяжелого класса, которая может использоваться для полетов на Луну, рассказал РИА Новости источник в... РИА Новости, 02.03.2021",
      sourceName: "Ria.ru",
      keyword: "Природа",
      actionName: "Убрать из сохраненных",
    },
  ];

  return (
    <>
      <Header isLoggedIn={true} />
      <div className="saved-news">
        <h4 className="saved-news__caption">Сохранённые статьи</h4>
        <h1 className="saved-news__title">Грета, у вас 5 сохранённых статей</h1>
        <h3 className="saved-news__description">По ключевым словам: <span className="saved-news__keywords">Природа, Тайга и 2-м другим</span></h3>
      </div>
      <NewsCardList newsCards={newsCards} />

      <Footer />
    </>
  );
}

export default SavedNews;
