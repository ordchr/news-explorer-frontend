import React from 'react';
import "./Preloader.css";

function Preloader() {
  return (
    <div className="preloader">
      <div className="preloader__circle-preloader"></div>
      <p className="preloader__caption">Идет поиск новостей...</p>
    </div>
  );
}

export default Preloader;
