import "./Projects.css";

function Projects({
  status = "Under Implementation",
  title = "Projecy Title",
  location = "Location",
}) {
  return (
    <div className="card-project">
      <p>{status}</p>
      <h2>{title}</h2>
      <p>{location}</p>
      <button>View Details</button>
    </div>
  );
}

export default Projects;
