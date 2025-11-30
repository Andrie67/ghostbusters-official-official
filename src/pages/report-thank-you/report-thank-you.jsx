import Navbar from "../../components/Navbar/Navbar";
import "./report-thank-you.css";

function Report() {
  return (
    <div>
      <Navbar />
      
      <div className="report-content">
        {/* SVG Icon matching the image */}
        <div className="icon-container">
          <svg viewBox="0 0 24 24" className="badge-icon" fill="currentColor">
            {/* This path draws the scalloped badge shape */}
            <path d="M12 2C13.2 2 14.22 2.65 14.83 3.63C15.93 3.25 17.15 3.55 17.95 4.35C18.75 5.15 19.05 6.37 18.67 7.47C19.65 8.08 20.3 9.1 20.3 10.3C20.3 11.18 19.93 11.97 19.34 12.55C19.93 13.13 20.3 13.92 20.3 14.8C20.3 16 19.65 17.02 18.67 17.63C19.05 18.73 18.75 19.95 17.95 20.75C17.15 21.55 15.93 21.85 14.83 21.47C14.22 22.45 13.2 23.1 12 23.1C10.8 23.1 9.78 22.45 9.17 21.47C8.07 21.85 6.85 21.55 6.05 20.75C5.25 19.95 4.95 18.73 5.33 17.63C4.35 17.02 3.7 16 3.7 14.8C3.7 13.92 4.07 13.13 4.66 12.55C4.07 11.97 3.7 11.18 3.7 10.3C3.7 9.1 4.35 8.08 5.33 7.47C4.95 6.37 5.25 5.15 6.05 4.35C6.85 3.55 8.07 3.25 9.17 3.63C9.78 2.65 10.8 2 12 2Z" />
            {/* This circle cuts out the middle to make the checkmark background white */}
            <circle cx="12" cy="12.5" r="5" fill="white" />
            {/* This path draws the checkmark */}
            <path d="M9 12.5L11 14.5L15 10.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" transform="scale(1.2) translate(-2.5, -2)"/>
          </svg>
        </div>

        <h1 className="report-title">Report Submitted!</h1>
        <p className="report-subtitle">Thank you for being a Ghost Buster!</p>
        
        <button className="return-btn" onClick={() => window.location.href = '/'}>
          Return Home
        </button>
      </div>
    </div>
  );
}

export default Report;
