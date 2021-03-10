import React from "react";
import "./Bookmark.css";
import icon_normal from "../../images/bookmark_normal.svg";
import icon_hover from "../../images/bookmark_hover.svg";
import icon_marked from "../../images/bookmark_marked.svg";

function Bookmark({ type, isLoggedIn }) {
  let src;

  if (!type) {
    return <></>;
  }

  if (type === "marked") {
    src = icon_marked;
  } else if (type === "hover") {
    src = icon_hover;
  } else {
    src = icon_normal;
  }

  return (
    <div className="bookmark">
      `
      {!isLoggedIn && (
        <div className="bookmark__hint-to-login">
          <h6 className="bookmark__hint-to-login-text">Войдите, чтобы сохранять статьи</h6>
        </div>
      )}
      `
      <div className="bookmark__button">
        <img src={src} className="bookmark__image" alt="Pic" />
      </div>
    </div>
  );
}

export default Bookmark;
