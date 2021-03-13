import React from 'react';
import './ShowMoreButton.css';

function ShowMoreButton({ onClickShowMoreButton }) {
  return (
    <button className="show-more-button" onClick={onClickShowMoreButton}>Показать еще</button>
  );
}

export default ShowMoreButton;
