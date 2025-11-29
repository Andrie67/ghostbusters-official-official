import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h2>GhostBusters!</h2>

      <ul>
        <li>
          <NavLink to="/" className="link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="link">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/flagged-projects" className="link">
            Flagged Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="link">
            History
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
