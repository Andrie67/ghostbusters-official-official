import "./Projects.css";

function Projects(props) {
  return (
    <div className="card-project">
      <p>{props.status}</p>
      <h2>{props.title}</h2>
      <p>{props.location}</p>
      <button>View Details</button>
    </div>
  );
}
Projects.defaultProps = {
  status: "Under Implementation",
  title: "Project Title",
  location: "Location",
};

export default Projects;
