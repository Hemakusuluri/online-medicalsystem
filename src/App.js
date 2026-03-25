import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import Doctor from "./pages/Doctor";
import Patient from "./pages/Patient";
import Pharmacist from "./pages/Pharmacist";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/pharmacist" element={<Pharmacist />} />
      </Routes>
    </Router>
  );
}

export default App;