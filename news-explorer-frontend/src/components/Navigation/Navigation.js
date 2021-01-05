import { NavLink } from 'react-router-dom';

function Navigation () {
  return (
    <nav className="menu">
      <NavLink exact to="/" className="menu__link">Домой</NavLink>
      <NavLink to="/reviews" className="menu__link">Обзоры эмодзи</NavLink>
      <NavLink to="/about-me" className="menu__link">Обо мне</NavLink>
    </nav>
  )
}

export default Navigation;
