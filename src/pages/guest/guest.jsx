import Navbar from "../../components/Navbar/Navbar";
import Projects from "../../components/Projects/Projects";
import "./guest.css";

function Guest() {
  const cardData = {
    project1: {
      status: "On Track",
      title: "Project Title 1",
      location: "Manila",
    },
    project2: {
      status: "On Track",
      title: "Project Title 2",
      location: "Marikina City",
    },
  };

  return (
    <div>
      <Navbar />
      <div className="header">
        <h1>Track Public Funds. Expose Ghost Projects.</h1>
        <div className="search-box">
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="projects">
        <Projects {...cardData.project1} />
        <Projects {...cardData.project2} />
        <Projects />
      </div>
    </div>
  );
}

export default Guest;
