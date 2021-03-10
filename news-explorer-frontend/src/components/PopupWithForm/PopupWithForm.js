import React, { useEffect, useCallback } from "react";
// import FormValidator from '../utils/FormValidator';
import "./PopupWithForm.css";
import { Link } from "react-router-dom";

function PopupWithForm({ title, name, isOpen, onClose, onSubmit, isEnter, children }) {
  // useEffect(() => {

  //   const validateOptions = {
  //     formSelector: '.popup__form',
  //     inputSelector: '.popup__input',
  //     submitButtonSelector: '.popup__button-save',
  //     inactiveButtonClass: 'popup__button-save_inactive',
  //     inputErrorClass: 'popup__input_type_error',
  //     errorClass: 'popup__input-error_active'
  //   };

  //   const popupForm = document.querySelector(`.popup_${name}`);
  //   const formValidator = new FormValidator(validateOptions, popupForm);
  //   formValidator.enableValidation();
  // }, [name]);

  const handleUserKeyPress = useCallback(
    (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress, false);

    return () => {
      window.removeEventListener("keydown", handleUserKeyPress, false);
    };
  }, [handleUserKeyPress]);

  return (
    <div className={`popup ${isOpen ? "popup_opened" : "popup_closed"}  popup_${name}`} onClick={onClose}>
      <div
        className="popup-container popup__container"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <form
          className={`popup__form popup__form-edit_${name}`}
          name={name}
          action="#"
          method="GET"
          onSubmit={onSubmit}
        >
          <h4 className="popup__header">{title}</h4>
          {children}
          <button className="popup__button-save popup__button-save_filled" type="submit">
            {isEnter ? "Войти" : "Зарегистрироваться"}
          </button>
        </form>

        <h5 className="popup__footer">
          или{" "}
          {isEnter ? (
            <Link to="/sign-in" className="popup__footer-link">
              Зарегистрироваться
            </Link>
          ) : (
            <Link to="/sign-in" className="popup__footer-link">
              Войти
            </Link>
          )}
        </h5>
        <button type="button" className="popup__button-close" onClick={onClose} />
      </div>
    </div>
  );
}

export default PopupWithForm;
