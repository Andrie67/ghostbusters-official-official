import Navbar from "../../components/Navbar/Navbar";
import Projects from "../../components/Projects/Projects";
import "./guest.css";

function Guest() {
  const cardData = {
    project1: {
      status: "High Risk",
      title: "Pasig River Flood Control",
      location: "Pasig City",
      progress: 50,
    },
    project2: {
      status: "Weather Affected",
      title: "Six Seven River Control",
      location: "Marikina City",
      progress: 67,
    },
    project3: {
      status: "High Risk",
      title: "Paldo Dam",
      location: "Luneta City",
      progress: 91,
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
        <Projects {...cardData.project3}/>
        <Projects {...cardData.project1} />
        <Projects {...cardData.project2} />
      </div>
    </div>
  );
}

export default Guest;
