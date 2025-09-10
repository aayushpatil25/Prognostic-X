import React from "react";

function Sidebar({ setView }) {
  return (
    <nav className="sidebar">
      <ul className="nav-menu">
        <li className="nav-item">
          <button className="nav-link" onClick={() => setView("dashboard")}>
            📊 Dashboard
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={() => setView("fault-detection")}>
            ⚠️ Fault Detection
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={() => setView("rul-prediction")}>
            📈 RUL Prediction
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={() => setView("maintenance-planning")}>
            🔧 Maintenance Planning
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={() => setView("agent-coordination")}>
            🤖 Agent Coordination
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
