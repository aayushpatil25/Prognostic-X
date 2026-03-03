import React from "react";
import machineImage from "../Assets/logo.png";

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
          <div className="image">
            <img src={machineImage} alt="Machine" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
