import React, { useRef } from "react";
import "./Register.css";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useFormWithValidation } from "../FormValidator/FormValidator";

function Register({ isOpen, onClose, onRegisterUser, onAlternateEnterClick, errorMessage }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const userNameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    onRegisterUser({
      email: emailRef.current.value,
      password: passwordRef.current.value,
      name: userNameRef.current.value,
    });
  };

  const { handleChange, isValid } = useFormWithValidation();

  const hangleOnClose = () => {
    onClose();
  };

  return (
    <PopupWithForm
      title="Регистрация"
      name="user-register"
      isOpen={isOpen}
      onClose={hangleOnClose}
      onSubmit={handleSubmit}
      isEnter={false}
      onAlternateEnterClick={onAlternateEnterClick}
      errorMessage={errorMessage}
      isValid={isValid}
    >
      <label className="popup__input-label">
        Email:
        <input
          id="popup-input-email"
          className="popup__input"
          name="popup-input-email"
          type="email"
          placeholder="Введите почту"
          required
          ref={emailRef}
          onChange={handleChange}
        />
      </label>
      <span id="popup-input-email-error" className="popup__input-error" />
      <label className="popup__input-label">
        Пароль
        <input
          id="popup-input-password"
          className="popup__input"
          name="popup-input-password"
          type="password"
          placeholder="Введите пароль"
          required
          ref={passwordRef}
          onChange={handleChange}
        />
      </label>
      <span id="popup-input-password-error" className="popup__input-error" />
      <label className="popup__input-label">
        Имя:
        <input
          id="popup-input-name"
          className="popup__input"
          name="popup-input-name"
          type="text"
          placeholder="Введите своё имя"
          required
          ref={userNameRef}
          onChange={handleChange}
        />
      </label>
    </PopupWithForm>
  );
}

export default Register;
