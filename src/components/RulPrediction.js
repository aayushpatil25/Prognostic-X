import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import APP_DATA from "../data.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

function RulPrediction() {
  const labels = Array.from({ length: 30 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (29 - i));
    return date.toLocaleDateString(undefined, { month: "short", day: "numeric" });
  });

  const data = {
    labels,
    datasets: [
      {
        label: "System Health",
        data: labels.map(() =>
          Math.max(0, Math.min(100, APP_DATA.metrics.system_health + (Math.random() - 0.5) * 10))
        ),
        borderColor: "#1FB8CD",
        backgroundColor: "rgba(31,184,205,0.2)",
        tension: 0.4,
        fill: true
      }
    ]
  };

  return (
    <div>
      <div className="page-header">
        <h2>Remaining Useful Life Prediction</h2>
        <p className="page-subtitle">Equipment health monitoring and life estimation</p>
      </div>

      {/* Chart */}
      <div className="chart-container" style={{ height: "300px" }}>
        <Line data={data} />
      </div>

      {/* Equipment RUL */}
      <div className="rul-grid">
        {APP_DATA.equipment.map(eq => (
          <div key={eq.id} className="rul-card">
            <h4>{eq.name}</h4>
            <div className="rul-days-remaining">{eq.rul_days} days</div>
            <div className="health-progress">
              <div
                className="health-progress-bar"
                style={{ width: `${eq.health_score}%`, background: "#1FB8CD" }}
              ></div>
            </div>
            <p>Health Score: {eq.health_score}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RulPrediction;
