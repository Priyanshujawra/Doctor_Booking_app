import React from "react";
import AppointmentForm from "../Components/AppointmentForm";

function Appointment({ addAppointment }) {
  return <AppointmentForm addAppointment={addAppointment} />;
}

export default Appointment;
