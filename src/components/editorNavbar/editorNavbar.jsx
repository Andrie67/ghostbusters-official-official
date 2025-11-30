import "./editorNavbar.css";
import { Link, NavLink } from "react-router-dom";

const editorNavbar = () => {
  return (
    <div>
      <nav>
        <NavLink to="/guest">
          <h2>GhostBusters!</h2>
        </NavLink>
      </nav>
    </div>
  );
};

export default editorNavbar;
