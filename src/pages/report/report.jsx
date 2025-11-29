import Navbar from "../../components/Navbar/Navbar";
import ReportOne from "../../components/ReportOne/ReportOne";
import "./report.css";

function Report() {
  return (
    <div>
      <Navbar />
      <div className="submit-report">
        <h2>Submit a Report</h2>
        <div>
          <ReportOne />
        </div>
      </div>
    </div>
  );
}

export default Report;
