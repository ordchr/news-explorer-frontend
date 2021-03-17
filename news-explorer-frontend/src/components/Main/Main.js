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
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Main({
  setCurrentUser,
  onSignOut,
  iconMenuIsOpen,
  setIconMenuIsOpen,
  closeAllPopups,
  isLoginPopupOpen,
  setLoginPopupOpen,
  isRegisterPopupOpen,
  setIsRegisterPopupOpen,
  isInfoTooltipOpen,
  setIsInfoTooltipOpen,
}) {
  const currentUser = React.useContext(CurrentUserContext);
  const history = useHistory();

  React.useEffect(() => {
    if (history.location.state?.isLoginOpen) {
      setLoginPopupOpen(true);
    }
    history.replace("/", {});
  }, [history, setLoginPopupOpen]);

  const [registerErrorMessage, setRegisterErrorMessage] = React.useState("");
  const [loginErrorMessage, setLoginErrorMessage] = React.useState("");


  const getLocalStorageNewsCards = () => {
    const lsNewsCards = localStorage.getItem("newsCards");
    return lsNewsCards ? JSON.parse(lsNewsCards) : [];
  };

  const [newsCards, setNewsCards] = React.useState(getLocalStorageNewsCards());
  const [bookmarkedNewsCards, setBookmarkedNewsCards] = React.useState({});
  const [isSearchAreCompleted, setIsSearchAreCompleted] = React.useState();
  const [isSearchIsRunning, setIsSearchIsRunning] = React.useState();

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
        } else if (err.status === 409) {
          setRegisterErrorMessage("Такой пользователь уже существует");
          console.log("Такой пользователь уже существует");
        } else {
          setRegisterErrorMessage("Ошибка подключения к серверу");
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
          setLoginErrorMessage("Не передано одно из полей ");
        } else if (err.status === 401) {
          console.log("Пользователь с email не найден");
          setLoginErrorMessage("Пользователь с email не найден");
        } else {
          setLoginErrorMessage("Ошибка авторизации");
        }
      });
  };

  useEffect(() => {
    if (!currentUser.loggedIn) {
      return;
    }
    mainApi
      .getArticles()
      .then((articles) => {
        const hashArticles = articles.reduce((_, item) => {
          return {
            [item["link"]]: item._id,
          };
        }, {});
        setBookmarkedNewsCards(hashArticles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentUser]);

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
        errorMessage={loginErrorMessage}
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
