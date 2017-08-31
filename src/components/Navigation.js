import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="nav-mobile nav-desktop">
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/strategy">Strategy Games</NavLink>
      <NavLink to="/card">Card Games</NavLink>
      <NavLink to="/kids">Kids Games</NavLink>
    </nav>
  )
}

export default Navigation;
