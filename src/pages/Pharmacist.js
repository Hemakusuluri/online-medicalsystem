import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Pharmacist.css";

function Pharmacist() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("prescriptions")) || [];
    setData(stored);
  }, []);

  return (
    <div className="pharma-container">
      {/* Topbar */}
      <div className="topbar">
        <h2>MediConnect - Pharmacist</h2>

        <div className="status">
          🟢 Online |
          <span className="logout" onClick={() => navigate("/")}>
            Logout
          </span>
        </div>
      </div>

      <h1>Pharmacy Portal</h1>
      <p>Manage and verify e-prescriptions</p>

      {/* Cards */}
      <div className="cards">
        <div className="card-box">Pending: {data.length}</div>
        <div className="card-box">Processing: 0</div>
        <div className="card-box">Ready: {data.length}</div>
      </div>

      {/* List */}
      <div className="section">
        <h3>E-Prescription Queue</h3>

        {data.map((item, index) => (
          <div key={index} className="item">
            <h4>{item.patient}</h4>
            <p>{item.medicine}</p>
            <span>✔ Ready for Pickup</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pharmacist;