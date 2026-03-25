import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Patient.css";

function Patient() {
  const navigate = useNavigate();

  // State
  const [appointments, setAppointments] = useState([]);
  const [records, setRecords] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [labReports, setLabReports] = useState([
    "Blood Test - Normal",
    "X-Ray - Clear"
  ]);

  const [form, setForm] = useState({
    doctor: "",
    date: ""
  });

  // Handle booking
  const handleBooking = () => {
    if (!form.doctor || !form.date) {
      alert("Fill all fields");
      return;
    }

    setAppointments([...appointments, form]);
    setRecords([...records, "Consultation Record"]);
    setForm({ doctor: "", date: "" });
    setShowForm(false);
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

      <h1>Welcome, Hema</h1>
      <p>Manage your healthcare journey</p>

      {/* Cards */}
      <div className="cards">
        <div className="card-box" onClick={() => setShowForm(true)}>
          Book Appointment
        </div>

        <div className="card-box">
          Medical Records: {records.length}
        </div>

        <div className="card-box">
          Lab Reports: {labReports.length}
        </div>
      </div>

      {/* Booking Form */}
      {showForm && (
        <div className="section">
          <h3>Book Appointment</h3>

          <input
            type="text"
            placeholder="Doctor Name"
            value={form.doctor}
            onChange={(e) =>
              setForm({ ...form, doctor: e.target.value })
            }
          />

          <input
            type="date"
            value={form.date}
            onChange={(e) =>
              setForm({ ...form, date: e.target.value })
            }
          />

          <button onClick={handleBooking}>Confirm Booking</button>
        </div>
      )}

      {/* Appointments */}
      <div className="section">
        <h3>My Appointments</h3>

        {appointments.map((a, index) => (
          <div key={index} className="item">
            {a.doctor} - {a.date}
          </div>
        ))}
      </div>

      {/* Lab Reports */}
      <div className="section">
        <h3>Lab Reports</h3>

        {labReports.map((r, index) => (
          <div key={index} className="item">
            {r}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Patient;