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

    </div>
  );
}

export default ReportOne;
