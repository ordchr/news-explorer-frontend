import React, { useEffect } from "react";
import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import NewsCardList from "../NewsCardList/NewsCardList";

function Main() {
  const [newsCards, setNewsCards] = React.useState([
    {
      title:
        "Определен новый облик российской ракеты для полетов на Луну - РИА НОВОСТИ",
      urlToImage:
        "https://cdn23.img.ria.ru/images/sharing/article/1599529588.jpg?15215487751614643679",
      publishedAt: "2021-03-02T00:08:27Z",
      url: "https://ria.ru/20210302/raketa-1599529588.html",
      description:
        "Определен новый облик российской ракеты-носителя сверхтяжелого класса, которая может использоваться для полетов на Луну, рассказал РИА Новости источник в... РИА Новости, 02.03.2021",
      source_name: "Ria.ru",
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
      source_name: "Ria.ru",
    },
  ]);

  return (
    <>
      <SearchForm />
      <Preloader isSearchInProgress={false} isNotFound={false} />
      <NewsCardList newsCards={newsCards} />
      <About />
      <Footer />
    </>
  );
}

export default Main;
