import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <div>
        <ul id="navbar">
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
