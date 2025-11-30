import Navbar from "../../components/Navbar/Navbar";
import ReportOne from "../../components/ReportOne/ReportOne";
import ReportThree from "../../components/ReportThree/ReportThree";
import ReportTwo from "../../components/ReportTwo/ReportTwo";
import "./report.css";

function Report() {
  return (
    <div>
      <Navbar />
      <div className="submit-report">
        <h2>Submit a Report</h2>
        <div className="reports">
          <ReportOne />
          <ReportTwo />
        </div>
        <div className="reports">
          <ReportThree />
        </div>
      </div>
    </div>
  );
}

export default Report;
