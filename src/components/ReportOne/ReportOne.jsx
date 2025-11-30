import "./ReportOne.css";

function ReportOne() {
  return (
    <div className="report-one">
      <p>
        Project Title, Contractor, Deadline, Budget, etc. are automatically
        filled once location is confirmed.
      </p>

      <label>
        Location: <input name="location" />
      </label>

      <div className="subinputs">
        <label>
          Project: <br/><input name="title" />
        </label>
        <label>
          Contractor: <br/><input name="contractor" />
        </label>
      </div>

      <div className="subinputs">
        <label>
          Start: <br/><input name="title" />
        </label>
        <label>
          Deadline: <br/><input name="contractor" />
        </label>
      </div>

      <div className="subinputs">
        <label>
          Budget Allocated: <br/><input name="budget" />
        </label>
        <label>
          Program: <br/><input name="program" />
        </label>
      </div>

      <div className="upload-section">
        <button className="upload-box">
          <svg 
            width="40" 
            height="40" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="upload-icon"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="17 8 12 3 7 8"></polyline>
            <line x1="12" y1="3" x2="12" y2="15"></line>
          </svg>
          <span>Upload Photos of the Site</span>
        </button>
      </div>

    </div>
  );
}

export default ReportOne;
