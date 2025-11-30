import React from "react";
import "./editor.css";

function Editor() {
  // Mock Data for the dashboard
  const stats = [
    { number: 67, label: "Active Projects" },
    { number: 76, label: "High Risk Projects" },
    { number: 89, label: "Delayed Projects" },
    { number: 98, label: "Weather Affected" },
    { number: "67%", label: "On Track" },
    { number: 767, label: "User Reports" },
  ];

  return (
    <div className="dashboard-container">
      {/* Custom Navbar to match the image */}
      <nav className="gb-navbar">
        <div className="gb-logo">
          <span className="ghost-icon">👻</span> GhostBusters
        </div>
        <div className="gb-nav-links">
          <a href="#" className="active">Dashboard</a>
          <a href="#">Projects</a>
          <a href="#">Upload Project Proposal</a>
          <a href="#">Weather</a>
          <a href="#">Settings</a>
        </div>
        <div className="gb-user">
          <span className="user-icon">👤</span> Log Out
        </div>
      </nav>

      <div className="dashboard-content">
        <h1 className="page-title">Admin Dashboard</h1>

        {/* Top Stats Row */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Middle Section */}
        <div className="middle-section">
          
          {/* Map and Project Monitor Combo */}
          <div className="card map-monitor-card">
            <div className="map-area">
              {/* CSS Map Representation */}
              <div className="map-placeholder">
                <div className="map-label">Quezon City</div>
                <div className="map-label pasig">Pasig</div>
                {/* Dots */}
                <div className="pin green" style={{top: '20%', left: '40%'}}></div>
                <div className="pin red" style={{top: '30%', left: '45%'}}></div>
                <div className="pin yellow" style={{top: '25%', left: '55%'}}></div>
                <div className="pin green" style={{top: '40%', left: '50%'}}></div>
                <div className="pin green" style={{top: '60%', left: '30%'}}></div>
                <div className="pin red" style={{top: '70%', left: '25%'}}></div>
              </div>
            </div>
            
            <div className="monitor-list">
              <h3 className="section-header error-text">
                <span className="warn-icon">⚠</span> Project Monitor
              </h3>
              
              <div className="alert-box">
                <h4>Manila City Flood Control</h4>
                <p>No updates reported for 2 weeks.</p>
              </div>

              <div className="alert-box">
                <h4>Manila City Flood Control</h4>
                <p>No updates reported for 2 weeks.</p>
              </div>
            </div>
          </div>

          {/* Risk Analysis */}
          <div className="card risk-card">
            <h3 className="section-header">
              <span className="icon">📡</span> Risk Analysis
            </h3>
            <ul className="risk-list">
              <li><span className="x-mark">ⓧ</span> Past due date!</li>
              <li><span className="x-mark">ⓧ</span> Past due date!</li>
              <li><span className="x-mark">ⓧ</span> Past due date!</li>
            </ul>
          </div>

          {/* Weather Analysis */}
          <div className="card weather-card">
            <h3 className="section-header">
              <span className="icon">☁</span> Weather Analysis
            </h3>
            <p className="weather-desc">Current conditions allow for exterior work.</p>
            
            <div className="weather-forecast">
              <div className="forecast-item box-white">
                <span>Today</span>
                <div className="weather-icon">⛅</div>
              </div>
              <div className="forecast-item box-white">
                <span>Tomorrow</span>
                <div className="weather-icon">🌧</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bottom-section">
          
          <div className="card activity-card">
            <h3 className="section-header">
              <span className="icon">🕒</span> Daily Activity Monitor
            </h3>
            <div className="report-list">
              <div className="report-item">
                <span>Report</span>
                <span className="time">6:08 am</span>
              </div>
              <div className="report-item">
                <span>Report</span>
                <span className="time">8:08 am</span>
              </div>
            </div>
          </div>

          <div className="card issues-card">
            <h3 className="section-header">
              <span className="icon">📋</span> Issues Reported
            </h3>
            <div className="report-list">
              <div className="report-item">
                <span>Report</span>
              </div>
              <div className="report-item">
                <span>Report</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Editor;