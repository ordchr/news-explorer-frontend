import React from 'react';
import { NavLink } from 'react-router-dom';
import './Bookmark.css';
import icon_normal from '../../images/bookmark_normal.svg';
import icon_hover from '../../images/bookmark_hover.svg';
import icon_marked from '../../images/bookmark_marked.svg';

function Bookmark({ style }) {
  let src;

  if ( style.name === 'marked' ) {
    src = icon_marked;
  } else if ( style.name === 'hover' ) {
    src = icon_hover;
  } else {
    src = icon_normal;
  }

  return (
    <div className="bookmark">
      <img src={src} className="bookmark__image" alt="Pic" />
    </div>
  );
}

export default Bookmark;
