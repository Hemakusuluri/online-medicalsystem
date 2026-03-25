import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Patient.css";

function Patient() {
  const navigate = useNavigate();

  // Appointment state
  const [appointments, setAppointments] = useState([]);

  // Medical records (dummy count based on appointments)
  const [records, setRecords] = useState([]);

  // Lab reports
  const [labReports, setLabReports] = useState([]);

  // Form input
  const [name, setName] = useState("");
  const [problem, setProblem] = useState("");

  // Book appointment
  const handleBook = () => {
    if (!name || !problem) {
      alert("Please fill all fields");
      return;
    }

    const newAppointment = {
      name,
      problem,
      time: new Date().toLocaleString()
    };

    setAppointments([...appointments, newAppointment]);

    // Add to records
    setRecords([...records, newAppointment]);

    // Add dummy lab report
    setLabReports([
      ...labReports,
      {
        name,
        report: "Blood Test - Normal",
        date: new Date().toLocaleDateString()
      }
    ]);

    setName("");
    setProblem("");
  };

  return (
    <div className="patient-container">
      {/* Topbar */}
      <div className="topbar">
        <h2>MediConnect - Patient</h2>

        <div className="status">
          🟢 Online |
          <span className="logout" onClick={() => navigate("/")}>
            Logout
          </span>
        </div>
      </div>

      {/* Heading */}
      <h1>Welcome, User</h1>
      <p>Manage your healthcare journey</p>

      {/* Cards */}
      <div className="cards">
        <div className="card">
          <h3>Book Appointment</h3>
          <p>Schedule a consultation</p>
        </div>

        <div className="card">
          <h3>Medical Records</h3>
          <p>{records.length} records</p>
        </div>

        <div className="card">
          <h3>Lab Reports</h3>
          <p>{labReports.length} reports</p>
        </div>

        <div className="card">
          <h3>Video Consult</h3>
          <p>Join session</p>
        </div>
      </div>

      {/* Book Appointment Form */}
      <div className="section">
        <h3>Book Appointment</h3>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter problem"
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
        />

        <button onClick={handleBook}>Book</button>
      </div>

      {/* Appointments */}
      <div className="section">
        <h3>My Appointments</h3>

        {appointments.length === 0 ? (
          <p>No appointments yet</p>
        ) : (
          appointments.map((a, index) => (
            <div key={index} className="item">
              <h4>{a.name}</h4>
              <p>{a.problem}</p>
              <small>{a.time}</small>
            </div>
          ))
        )}
      </div>

      {/* Lab Reports */}
      <div className="section">
        <h3>Lab Reports</h3>

        {labReports.length === 0 ? (
          <p>No reports yet</p>
        ) : (
          labReports.map((r, index) => (
            <div key={index} className="item">
              <h4>{r.name}</h4>
              <p>{r.report}</p>
              <small>{r.date}</small>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Patient;