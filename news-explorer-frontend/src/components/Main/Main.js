import React, { useEffect } from "react";
import { useHistory } from "react-router";
import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import NewsCardList from "../NewsCardList/NewsCardList";
import Login from "../Login/Login";
import Register from "../Register/Register";
import mainApi from "../../utils/MainApi";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

function Main({ setCurrentUser, onSignOut }) {
  const history = useHistory();
  const [isLoginPopupOpen, setLoginPopupOpen] = React.useState();

  React.useEffect(() => {
    if (history.location.state?.isLoginOpen) {
      setLoginPopupOpen(true);
    }
    history.replace("/", {});
  }, [history]);

  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = React.useState(false);
  const [registerErrorMessage, setRegisterErrorMessage] = React.useState("");

  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);

  const [iconMenuIsOpen, setIconMenuIsOpen] = React.useState(false);

  const getLocalStorageNewsCards = () => {
    const lsNewsCards = localStorage.getItem("newsCards");
    return lsNewsCards ? JSON.parse(lsNewsCards) : [];
  };

  const [newsCards, setNewsCards] = React.useState(getLocalStorageNewsCards());
  const [bookmarkedNewsCards, setBookmarkedNewsCards] = React.useState({});
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
      });
  };

  const handleLoginUser = (userData) => {
    mainApi
      .login(userData)
      .then((resLogin) => {
        localStorage.setItem("jwt", resLogin["token"]);
        closeAllPopups();
        setCurrentUser({
          loggedIn: true,
          email: userData.email,
        });
        // setEmail(authData["email"]);
        // history.push('/');
      })
      .catch((err) => {
        console.log(`Ошибка запроса к API. Код ошибки: ${err.status}`);
        if (err.status === 400) {
          console.log("Не передано одно из полей ");
          setRegisterErrorMessage("Не передано одно из полей ");
        } else if (err.status === 401) {
          console.log("Пользователь с email не найден");
          setRegisterErrorMessage("Пользователь с email не найден");
        }
      });
  };


  useEffect(() => {
    mainApi
      .getArticles()
      .then((articles) => {
        const hashArticles = articles.reduce((obj, item) => {
          return {
            [item["link"]]: item._id,
          };
        }, {});
        setBookmarkedNewsCards(hashArticles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <SearchForm
        isIconMenuOpen={iconMenuIsOpen}
        setIconMenuIsOpen={setIconMenuIsOpen}
        onHeaderIconMenuClose={closeAllPopups}
        onSearchCompleted={onSearchCompleted}
        onSearchStarted={onSearchStarted}
        onAuthorizeClick={handleAuthorizeClick}
        onSignOut={onSignOut}
      />
      <Preloader isSearchInProgress={isSearchIsRunning} isNotFound={isSearchAreCompleted && newsCards.length === 0} />
      {newsCards.length > 0 && (
        <>
          <div className="main-search-results">
            <h4 className="main-search-results__title">Результаты поиска</h4>
            <div className="main-search-results__cards">
              <NewsCardList
                newsCards={newsCards}
                bookmarkedNewsCards={bookmarkedNewsCards}
                setBookmarkedNewsCards={setBookmarkedNewsCards}
                setIsRegisterPopupOpen={setIsRegisterPopupOpen}
              />
            </div>
          </div>
        </>
      )}
      <About />
      <Footer />

      <Login
        isOpen={isLoginPopupOpen}
        onClose={closeAllPopups}
        onAlternateRegisterClick={handleRegisterClick}
        onLoginUser={handleLoginUser}
      />
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
