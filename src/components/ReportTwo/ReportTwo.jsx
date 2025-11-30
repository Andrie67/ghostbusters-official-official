import "./ReportTwo.css";

function ReportTwo() {
  return (
    <div className="report-two">
      <h3>Work Activity Level</h3>
      <div className="subinputs">
        <label className="radio-label">
          <input
            type="radio"
            name="movement"
            value="option1"
            className="radio-input"
          />
          Constant Movement (Many workers and machines moving daily)
        </label>
      </div>
      <div className="subinputs">
        <label className="radio-label">
          <input
            type="radio"
            name="movement"
            value="option2"
            className="radio-input"
          />
          Slow Movement (Few workers and minimal movement for days)
        </label>
      </div>
      <div className="subinputs">
        <label className="radio-label">
          <input
            type="radio"
            name="movement"
            value="option3"
            className="radio-input"
          />
          No Movement (No equipment, workers, and machines for weeks)
        </label>
      </div>
      <h3>Progress</h3>
      <div className="subinputs">
        <label className="radio-label">
          <input
            type="checkbox"
            name="delay"
            value="option1"
            className="radio-input"
          />
          Severe Delay (Given deadline has passed, but project looks
          incomplete.)
        </label>
      </div>
      <div className="subinputs">
        <label className="radio-label">
          <input
            type="checkbox"
            name="delay"
            value="option2"
            className="radio-input"
          />
          Intermittent Work (Work is done for a few days, but disappears in
          weeks.)
        </label>
      </div>
    </div>
  );
}

export default ReportTwo;
