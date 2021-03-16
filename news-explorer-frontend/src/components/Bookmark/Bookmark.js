import React, { useEffect } from "react";
import "./Bookmark.css";
import icon_normal from "../../images/bookmark_normal.svg";
import icon_hover from "../../images/bookmark_hover.svg";
import icon_marked from "../../images/bookmark_marked.svg";

function Bookmark({ isMarked, isLoggedIn, onBookmarkClick }) {
  const [toShowHint, setToShowHint] = React.useState(false);

  const [src, setSrc] = React.useState(icon_normal);

  useEffect(() => {
    if (isMarked) {
      setSrc(icon_marked);
    } else {
      setSrc(icon_normal);
    }
  }, [isMarked]);

  const handleMouseEnter = () => {
    if (!isLoggedIn) {
      setSrc(icon_hover);
      setToShowHint(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isLoggedIn) {
      setSrc(icon_normal);
    }
    setToShowHint(false);
  };

  const handleBookmarkClick = (e) => {
    e.stopPropagation();
    onBookmarkClick();
  };

  return (
    <div className="bookmark">
      `
      {toShowHint && (
        <div className="bookmark__hint-to-login">
          <h6 className="bookmark__hint-to-login-text">Войдите, чтобы сохранять статьи</h6>
        </div>
      )}
      `
      <div
        className="bookmark__button"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleBookmarkClick}
      >
        <img src={src} className="bookmark__image" alt="Pic" disabled onClick={handleBookmarkClick} />
      </div>
    </div>
  );
}

export default Bookmark;
