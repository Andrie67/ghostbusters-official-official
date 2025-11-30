import "./ReportThree.css";

function ReportThree() {
  return (
    <div className="report-three">
      <h3>Quality</h3>
      <div className="subinputs">
        <label className="radio-label">
          <input
            type="radio"
            name="quality"
            value="option1"
            className="radio-input"
          />
          Floods (Project does not mitigate floods)
        </label>
      </div>
      <div className="subinputs">
        <label className="radio-label">
          <input
            type="radio"
            name="quality"
            value="option2"
            className="radio-input"
          />
          Cracks
        </label>
      </div>
      <div className="subinputs">
        <label className="radio-label">
          <input
            type="radio"
            name="quality"
            value="option3"
            className="radio-input"
          />
          Destroyed Segment
        </label>
      </div>
      <div className="subinputs">
        <label className="radio-label">
          <input
            type="radio"
            name="quality"
            value="option4"
            className="radio-input"
          />
          Substandard Material (The material used looks and feels substandard)
        </label>
      </div>
      <h3>Other Issues</h3>
      <p>AI will automatically categorize your issues.</p>
      <input name="other-issues" className="issues-input" />
    </div>
  );
}

export default ReportThree;
