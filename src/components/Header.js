import React from "react";
import { FiBell } from "react-icons/fi"; // Bell icon

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <h1 className="header-title">PrognosticX : </h1>
          <div className="system-status">
            <span className="status status--success">
              Industrial Predictive Maintenance using SLMs
            </span>
          </div>
        </div>
        <div className="header-right">
          <div className="notification-bell">
            <FiBell size={22} />
            <span className="notification-count">2</span>
          </div>
          <div className="user-profile">Admin</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
