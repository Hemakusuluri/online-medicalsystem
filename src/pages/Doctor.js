import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Doctor.css";

function Doctor() {
  const navigate = useNavigate();

  // Prescription form
  const [form, setForm] = useState({
    patient: "",
    medicine: ""
  });

  // Consultation state
  const [consulting, setConsulting] = useState(false);

  // Submit prescription
  const handleSubmit = () => {
    if (!form.patient || !form.medicine) {
      alert("Please fill all fields");
      return;
    }

    const newPrescription = {
      patient: form.patient,
      medicine: form.medicine,
      doctor: "Dr. Hema"
    };

    const existing =
      JSON.parse(localStorage.getItem("prescriptions")) || [];

    localStorage.setItem(
      "prescriptions",
      JSON.stringify([...existing, newPrescription])
    );

    alert("Prescription sent to Pharmacist!");

    setForm({
      patient: "",
      medicine: ""
    });
  };

  return (
    <div className="doctor-container">
      {/* Top Bar */}
      <div className="topbar">
        <h2 className="logo-text">MediConnect - Doctor</h2>

        <div className="status">
          🟢 Online |
          <span className="logout" onClick={() => navigate("/")}>
            Logout
          </span>
        </div>
      </div>

      {/* Heading */}
      <h1 className="heading">Doctor Portal</h1>
      <p className="subtext">
        Manage consultations and prescriptions
      </p>

      {/* Cards */}
      <div className="cards">
        <div className="card-box">
          <h2>1</h2>
          <p>Pending Consultations</p>
        </div>

        <div className="card-box">
          <h2>0</h2>
          <p>Completed Today</p>
        </div>

        <div className="card-box">
          <h2>2</h2>
          <p>E-Prescriptions</p>
        </div>
      </div>

      {/* Appointment */}
      <div className="section">
        <h3>Today's Appointments</h3>

        <div className="appointment">
          <div>
            <h4>John Smith</h4>
            <p>11:00 AM - Cold</p>
          </div>

          <div>
            <span className="status-badge">Scheduled</span>
            <button
              className="consult-btn"
              onClick={() => setConsulting(true)}
            >
              Start Consult
            </button>
          </div>
        </div>
      </div>

      {/* Consultation Panel */}
      {consulting && (
        <div className="section">
          <h3>Consultation with John Smith</h3>

          <textarea
            placeholder="Write consultation notes..."
            className="consult-box"
          ></textarea>

          <button
            className="submit-btn"
            onClick={() => {
              alert("Consultation Completed!");
              setConsulting(false);
            }}
          >
            End Consultation
          </button>
        </div>
      )}

      {/* Prescription Form */}
      <div className="section">
        <h3>Issue E-Prescription</h3>

        <div className="form">
          <input
            type="text"
            placeholder="Patient Name"
            value={form.patient}
            onChange={(e) =>
              setForm({
                ...form,
                patient: e.target.value
              })
            }
          />

          <input
            type="text"
            placeholder="Medication"
            value={form.medicine}
            onChange={(e) =>
              setForm({
                ...form,
                medicine: e.target.value
              })
            }
          />
        </div>

        <button className="submit-btn" onClick={handleSubmit}>
          Submit Prescription
        </button>
      </div>
    </div>
  );
}

export default Doctor;