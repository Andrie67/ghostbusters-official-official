import Navbar from "../../components/Navbar";
import "./guest.css";

function Guest() {
  return (
    <div>
      <Navbar />
      <div className="header">
        <h1>Track Public Funds. Expose Ghost Projects.</h1>
        <div className="search-box">
          <input type="text" placeholder="Search" />
        </div>
      </div>
    </div>
  );
}

export default Guest;
