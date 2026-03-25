import React from "react";
import { useNavigate } from "react-router-dom";
import "./Admin.css";

function Admin() {
  const navigate = useNavigate();

  return (
    <div className="admin-container">
      {/* Top Bar */}
      <div className="topbar">
        <h2 className="logo-text">MediConnect - Admin</h2>

        <div className="status">
          🟢 Online |
          <span className="logout" onClick={() => navigate("/")}>
            Logout
          </span>
        </div>
      </div>

      {/* Heading */}
      <h1 className="heading">Admin Dashboard</h1>
      <p className="subtext">System overview and management</p>

      {/* Cards */}
      <div className="cards">
        <div className="card-box">
          <h2>24</h2>
          <p>Total Patients</p>
        </div>

        <div className="card-box">
          <h2>4</h2>
          <p>Active Doctors</p>
        </div>

        <div className="card-box">
          <h2>1</h2>
          <p>Appointments</p>
        </div>

        <div className="card-box">
          <h2>2</h2>
          <p>E-Prescriptions</p>
        </div>
      </div>

      {/* Activity */}
      <div className="activity">
        <h3>Recent Activity</h3>

        <div className="activity-item">
          Appointment: John Smith - Scheduled
        </div>

        <div className="activity-item">
          Prescription: Sri - Active
        </div>

        <div className="activity-item">
          Prescription: Hema - Active
        </div>
      </div>
    </div>
  );
}

export default Admin;