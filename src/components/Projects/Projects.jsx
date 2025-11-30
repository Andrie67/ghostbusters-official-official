import "./Projects.css";

function Projects({
  status = "High Risk", // Changed default to match image
  title = "Metro Flood Control",
  location = "Quezon City",
  progress = 75, // Added new progress prop
}) {
  // Helper to determine status color based on the text
  const getStatusClass = (statusText) => {
    switch (statusText.toLowerCase()) {
      case "high risk":
        return "status-high-risk";
      case "completed":
        return "status-completed";
      default:
        return "status-default";
    }
  };

  return (
    <div className="card-project">
      {/* Dynamic class added here */}
      <div className={`status ${getStatusClass(status)}`}>
        <p>{status}</p>
      </div>
      
      <h2>{title}</h2>
      
      {/* Added an icon placeholder to match image style */}
      <p className="location-text">📍 {location}</p>

      {/* --- New Progress Bar Section --- */}
      <div className="progress-container">
        <div className="progress-info">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>
        <div className="progress-bar-track">
          <div 
            className="progress-bar-fill" 
            style={{ width: `${progress}%` }} 
          ></div>
        </div>
      </div>
      {/* ------------------------------- */}

      <button className="details-button">View Details</button>
    </div>
  );
}

export default Projects;