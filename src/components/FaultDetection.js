import React, { useState } from "react";
import APP_DATA from "../data.js";
import Modal from "./Modal";

function FaultDetection() {
  const [severity, setSeverity] = useState("all");
  const [status, setStatus] = useState("all");
  const [selectedFault, setSelectedFault] = useState(null);

  const filteredFaults = APP_DATA.faults.filter(f => {
    return (
      (severity === "all" || f.severity === severity) &&
      (status === "all" || f.status === status)
    );
  });

  return (
    <div>
      <div className="page-header">
        <h2>Fault Detection</h2>
        <p className="page-subtitle">Real-time fault monitoring and alerts</p>
      </div>

      {/* Filters */}
      <div className="filter-bar">
        <select value={severity} onChange={e => setSeverity(e.target.value)}>
          <option value="all">All Severities</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <select value={status} onChange={e => setStatus(e.target.value)}>
          <option value="all">All Statuses</option>
          <option value="active">Active</option>
          <option value="resolved">Resolved</option>
        </select>
      </div>

      {/* Table */}
      <table className="data-table">
        <thead>
          <tr>
            <th>Equipment</th>
            <th>Fault Type</th>
            <th>Severity</th>
            <th>Detected</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredFaults.map(fault => (
            <tr key={fault.id}>
              <td>{fault.equipment_name}</td>
              <td>{fault.type}</td>
              <td>
                <span className={`badge severity-${fault.severity}`}>
                  {fault.severity}
                </span>
              </td>
              <td>{new Date(fault.detected_at).toLocaleString()}</td>
              <td>
                <span className={`badge status-${fault.status}`}>
                  {fault.status}
                </span>
              </td>
              <td>
                <button
                  className="btn btn--sm btn--outline"
                  onClick={() => setSelectedFault(fault)}
                >
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {selectedFault && (
        <Modal onClose={() => setSelectedFault(null)} title="Fault Details">
          <h4>{selectedFault.equipment_name}</h4>
          <p><b>Type:</b> {selectedFault.type}</p>
          <p><b>Severity:</b> {selectedFault.severity}</p>
          <p><b>Status:</b> {selectedFault.status}</p>
          <p><b>Description:</b> {selectedFault.description}</p>
          <p><b>Detected at:</b> {new Date(selectedFault.detected_at).toLocaleString()}</p>
          <p><b>Agent:</b> {selectedFault.agent}</p>
        </Modal>
      )}
    </div>
  );
}

export default FaultDetection;
