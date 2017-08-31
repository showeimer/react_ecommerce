import React from 'react';
import {NavLink} from 'react-router-dom';
import mobileNavClick from '../js/navClick';

const Navigation = () => {
  return (
    <nav className="nav-mobile">
      <NavLink onClick={mobileNavClick} exact to="/">Home</NavLink>
      <NavLink onClick={mobileNavClick} to="/strategy">Strategy Games</NavLink>
      <NavLink onClick={mobileNavClick} to="/card">Card Games</NavLink>
      <NavLink onClick={mobileNavClick} to="/kids">Kids Games</NavLink>
    </nav>
  )
}

export default Navigation;
