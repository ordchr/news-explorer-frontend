import React from "react";
import "./DeleteButton.css";
import iconTrash from "../../images/trash.svg";

function DeleteButton() {

  return (
    <div className="delete-button">
      <div className="delete-button__hint">
        <h6 className="delete-button__hint-text">Убрать из сохраненных</h6>
      </div>
      <div className="delete-button__button">
        <img src={iconTrash} className="delete-button__image" alt="Pic" />
      </div>
    </div>
  );
}

export default DeleteButton;
