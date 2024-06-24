import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import Appointment from "./Pages/Appointment";
import Appointment_cart from "./Components/Appointment_cart";
import ProfileComponent from "./Pages/Doctor_profile";
import Doctors_Page from "./Pages/Doctors_Page";

function App() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const storedAppointments = JSON.parse(localStorage.getItem("appointments"));
    if (storedAppointments) {
      setAppointments(storedAppointments);
    }
  }, []);

  const addAppointment = (appointment) => {
    const newAppointments = [...appointments, appointment];
    setAppointments(newAppointments);
    localStorage.setItem("appointments", JSON.stringify(newAppointments));
  };

  const removeAppointment = (index) => {
    const newAppointments = appointments.filter((_, i) => i !== index);
    setAppointments(newAppointments);
    localStorage.setItem("appointments", JSON.stringify(newAppointments));
  };

  return (
    <div className="App">
      <Router basename="/Health-Plus">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/doctorpro" element={<ProfileComponent />} /> */}
          <Route path="/legal" element={<Legal />} />

          <Route
            path="/appointment"
            element={<Appointment addAppointment={addAppointment} />}
          />
          <Route path="/doctorpro/:id" element={<ProfileComponent />} />
          <Route path="/doctor_list" element={<Doctors_Page />} />
          <Route
            path="/app_cart"
            element={
              <Appointment_cart
                appointments={appointments}
                removeAppointment={removeAppointment}
              />
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
