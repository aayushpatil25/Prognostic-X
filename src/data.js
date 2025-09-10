const APP_DATA = {
  metrics: {
    system_health: 92,
    active_faults: 3,
    pending_maintenance: 4,
    uptime_percentage: 99.5,
  },

  equipment: [
    {
      id: 1,
      name: "Compressor A1",
      type: "Air Compressor",
      location: "Plant 1",
      health_score: 87,
      rul_days: 45,
    },
    {
      id: 2,
      name: "Pump B2",
      type: "Centrifugal Pump",
      location: "Plant 2",
      health_score: 73,
      rul_days: 30,
    },
    {
      id: 3,
      name: "Motor C3",
      type: "Induction Motor",
      location: "Plant 3",
      health_score: 65,
      rul_days: 25,
    },
  ],

  faults: [
    {
      id: 1,
      equipment_name: "Compressor A1",
      type: "Overheating",
      severity: "high",
      status: "active",
      description: "Temperature exceeded safe threshold (95°C).",
      detected_at: "2025-08-15T10:30:00Z",
      agent: "Fault Detection Agent",
    },
    {
      id: 2,
      equipment_name: "Pump B2",
      type: "Leak",
      severity: "medium",
      status: "active",
      description: "Minor leakage detected near valve seals.",
      detected_at: "2025-08-16T12:45:00Z",
      agent: "Monitoring Agent",
    },
    {
      id: 3,
      equipment_name: "Motor C3",
      type: "Vibration Anomaly",
      severity: "low",
      status: "resolved",
      description: "Unusual vibration pattern recorded last week.",
      detected_at: "2025-08-10T09:20:00Z",
      agent: "Vibration Agent",
    },
  ],

  maintenance_tasks: [
    {
      id: 1,
      title: "Replace Air Filter",
      description: "Air filter is clogged and requires replacement.",
      equipment_name: "Compressor A1",
      priority: "high",
      scheduled_date: "2025-08-22",
      assigned_to: "Technician John",
    },
    {
      id: 2,
      title: "Seal Valve Leak",
      description: "Seal minor leakage in Pump B2 valves.",
      equipment_name: "Pump B2",
      priority: "normal",
      scheduled_date: "2025-08-25",
      assigned_to: "Technician Maria",
    },
    {
      id: 3,
      title: "Lubricate Bearings",
      description: "Preventive lubrication for Motor C3 bearings.",
      equipment_name: "Motor C3",
      priority: "urgent",
      scheduled_date: "2025-08-20",
      assigned_to: "Technician Raj",
    },
  ],

  agent_workflow: [
    {
      step: 1,
      agent: "Sensor Agent",
      action: "Collects vibration, temperature, and pressure data.",
      output: "Raw data stream",
      status: "completed",
    },
    {
      step: 2,
      agent: "Fault Detection Agent",
      action: "Analyzes data for anomalies and faults.",
      output: "Fault report",
      status: "completed",
    },
    {
      step: 3,
      agent: "RUL Prediction Agent",
      action: "Estimates remaining useful life (RUL).",
      output: "RUL values per equipment",
      status: "in-progress",
    },
    {
      step: 4,
      agent: "Maintenance Planner",
      action: "Schedules tasks and assigns technicians.",
      output: "Maintenance plan",
      status: "pending",
    },
  ],
};

export default APP_DATA;
