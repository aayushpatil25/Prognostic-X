import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import FaultDetection from "./components/FaultDetection";
import RulPrediction from "./components/RulPrediction";
import MaintenancePlanning from "./components/MaintenancePlanning";
import AgentCoordination from "./components/AgentCoordination";

function App() {
  const [view, setView] = useState("dashboard");

  // Helper to render the correct view
  const renderView = () => {
    switch (view) {
      case "dashboard":
        return <Dashboard />;
      case "fault-detection":
        return <FaultDetection />;
      case "rul-prediction":
        return <RulPrediction />;
      case "maintenance-planning":
        return <MaintenancePlanning />;
      case "agent-coordination":
        return <AgentCoordination />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div>
      <Header />
      <div className="app-container">
        <Sidebar setView={setView} />
        <main className="main-content">{renderView()}</main>
      </div>
    </div>
  );
}

export default App;
