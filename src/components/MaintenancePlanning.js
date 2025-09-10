import React from "react";
import APP_DATA from "../data.js";

function MaintenancePlanning() {
  return (
    <div>
      <div className="page-header">
        <h2>Maintenance Planning</h2>
        <p className="page-subtitle">Scheduled maintenance tasks and priorities</p>
      </div>

      <div className="tasks-list">
        {APP_DATA.maintenance_tasks.map(task => (
          <div key={task.id} className={`task-card ${task.priority}`}>
            <h4>{task.title}</h4>
            <p>{task.description}</p>
            <p><b>Equipment:</b> {task.equipment_name}</p>
            <p><b>Priority:</b> {task.priority}</p>
            <p><b>Date:</b> {task.scheduled_date}</p>
            <p><b>Assigned:</b> {task.assigned_to}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MaintenancePlanning;
