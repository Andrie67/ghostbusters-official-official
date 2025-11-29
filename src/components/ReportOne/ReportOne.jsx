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
          Project: <input name="title" />
        </label>
        <label>
          Contractor: <input name="contractor" />
        </label>
      </div>
      <div className="subinputs">
        <label>
          Start: <input name="title" />
        </label>
        <label>
          Deadline: <input name="contractor" />
        </label>
      </div>
    </div>
  );
}

export default ReportOne;
