import React from 'react';
import './App.css'
import {NavLink} from 'react-router-dom'

function Nav() {
  return (
    <nav>
        <NavLink to="/"><h3>Logo</h3></NavLink>
        <ul className="nav-links">
            <NavLink to="/Courses"><li>Courses</li></NavLink>
            <NavLink to="/Users"><li>Users</li></NavLink>
        </ul>
    </nav>
  );
}

export default Nav;
