import React from "react";
import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import NewsCardList from "../NewsCardList/NewsCardList";
import Login from "../Login/Login";
import Register from "../Register/Register";
import mainApi from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

function Main() {
  const currentUser = React.useContext(CurrentUserContext);

  const [isLoginPopupOpen, setLoginPopupOpen] = React.useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = React.useState(true);
  const [registerErrorMessage, setRegisterErrorMessage] = React.useState("");

  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);

  const [iconMenuIsOpen, setIconMenuIsOpen] = React.useState(false);

  const getLocalStorageNewsCards = () => {
    const lsNewsCards = localStorage.getItem("newsCards");
    return lsNewsCards ? JSON.parse(lsNewsCards) : [];
  };

  const [newsCards, setNewsCards] = React.useState(getLocalStorageNewsCards());
  const [isSearchAreCompleted, setIsSearchAreCompleted] = React.useState();
  const [isSearchIsRunning, setIsSearchIsRunning] = React.useState();

  function closeAllPopups() {
    setLoginPopupOpen(false);
    setIsRegisterPopupOpen(false);
    setIconMenuIsOpen(false);
    setIsInfoTooltipOpen(false);
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

  const handleAuthorizeClick = () => {
    closeAllPopups();
    setLoginPopupOpen(true);
  };

  const handleRegisterClick = () => {
    closeAllPopups();
    setIsRegisterPopupOpen(true);
  };

  const handleRegisterUser = (userData) => {
    mainApi
      .registerUser(userData)
      .then((_) => {
        currentUser.loggedIn = true;
        closeAllPopups();
        setIsInfoTooltipOpen(true);
      })
      .catch((err) => {
        console.log(`Ошибка запроса к API. Код ошибки: ${err.status}`);
        if (err.status === 400) {
          setRegisterErrorMessage("Не корректно заполнено одно из полей");
          console.log("Не корректно заполнено одно из полей");
        }
        if (err.status === 409) {
          setRegisterErrorMessage("Такой пользователь уже существует");
          console.log("Такой пользователь уже существует");
        }
        currentUser.loggedIn = false;
      });
  };

  return (
    <>
      <SearchForm
        isIconMenuOpen={iconMenuIsOpen}
        setIconMenuIsOpen={setIconMenuIsOpen}
        onHeaderIconMenuClose={closeAllPopups}
        onSearchCompleted={onSearchCompleted}
        onSearchStarted={onSearchStarted}
        onAuthorizeClick={handleAuthorizeClick}
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

      <Login isOpen={isLoginPopupOpen} onClose={closeAllPopups} onAlternateRegisterClick={handleRegisterClick} />
      <Register
        isOpen={isRegisterPopupOpen}
        onClose={closeAllPopups}
        onAlternateEnterClick={handleAuthorizeClick}
        onRegisterUser={handleRegisterUser}
        errorMessage={registerErrorMessage}
      />
      <InfoTooltip isOpen={isInfoTooltipOpen} onCloseHangle={closeAllPopups} onLoginLinkClick={handleAuthorizeClick} />
    </>
  );
}

export default Main;
