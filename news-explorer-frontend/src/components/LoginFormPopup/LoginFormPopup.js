import React from "react";
import "./LoginFormPopup.css";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function LoginFormPopup({ isOpen, onClose, onUpdateAvatar }) {
  // const avatarRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    onUpdateAvatar({
      // avatarLink: avatarRef.current.value
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
          // ref={avatarRef}
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
          // ref={avatarRef}
        />
      </label>
      <span id="popup-input-password-error" className="popup__input-error" />
    </PopupWithForm>
  );
}

export default LoginFormPopup;
