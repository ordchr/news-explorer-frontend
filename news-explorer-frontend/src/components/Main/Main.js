import React from "react";
import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import NewsCardList from "../NewsCardList/NewsCardList";
import LoginFormPopup from "../LoginFormPopup/LoginFormPopup";

function Main() {
  const [isLoginFormPopupOpen, setLoginFormPopupOpen] = React.useState(false);
  const [iconMenuIsOpen, setIconMenuIsOpen] = React.useState(false);

  const getLocalStorageNewsCards = () => {
    const lsNewsCards = localStorage.getItem("newsCards");
    return lsNewsCards ? JSON.parse(lsNewsCards) : [];
  };

  const [newsCards, setNewsCards] = React.useState(getLocalStorageNewsCards());
  const [isSearchAreCompleted, setIsSearchAreCompleted] = React.useState();
  const [isSearchIsRunning, setIsSearchIsRunning] = React.useState();

  function closeAllPopups() {
    setLoginFormPopupOpen(false);
    setIconMenuIsOpen(false);
  }

  const onSearchStarted = () => {
    setIsSearchIsRunning(true);
    setIsSearchAreCompleted(false);
  };

  const onSearchCompleted = (newsCards) => {
    setIsSearchIsRunning(false);
    setIsSearchAreCompleted(true);
    setNewsCards(newsCards);
    localStorage.setItem("newsCards", JSON.stringify(newsCards));
  };

  //   {
  //     title: "Определен новый облик российской ракеты для полетов на Луну - РИА НОВОСТИ",
  //     urlToImage: "https://cdn23.img.ria.ru/images/sharing/article/1599529588.jpg?15215487751614643679",
  //     publishedAt: "2021-03-02T00:08:27Z",
  //     url: "https://ria.ru/20210302/raketa-1599529588.html",
  //     description:
  //       "Определен новый облик российской ракеты-носителя сверхтяжелого класса, которая может использоваться для полетов на Луну, рассказал РИА Новости источник в... РИА Новости, 02.03.2021",
  //     sourceName: "Ria.ru",
  //     keyword: "Природа",
  //     actionName: "Убрать из сохраненных",
  //   },

  return (
    <>
      <SearchForm
        isIconMenuOpen={iconMenuIsOpen}
        setIconMenuIsOpen={setIconMenuIsOpen}
        onHeaderIconMenuClose={closeAllPopups}
        onSearchCompleted={onSearchCompleted}
        onSearchStarted={onSearchStarted}
      />
      <Preloader isSearchInProgress={isSearchIsRunning} isNotFound={isSearchAreCompleted && newsCards.length === 0} />
      {newsCards.length > 0 && (
        <>
          <div className="main-search-results">
            <h4 className="main-search-results__title">Результаты поиска</h4>
            <div className="main-search-results__cards">
              <NewsCardList newsCards={newsCards} />
            </div>
          </div>
        </>
      )}
      <About />
      <Footer />

      <LoginFormPopup isOpen={isLoginFormPopupOpen} onClose={closeAllPopups} />
    </>
  );
}

export default Main;
