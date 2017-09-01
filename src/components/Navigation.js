import React from 'react';
import {NavLink} from 'react-router-dom';
import mobileNavRemove from '../js/navClickRemove';

const Navigation = () => {
  return (
    <nav className="nav">
      <NavLink onClick={mobileNavRemove} exact to="/">Home</NavLink>
      <NavLink onClick={mobileNavRemove} to="/strategy">Strategy Games</NavLink>
      <NavLink onClick={mobileNavRemove} to="/card">Card Games</NavLink>
      <NavLink onClick={mobileNavRemove} to="/kids">Kids Games</NavLink>
      <NavLink onClick={mobileNavRemove} to="/about">About Us</NavLink>
      <NavLink onClick={mobileNavRemove} to="/contact">Contact</NavLink>
    </nav>
  )
}

export default Navigation;
