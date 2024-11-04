import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'; 

function NavBar() {
  return (
    <nav className="nav-bar">
      <ul className="nav-links">
        <li><NavLink to="/home" activeClassName="active">&lt;/Home&gt;</NavLink></li>
        <li><NavLink to="/about" activeClassName="active">&lt;/AboutMe&gt;</NavLink></li>
        <li><NavLink to="/projects" activeClassName="active">&lt;/Projects&gt;</NavLink></li>
      </ul>
    </nav>
  );
}

export default NavBar;