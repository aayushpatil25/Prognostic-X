import React from "react";
import APP_DATA from "../data.js";

function Dashboard() {
  return (
    <div>
      <div className="page-header">
        <h2>Dashboard Overview</h2>
        <p className="page-subtitle">System health and key performance indicators</p>
      </div>

      {/* Metrics */}
      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-header"><h3>System Health</h3>❤️</div>
          <div className="metric-value">{APP_DATA.metrics.system_health}%</div>
        </div>
        <div className="metric-card">
          <div className="metric-header"><h3>Active Faults</h3>⚡</div>
          <div className="metric-value">{APP_DATA.metrics.active_faults}</div>
        </div>
        <div className="metric-card">
          <div className="metric-header"><h3>Pending Tasks</h3>📋</div>
          <div className="metric-value">{APP_DATA.metrics.pending_maintenance}</div>
        </div>
        <div className="metric-card">
          <div className="metric-header"><h3>Uptime</h3>⏱️</div>
          <div className="metric-value">{APP_DATA.metrics.uptime_percentage}%</div>
        </div>
      </div>

      {/* Equipment Cards */}
      <div className="dashboard-section">
        <h3>Equipment Status</h3>
        {APP_DATA.equipment.length === 0 ? (
          <p>No equipment data available</p>
        ) : (
          <div className="equipment-overview">
            {APP_DATA.equipment.map(eq => (
              <div key={eq.id} className="equipment-card">
                <h4>{eq.name}</h4>
                <p>{eq.type}</p>
                <p>{eq.location}</p>
                <p><b>Health:</b> {eq.health_score}%</p>
                <p><b>RUL:</b> {eq.rul_days} days</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Alerts */}
      <div className="dashboard-section">
        <h3>Recent Alerts</h3>
        {APP_DATA.faults.filter(f => f.status === "active").length === 0 ? (
          <p>No active alerts</p>
        ) : (
          <div className="alerts-list">
            {APP_DATA.faults
              .filter(f => f.status === "active")
              .map(fault => (
                <div key={fault.id} className={`alert-item ${fault.severity}`}>
                  <h4>{fault.equipment_name} - {fault.type}</h4>
                  <p>{fault.description}</p>
                  <small>
                    Detected at: {new Date(fault.detected_at).toLocaleString()}
                  </small>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
