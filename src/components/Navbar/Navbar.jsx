import React from "react";
import "./Navbar.css";
import GhostLogo from '../../assets/ghostiee.png';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" className="navbar-brand">
        <img src={GhostLogo} alt="GhostBusters Logo" className="brand-logo"/>
        <h2>GhostBusters!</h2>
      </NavLink>

      <ul>
        <li>
          <NavLink to="/guest">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/flagged-projects">Flagged Projects</NavLink>
        </li>
        <li>
          <NavLink to="/">History</NavLink>
        </li>
        <li>
          <NavLink to="/submit-a-report" className="report-link">
          Submit a Report
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

