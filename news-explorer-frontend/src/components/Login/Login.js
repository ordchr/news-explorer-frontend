import React, {useRef} from "react";
import "./Login.css";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function Login({ isOpen, onClose, onLoginUser, onAlternateRegisterClick }) {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    onLoginUser({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <PopupWithForm
      title="Вход"
      name="update-avatar"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isEnter={true}
      onAlternateRegisterClick={onAlternateRegisterClick}
    >
      <label className="popup__input-label">
        Email:
        <input
          id="popup-login-input-email"
          className="popup__input"
          name="popup-input-email"
          type="email"
          placeholder="Введите почту"
          required
          ref={emailRef}
        />
      </label>
      <span id="popup-login-input-email-error" className="popup__input-error" />
      <label className="popup__input-label">
        Пароль
        <input
          id="popup-login-input-password"
          className="popup__input"
          name="popup-input-password"
          type="password"
          placeholder="Введите пароль"
          required
          ref={passwordRef}
        />
      </label>
      <span id="popup-login-input-password-error" className="popup__input-error" />
    </PopupWithForm>
  );
}

export default Login;
