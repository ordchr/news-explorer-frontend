import React from "react";
import "./Preloader.css";
import NotFoundIcon from "../../images/not-found.svg";

function Preloader({ isSearchInProgress, isNotFound }) {
  function SearchInProgress(props) {
    return (
      <div className="preloader">
        <div className="preloader__circle-preloader"></div>
        <p className="preloader__caption">Идет поиск новостей...</p>
      </div>
    );
  }

  function NotFound(props) {
    return (
      <div className="preloader">
        <img className="preloader__not-found" src={NotFoundIcon} alt="not-found" />
        <h3 className="preloader__not-found-title">Ничего не найдено</h3>
        <p className="preloader__not-found-caption">К сожалению по вашему запросу</p>
        <p className="preloader__not-found-caption">ничего не найдено.</p>
      </div>
    );
  }

  return (
    <>
      {isSearchInProgress && !isNotFound && <SearchInProgress />}
      {isNotFound && !isSearchInProgress && <NotFound />}
    </>
  );
}

export default Preloader;
