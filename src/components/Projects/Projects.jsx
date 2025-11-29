import "./Projects.css";

function Projects({
  status = "Under Implementation",
  title = "Projecy Title",
  location = "Location",
}) {
  return (
    <div className="card-project">
      <div className="status">
        <p>{status}</p>
      </div>
      <h2>{title}</h2>
      <p>{location}</p>
      <button className="details-button">View Details</button>
    </div>
  );
}

export default Projects;
