import React from "react";
import { NavLink } from "react-router-dom";
import "./UI.css";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";
import Bookmark from "../Bookmark/Bookmark";
import LoginFormPopup from "../LoginFormPopup/LoginFormPopup";

function UI() {
  const [isLoginFormPopupOpen, setLoginFormPopupOpen] = React.useState(true);

  function closeAllPopups() {
    // setisEditAvatarPopupOpen(false);
    setLoginFormPopupOpen(false);
    // setisAddPlacePopupOpen(false);
    // setSelectedCard({});
  }

  function handleUpdateAvatar({ avatarLink }) {
    // api.updateAvatar({avatar: avatarLink})
    //   .then(userInfo => {
    //     setLoginFormPopupOpen(userInfo);
    //     closeAllPopups();
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }

  return (
    <>
      <Header isAuthorized={false} />

      <div style={{ height: 10 }}></div>

      <Header isAuthorized={true} />

      <header className="header header_authorized">
        <h2 className="header__title">NewsExplorer</h2>
        <div className="header__nav">
          <NavLink
            exact
            to="/ui"
            className="header__nav-link header__nav-link_logged-in"
            activeClassName="header__nav-link-active header__nav-link-active_logged-in"
          >
            Главная
          </NavLink>
          <NavLink
            exact
            to="/saved_articles"
            className="header__nav-link header__nav-link_logged-in"
            activeClassName="header__nav-link-active header__nav-link-active_logged-in"
          >
            Сохраненные статьи
          </NavLink>
          <NavLink
            exact
            to="/authorize"
            className="header__nav-link"
            activeClassName="header__nav-link-active header__nav-link-active_logged-in"
          >
            <button className="header__nav-link-logout">Грета</button>
          </NavLink>
        </div>
      </header>

      <div style={{ height: 10 }}></div>

      <SearchForm></SearchForm>

      <ShowMoreButton></ShowMoreButton>

      <Bookmark type={"normal"} />

      <Bookmark type={"hover"} />

      <Bookmark type={"marked"} />

      <LoginFormPopup
        isOpen={isLoginFormPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
      />
    </>
  );
}

export default UI;
