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
