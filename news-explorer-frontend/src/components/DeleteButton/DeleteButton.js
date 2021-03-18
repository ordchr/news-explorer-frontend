import React from "react";
import "./DeleteButton.css";
import iconTrash from "../../images/trash.svg";

function DeleteButton({ onDeleteClick }) {
  const [toShowHint, setToShowHint] = React.useState(false);

  const handleMouseHover = () => {
    setToShowHint(!toShowHint);
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    onDeleteClick();
  };

  return (
    <div className="delete-button">
      `
      {toShowHint && (
        <div className="delete-button__hint">
          <h6 className="delete-button__hint-text">Убрать из сохраненных</h6>
        </div>
      )}
      `
      <div
        className="delete-button__button"
        onMouseEnter={handleMouseHover}
        onMouseLeave={handleMouseHover}
        onClick={handleDeleteClick}
      >
        <img src={iconTrash} className="delete-button__image" alt="Pic" />
      </div>
    </div>
  );
}

export default DeleteButton;
