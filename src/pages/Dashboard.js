import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="logo">💜</div>

      <h1 className="title">MediConnect</h1>
      <p className="subtitle">Your Health, Connected</p>

      <div className="card">
        <h3>Select Your Role</h3>

        <div className="grid">
          <div className="box" onClick={() => navigate("/admin")}>
            Admin
          </div>

          <div className="box" onClick={() => navigate("/doctor")}>
            Doctor
          </div>

          <div className="box" onClick={() => navigate("/patient")}>
            Patient
          </div>

          <div className="box" onClick={() => navigate("/pharmacist")}>
            Pharmacist
          </div>
        </div>
      </div>

      <p className="footer">Demo System — Click any role to explore</p>
    </div>
  );
}

export default Dashboard;