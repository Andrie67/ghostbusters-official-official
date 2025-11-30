import "./editorNavbar.css";
import { Link, NavLink } from "react-router-dom";
import GhostLogo from "../../assets/ghostiee.png";

const editorNavbar = () => {
  return (
    <nav>
      <NavLink to="/" className="navbar-brand">
        <img src={GhostLogo} alt="GhostBusters Logo" className="brand-logo" />
        <h2>GhostBusters!</h2>
      </NavLink>
      <ul>
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/upload-project-proposal">
            Upload Project Proposal
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default editorNavbar;
