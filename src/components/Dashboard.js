import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  const dashboardStats = {
    activeJobs: 3,
    totalTranslations: 12
  };

  const recentUpdates = [
    { status: 'urgent', message: "6 needs immediate translation", timestamp: "12 minutes ago" },
    { status: 'progress', message: "4 ongoing translations in progress", timestamp: "3 hours ago" },
    { status: 'success', message: "2 translations completed successfully", timestamp: "1 day ago" }
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <div className="dashboard-header">
          <h2>Welcome, John!</h2>
          <Link to="/new-translation/upload" className="btn-primary new-translation-btn">
            New Translation Request
          </Link>
        </div>

        <div className="dashboard-main">
          <div className="section-header">
            <h3>Status Update</h3>
          </div>
          <div className="status-updates">
            {recentUpdates.map((update, index) => (
              <div key={index} className={`status-item ${update.status}`}>
                <span className="status-icon"></span>
                <div className="status-content">
                  <p>{update.message}</p>
                  <span className="timestamp">{update.timestamp}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="stats-section">
            <div className="stat-column">
              <div className="stat-header">Active Translations</div>
              <div className="stat-value">{dashboardStats.activeJobs}</div>
            </div>
            <div className="stat-column">
              <div className="stat-header">Total Documents</div>
              <div className="stat-value">{dashboardStats.totalTranslations}</div>
            </div>
          </div>
        </div>

        <div className="dashboard-sidebar">
          <nav className="sidebar-nav">
            <ul>
              <li><Link to="/dashboard" className="active">Dashboard</Link></li>
              <li><Link to="/new-translation/upload">New Translation</Link></li>
              <li><Link to="/active-orders">Active Orders</Link></li>
              <li><Link to="/documents">Documents</Link></li>
              <li><Link to="/history">History</Link></li>
            </ul>
          </nav>

          <div className="settings-section">
            <h3>Settings</h3>
            <div className="settings-option">
              <span className="settings-icon"></span>
              <span className="settings-label">Preferences</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;