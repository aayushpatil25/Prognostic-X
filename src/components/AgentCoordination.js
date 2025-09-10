import React from "react";
import APP_DATA from "../data.js";

function AgentCoordination() {
  return (
    <div>
      <div className="page-header">
        <h2>Agent Coordination</h2>
        <p className="page-subtitle">Multi-agent workflow visualization</p>
      </div>

      <div className="workflow-container">
        {APP_DATA.agent_workflow.map(step => (
          <div key={step.step} className="workflow-step">
            <h4>{step.agent}</h4>
            <p>{step.action}</p>
            <p><b>Output:</b> {step.output}</p>
            <p><b>Status:</b> {step.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AgentCoordination;
